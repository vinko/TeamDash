// --- REFERENCE DATA ---

// 1. Apple Retail Roles: Descriptions and Critical Competencies
const appleRoles = {
    "Specialist": {
        description: `Builds brand loyalty and creates owners of Apple products and services.<br><br><strong>In this role you'll:</strong>
        <details class="role-accordion"><summary>Deliver excellent service to Apple customers...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Engage customers following the APPLE Steps of Service.</li>
            <li>Present clear options to the customer by using company tools while following Apple's policies and procedures.</li>
            <li>Connect customers to troubleshooting options and introduce the benefits of shopping with Apple.</li>
            <li>Address customer questions, objections, and concerns.</li>
            <li>Take time to showcase device features and highlight Apple's commitment to privacy.</li>
            <li>Connect customers to Apple's ecosystem including AppleCare, the Apple Store App, business teams, and more.</li>
            <li>Assist customers with Setup to get new products ready for use.</li>
            <li>Support the customer journey through Sales, On Point, Avenue, Apple Pickup, and more.</li>
            <li>Engage with multiple customers at the same time, and make sure they understand next steps.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Understand and proactively stay up to date on products...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Complete all training required to understand product features and benefits, and troubleshoot Apple hardware and software.</li>
            <li>Maintain expertise in all Apple products and services (in store and online), our ecosystem, and many third-party products.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Support your peers throughout the store as needed...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Set clear expectations in the On Point role.</li>
            <li>Establish expectations of what will occur throughout the customer's journey.</li>
            <li>Share estimated resolution and repair quotes along with expected customer contact points.</li>
            <li>Deliver a timely customer experience, prioritizing genuine human connection.</li>
            <li>Protect customer information to maintain Apple's commitment to privacy.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Maintain accuracy and follow guidance...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Count cash in transactions.</li>
            <li>Follow policies and procedures supporting customers within established scope.</li>
            <li>Consider all options before requesting a POS Exception to resolve a customer issue.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Discount products for non-qualified transactions.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Perform other tasks as needed...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Reset visual standards.</li>
            <li>Support the Operations team with tasks, such as running product to customers and restocking.</li>
            <li>Identify opportunities to connect customers to relevant Today at Apple sessions.</li>
            <li>Assist Genius Bar team members with their customer interactions and transactions as necessary.</li>
            <li>Share product knowledge and demonstrate products to Genius Bar customers.</li>
            <li>Answer incoming calls.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Research internal theft or conduct other investigations.</li>
            <li>Take Genius Bar appointments or repair devices.</li>
            <li>Deliver Today at Apple sessions.</li>
            <li>Perform tasks or responsibilities beyond systems access provisioned for your role.</li>
            <li>Take on cash management responsibilities.</li></ul>
        </div></details>`,
        criticalCompetencies: `<strong>FYI Competencies:</strong>
        <ul>
            <li>Customer Focus</li>
            <li>Interpersonal Savvy</li>
            <li>Action Oriented</li>
            <li>Nimble Learning</li>
            <li>Communicates Effectively</li>
        </ul>
        <strong>Leadership Palette Attributes:</strong>
        <ul>
            <li>Obsess over the customer experience</li>
            <li>Approach problems flexibly</li>
            <li>Demonstrate integrity</li>
        </ul>`
    },

    "Expert": {
        description: `Possesses a deep understanding of products and services across the ecosystem.<br><br><strong>In this role you'll:</strong>
        <details class="role-accordion"><summary>Demonstrate and sustain top-performing sales and service...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Engage customers following the APPLE Steps of Service.</li>
            <li>Present clear options to the customer by using company tools.</li>
            <li>Connect customers to troubleshooting options and introduce the benefits of shopping with Apple.</li>
            <li>Address customer questions, objections, and concerns.</li>
            <li>Take time to showcase device features and highlight Apple's commitment to privacy.</li>
            <li>Connect customers to Apple's ecosystem including AppleCare, business teams, and more.</li>
            <li>Assist customers with Setup to get new products ready for use.</li>
            <li>Support the customer journey through Sales, On Point, Avenues, Apple Pickup, and more.</li>
            <li>Engage with multiple customers at the same time.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Be knowledgeable about and proactively stay up to date...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Complete all training required to understand product features and benefits, and troubleshoot hardware/software.</li>
            <li>Maintain expertise in all Apple products and services, our ecosystem, and many third-party products.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Support your peers throughout the store as needed...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Share knowledge and best practices for purchase options and services.</li>
            <li>Model excellence on the floor and demonstrate how to achieve Product Zone performance goals.</li>
            <li>Be an early adopter and change agent for new products, services, and company initiatives.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Maintain accuracy and follow guidance...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Count cash in transactions.</li>
            <li>Follow policies and procedures supporting customers within established scope.</li>
            <li>Consider all options before requesting a POS Exception.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Discount products for non-qualified transactions.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Perform other tasks as needed...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Reset visual standards.</li>
            <li>Support the Operations team with tasks, such as running product and restocking.</li>
            <li>Identify opportunities to connect customers to relevant Today at Apple sessions.</li>
            <li>Assist Genius Bar team members with their customer interactions.</li>
            <li>Share product knowledge and demonstrate products to Genius Bar customers.</li>
            <li>Answer incoming calls.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Research internal theft, take Genius Bar appointments, deliver Today at Apple sessions, or take on cash management.</li></ul>
        </div></details>`,
        criticalCompetencies: `<strong>FYI Competencies:</strong>
        <ul>
            <li>Customer Focus</li>
            <li>Interpersonal Savvy</li>
            <li>Drives Results</li>
            <li>Action Oriented</li>
            <li>Communicates Effectively</li>
        </ul>
        <strong>Leadership Palette Attributes:</strong>
        <ul>
            <li>Obsess over the customer experience</li>
            <li>Demonstrate integrity</li>
            <li>Fight for excellence</li>
        </ul>`
    },

    "Creative Pro": {
        description: `Advocates the ecosystem to customers, the store team, and the broader community.<br><br><strong>In this role you'll:</strong>
        <details class="role-accordion"><summary>Promote and deliver engaging Today at Apple sessions...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Inform and remind the store team of the Today at Apple schedule.</li>
            <li>Encourage customers in the store to join the session.</li>
            <li>Introduce yourself and the session with energy and excitement.</li>
            <li>Help participants feel comfortable by setting the tone.</li>
            <li>Adjust your communication style to meet the needs of diverse audiences.</li>
            <li>Ask open-ended questions throughout the session to inspire collaborative learning.</li>
            <li>Understand interpersonal and group dynamics and react in an effective manner.</li>
            <li>Understand the challenges of being new to technology.</li>
            <li>Share personal inspirations and specific real-world examples.</li>
            <li>Use storytelling to illustrate how a personal interest or hobby can be brought to life.</li>
            <li>Build participant confidence by asking them to share their creative process.</li>
            <li>Revisit what the participants shared they wanted to get out of each session.</li>
            <li>Lead the way by exceeding goals for key success metrics.</li>
            <li>Provide insights and feedback to the Today at Apple manager.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Customize or deliver sessions outside of the available portfolio.</li>
            <li>Create or edit programming schedules or session templates.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Generate excitement, engagement, and enthusiasm...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Drive awareness of sessions through in-store collaboration.</li>
            <li>Promote Apple's current Today at Apple priorities in Daily Downloads.</li>
            <li>Deliver sessions for the team, where appropriate.</li>
            <li>Actively drive same-day attendance.</li>
            <li>Collaborate with the broader Pro team to support store initiatives.</li>
            <li>Partner with Store Leadership to understand how Today at Apple can support goals.</li>
            <li>Provide feedback on weekly scheduling to the Today at Apple manager.</li>
            <li>Connect participants to other sessions by helping them sign up.</li>
            <li>Support content capture for programming and events as guided.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Identify what excites our customers and what they care about...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Provide personalized recommendations to attendees based on needs.</li>
            <li>Work with the entire Today at Apple team to coordinate group reservations.</li>
            <li>Make sure all team members are knowledgeable in the group reservations signup process.</li>
            <li>Own all customer correspondence for group reservations.</li>
            <li>Work with each group to adjust sessions to match audience needs.</li>
            <li>Make sure facilitators are informed of all requests.</li>
            <li>Inform and partner with Store Leadership on upcoming group reservations.</li>
            <li>Provide feedback and insight to optimize group reservation availability.</li>
            <li>Facilitate group reservations offerings in partnership with Education and Business teams.</li>
            <li>Participate in business briefings as needed.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Contact groups or solicit participants outside of the approved process.</li>
            <li>Create additional session content, reporting, or recaps for group reservations.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Serve as the ambassador of Apple's products and services...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Act as a mentor and role model for the store team.</li>
            <li>Share best practices and positioning statements to help build peers' confidence.</li>
            <li>Complete Facilitating at Apple training and deliver these workshops.</li>
            <li>Provide Facilitation Behaviors-based feedback to trainers.</li>
            <li>Attend Instructor-Led Training (ILT) hosted by peers to provide feedback.</li>
            <li>Prepare to facilitate team training by reviewing appropriate content.</li>
            <li>Facilitate ILT (Core, NSO, NPI) as needed.</li>
            <li>Validate understanding of training content through Connect and Checks.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Support the store's overall completion of training.</li>
            <li>Plan, schedule, or coordinate ILT.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Mentor and train Today at Apple team members...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Mentor the team in Facilitation Behaviors and product knowledge.</li>
            <li>Mentor the team in driving session performance by starting and ending sessions accurately.</li>
            <li>Spend time with Creatives to check in and share best practices.</li>
            <li>Inspire Creatives to help customers go further with ownership.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Assess performance of candidates or team members.</li>
            <li>Define training plans as part of a team member's development.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Drive ownership by recommending solutions...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Connect customers with relevant solutions by showcasing features and benefits.</li>
            <li>Help customers go further at the end of every Today at Apple session.</li>
            <li>Offer trade-in values of customers' existing products during sessions.</li>
            <li>Mentor the team in helping customers make product decisions during sessions.</li>
            <li>Mentor the team in attaching key accessories or products.</li>
            <li>Train or support product demonstrations.</li>
            <li>Mentor the team on how to recommend and attach accessories, services, and AppleCare.</li>
            <li>Partner with the leadership team to identify how the team can drive store initiatives.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Seek, analyze, interpret, and act on feedback...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Partner with leaders to review Net Promoter Score (NPS) results and comments.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Offer guidance on business conduct.</li></ul>
        </div></details>`,
        criticalCompetencies: `<strong>FYI Competencies:</strong>
        <ul>
            <li>Communicates Effectively</li>
            <li>Customer Focus</li>
            <li>Action Oriented</li>
            <li>Drives Results</li>
            <li>Interpersonal Savvy</li>
        </ul>
        <strong>Leadership Palette Attributes:</strong>
        <ul>
            <li>Obsess over the customer experience</li>
            <li>Fight for excellence</li>
            <li>Give help</li>
        </ul>`
    },

    "Genius": {
        description: `Combines extensive functional troubleshooting skills with an ability to inspire excitement.<br><br><strong>In this role you'll:</strong>
        <details class="role-accordion"><summary>Have extensive knowledge and stay up to date on all Apple products...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Complete all training required for understanding product features and benefits, and troubleshooting/repairing.</li>
            <li>Maintain knowledge of current in-store and online products, services, policies, and Repair Room standards.</li>
            <li>Have a deep understanding of Genius Bar practices and mentor Technical Specialists/Experts.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Support customers having Apple product or software issues...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Support On Point, Repair Pickup, Genius Bar sessions, and administrative roles.</li>
            <li>Quote clear wait times in the On Point role.</li>
            <li>Set expectations of what will occur at the start of each session.</li>
            <li>Share estimated resolution and repair quotes along with expected customer contact points.</li>
            <li>Deliver a timely Genius Bar session, prioritizing genuine human connection.</li>
            <li>Document and validate pertinent customer interaction details.</li>
            <li>Record all transactions accurately to maintain service and inventory part accuracy.</li>
            <li>Perform same-unit hardware repairs, including for macOS devices.</li>
            <li>Use all available tools and resources provided by Apple to maintain efficiency.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Troubleshoot, diagnose, repair, and resolve service concerns...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Provide basic troubleshooting for all Apple products.</li>
            <li>Diagnose and resolve issues with all Apple hardware and software.</li>
            <li>Perform in-store hardware repair for all supported Apple hardware.</li>
            <li>Complete timely in-store repairs on Apple hardware with a high success rate.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Provide excellent service to Apple customers...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Maintain a high level of decision quality in line with Apple standards.</li>
            <li>Consider all options before requesting an exception.</li>
            <li>Follow policies and procedures to support customers within the established scope.</li>
            <li>Take time to showcase device features and highlight Apple's commitment to privacy.</li>
            <li>Approach all customers with a personalized, warm welcome.</li>
            <li>Probe to understand what issue the customer is experiencing and follow troubleshooting steps.</li>
            <li>Present clear options to the customer.</li>
            <li>Address questions, objections, and concerns.</li>
            <li>Make sure the customer understands next steps.</li>
            <li>Present options beyond repair, and partner closely with the Product Zone team if a customer chooses to make a purchase.</li>
            <li>Identify opportunities to connect customers to relevant Today at Apple sessions.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Recommend cross-functional partners for alternate resolutions (including CS Code).</li>
            <li>Make excessive exceptions to POS or CS Code recommendations.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Work with team leaders to identify recurring repair problems...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Submit relevant feedback through the appropriate channels.</li>
            <li>Be an early adopter and change agent for new products, services, and company initiatives.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Use extensive knowledge of hardware and software components...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Simplify complex technical situations for customers and Apple team members to understand.</li>
            <li>Stay up to date with all technologies relevant to Apple products.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Serve as a Mentor, resource, and positive role model...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Model best practices in Genius Bar session delivery, repair quality, and presentation of options.</li>
            <li>Positively influence the performance of the team.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Support leadership in providing timely resolution to customer escalations.</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Remain up to date on escalation resources like Request for Technical Assistance (RTA) and Channel Service Support (CSS).</li></ul>
        </div></details>`,
        criticalCompetencies: `<strong>FYI Competencies:</strong>
        <ul>
            <li>Customer Focus</li>
            <li>Interpersonal Savvy</li>
            <li>Action Oriented</li>
            <li>Tech Savvy</li>
            <li>Communicates Effectively</li>
        </ul>
        <strong>Leadership Palette Attributes:</strong>
        <ul>
            <li>Obsess over the customer experience</li>
            <li>Approach problems flexibly</li>
            <li>Demonstrate integrity</li>
        </ul>`
    },

    "Operations Specialist": {
        description: `Ensures products flow smoothly through the store by maintaining availability and completing inventory tasks.<br><br><strong>In this role you'll:</strong>
        <details class="role-accordion"><summary>Complete inventory receiving, counting, returning, and shipping tasks...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Pack and ship returning product to the warehouse within expected timeframes.</li>
            <li>Participate in daily store and inventory counts and audits.</li>
            <li>Coordinate, maintain, and archive all inventory-related files and documents.</li>
            <li>Make sure visual standards are upheld.</li>
            <li>Process, pack, and ship trade-in devices within expected timeframes.</li>
            <li>Receive and validate inventory, reporting variances as they're discovered.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Facilitate the blind count during cycle counts.</li>
            <li>Expense unauthorized products and service parts.</li>
            <li>Receive product and shipments outside of the process, locations, or timeframes indicated.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Complete product fulfillment tasks and deliver items...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Assemble or kit product as needed.</li>
            <li>Engage customers, following the APPLE Steps of Service.</li>
            <li>Celebrate ownership and offer personalized solutions when delivering products.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Share non-public information related to Apple products, services, and processes.</li>
            <li>Perform Run to Customer for your own purchase.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Use communication and training resources to keep up to date...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Regularly review Hello, the Retail Operations Processes site and the Learning app.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Perform demo and restocking tasks to support technology...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Use Rio to manage demo inventory.</li>
            <li>Adhere to the Backstage Standards Guide.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Support the Operations Lead with Apple preservation standards...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Complete daily work order management tasks.</li>
            <li>Coordinate any onsite repair, maintenance, or other service work with store teams.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Perform other tasks as needed, including supporting customer-facing activities...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Support the customer journey through Sales, On Point, Avenue, Apple Pickup, and more.</li>
            <li>Engage vendors, carriers, and drivers to carry out your job duties.</li>
            <li>Identify opportunities to connect customers to relevant Today at Apple sessions.</li>
            <li>Answer incoming calls.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Research internal theft, take Genius Bar appointments, or deliver Today at Apple sessions.</li></ul>
        </div></details>`,
        criticalCompetencies: `<strong>FYI Competencies:</strong>
        <ul>
            <li>Customer Focus</li>
            <li>Action Oriented</li>
            <li>Ensures Accountability</li>
            <li>Nimble Learning</li>
            <li>Collaborates</li>
        </ul>
        <strong>Leadership Palette Attributes:</strong>
        <ul>
            <li>Obsess over the customer experience</li>
            <li>Approach problems flexibly</li>
            <li>Demonstrate integrity</li>
        </ul>`
    },

    "Technical Specialist": {
        description: `Offers technical support and skilled troubleshooting while generating excitement for products and services.<br><br><strong>In this role you'll:</strong>
        <details class="role-accordion"><summary>Develop knowledge and stay up to date on Apple products...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Complete all training required for understanding product features and benefits, and troubleshooting.</li>
            <li>Stay up to date with current in-store and online products, services, promotions, and policies.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Support customers having Apple product or software issues...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Support On Point, Repair Pickup, Genius Bar sessions, and administrative roles.</li>
            <li>Quote clear wait times in the On Point role.</li>
            <li>Set expectations of what will occur at the start of each session.</li>
            <li>Share estimated resolution and repair quotes.</li>
            <li>Deliver a timely Genius Bar session, prioritizing genuine human connection.</li>
            <li>Document and validate pertinent customer interaction details.</li>
            <li>Record all transactions accurately to maintain service and inventory part accuracy.</li>
            <li>Use all available tools and resources provided by Apple to maintain efficiency.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Perform same-unit hardware repairs.</li>
            <li>Troubleshoot macOS.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Troubleshoot, diagnose, and resolve service concerns...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Provide technical support for hardware and software, including iPhone, iPad, Apple Watch, AppleTV, Apple Vision Pro, Beats, and AirPods.</li>
            <li>Adhere to Apple's repair policies at all times.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Diagnose, resolve, or perform macOS hardware or software repairs.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Provide excellent service to Apple customers...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Maintain a high level of decision quality in line with Apple's standards.</li>
            <li>Consider all options before requesting an exception.</li>
            <li>Follow policies and procedures to support customers within established scope.</li>
            <li>Take time to showcase device features and highlight Apple's commitment to privacy.</li>
            <li>Approach all customers with a personalized, warm welcome.</li>
            <li>Probe to understand what issue the customer is experiencing and follow troubleshooting steps.</li>
            <li>Present clear options to the customer.</li>
            <li>Address questions, objections, and concerns.</li>
            <li>Make sure the customer understands next steps.</li>
            <li>Present options beyond repair, and partner closely with the Product Zone team if a customer chooses to make a purchase.</li>
            <li>Identify opportunities to connect customers to relevant Today at Apple sessions.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Recommend cross-functional partners for alternate resolutions (including CS Code).</li>
            <li>Make excessive exceptions to POS or CS Code recommendations.</li></ul>
        </div></details>`,
        criticalCompetencies: `<strong>FYI Competencies:</strong>
        <ul>
            <li>Customer Focus</li>
            <li>Interpersonal Savvy</li>
            <li>Action Oriented</li>
            <li>Tech Savvy</li>
            <li>Communicates Effectively</li>
        </ul>
        <strong>Leadership Palette Attributes:</strong>
        <ul>
            <li>Obsess over the customer experience</li>
            <li>Approach problems flexibly</li>
            <li>Demonstrate integrity</li>
        </ul>`
    },

    "Creative": {
        description: `Fosters a learning environment for our customers by helping them set up their products and connect their interests to the Apple ecosystem. Uses knowledge and interpersonal skills to inspire customers to discover, own, and love Apple products.<br><br><strong>In this role you'll:</strong>
        <details class="role-accordion"><summary>Deliver engaging Today at Apple sessions...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Inform and remind the store team of the Today at Apple schedule for the day.</li>
            <li>Introduce yourself and the session with energy and excitement, addressing participants by name.</li>
            <li>Ask open-ended questions to inspire collaborative learning and gauge the experience level and interests of the group.</li>
            <li>Share personal inspirations, as well as specific skills and techniques, and relate them back to how participants can apply them beyond the session.</li>
            <li>Share what participants create, building connection through encouragement, celebration, and collaboration.</li>
            <li>Build participants' confidence by asking them to share their creative process with the group, and acknowledge the value of different perspectives.</li>
            <li>Understand the challenges of being new to technology and show sensitivity to each customer's level of technical proficiency.</li>
            <li>Empower customers to learn, create, and share so they can fully explore how their personal interests can come to life using Apple technology.</li>
            <li>Revisit what the participants shared they wanted to get out of this session and suggest "homework" to encourage them to further explore their creativity.</li>
            <li>Help customers get support and educate them about their products in a group setting.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Customize or deliver sessions outside of the available portfolio.</li>
            <li>Create or edit programming schedules or session templates in the Calendar of Events.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Generate excitement, engagement, and enthusiasm...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Drive awareness of sessions through in-store collaboration to positively affect attendance and delivery goals.</li>
            <li>Promote Apple's current Today at Apple priorities in Daily Downloads, and deliver sessions for the team so they're up to date on the portfolio.</li>
            <li>Actively drive same-day attendance by encouraging customers in store to join the session.</li>
            <li>Connect customers to other sessions by helping them sign up through the Apple Store app or online.</li>
            <li>Collaborate with the team to build Today at Apple awareness with customers, driving engagement and session attendance.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Create interactive customer experiences...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Help others get the most from the Apple ecosystem.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Drive ownership by recommending solutions...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Connect customers with relevant solutions to get the most out of their devices.</li>
            <li>Offer trade-in values of customers' existing products during sessions.</li>
            <li>Help customers make product decisions during sessions by highlighting key features of products and connecting to their goals.</li>
            <li>Attach key accessories or products during sessions to align with customers' goals.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Support customers in setting up their devices...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Help customers transfer data, set up their devices, and learn something new.</li>
            <li>Connect customers to the larger Apple ecosystem by recommending and attaching accessories and AppleCare during Setup.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Demonstrate familiarity with internal support resources...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Remain up to date on all training materials.</li>
            <li>Stay up to date with the latest customer-facing support resources and share them with customers who want to go further.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Perform other tasks as needed...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Support the learning environment as described in the Learning Environment Support Guide.</li>
            <li>Support the Product Zone as guided.</li>
            <li>Perform additional support and service functions as guided.</li>
            <li>Answer incoming calls.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Research internal theft or conduct other investigations.</li>
            <li>Take Genius Bar appointments or repair devices.</li>
            <li>Perform tasks or responsibilities beyond systems access provisioned for your role.</li>
            <li>Take on cash management responsibilities, such as cash pickups, change for registers, or deposit bag pickups.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Contribute to an inclusive environment...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Respect each other's differences and have the curiosity to learn.</li>
            <li>Demonstrate Apple's values of inclusion and diversity in daily activities.</li></ul>
        </div></details>`,
        criticalCompetencies: `<strong>FYI Competencies:</strong>
        <ul>
            <li>Customer Focus</li>
            <li>Interpersonal Savvy</li>
            <li>Action Oriented</li>
            <li>Nimble Learning</li>
            <li>Communicates Effectively</li>
        </ul>
        <strong>Leadership Palette Attributes:</strong>
        <ul>
            <li>Obsess over the customer experience</li>
            <li>Approach problems flexibly</li>
            <li>Demonstrate integrity</li>
        </ul>`
    },

    "Lead Genius": {
        description: `Helps our team deliver exceptional customer experiences by supporting a culture of human connection at the Genius Bar while delivering same-day help and timely repairs for customers. Assists the leadership team with day-to-day responsibilities and drives operational readiness and sustainability of the Genius Bar and Repair Room.<br><br><strong>In this role you'll:</strong>
        <details class="role-accordion"><summary>Have extensive knowledge and stay up to date on all Apple products...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Complete all training required for understanding product features and benefits, and troubleshooting and repairing Apple hardware and software.</li>
            <li>Complete personal ongoing ATLAS and certification training.</li>
            <li>Maintain knowledge of current in-store and online products and services, promotions, purchasing options, merchandise features, inventory, policies and procedures, and Repair Room standards.</li>
            <li>Have a deep understanding of Genius Bar practices and mentor all Genius Bar team members to support customers at the Genius Bar.</li>
            <li>Spend sufficient time performing repairs and delivering sessions to maintain procedural knowledge.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Support customers having Apple product or software concerns in a timely manner...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Support On Point, Repair Pickup, Genius Bar sessions, and administrative, sales, and operations roles as needed.</li>
            <li>Identify opportunities to connect your customers to relevant Today at Apple sessions to further their learning.</li>
            <li>Document and validate pertinent customer interaction details, maintaining data accuracy and privacy in all systems of record.</li>
            <li>Record all transactions accurately to maintain service and inventory part accuracy.</li>
            <li>Use all available tools and resources provided by Apple to maintain efficiency and a high level of service.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Troubleshoot, diagnose, repair, and resolve service concerns...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Provide basic troubleshooting for all Apple products.</li>
            <li>Diagnose and resolve issues with all Apple hardware and software.</li>
            <li>Perform in-store hardware repair for all supported Apple hardware.</li>
            <li>Complete timely in-store repairs on Apple hardware with a high success rate.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Provide excellent service to Apple customers...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Maintain a high level of decision quality in line with Apple standards.</li>
            <li>Consider all options before requesting an exception to resolve a customer issue.</li>
            <li>Follow policies and procedures to support customers within established scope.</li>
            <li>Take time to showcase device features and highlight Apple's commitment to privacy during Genius Bar sessions.</li>
            <li>Approach all customers with a personalized, warm welcome.</li>
            <li>Probe to understand what issue the customer is experiencing with their device, and follow the outlined troubleshooting steps.</li>
            <li>Present clear options to the customer.</li>
            <li>Monitor and adjust zoning throughout the day for the Genius Bar and Repair Room.</li>
            <li>Address questions, objections, and concerns.</li>
            <li>Make sure the customer understands next steps and ask if you have resolved the issue they came in for.</li>
            <li>Present options beyond repair, and partner closely with the Product Zone team if a customer chooses to make a purchase.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Recommend cross-functional partners for alternate resolutions (including the Contact Center for Customer Satisfaction (CS) Code).</li>
            <li>Make excessive exceptions to POS or CS Code recommendations.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Work with Genius Bar team members to identify recurring repair problems...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Submit relevant feedback through the appropriate channels: in-app feedback, the Store Leadership team, and the Field Support team.</li>
            <li>Identify and support opportunities to provide training and education about Genius Bar operations to the store team.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Use extensive knowledge of hardware and software components...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Simplify complex technical situations for customers and Apple team members to understand.</li>
            <li>Stay up to date with all technologies relevant to Apple products.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Partner with leadership to develop strategies for the Genius Bar team...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Organize people and workflows at the Genius Bar to maintain the customer experience and store operating standards.</li>
            <li>Use Leaderboard+ to plan for peak reservation times and adjust resources as needed.</li>
            <li>Review the Support Insights Dashboard, Market Analysis Dashboard, Genius Bar Report, and NPS reporting each week to assess store performance.</li>
            <li>Assist and empower team members to resolve customer concerns, and partner with the Store Leadership team to solve more complex issues when needed.</li>
            <li>Deliver feedback and recognition to Genius Bar team members based on observing Genius Bar sessions, Repair Room repairs, and Net Promoter feedback.</li>
            <li>Work with Managers in the role of Coach to inform where coaching may need to take place.</li>
            <li>Develop strategies with the Genius Bar Manager to meet Genius Bar and store goals.</li>
            <li>Make sure team members comply with policies, follow service strategy, and create accurate repair documentation.</li>
            <li>Serve as a mentor, resource, and role model for Genius Bar team members on session delivery, repair quality, and presenting options to customers.</li>
            <li>Partner with the leadership team to identify, plan, execute, and support all Genius Bar team training.</li>
            <li>Provide regular updates to the leadership team regarding upcoming training and current completion.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Energize, inform, and align team members about store performance goals...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Prepare the team with information they need to deliver a positive customer experience, including leading Daily Downloads.</li>
            <li>Conduct daily review and assessment of customer feedback and store reporting.</li>
            <li>Share and communicate store performance with the team, recognize successes, and partner with leadership to address coaching opportunities.</li>
            <li>Use tools (such as Leaderboard+) to inform, recognize, and celebrate the team's impact on priority performance.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Attend to time-sensitive feedback, questions, and concerns from team members...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Mediate conflict among team members.</li>
            <li>Inform Store Leadership of personal hygiene concerns.</li>
            <li>Support the team in understanding expectations related to the dress code.</li>
            <li>Partner with Store Leadership to address unusual behavior.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Participate in well-being discussions.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Address operational needs of the store, such as opening and closing procedures...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Fulfill the responsibilities of the Support role in alignment with Apple's policies and procedures.</li>
            <li>Support visual merchandising.</li>
            <li>Oversee line management.</li>
            <li>Investigate and resolve customer concerns, and empower the team to reach timely solutions.</li>
            <li>Complete all cash management responsibilities, such as cash pickups, change for registers, or deposit bag pickups.</li>
            <li>Adhere to guidelines as outlined by Environment, Health and Safety procedures.</li>
            <li>Work with current in-store processes to coordinate requests for accessibility support.</li>
            <li>Make schedule adjustments to align with changing customer traffic patterns or team member needs.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Be in the store during operating hours, complete an overnight, or fulfill the role of Support without a manager present.</li>
            <li>Fulfill the role of Coach.</li>
            <li>Research internal theft or conduct other investigations. If internal theft is suspected, Leads should partner with a manager for next steps.</li>
            <li>Manage timecard edits, time away requests or availability modifications.</li>
            <li>Adjust your own shift times.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Perform other tasks as needed, including supporting customer-facing activities...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Support the customer journey through Sales, On Point, Avenue, Apple Pickup, and more.</li>
            <li>Help receive and process shipments.</li>
            <li>Attend to urgent maintenance issues.</li>
            <li>Partner with Retail Security.</li>
            <li>Answer incoming calls.</li>
            <li>Lead the emergency shelter-in-place process when necessary.</li></ul>
            <strong>You shouldn't:</strong><ul>
            <li>Lead a Connection Team.</li>
            <li>Host Quarterly Connection Team meetings.</li>
            <li>Complete hiring and staffing duties.</li>
            <li>Conduct performance management and development conversations with team members.</li>
            <li>Discuss readiness for future roles with team members.</li>
            <li>Perform tasks or responsibilities beyond systems access provisioned for your role.</li></ul>
        </div></details>
        <details class="role-accordion"><summary>Contribute to an inclusive environment...</summary><div class="accordion-content">
            <strong>You should:</strong><ul>
            <li>Contribute to an inclusive environment by respecting each other's differences and having the curiosity to learn.</li>
            <li>Demonstrate Apple's values of inclusion and diversity in daily activities.</li></ul>
        </div></details>`,
        criticalCompetencies: `<strong>FYI Competencies:</strong>
        <ul>
            <li>Directs Work</li>
            <li>Customer Focus</li>
            <li>Communicates Effectively</li>
            <li>Action Oriented</li>
            <li>Interpersonal Savvy</li>
        </ul>
        <strong>Leadership Palette Attributes:</strong>
        <ul>
            <li>Obsess over the customer experience</li>
            <li>Fight for excellence</li>
            <li>Give help</li>
        </ul>`
    },

    // Default structure for roles we don't have PDFs for yet
    "Business Expert": { description: "Works with business customers to understand their unique needs and provides tailored Apple solutions. Builds long-term relationships with business clients and drives commercial outcomes.", criticalCompetencies: "<p>Competencies not yet available.</p>" },
    "Business Pro": { description: "A senior business-focused role with deeper expertise in Apple Business solutions. Acts as a trusted advisor to key business accounts and supports the Business Expert team.", criticalCompetencies: "<p>Competencies not yet available.</p>" },
    "Technical Expert": { description: "Bridges the gap between technical support and customer education. Handles complex technical queries and helps customers understand and resolve issues with their Apple products.", criticalCompetencies: "<p>Competencies not yet available.</p>" },
    "Senior Specialist": { description: "An experienced floor specialist who supports new team members, models best-in-class customer interactions, and contributes to a positive and high-performing store culture.", criticalCompetencies: "<p>Competencies not yet available.</p>" },
    "Manager": { description: "Leads and develops a team within the Apple Retail Store. Responsible for performance management, team development, scheduling, and creating an inclusive and inspiring work environment.", criticalCompetencies: "<p>Competencies not yet available.</p>" },
    "Senior Manager": { description: "Leads the store leadership team, drives overall store performance and strategy, and cultivates a culture of excellence, inclusion, and development across the entire store.", criticalCompetencies: "<p>Competencies not yet available.</p>" },
    "Operations Expert": { description: "Drives operational excellence, oversees inventory management, and supports the Operations team in delivering a seamless customer experience.", criticalCompetencies: "<p>Competencies not yet available.</p>" },
    "Pro": { description: "Demonstrates deep expertise and leadership, providing advanced solutions and elevating the customer and team experience.", criticalCompetencies: "<p>Competencies not yet available.</p>" },
    "Genius Admin": { description: "Manages the repair room, handles administrative tasks for the Genius Bar, and ensures smooth workflow for repairs and customer communication.", criticalCompetencies: "<p>Competencies not yet available.</p>" },
    "Technical Merchandising Pro": { description: "Leads visual merchandising, ensures technical displays are functioning perfectly, and maintains the highest standards of store presentation.", criticalCompetencies: "<p>Competencies not yet available.</p>" },
    "People Operations Planner": { description: "Focuses on scheduling, staffing, and people operations to ensure the store has the right people in the right place at the right time.", criticalCompetencies: "<p>Competencies not yet available.</p>" },
    "Lead": { description: "Guides and supports the store team on the floor, driving performance, role-modeling best practices, and ensuring an exceptional customer experience.", criticalCompetencies: "<p>Competencies not yet available.</p>" },
    "Operations Lead": { description: "Directs the back-of-house team, overseeing inventory flow, supply chain processes, and ensuring the store is operationally prepared for success.", criticalCompetencies: "<p>Competencies not yet available.</p>" }
};


