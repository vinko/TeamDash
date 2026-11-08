import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = 'http://localhost:4173/';
const NAME = 'Smoke Test Person';
const steps = [];
const problems = [];

// Test data in the same shape the app uses
const member = {
  id: 999001,
  name: NAME,
  role: 'Specialist',
  startDate: '2026-01-01',
  emoji: '🧪',
  devLevel: 'D1',
  leadStyle: 'S1',
  competencies: [],
  palette: [],
  goals: [],
  checkIns: [],
  meetings: []
};
fs.writeFileSync('smoke-member.json', JSON.stringify([member]));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
page.setDefaultTimeout(10000);

page.on('console', (m) => { if (m.type() === 'error') problems.push('console error: ' + m.text()); });
page.on('pageerror', (e) => problems.push('uncaught error: ' + e.message));
page.on('requestfailed', (r) => problems.push('request failed: ' + r.url()));
page.on('response', (r) => { if (r.status() >= 400) problems.push('HTTP ' + r.status() + ': ' + r.url()); });
page.on('dialog', (d) => d.accept());

const flow = [
  ['Dashboard renders (page is not blank)', async () => {
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.getByText('Team Development Dashboard').waitFor();
    const len = await page.evaluate(() => document.getElementById('root').innerHTML.length);
    if (len < 50) throw new Error('root element is nearly empty');
  }],
  ['Import a test team member', async () => {
    await page.setInputFiles('input[type=file]', 'smoke-member.json');
    await page.getByText(NAME).first().waitFor();
  }],
  ['Open the member profile', async () => {
    await page.getByText(NAME).first().click();
    await page.waitForURL(/#\/profile\//);
    await page.getByRole('button', { name: /Delete Team Member/ }).waitFor();
  }],
  ['Profile still renders after a reload', async () => {
    await page.reload({ waitUntil: 'networkidle' });
    await page.getByRole('button', { name: /Delete Team Member/ }).waitFor();
  }],
  ['Delete button opens the confirmation modal', async () => {
    await page.getByRole('button', { name: /Delete Team Member/ }).click();
    await page.getByRole('heading', { name: 'Delete Team Member?' }).waitFor();
  }],
  ['Confirming removes the member and returns to the dashboard', async () => {
    await page.getByRole('button', { name: 'Delete', exact: true }).click();
    await page.getByText('No team members yet').waitFor();
  }],
  ['Member stays deleted after a reload', async () => {
    await page.reload({ waitUntil: 'networkidle' });
    await page.getByText('No team members yet').waitFor();
  }]
];

let completed = 0;
for (const [name, fn] of flow) {
  try {
    await fn();
    steps.push({ name, ok: true });
    completed += 1;
  } catch (e) {
    steps.push({ name, ok: false, detail: String(e.message).split('\n')[0] });
    break;
  }
}

try { await page.screenshot({ path: 'smoke-final.png', fullPage: true }); } catch (e) { /* ignore */ }

const unique = [...new Set(problems)].slice(0, 20);
const lines = [
  '**Steps**',
  ...steps.map((s) => '- ' + (s.ok ? 'PASS' : 'FAIL') + ': ' + s.name + (s.detail ? ' (' + s.detail + ')' : '')),
  '',
  '**Browser errors captured**',
  ...(unique.length ? unique.map((p) => '- ' + p) : ['None'])
];
fs.writeFileSync('smoke-report.md', lines.join('\n'));
console.log(lines.join('\n'));

await browser.close();
process.exit(completed === flow.length ? 0 : 1);