// 2. FYI Competencies list
const fyiCompetencies = [
    "Action Oriented", "Balances Stakeholders", "Being Resilient", "Business Insight", 
    "Collaborates", "Communicates Effectively", "Courage", "Cultivates Innovation", 
    "Customer Focus", "Decision Quality", "Develops Talent", "Directs Work", 
    "Drives Engagement", "Drives Results", "Ensures Accountability", "Financial Acumen", 
    "Global Perspective", "Instills Trust", "Interpersonal Savvy", "Manages Ambiguity", 
    "Manages Complexity", "Manages Conflict", "Nimble Learning", "Organizational Savvy", 
    "Persuades", "Plans and Aligns", "Self-Development", "Situational Adaptability", 
    "Strategic Mindset", "Tech Savvy"
];

// 3. Leadership Palette
const leadershipPalette = {
    "Think clearly": "Distilling big decisions down to their determinative factors. Involves a hard look at the data and a healthy dose of intuition.",
    "Focus and simplify": "Stripping out what is not essential and identifying what is. Takes concentrated attention and an unrelenting drive.",
    "Sense the moment": "Understanding the subtleties of good timing. Knowing when to hold back and when to engage.",
    "See around corners": "Looking beyond daily demands to identify and discuss trajectories that will be critical to anticipate and plan for.",
    "Innovate down to the details": "Diving deep into the details. Requires a focus on novel, inventive, creative, or thoughtful approaches to even the smallest details.",
    "Demand difference": "Not settling for common approaches. Seeking new paths and points of view, continually challenging the status quo.",
    "Stay curious": "Continually asking why and why not. Being inquisitive in pursuit of excellence and presuming there's always more to learn.",
    "Approach problems flexibly": "Taking on challenges successfully requires a willingness to adapt and modify your approach, without compromising on the outcome.",
    "Fight for excellence": "Digging deep — and inspiring others — to strive to get it right, every time. Being honest when settling, and trying to learn.",
    "Obsess over the customer experience": "Imagining how the widest range of customers might experience products/services, and how they make people feel.",
    "Wrestle with Apple's premises": "Holding the tensions of competing or conflicting aspects of our culture, grappling with them and endeavoring to understand their origins.",
    "Demonstrate integrity": "Upholding our values in all that we do, and actively modeling honesty and accountability in matters great and small.",
    "Drive what matters": "Selecting the right tasks to focus on and effectively influencing others to zero in on what's critical — and let go of what's not.",
    "Cut through ambiguity": "Finding the right path despite haziness or uncertainty. Blazing that path rather than waiting on others.",
    "Own the hard calls": "Making tough decisions and standing behind them. Includes buy-in, negotiation, pushback, push-through.",
    "Listen, challenge, and commit": "Understanding others' perspectives to challenge them productively, then committing to the decision once made.",
    "Know people": "Knowing who else to involve and when. Knowing how they see the world, what they believe, and what they care about.",
    "Foster trust": "Demonstrating your expertise, doing what you say you'll do, acknowledging mistakes, and displaying empathy.",
    "Give help": "Going out of your way to ensure someone else succeeds without worrying about what's in it for you.",
    "Seek expertise and experience": "Recognizing shortcomings and supplementing them with the talents of a diverse group of people.",
    "Attract, develop, and share talent": "Building strong, diverse teams. Investing in their development and supporting their growth.",
    "Make action meaningful": "Reminding colleagues about why the work matters and the impact it has. Instilling a sense of pride in each person's contribution.",
    "Instill candor and resilience": "Being prepared to give and hear honest feedback with openness and care, and treating it as an invitation to improve.",
    "Plan for scale and succession": "Thinking beyond the short-term reality. Asking 'What happens if?' and laying the groundwork for future challenges."
};

let teamMembers = [];

// --- HELPER FUNCTION TO SAVE DATA TO INDEXEDDB ---
function saveTeamData() {
    localforage.setItem('teamMembersData', teamMembers).catch(function(err) {
        console.error("Error saving data to IndexedDB", err);
    });
}

// --- HTML ELEMENTS ---
const dashboardView = document.getElementById('dashboard-view');
const formView = document.getElementById('form-view');
const addMemberBtn = document.getElementById('add-member-btn');
const cancelBtn = document.getElementById('cancel-btn');
const roleDropdown = document.getElementById('memberRole');
const memberForm = document.getElementById('new-member-form');
const devLevelSelect = document.getElementById('devLevel');
const leadStyleSelect = document.getElementById('leadStyle');
const teamGrid = document.getElementById('team-grid');
const profileView = document.getElementById('profile-view');
const backBtn = document.getElementById('back-btn');
const exportBtn = document.getElementById('export-btn');
const importBtn = document.getElementById('import-btn');
const importFile = document.getElementById('import-file');
const clearBtn = document.getElementById('clear-btn');
const fyiSelect = document.getElementById('new-fyi-select');
const paletteSelect = document.getElementById('new-palette-select');
const editModal = document.getElementById('edit-modal');
const editProfileBtn = document.getElementById('edit-profile-btn');
const editProfileModal = document.getElementById('edit-profile-modal');
const editProfileForm = document.getElementById('edit-profile-form');
const cancelEditProfileBtn = document.getElementById('cancel-edit-profile-btn');
const editRoleDropdown = document.getElementById('editMemberRole');

let currentViewedMemberId = null;
let editingType = null;  
let editingIndex = null; 

// --- NAVIGATION ---
addMemberBtn.addEventListener('click', function() {
    dashboardView.classList.add('hidden');
    formView.classList.remove('hidden');
});

cancelBtn.addEventListener('click', function() {
    formView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
});

backBtn.addEventListener('click', function() {
    profileView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
    currentViewedMemberId = null; 
});

// --- POPULATE THE ROLE DROPDOWN ---
const roleCategories = {
    "S2": [
        "Specialist", 
        "Operations Specialist", 
        "Technical Specialist"
    ],
    "S3": [
        "Expert", 
        "Operations Expert", 
        "Creative", 
        "Technical Expert",
        "Business Expert"
    ],
    "S4": [
        "Pro", 
        "Genius", 
        "Genius Admin", 
        "Creative Pro", 
        "Business Pro", 
        "Technical Merchandising Pro", 
        "People Operations Planner"
    ],
    "Leadership & Other": [
        "Lead Genius",
        "Operations Lead",
        "Lead",
        "Manager",
        "Senior Manager"
    ]
};

roleDropdown.innerHTML = '<option value="">-- Select a Role --</option>';
editRoleDropdown.innerHTML = '<option value="">-- Select a Role --</option>';

for (let category in roleCategories) {
    let optgroup = document.createElement('optgroup');
    optgroup.label = category + " Level"; 
    let editOptgroup = document.createElement('optgroup');
    editOptgroup.label = category + " Level"; 
    
    roleCategories[category].forEach(function(roleName) {
        let newOption = document.createElement('option');
        newOption.value = roleName;
        newOption.textContent = roleName;
        optgroup.appendChild(newOption); 
        
        let editOption = document.createElement('option');
        editOption.value = roleName;
        editOption.textContent = roleName;
        editOptgroup.appendChild(editOption);
    });
    
    roleDropdown.appendChild(optgroup);
    editRoleDropdown.appendChild(editOptgroup);
}

// --- POPULATE TRACKER DROPDOWNS ---
fyiSelect.innerHTML = '<option value="">-- Select Competency --</option>';
fyiCompetencies.forEach(function(comp) {
    let option = document.createElement('option');
    option.value = comp;
    option.textContent = comp;
    fyiSelect.appendChild(option);
});

paletteSelect.innerHTML = '<option value="">-- Select Attribute --</option>';
for (let attribute in leadershipPalette) {
    let option = document.createElement('option');
    option.value = attribute;
    option.textContent = attribute;
    paletteSelect.appendChild(option);
}

// --- AUTO-SUGGEST LEADERSHIP STYLE ---
devLevelSelect.addEventListener('change', function() {
    const selectedLevel = devLevelSelect.value;
    if (selectedLevel === 'D1') leadStyleSelect.value = 'S1';
    if (selectedLevel === 'D2') leadStyleSelect.value = 'S2';
    if (selectedLevel === 'D3') leadStyleSelect.value = 'S3';
    if (selectedLevel === 'D4') leadStyleSelect.value = 'S4';
});

document.getElementById('editDevLevel').addEventListener('change', function() {
    const selectedLevel = this.value;
    const editLeadStyleSelect = document.getElementById('editLeadStyle');
    if (selectedLevel === 'D1') editLeadStyleSelect.value = 'S1';
    if (selectedLevel === 'D2') editLeadStyleSelect.value = 'S2';
    if (selectedLevel === 'D3') editLeadStyleSelect.value = 'S3';
    if (selectedLevel === 'D4') editLeadStyleSelect.value = 'S4';
});

// --- SAVING NEW TEAM MEMBER ---
memberForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const newMember = {
        id: Date.now(), 
        name: document.getElementById('memberName').value,
        role: document.getElementById('memberRole').value,
        startDate: document.getElementById('memberStartDate').value,
        emoji: document.getElementById('memberEmoji').value,
        devLevel: devLevelSelect.value,
        leadStyle: leadStyleSelect.value,
        goals: [], 
        checkIns: [],
        competencies: [],
        palette: [],
        meetings: []
    };

    teamMembers.push(newMember);
    saveTeamData();

    memberForm.reset();
    formView.classList.add('hidden');
    dashboardView.classList.remove('hidden');

    renderDashboard();
});

// --- RENDER DASHBOARD ---
function renderDashboard() {
    teamGrid.innerHTML = '';

    if (teamMembers.length === 0) {
        teamGrid.innerHTML = '<p>No team members yet. Click the button above to add someone!</p>';
        return; 
    }

    teamMembers.forEach(function(member) {
        let badgeClass = 'badge-' + member.devLevel.toLowerCase();

        const cardHTML = `
            <div class="card clickable-card" onclick="openProfile(${member.id})">
                <div class="member-card-header">
                    <div class="member-emoji">${member.emoji}</div>
                    <div class="member-info">
                        <h3>${member.name}</h3>
                        <p>${member.role}</p>
                    </div>
                </div>
                <div class="badges">
                    <span class="badge ${badgeClass}">${member.devLevel}</span>
                    <span class="badge badge-style">${member.leadStyle}</span>
                </div>
                <div class="card-stats">
                    Active Goals: ${member.goals ? member.goals.length : 0}
                </div>
            </div>
        `;
        
        teamGrid.innerHTML += cardHTML;
    });
}

// --- OPEN PROFILE ---
function openProfile(memberId) {
    const member = teamMembers.find(m => m.id === memberId);
    if (!member) return; 

    currentViewedMemberId = memberId; 

    if (!member.competencies) member.competencies = [];
    if (!member.palette) member.palette = [];
    if (!member.goals) member.goals = []; 
    if (!member.checkIns) member.checkIns = [];
    if (!member.meetings) member.meetings = [];

    document.getElementById('profile-name').textContent = member.name;
    document.getElementById('profile-emoji').textContent = member.emoji;
    document.getElementById('profile-role').textContent = member.role;
    document.getElementById('profile-start-date').textContent = member.startDate;
    // Check if the role exists in our data
    const roleData = appleRoles[member.role];
    
    if (roleData) {
        // If it's the new object format
        document.getElementById('profile-role-desc').innerHTML = roleData.description;
        document.getElementById('goal-role-hint').innerHTML = roleData.description;
        document.getElementById('profile-critical-comps').innerHTML = roleData.criticalCompetencies;
    } else {
        // Fallback if something goes wrong
        document.getElementById('profile-role-desc').innerHTML = "Role description not found.";
        document.getElementById('goal-role-hint').innerHTML = "Role description not found.";
        document.getElementById('profile-critical-comps').innerHTML = "Competencies not found.";
    }

    let badgeClass = 'badge-' + member.devLevel.toLowerCase();
    document.getElementById('profile-badges').innerHTML = `
        <span class="badge ${badgeClass}">${member.devLevel}</span>
        <span class="badge badge-style">${member.leadStyle}</span>
    `;

    renderTrackers(member);
    renderGoals(member);
    renderCheckIns(member);
    renderMeetings(member);

    dashboardView.classList.add('hidden');
    profileView.classList.remove('hidden');
}

// --- RENDER SAVED TRACKERS ---
function renderTrackers(member) {
    const fyiList = document.getElementById('fyi-list');
    const paletteList = document.getElementById('palette-list');
    const fyiFormBox = document.getElementById('fyi-form-box');

    fyiList.innerHTML = '';
    paletteList.innerHTML = '';

    if (member.competencies) {
        member.competencies.forEach(function(item, index) {
            let displayRating = item.rating;
            if (displayRating === "1") displayRating = "Less Skilled";
            if (displayRating === "2") displayRating = "Skilled";
            if (displayRating === "3") displayRating = "Talented";
            if (displayRating === "4" || displayRating === "5") displayRating = "Overused";

            fyiList.innerHTML += `
                <div class="item-card">
                    <div class="item-header">
                        <p class="item-title">${item.name}</p>
                        <span class="rating-badge">${displayRating}</span>
                    </div>
                    <p class="item-notes">${item.notes}</p>
                    <div class="card-actions">
                        <button class="btn-small" onclick="openEditModal('competencies', ${index})">Edit</button>
                        <button class="btn-small btn-delete" onclick="deleteItem('competencies', ${index})">Delete</button>
                    </div>
                </div>
            `;
        });

        if (member.competencies.length >= 3) {
            fyiFormBox.classList.add('hidden');
        } else {
            fyiFormBox.classList.remove('hidden');
        }
    }

    if (member.palette) {
        member.palette.forEach(function(item, index) {
            let displayRating = item.rating;
            if (displayRating === "1") displayRating = "Less Skilled";
            if (displayRating === "2") displayRating = "Skilled";
            if (displayRating === "3") displayRating = "Talented";
            if (displayRating === "4" || displayRating === "5") displayRating = "Overused";

            paletteList.innerHTML += `
                <div class="item-card">
                    <div class="item-header">
                        <p class="item-title">${item.name}</p>
                        <span class="rating-badge">${displayRating}</span>
                    </div>
                    <p class="item-notes">${item.notes}</p>
                    <div class="card-actions">
                        <button class="btn-small" onclick="openEditModal('palette', ${index})">Edit</button>
                        <button class="btn-small btn-delete" onclick="deleteItem('palette', ${index})">Delete</button>
                    </div>
                </div>
            `;
        });
    }
}

// --- ADDING NEW TRACKERS ---
document.getElementById('add-fyi-btn').addEventListener('click', function() {
    const name = fyiSelect.value;
    const rating = document.getElementById('new-fyi-rating').value;
    const notes = document.getElementById('new-fyi-notes').value;

    if (!name) return alert("Please select a competency!");

    const member = teamMembers.find(m => m.id === currentViewedMemberId);
    
    member.competencies.push({ name: name, rating: rating, notes: notes });
    saveTeamData();
    
    fyiSelect.value = '';
    document.getElementById('new-fyi-notes').value = '';
    renderTrackers(member);
    
    // Close the accordion after saving
    this.closest('details').open = false;
});

document.getElementById('add-palette-btn').addEventListener('click', function() {
    const name = paletteSelect.value;
    const rating = document.getElementById('new-palette-rating').value;
    const notes = document.getElementById('new-palette-notes').value;

    if (!name) return alert("Please select an attribute!");

    const member = teamMembers.find(m => m.id === currentViewedMemberId);
    
    member.palette.push({ name: name, rating: rating, notes: notes });
    saveTeamData();
    
    paletteSelect.value = '';
    document.getElementById('new-palette-notes').value = '';
    renderTrackers(member);
    
    // Close the accordion after saving
    this.closest('details').open = false;
});

// --- RENDER SAVED GOALS ---
function renderGoals(member) {
    const goalsList = document.getElementById('goals-list');
    goalsList.innerHTML = ''; 

    member.goals.forEach(function(goal, index) {
        let statusClass = 'status-' + goal.status.replace(' ', '-');

        goalsList.innerHTML += `
            <div class="item-card">
                <div class="item-header">
                    <p class="item-title">${goal.title}</p>
                    <span class="badge ${statusClass}">${goal.status}</span>
                </div>
                <p class="goal-desc">${goal.description}</p>
                <div class="goal-meta">
                    <span><strong>Target Date:</strong> ${goal.date}</span>
                </div>
                <div class="card-actions">
                    <button class="btn-small" onclick="openEditModal('goals', ${index})">Edit</button>
                    <button class="btn-small btn-delete" onclick="deleteItem('goals', ${index})">Delete</button>
                </div>
            </div>
        `;
    });
}

// --- ADDING A NEW GOAL ---
document.getElementById('add-goal-btn').addEventListener('click', function() {
    const title = document.getElementById('new-goal-title').value;
    const desc = document.getElementById('new-goal-desc').value;
    const date = document.getElementById('new-goal-date').value;
    const status = document.getElementById('new-goal-status').value;

    if (!title) return alert("Please enter a Goal Title!");

    const member = teamMembers.find(m => m.id === currentViewedMemberId);
    
    member.goals.push({
        title: title,
        description: desc,
        date: date,
        status: status
    });
    
    saveTeamData();
    
    document.getElementById('new-goal-title').value = '';
    document.getElementById('new-goal-desc').value = '';
    document.getElementById('new-goal-date').value = '';
    document.getElementById('new-goal-status').value = 'Not Started';
    
    renderGoals(member);
    
    // Close the accordion after saving
    this.closest('details').open = false;
});

// --- EDIT AND DELETE LOGIC ---
function openEditModal(type, index) {
    const member = teamMembers.find(m => m.id === currentViewedMemberId);
    const item = member[type][index];

    editingType = type;
    editingIndex = index;

    // Hide all field groups first
    document.getElementById('edit-tracker-fields').classList.add('hidden');
    document.getElementById('edit-goal-fields').classList.add('hidden');
    document.getElementById('edit-checkin-fields').classList.add('hidden');
    document.getElementById('edit-meeting-fields').classList.add('hidden');

    if (type === 'competencies' || type === 'palette') {
        document.getElementById('edit-modal-title').textContent = "Edit: " + item.name;
        document.getElementById('edit-tracker-fields').classList.remove('hidden');
        
        let currentRating = item.rating;
        if (currentRating === "1") currentRating = "Less Skilled";
        if (currentRating === "2") currentRating = "Skilled";
        if (currentRating === "3") currentRating = "Talented";
        if (currentRating === "4" || currentRating === "5") currentRating = "Overused";
        
        document.getElementById('edit-rating').value = currentRating;
        document.getElementById('edit-notes').value = item.notes;
    } 
    else if (type === 'goals') {
        document.getElementById('edit-modal-title').textContent = "Edit Goal";
        document.getElementById('edit-goal-fields').classList.remove('hidden');
        
        document.getElementById('edit-goal-title').value = item.title;
        document.getElementById('edit-goal-desc').value = item.description;
        document.getElementById('edit-goal-date').value = item.date;
        document.getElementById('edit-goal-status').value = item.status;
    }
    else if (type === 'checkIns') {
        document.getElementById('edit-modal-title').textContent = "Edit Check-in";
        document.getElementById('edit-checkin-fields').classList.remove('hidden');
        
        document.getElementById('edit-checkin-date').value = item.date;
        document.getElementById('edit-checkin-summary').value = item.summary;
        document.getElementById('edit-checkin-obs').value = item.observations;
        document.getElementById('edit-checkin-actions').value = item.actions;
    }
    else if (type === 'meetings') {
        document.getElementById('edit-modal-title').textContent = "Edit Meeting";
        document.getElementById('edit-meeting-fields').classList.remove('hidden');
        
        document.getElementById('edit-meeting-date').value = item.date;
        document.getElementById('edit-meeting-type').value = item.type;
        document.getElementById('edit-meeting-notes').value = item.notes;
        document.getElementById('edit-meeting-actions').value = item.actions;
    }

    editModal.style.display = 'flex'; 
    editModal.classList.remove('hidden');
}

document.getElementById('cancel-edit-btn').addEventListener('click', function() {
    editModal.style.display = 'none';
    editModal.classList.add('hidden');
});

document.getElementById('save-edit-btn').addEventListener('click', function() {
    const member = teamMembers.find(m => m.id === currentViewedMemberId);
    const item = member[editingType][editingIndex];
    
    if (editingType === 'competencies' || editingType === 'palette') {
        item.rating = document.getElementById('edit-rating').value;
        item.notes = document.getElementById('edit-notes').value;
        renderTrackers(member);
    }
    else if (editingType === 'goals') {
        item.title = document.getElementById('edit-goal-title').value;
        item.description = document.getElementById('edit-goal-desc').value;
        item.date = document.getElementById('edit-goal-date').value;
        item.status = document.getElementById('edit-goal-status').value;
        renderGoals(member);
    }
    else if (editingType === 'checkIns') {
        item.date = document.getElementById('edit-checkin-date').value;
        item.summary = document.getElementById('edit-checkin-summary').value;
        item.observations = document.getElementById('edit-checkin-obs').value;
        item.actions = document.getElementById('edit-checkin-actions').value;
        renderCheckIns(member);
    }
    else if (editingType === 'meetings') {
        item.date = document.getElementById('edit-meeting-date').value;
        item.type = document.getElementById('edit-meeting-type').value;
        item.notes = document.getElementById('edit-meeting-notes').value;
        item.actions = document.getElementById('edit-meeting-actions').value;
        renderMeetings(member);
    }

    saveTeamData();
    
    editModal.style.display = 'none';
    editModal.classList.add('hidden');
});

function deleteItem(type, index) {
    const confirmDelete = confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return; 

    const member = teamMembers.find(m => m.id === currentViewedMemberId);
    
    member[type].splice(index, 1);
    
    saveTeamData();
    
    if (type === 'competencies' || type === 'palette') renderTrackers(member);
    else if (type === 'goals') renderGoals(member);
    else if (type === 'checkIns') renderCheckIns(member);
    else if (type === 'meetings') renderMeetings(member);
}

editModal.style.display = 'none';

// --- RENDER SAVED CHECK-INS ---
function renderCheckIns(member) {
    const checkinsList = document.getElementById('checkins-list');
    checkinsList.innerHTML = '';

    const sortedCheckIns = member.checkIns.sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedCheckIns.forEach(function(checkin, index) {
        checkinsList.innerHTML += `
            <div class="item-card">
                <div class="item-header">
                    <p class="item-title">${checkin.summary}</p>
                    <span class="badge badge-style">${checkin.date}</span>
                </div>
                <p class="goal-desc"><strong>Observations:</strong><br>${checkin.observations.replace(/\n/g, '<br>')}</p>
                <p class="goal-desc" style="margin-top: 10px;"><strong>Agreed Actions:</strong><br>${checkin.actions.replace(/\n/g, '<br>')}</p>
                <div class="card-actions">
                    <button class="btn-small" onclick="openEditModal('checkIns', ${index})">Edit</button>
                    <button class="btn-small btn-delete" onclick="deleteItem('checkIns', ${index})">Delete</button>
                </div>
            </div>
        `;
    });
}

// --- ADDING A NEW CHECK-IN ---
document.getElementById('add-checkin-btn').addEventListener('click', function() {
    const date = document.getElementById('new-checkin-date').value;
    const summary = document.getElementById('new-checkin-summary').value;
    const obs = document.getElementById('new-checkin-obs').value;
    const actions = document.getElementById('new-checkin-actions').value;

    if (!date || !summary) return alert("Please enter a Date and Summary!");

    const member = teamMembers.find(m => m.id === currentViewedMemberId);
    
    member.checkIns.push({ date: date, summary: summary, observations: obs, actions: actions });
    saveTeamData();
    
    document.getElementById('new-checkin-date').value = '';
    document.getElementById('new-checkin-summary').value = '';
    document.getElementById('new-checkin-obs').value = '';
    document.getElementById('new-checkin-actions').value = '';
    
    renderCheckIns(member);
    
    // Close the accordion after saving
    this.closest('details').open = false;
});

// --- RENDER SAVED MEETINGS ---
function renderMeetings(member) {
    const meetingsList = document.getElementById('meetings-list');
    meetingsList.innerHTML = '';

    const sortedMeetings = member.meetings.sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedMeetings.forEach(function(meeting, index) {
        meetingsList.innerHTML += `
            <div class="item-card">
                <div class="item-header">
                    <p class="item-title">${meeting.type} Meeting</p>
                    <span class="badge badge-style">${meeting.date}</span>
                </div>
                <p class="goal-desc"><strong>Notes:</strong><br>${meeting.notes.replace(/\n/g, '<br>')}</p>
                <p class="goal-desc" style="margin-top: 10px;"><strong>Follow-up Actions:</strong><br>${meeting.actions.replace(/\n/g, '<br>')}</p>
                <div class="card-actions">
                    <button class="btn-small" onclick="openEditModal('meetings', ${index})">Edit</button>
                    <button class="btn-small btn-delete" onclick="deleteItem('meetings', ${index})">Delete</button>
                </div>
            </div>
        `;
    });
}

// --- ADDING A NEW MEETING ---
document.getElementById('add-meeting-btn').addEventListener('click', function() {
    const date = document.getElementById('new-meeting-date').value;
    const type = document.getElementById('new-meeting-type').value;
    const notes = document.getElementById('new-meeting-notes').value;
    const actions = document.getElementById('new-meeting-actions').value;

    if (!date) return alert("Please enter a Date!");

    const member = teamMembers.find(m => m.id === currentViewedMemberId);
    
    member.meetings.push({ date: date, type: type, notes: notes, actions: actions });
    saveTeamData();
    
    document.getElementById('new-meeting-date').value = '';
    document.getElementById('new-meeting-type').value = '1:1';
    document.getElementById('new-meeting-notes').value = '';
    document.getElementById('new-meeting-actions').value = '';
    
    renderMeetings(member);
    
    // Close the accordion after saving
    this.closest('details').open = false;
});

// --- EXPORT AND IMPORT DATA ---
exportBtn.addEventListener('click', async function() {
    try {
        const data = await localforage.getItem('teamMembersData');
        
        if (!data || data.length === 0) {
            alert("You don't have any team members to export yet!");
            return;
        }

        const dataString = typeof data === 'string' ? data : JSON.stringify(data);
        const blob = new Blob([dataString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = "team-dashboard-backup.json";
        downloadLink.click();
        
        URL.revokeObjectURL(url);
    } catch (err) {
        console.error("Error exporting data", err);
        alert("There was an issue exporting your data.");
    }
});

importBtn.addEventListener('click', function() {
    importFile.click(); 
});

importFile.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return; 

    const reader = new FileReader();
    
    reader.onload = async function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            teamMembers = importedData;
            await localforage.setItem('teamMembersData', teamMembers);
            renderDashboard();
            alert("Data imported successfully!");
        } catch (error) {
            alert("Oops! There was an error reading that file. Make sure it's the correct backup file.");
        }
    };
    
    reader.readAsText(file);
});

// --- CLEAR STORAGE LOGIC ---
clearBtn.addEventListener('click', async function() {
    if (confirm("Are you sure you want to clear all team members? This cannot be undone.")) {
        try {
            await localforage.removeItem('teamMembersData');
            teamMembers = [];
            renderDashboard();
        } catch (err) {
            console.error("Error clearing data", err);
        }
    }
});

// --- EDIT PROFILE LOGIC ---
editProfileBtn.addEventListener('click', function() {
    const member = teamMembers.find(m => m.id === currentViewedMemberId);
    if (!member) return;
    
    document.getElementById('editMemberName').value = member.name;
    document.getElementById('editMemberRole').value = member.role;
    document.getElementById('editMemberStartDate').value = member.startDate;
    document.getElementById('editMemberEmoji').value = member.emoji;
    document.getElementById('editDevLevel').value = member.devLevel;
    document.getElementById('editLeadStyle').value = member.leadStyle;
    
    editProfileModal.style.display = 'flex';
    editProfileModal.classList.remove('hidden');
});

cancelEditProfileBtn.addEventListener('click', function() {
    editProfileModal.style.display = 'none';
    editProfileModal.classList.add('hidden');
});

editProfileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const memberIndex = teamMembers.findIndex(m => m.id === currentViewedMemberId);
    if (memberIndex === -1) return;
    
    teamMembers[memberIndex].name = document.getElementById('editMemberName').value;
    teamMembers[memberIndex].role = document.getElementById('editMemberRole').value;
    teamMembers[memberIndex].startDate = document.getElementById('editMemberStartDate').value;
    teamMembers[memberIndex].emoji = document.getElementById('editMemberEmoji').value;
    teamMembers[memberIndex].devLevel = document.getElementById('editDevLevel').value;
    teamMembers[memberIndex].leadStyle = document.getElementById('editLeadStyle').value;
    
    saveTeamData();
    
    editProfileModal.style.display = 'none';
    editProfileModal.classList.add('hidden');
    
    renderDashboard();
    openProfile(currentViewedMemberId);
});

editProfileModal.style.display = 'none';

// --- LOAD SAVED DATA ON STARTUP ---
async function loadSavedData() {
    try {
        // 1. Check if there's old data in localStorage to migrate (so you don't lose data!)
        const oldData = localStorage.getItem('teamMembersData');
        if (oldData) {
            teamMembers = JSON.parse(oldData);
            await localforage.setItem('teamMembersData', teamMembers);
            localStorage.removeItem('teamMembersData'); // clean up old data
            console.log("Migrated data from localStorage to IndexedDB");
        } else {
            // 2. Otherwise load normally from IndexedDB
            const savedData = await localforage.getItem('teamMembersData');
            if (savedData) {
                // localForage automatically parses objects, but we handle string just in case
                teamMembers = typeof savedData === 'string' ? JSON.parse(savedData) : savedData; 
            }
        }
        renderDashboard(); 
    } catch (err) {
        console.error("Error loading data", err);
        renderDashboard(); // Render empty state if error
    }
}

loadSavedData();

// --- EXPAND AND COLLAPSE ALL LOGIC ---
const expandAllBtn = document.getElementById('expand-all-btn');
const collapseAllBtn = document.getElementById('collapse-all-btn');

// Expand All
expandAllBtn.addEventListener('click', function() {
    // Find every single <details> tag inside the profile view
    const allAccordions = profileView.querySelectorAll('details');
    
    allAccordions.forEach(function(accordion) {
        // Set them all to open
        accordion.open = true;
    });
});

// Collapse All
collapseAllBtn.addEventListener('click', function() {
    // Find every single <details> tag inside the profile view
    const allAccordions = profileView.querySelectorAll('details');
    
    allAccordions.forEach(function(accordion) {
        // Remove the open attribute
        accordion.open = false;
    });
});

// Default View
const defaultViewBtn = document.getElementById('default-view-btn');

defaultViewBtn.addEventListener('click', function() {
    // 1. First, collapse absolutely everything
    const allAccordions = profileView.querySelectorAll('details');
    allAccordions.forEach(function(accordion) {
        accordion.open = false;
    });

    // 2. Then, find only the ones with the 'default-open' class and open them
    const defaultAccordions = profileView.querySelectorAll('.default-open');
    defaultAccordions.forEach(function(accordion) {
        accordion.open = true;
    });
});