import React, { useState } from 'react';
import './WindowContent.css';
import {
    Play,
    Volume2,
    Settings,
    Maximize,
    ThumbsUp,
    Link,
    ArrowLeft,
    Folder,
    Clock,
    MoreVertical
} from 'lucide-react';

const projectsData = [
    {
        id: 'slaces',
        title: 'SLACES',
        category: 'Systems',
        desc: 'Smootea Learning Access & Class Enrollment System',
        fullDesc: `<p><strong>Problem & Solution:</strong><br/>To solve the issue of inefficient class management, manual tracking errors, and poor security caused by relying on static websites and disjointed third-party platforms (like Facebook and WhatsApp), I developed the Smootea Learning Access & Class Enrollment System (SLACES) is a centralized, dynamic web-based system that automates student enrollment using a unique invoice code and provides dedicated, role-based access for both students and administrators.</p>

<p><strong>System Analysis:</strong><br/>The development followed a strict Software Development Life Cycle (SDLC) process, specifically utilizing the Waterfall Model due to its systematic, step-by-step methodology, which is ideal for projects with a well-defined scope and minimal projected changes. I began with thorough requirements gathering and analysis, which produced the Software Requirements Specification (SRS) document. This was followed by the System Design Phase, where the logical database architecture was created (Database Design and Schema) and documented in the Software Design Document (SDD). The project then moved to implementation, and the Waterfall Model's comprehensive nature ensured extensive documentation and focus on integration and acceptance testing before deployment.</p>

<p><strong>Key Technical Features:</strong><br/>
• Role-Based Access Control (RBAC): The system features distinct dashboards and privileges for two key user roles: Students (to enroll in classes, access materials, and track their progress) and Administrators (for class and invoice management).<br/>
• Automated Enrollment and Validation: Student enrollment is instant and automated by requiring the user to input a unique invoice code, which the system automatically validates against the database to grant class access without manual authorization from the administrator.<br/>
• Centralized Content Management: Administrators can easily perform CRUD (Create, Read, Update, Delete) operations for class records and manage learning materials, which supports the upload of files like PDF and video for dynamic student access.<br/>
• Three-Layer MVC Architecture: The system is built on a modular, maintainable Model-View-Controller (MVC) architectural pattern using the Laravel framework, structured with three layers (User Interface, Domain, Data Access) to ensure scalability.<br/>
• Technology Stack: The core technologies used are PHP (via the Laravel framework) for the web application and MySQL version 8.0 as the relational database management system.</p>

<p>For a detailed look at the system architecture and testing procedures, please refer to the technical documentation attached below.</p>

<div style='margin-top: 15px;'><a href='https://github.com/alyasy07/documentation/blob/main/Software%20Requirements%20for%20SLACES.pdf' target='_blank' rel='noopener noreferrer' class='yt-desc-link'><img src='/icons/windows_vista/vista_sticky_notes.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> Software Requirements Specification (SRS)</a><a href='https://github.com/alyasy07/documentation/blob/main/Software%20Design%20Document.pdf' target='_blank' rel='noopener noreferrer' class='yt-desc-link'><img src='/icons/windows_vista/vista_sticky_notes.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> Software Design Document (SDD)</a><a href='https://github.com/alyasy07/documentation/blob/main/FINAL%20REPORT.%20NUR%20SYAFIKA%20ALYA%20BINTI%20MOHD%20ZAMRI%20AZHAR.CDCS2666C.pdf' target='_blank' rel='noopener noreferrer' class='yt-desc-link'><img src='/icons/windows_vista/vista_sticky_notes.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> Final Report / Thesis</a></div>`,
        tech: 'Laravel 10 • MySQL • Bootstrap',
        image: '/images/slaces_logo.jpg',
        link: 'https://github.com/alyasy07/SLACESV1'
    },
    {
        id: 'oods',
        title: 'OODS',
        category: 'Systems',
        desc: 'Outlet Ordering Distribution System',
        fullDesc: `<p><strong>Problem & Solution:</strong><br/>To solve the issue of inefficiencies and inaccuracies in stock management that arose from the time-consuming process of manually filling out stock request forms and submitting them via messaging applications like WhatsApp, I developed the Outlet Ordering Distribution System (OODS) is an innovative, automated, and standardized platform that centralizes the stock ordering procedure and enables real-time management and tracking for both Headquarters (HQ) and outlet supervisors.</p>

<p><strong>System Analysis:</strong><br/>The development of the OODS followed a strict, systematic process, adhering to the principles of a formal System Development Life Cycle (SDLC). The project began with a thorough requirements definition, which was documented in the Software Requirements Specification (SRS). Subsequently, the system's architecture, design rationale, and data design were meticulously planned and documented in the Software Design Document (SDD). The systematic approach ensured the creation of a clear framework for implementation, with built-in provisions for rigorous testing against defined non-functional requirements to guarantee data integrity, consistency, and operational effectiveness.</p>

<p><strong>Key Technical Features:</strong><br/>
• Three-Layer Architectural Model: The system is based on a modular three-layer architecture, separating its components into the User Interface Layer, the Domain Layer, and the Data Access Layer to ensure high modularity, maintainability, and scalability.<br/>
• Role-Based Access Control (RBAC): The system features distinct interfaces for two user classes: HQ Admin (high privileges for stock management, approval, and delivery arrangement) and Outlet Supervisor (limited access for requesting and tracking stocks).<br/>
• Full Stock Control: HQ Admins have the ability to perform CRUD (Create, Read, Update, Delete) operations on stock items, ensuring efficient, centralized inventory management.<br/>
• Automated Ordering and Tracking: Outlet supervisors can request stocks by adding items to a cart and proceeding to checkout. The system also allows both users to monitor the status of orders (pending, rejected, approved) and track the delivery status.<br/>
• Database Management: The Outlet Ordering Distribution System employs MySQL version 8.0 as its Relational Database Management System (RDBMS) to store and manage all application data.</p>

<p>For a detailed look at the system architecture and testing procedures, please refer to the technical documentation attached below.</p>

<div style='margin-top: 15px;'><a href='https://github.com/alyasy07/OODSV30/blob/main/UPDATED_SRS_CDCS2664D_FIVERS%20(1).pdf' target='_blank' rel='noopener noreferrer' class='yt-desc-link'><img src='/icons/windows_vista/vista_sticky_notes.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> Software Requirements Specification (SRS)</a><a href='https://github.com/alyasy07/OODSV30/blob/main/ISP551%20SDD%20(FIVERS).pdf' target='_blank' rel='noopener noreferrer' class='yt-desc-link'><img src='/icons/windows_vista/vista_sticky_notes.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> Software Design Document (SDD)</a></div>`,
        tech: 'Java • PHP • MySQL',
        image: '/images/oods_logo.jpeg',
        link: 'https://github.com/alyasy07/OODSV30'
    },
    {
        id: 'recipe',
        title: 'Recipe Sharing',
        category: 'Systems',
        desc: 'Meal Planning Application',
        fullDesc: `<p><strong>Problem & Solution:</strong><br/>To solve the issue of people struggling with finding interesting recipes, planning balanced daily meals, and keeping track of their culinary repertoire, I developed a Recipe Sharing and Meal Planning Management System, a user-friendly, comprehensive platform that streamlines how people discover, collect, and organize recipes for their weekly meals.</p>

<p><strong>System Analysis:</strong><br/>The project development followed a clear planning process, evidenced by this detailed Storyboard document, which focused on defining objectives, functionalities, and the overall user experience before proceeding to implementation. The planning phase included detailing the Flow of the Application with a comprehensive flowchart, defining all necessary CRUD (Create, Read, Update, Delete) operations, and meticulously designing the database architecture. The team adopted a structured management approach, assigning dedicated roles including a Project Leader, Lead Developer, and Document Manager, ensuring a controlled and organized path toward the project's realization.</p>

<p><strong>Key Technical Features:</strong><br/>
• Core Functionalities: The platform's primary features are Recipe Sharing (for discovering and uploading new meals) and Meal Planning (for organizing weekly food intake).<br/>
• Meal Planning Customization: Users can easily simplify meal planning by choosing a date, and then creating, editing, and deleting planned meals across categories like Breakfast, Lunch, Snack, or Dinner.<br/>
• Full CRUD Operations: The system allows users to perform Create, Read, Update, and Delete actions on both their meal plans and their shared recipes, enhancing the user-friendly nature of the system.<br/>
• Personalized User Dashboard: Authenticated users can access a personalized dashboard to manage and track their recipes and save items to a Favourites page.<br/>
• Database Schema: The system's relational structure is based on 5 core tables: users, recipes, meal plan, ingredients, and instructions, which define the relationships for one user to create many recipes and many meal plans.</p>

<p>For a detailed look at the system planning and application flow, please refer to the technical documentation attached below.</p>

<div style='margin-top: 15px;'><a href='https://github.com/athirahmmn/Group_Project_CSC584/blob/master/CSC584_ORKED_STORYBOARD.pdf' target='_blank' rel='noopener noreferrer' class='yt-desc-link'><img src='/icons/windows_vista/vista_sticky_notes.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> Project Storyboard</a></div>`,
        tech: 'Java EE • SQL',
        image: '/images/recipe_logo.jpg',
        link: 'https://github.com/athirahmmn/Group_Project_CSC584'
    },
    {
        id: 'gims',
        title: 'GIMS',
        category: 'Systems',
        desc: 'GERIC Integrated Management System',
        fullDesc: `<p><strong>Problem & Solution:</strong><br/>GERIC faced inefficiencies in managing research documentation due to manual processes and scattered digital files, leading to delays and poor data visibility. The GERIC Integrated Management System (GIMS) was developed as a centralized, web-based platform to automate and streamline the management of grants, publications, and administrative records, improving accessibility, transparency, and operational efficiency.</p>

<p><strong>System Analyst Approach:</strong><br/>The project followed a structured System Development Life Cycle (SDLC), beginning with comprehensive requirement gathering and documentation via a detailed Software Requirements Specification (SRS). This was followed by system design, including Entity Relationship Diagrams (ERD) and Use Case Diagrams, before moving into implementation. The system was built using Laravel (PHP) and MySQL, with a focus on modularity and maintainability. Rigorous testing and validation were conducted to ensure alignment with user needs and functional specifications.</p>

<p><strong>Key Technical Features:</strong><br/>
• Role-based access control (Admin-only system with full CRUD privileges)<br/>
• Centralized dashboard with interactive charts and real-time statistics<br/>
• Comprehensive CRUD operations for grant applications, publications, and user management<br/>
• Data validation & security (client-side and server-side validation, CSRF protection, encrypted sessions)<br/>
• Responsive UI built with SB Admin 2 theme, compatible across modern browsers<br/>
• Modular architecture supporting future scalability and easy maintenance<br/>
• Audit logging for tracking administrative actions and system changes</p>

<p><strong>Copyright Notification:</strong><br/>This system has been officially registered under the Copyright Act 1987 (Notification Number: CRLY2025C13186). The copyright is owned by Universiti Malaysia Kelantan, recognizing the intellectual property and development efforts of the team.</p>

<p>For detailed system usage instructions, please refer to the user manual attached below.</p>

<div style='margin-top: 15px;'><a href='https://github.com/alyasy07/documentation/blob/main/User%20Manual%20GERIC%20Integrated%20Management%20System.pdf' target='_blank' rel='noopener noreferrer' class='yt-desc-link'><img src='/icons/windows_vista/vista_book_3.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> User Manual</a><a href='/images/copyright.png' target='_blank' rel='noopener noreferrer' class='yt-desc-link'><img src='/icons/windows_vista/vista_firewall_status_1.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> Certificate of Copyright</a></div>`,
        tech: 'Laravel • RBAC • System Architecture',
        image: '/images/gims_logo.jpeg',
        link: 'https://github.com/alyasy07/GERIC_RMSV8'
    },
    {
        id: 'elms',
        title: 'ELMS',
        category: 'Systems',
        desc: 'Employee Leave Management System',
        fullDesc: `<p><strong>Problem & Solution:</strong><br/>NIKAI NEGO TRADE faced inefficiencies in managing employee leave through manual processes, paper forms, and scattered records, leading to delays, errors, and administrative burden. The Employee Leave Management System (ELMS) was developed to automate and streamline leave applications, approvals, and tracking, improving accuracy, transparency, and operational efficiency.</p>

<p><strong>System Analyst Approach:</strong><br/>The project followed a structured System Development Life Cycle (SDLC), beginning with requirement gathering, feasibility studies, and detailed System Requirements Specification (SRS). Process and data modelling were conducted using Context Diagrams, Data Flow Diagrams (DFD), and Entity Relationship Diagrams (ERD). The system was built using PHP, HTML5, and MySQL, with a focus on user-friendly design and secure authentication. Rigorous testing including Unit, Integration, and System Testing was performed to ensure functionality and reliability before deployment.</p>

<p><strong>Key Technical Features:</strong><br/>
• Role-based access control (Admin and Employee roles with distinct permissions)<br/>
• Automated leave application workflow with email notifications to managers<br/>
• Real-time leave tracking and reporting (pending, approved, rejected, history)<br/>
• Secure user authentication with password recovery and data validation<br/>
• Dashboard with analytics for admins to monitor leave trends and employee data<br/>
• CRUD operations for managing employees, departments, and leave types<br/>
• Responsive and intuitive UI built with HTML5 and CSS<br/>
• Database integrity through normalized relational schema and secure queries</p>`,
        tech: 'PHP • MySQL',
        image: '/images/elms_logo.jpeg',
        link: 'https://github.com/alyasy07/ELMSV1'
    },
    {
        id: 'levee',
        title: 'Levée',
        category: 'UI/UX',
        desc: 'Fashion Recommendation App',
        fullDesc: `<p><strong>Problem & Solution:</strong><br/>Fashion enthusiasts and influencers struggle with fragmented shopping experiences, scattered inspiration, and limited monetization opportunities across platforms like Instagram and TikTok. Levée is a fashion recommendation application designed to centralize outfit discovery, affiliate marketing, and direct purchasing into a single, seamless platform. It connects influencers, affiliates, and shoppers, enabling curated outfit sharing, commission-based earnings, and one-click shopping to streamline fashion discovery and monetization.</p>

<p><strong>System Analyst & Project Management Approach:</strong><br/>As the Marketing Manager, I contributed to a comprehensive project lifecycle following SDLC and PMI standards. The project began with detailed market research and feasibility studies, followed by requirements gathering, financial analysis (NPV, ROI, Payback Period), and risk assessment. We developed a full Project Plan covering scope, schedule, budget, quality, communication, and change management. The system was designed with user-centric features, AI-powered recommendations, and affiliate link integration, supported by AWS cloud infrastructure and agile development methodologies.</p>

<p><strong>Key Technical & Business Features:</strong><br/>
• AI-powered personalized style feed based on user preferences and behavior<br/>
• Affiliate link integration for influencer monetization and commission tracking<br/>
• Outfit upload and tagging system with categorized browsing (casual, formal, streetwear, etc.)<br/>
• Seamless product redirection to external shopping platforms (Shopee, Zalora, etc.)<br/>
• Favorites and collections for personalized outfit saving<br/>
• Scalable cloud architecture using AWS for performance and reliability<br/>
• Market-driven UI/UX validated through surveys and user feedback<br/>
• Financial modeling with projected revenue of RM 321,600 by Year 3 and ROI of 37.6%<br/>
• Comprehensive project documentation including Gantt charts, WBS, and risk registers</p>

<p>For a detailed look at the project planning and business analysis, please refer to the documentation attached below.</p>

<div style='margin-top: 15px;'><a href='https://github.com/alyasy07/documentation/blob/main/PROJECT%20PLAN.pdf' target='_blank' rel='noopener noreferrer' class='yt-desc-link'><img src='/icons/windows_vista/vista_sticky_notes.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> Project Plan</a><a href='https://github.com/alyasy07/documentation/blob/main/BUSINESS%20CASE.pdf' target='_blank' rel='noopener noreferrer' class='yt-desc-link'><img src='/icons/windows_vista/vista_sticky_notes.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> Business Case</a></div>`,
        tech: 'Figma • UI/UX',
        image: '/images/levee_logo.jpeg',
        link: 'https://www.figma.com/proto/ktsdaRl9B2JUcRxPbWw9P3/ISP640---MIDDLE-FIDELITY--Copy-?node-id=0-1&t=LJ8eU3eSF4k5qBuQ-1'
    },
    {
        id: 'spendity',
        title: 'Spendity',
        category: 'UI/UX',
        desc: 'E-Wallet with Creative Savings',
        fullDesc: `<p><strong>Problem & Solution:</strong><br/>Many individuals students, employed, unemployed, and retired, struggle with overspending and poor saving habits, especially with the rise of cashless payments. Spendity is a mobile application designed to combine e-wallet functionality with integrated savings features, helping users track spending, set budgets, and automate savings to achieve financial stability.</p>

<p><strong>Human-Centered Design Approach:</strong><br/>The project followed a user-centered design (UCD) methodology, beginning with targeted user research via Google Forms to gather insights from a diverse demographic. We applied HCI principles such as cognitive load theory, usability heuristics, and context of use analysis to ensure the interface was intuitive, accessible, and secure. The design process prioritized user feedback integration, affordances, and clear visual feedback to enhance user trust and engagement.</p>

<p><strong>Key Features & Research Insights:</strong><br/>
• Automated savings plans tailored to user goals and spending patterns<br/>
• Real-time spending tracking with visual analytics (charts, graphs)<br/>
• Budgeting tools to prevent overspending and encourage mindful consumption<br/>
• Personalized financial insights based on user behavior and preferences<br/>
• Mobile-optimized design with biometric authentication for security<br/>
• User research findings highlighting widespread saving challenges across age and income groups<br/>
• Application of HCI theories: Usability Principles, Cognitive Load Theory, Feedback & Affordances</p>`,
        tech: 'Figma • FinTech',
        image: '/images/spendity_logo.jpeg',
        link: 'https://www.figma.com/proto/5PUTLsflRLjcolV5fI71yr/ICT551-MIDDLE-FIDELITY?node-id=0-1&t=BnPuGWVtPFdR9wxq-1'
    },
    {
        id: 'ric',
        title: 'RIC',
        category: 'Systems',
        desc: 'Research Ideation Canvas',
        fullDesc: `<p><strong>Problem & Solution:</strong><br/>The Research Ideation Canvas System (RICV1) was developed to streamline and support the creative and analytical processes in academic and professional research. By offering an interactive platform, RICV1 eliminates the inefficiency of manual ideation workflows and empowers users to structure, document, and progress their research ideas effectively.</p>

<p><strong>System Analyst Approach:</strong><br/>The development of RICV1 adhered strictly to the principles of the System Development Life Cycle (SDLC). Starting with thorough requirements gathering, this step ensured a clear understanding of end-user needs. Implementation was carried out using best coding practices, and the system was rigorously tested with User Acceptance Testing (UAT) to maintain high standards of functionality and minimize critical issues before its rollout.</p>

<p><strong>Key Technical Features:</strong><br/>
• Interactive Research Framework: Allows users to structure and expand ideas dynamically within the system.<br/>
• Role-based Access Control: Implements security layers, differentiating administrator capabilities and user privileges.<br/>
• Collaborative Ideation Support: Facilitates team-based research efforts through shared access and synchronized updates.<br/>
• Real-time Data Processing: Ensures seamless, instantaneous rendering of updates to support brainstorming and real-time adjustments.<br/>
• Compatibility with Visual Frameworks: Built with technologies like SCSS, Less, and CSS to ensure responsive and visually intuitive user interfaces.<br/>
• Template-driven Workflow: Leverages Blade templates to generate consistent outputs across the application.<br/>
• Scalable Extensibility: Provides modular support for future add-ons or additional research workflows.</p>`,
        tech: 'Laravel • Web Tool',
        image: '/images/ric_logo.jpeg',
        link: 'https://github.com/alyasy07/RICV1'
    },
    {
        id: 'lifespark',
        title: 'Life Spark',
        category: 'UI/UX',
        desc: 'Community Health Application',
        fullDesc: `<p><strong>Problem & Solution:</strong><br/>The Community Taman Tasik Shah Alam Seksyen 7 faced significant health and lifestyle challenges post-pandemic, including body shaming, weight gain, poor nutrition, lack of exercise time, pregnancy-related struggles, high BMI, fatigue, and low self-esteem. LifeSpark was conceptualized as a holistic health and wellness mobile application designed to provide personalized fitness plans, nutritional guidance, mental well-being support, and community engagement to help users adopt sustainable healthy lifestyles.</p>

<p><strong>Human-Centered Design & Research Approach:</strong><br/>The project followed a user-centered design process beginning with in-depth user research through persona development and affinity diagramming. We conducted qualitative interviews with five distinct user personas (students, working adults, pregnant women, etc.) to understand their daily routines, pain points, and motivations. Using SCAMPER methodology, we ideated innovative features such as:<br/>
• Food Scanner for calorie tracking (Modify)<br/>
• Sleep Tracking Widget (Eliminate)<br/>
• Personalized Workout & Coaching (Combine)<br/>
• Social Newsfeed for community support (Put to Other Uses)<br/>
• Medication & Motivation Reminders (Adapt)<br/><br/>
Usability testing was performed with real users, gathering feedback on system complexity, ease of use, confidence, and desired improvements, ensuring the final design was intuitive and met user needs.</p>

<p><strong>Key Features & Outcomes:</strong><br/>
• Personalized Workout Plans with level selection (Beginner/Intermediate/Advanced)<br/>
• Food Scanner & Calorie Intake Calculator using smartphone camera<br/>
• Sleep Tracking Widget with real-time insights<br/>
• Virtual Coaching & Live Sessions<br/>
• Medication & Motivation Reminders<br/>
• Community Newsfeed for sharing progress and support<br/>
• Weather-Integrated Outdoor Workout Suggestions<br/>
• User Feedback Integration leading to iterative design improvements<br/><br/>
The project successfully identified Physical Health and Body Image as the primary concern within the community and proposed a comprehensive digital wellness solution that addressed physical, nutritional, mental, and social health dimensions.</p>`,
        tech: 'Prototype • User Research',
        image: '/images/life_logo.jpg',
        link: '#' // No direct link in provided text except "View Project Photos" modal
    },
    {
        id: 'testing',
        title: 'Peer Testing',
        category: 'Systems',
        desc: 'Comprehensive System Testing',
        fullDesc: `<p><strong>Project Overview:</strong><br/>This project focuses on system testing rather than system development. As part of an academic requirement, each group was assigned another group's web system to evaluate through structured peer testing. My role involved analysing system behaviour, designing manual test cases, executing functional and usability testing, and documenting findings in a formal System Testing Document (STD).</p>

<p><strong>Role:</strong> System Tester / Peer Reviewer</p>

<p><strong>Responsibilities:</strong><br/>
• Designed manual test scenarios based on system flow<br/>
• Executed functional and usability testing<br/>
• Identified defects, edge cases, and UI issues<br/>
• Documented findings and recommendations in a System Testing Document (STD)</p>

<p><strong>Key Deliverables:</strong><br/>
• Comprehensive System Testing Document (STD)<br/>
• Detailed test case documentation with expected vs. actual results<br/>
• Bug reports with severity classifications<br/>
• Usability improvement recommendations<br/>
• Cross-functional testing across multiple browsers and devices</p>

<p>For detailed test cases and findings, please refer to the documentation attached below.</p>

<div style='margin-top: 15px;'><a href='https://github.com/alyasy07/documentation/blob/main/STD%20(BH%26CO%20IMS)_FIVERS.pdf' target='_blank' rel='noopener noreferrer' class='yt-desc-link'><img src='/icons/windows_vista/vista_sticky_notes.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> System Testing Document (STD)</a></div>`,
        tech: 'documentation • QA',
        image: '/images/testing.jpeg',
        link: 'https://github.com/alyasy07/documentation/blob/main/STD%20(BH%26CO%20IMS)_FIVERS.pdf'
    },
    {
        id: 'sentiment',
        title: 'Sentiment Analysis',
        category: 'AI/Data',
        desc: 'Roblox User Reviews',
        fullDesc: `Executive Summary:
This project involved a comprehensive sentiment analysis of Roblox user reviews from the Google Play Store to identify user satisfaction and common technical concerns. I executed the full data science lifecycle, from automated web scraping to deploying machine learning models for predictive analysis.

Technical Implementation:
• Data Scraping: Developed a Python script using the google-play-scraper library to extract 1,417 unique user reviews from the Google Play Store.
• Data Pre-processing: Utilized RapidMiner (AI Studio) to perform data cleaning, including duplicate removal and filtering missing values to ensure dataset reliability.
• NLP Pipeline: Implemented text mining techniques including Tokenization, Stopwords Removal, and Case Transformation to prepare raw text for analysis.
• Class Imbalance Handling: Applied SMOTE (Synthetic Minority Oversampling Technique) to balance the dataset, ensuring the model could accurately predict both positive and negative sentiments.

Machine Learning & Results:
• Model Comparison: Evaluated and compared three machine learning models: Naive Bayes, Random Forest, and Support Vector Machine (SVM).
• Top Performance: The SVM model achieved the highest accuracy of 82.93%, making it the primary model for predicting user sentiment trends.
• Business Insights: The analysis successfully identified key areas for improvement, specifically regarding app performance, safety risks, and in-app purchase satisfaction.

Key Technical Stack:
• Python (google-play-scraper) - Data Collection
• RapidMiner (AI Studio) - ML Pipeline & Processing
• SMOTE - Data Balancing
• Naive Bayes, Random Forest, SVM - Model Comparison

Outcome:
The project provides Roblox developers with actionable, data-driven insights into user sentiment patterns, enabling targeted improvements in app performance, user safety features, and monetization strategies.

<div style='margin-top: 20px;'><a href='https://www.figma.com/deck/z8k1ZbN4bbsd73bNMwrMoF/roblox-sentiment-analysis?node-id=1-223&t=YOtERLKQdIKz2WmI-1' target='_blank' class='yt-desc-link'><img src='/icons/windows_vista/vista_perf_center.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> View Evidence & Results</a></div>`,
        tech: 'Python • RapidMiner • SVM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roblox_player_icon_black.svg/800px-Roblox_player_icon_black.svg.png',
        link: 'https://www.figma.com/deck/z8k1ZbN4bbsd73bNMwrMoF/roblox-sentiment-analysis?node-id=1-223&t=YOtERLKQdIKz2WmI-1'
    },
    {
        id: 'focusgrow',
        title: 'FocusGrow',
        category: 'Systems',
        desc: 'Study Focus & Productivity',
        fullDesc: `Project Overview:
FocusGrow is a high-fidelity prototype study focus and productivity web application I built to practice front-end development skills and experiment with modern deployment workflows. This project emphasizes clean UI, responsive layout, and client-side JavaScript for interactivity, while also exploring CI/CD through Vercel deployment.

What I Built:
A study focus and productivity web app demonstrating:
• Responsive UI built with HTML and CSS
• Interactive client-side logic in JavaScript for focus sessions and task management
• Audio integration for study focus features (my first time integrating audio in a project)
• Small backend/automation experimentation (Python / Batchfile contributions)
• Deployment and hosting experiments using Vercel
• Features to help users maintain focus during study sessions

Tech Stack (Repository Language Composition):
• JavaScript - 42% (main interactive logic)
• CSS - 33% (visuals & responsive layout)
• HTML - 23.1% (structure & accessibility)
• Python - 1.7% (scripts/utilities)
• Batchfile - 0.2% (automation)

What I Practiced & Learned:
• Building a responsive and accessible UI with semantic HTML & CSS
• Managing state and UI interactions in vanilla JavaScript
• Integrating audio elements for enhanced user experience
• Debugging and iterating quickly through local dev to live deployment
• Deploying static/web projects on Vercel and troubleshooting deployment configs
• Basic build/automation scripting using Python / Batchfile

Why It's in My Portfolio:
• Demonstrates practical front-end skills and an understanding of the full flow from local development to a live deployment
• Shows willingness to experiment with hosting and CI/CD (Vercel)
• First hands-on experience with audio integration in web development
• A focused, self-contained project good for interview walkthroughs or quick demos

Project Status:
This is a high-fidelity prototype created for learning and skill development purposes. The project showcases my ability to build functional, responsive web applications and deploy them to production environments.

Next Steps / Potential Improvements:
• Add unit / integration tests for core UI logic
• Add accessibility refinements (aria attributes, keyboard navigation)
• Add persistent storage (localStorage or small backend) for sessions/tasks
• Improve CI/CD: automatic preview deployments and testing on PRs
• Add analytics or insights for user sessions

<div style='margin-top: 20px;'><a href='https://focus-grow-eta.vercel.app' target='_blank' class='yt-desc-link'><img src='/icons/windows_vista/vista_netcenter.ico' style='width:16px; margin-right:5px; vertical-align:middle;' /> View Live Demo</a></div>`,
        tech: 'React • Vercel',
        image: null, // No image in assets, will use icon
        icon: 'clock', image: '/icons/windows_vista/vista_cal_1.ico',
        link: 'https://focus-grow-eta.vercel.app'
    }
];

// Internal Component for the "About Me" Profile Explorer
const ProfileExplorer = ({ onOpenWindow }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [gericTab, setGericTab] = useState('overview');

    const sidebarItems = [
        { id: 'overview', label: 'Overview', icon: '/icons/Windows XP Icons/My Computer.png' },
        { id: 'education', label: 'Education', icon: '/icons/Windows XP Icons/Help and Support.png' },
        { id: 'experience', label: 'Experience', icon: '/icons/Windows XP Icons/Briefcase.png' },
        { id: 'skills', label: 'Skills & Tools', icon: '/icons/Windows XP Icons/Control Panel.png' },
        { id: 'certificates', label: 'Certificates', icon: '/icons/Windows XP Icons/Certificate.png' }
    ];

    return (
        <div className="xp-folder-container">
            <div className="xp-sidebar">
                <div className="xp-task-group">
                    <div className="xp-task-header">
                        <span className="task-header-title">My Profile</span>
                        <button className="task-toggle">^</button>
                    </div>
                    <div className="xp-task-content">
                        {sidebarItems.map(item => (
                            <div
                                key={item.id}
                                className={`task-link ${activeTab === item.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(item.id)}
                                style={{ cursor: 'pointer', background: activeTab === item.id ? '#dcebfd' : 'transparent' }}
                            >
                                <img src={item.icon} alt={item.label} />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="xp-task-group">
                    <div className="xp-task-header">
                        <span className="task-header-title">Other Places</span>
                        <button className="task-toggle">^</button>
                    </div>
                    <div className="xp-task-content">
                        <div className="task-link">
                            <img src="/icons/windows_vista/vista_book_1.ico" alt="" />
                            <span>My Documents</span>
                        </div>
                        <div className="task-link">
                            <img src="/icons/windows_vista/vista_netcenter.ico" alt="" />
                            <span>My Network</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="xp-main-content" style={{ padding: '20px' }}>
                {activeTab === 'overview' && (
                    <div className="profile-section">
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ width: '60px' }}>
                                <img src="/icons/windows_vista/vista_pc_1.ico" alt="Profile" style={{ width: '100%' }} />
                            </div>
                            <div>
                                <h2 style={{ marginTop: 0, color: '#003399' }}>Nur Syafika Alya</h2>
                                <h4 style={{ marginTop: '5px', color: '#555' }}>Information Systems Engineering Student</h4>
                                <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                                    Hi, I’m Alya a System Engineering graduate with a genuine passion for web development and creating meaningful digital experiences. I enjoy building things from scratch, learning how systems work behind the scenes, and slowly shaping ideas into something structured, usable, and satisfying to interact with.
                                </p>
                                <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                                    I’m especially drawn to the process of problem-solving and continuous improvement. I like understanding why something works, not just making it work. Whether it’s refining a layout, fixing logic issues, or improving user flow, I enjoy paying attention to details and making things feel polished and intentional.
                                </p>
                                <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                                    One of my strengths is independence. I’m comfortable learning new tools on my own, adapting quickly, and pushing through challenges even when things get complex. I tend to be very focused when I work, and once I’m invested in a task, I put in consistent effort to make sure the outcome meets my own standards.
                                </p>
                                <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                                    I also care a lot about user experience. To me, good development is not just about clean code, but also about how users feel when they interact with a product. I enjoy exploring modern frontend technologies and design trends, and I’m always curious about how small design choices can improve usability and clarity.
                                </p>
                                <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                                    Overall, I’m motivated to keep growing as a developer who values both technical strength and thoughtful design. I’m excited about opportunities that allow me to learn, contribute, and build products that are simple, useful, and impactful.
                                </p>
                                <p>Current Location: Kota Bharu, Kelantan • Malaysia</p>
                                <div style={{ marginTop: '20px', padding: '10px', background: '#ffe', border: '1px solid #ddd' }}>
                                    <strong>Quick Stats:</strong>
                                    <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
                                        <li>Total Projects: 12+</li>
                                        <li>Total Certificates: 4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'education' && (
                    <div className="profile-section">
                        <h3 className="section-title">Academic History</h3>
                        <hr />
                        <div className="xp-card">
                            <div className="xp-card-icon"><img src="/icons/windows_vista/vista_book_2.ico" alt="Uni" /></div>
                            <div className="xp-card-content">
                                <h4>Bachelor of Information Systems (Hons.)</h4>
                                <h5>Information Systems Engineering</h5>
                                <p>UiTM Shah Alam • Oct 2023 - Feb 2026</p>
                            </div>
                        </div>
                        <div className="xp-card">
                            <div className="xp-card-icon"><img src="/icons/windows_vista/vista_firewall_status_2.ico" alt="Uni" /></div>
                            <div className="xp-card-content">
                                <h4>Diploma in Computer Science</h4>
                                <p>UiTM Machang • Oct 2020 - March 2022</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'experience' && (
                    <div className="profile-section">
                        <h3 className="section-title">Work Experience</h3>
                        <hr />
                        <div className="xp-card">
                            <div className="xp-card-icon"><img src="/icons/utilities/explorer.ico" alt="Job" /></div>
                            <div className="xp-card-content">
                                <h4>Software Development Intern</h4>
                                <h5>Global Entrepreneurship Research and Innovation Center (GERIC), UMK</h5>
                                <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '8px' }}>September 2025 – January 2026 | Pengkalan Chepa, Kelantan</p>
                                <ul>
                                    <li>Architected and developed the GERIC Integrated Management System (GIMS) v12 using Laravel with myIPO copyright registration.</li>
                                    <li>Designed branding materials for AENC, ICERI 2026, and executive presentations for Vice Chancellor.</li>
                                    <li>Served as editor for NPC 2026 e-Proceeding book and designed AKKPT 2025 publication.</li>
                                    <li>Managed GERIC social media and website content, coordinated BUSINESS CASE STUDY IDEA 2025 competition.</li>
                                </ul>
                                <p style={{ fontSize: '11px', color: '#0054E3', marginTop: '5px' }}>
                                    <strong>Skills:</strong> Laravel, Full-Stack Development, System Architecture, Graphic Design, Copyright (myIPO)
                                </p>
                                <button className="xp-button" style={{ marginTop: '10px', width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center' }} onClick={() => setActiveTab('geric')}>
                                    <img src="/icons/windows_vista/vista_sticky_notes.ico" style={{ width: '16px', marginRight: '5px' }} />
                                    View Complete Internship Details
                                </button>
                            </div>
                        </div>

                        <div className="xp-card">
                            <div className="xp-card-icon"><img src="/icons/windows_vista/vista_collab.ico" alt="Job" /></div>
                            <div className="xp-card-content">
                                <h4>Digital Product Seller</h4>
                                <h5>Independent</h5>
                                <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '8px' }}>September 2025 – Present</p>
                                <ul>
                                    <li>Managed end-to-end sales operations for digital products, optimizing listings for maximum visibility.</li>
                                    <li>Maintained a 100% positive rating across 100+ transactions through efficient service delivery.</li>
                                    <li>Streamlined customer support processes to ensure rapid response times and user satisfaction.</li>
                                </ul>
                                <p style={{ fontSize: '11px', color: '#0054E3', marginTop: '5px' }}>
                                    <strong>Skills:</strong> Digital Sales, E-Commerce, Customer Service, Product Management
                                </p>
                            </div>
                        </div>

                        <div className="xp-card">
                            <div className="xp-card-icon"><img src="/icons/windows_vista/vista_netcenter.ico" alt="Job" /></div>
                            <div className="xp-card-content">
                                <h4>Affiliate Content Creator</h4>
                                <h5>Independent</h5>
                                <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '8px' }}>November 2023 – June 2025</p>
                                <ul>
                                    <li>Built and engaged a community of 3,700+ subscribers through curated content strategies.</li>
                                    <li>Designed visual assets and moodboards to drive affiliate marketing conversions.</li>
                                    <li>Hosted live interactive sessions to promote products and increase audience engagement.</li>
                                </ul>
                                <p style={{ fontSize: '11px', color: '#0054E3', marginTop: '5px' }}>
                                    <strong>Skills:</strong> Content Creation, Affiliate Marketing, Community Building, Graphic Design, Telegram Channel
                                </p>
                            </div>
                        </div>

                        <div className="xp-card">
                            <div className="xp-card-icon"><img src="/icons/windows_vista/vista_firewall_status_2.ico" alt="Job" /></div>
                            <div className="xp-card-content">
                                <h4>Design & Development Intern</h4>
                                <h5>Nikai Nego Trade, Kota Bharu, Kelantan</h5>
                                <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '8px' }}>October 2022 – March 2023</p>
                                <ul>
                                    <li>Developed an Employee Leave Management System to automate requests and eliminate manual tracking errors.</li>
                                    <li>Designed branding materials including logos and signage using Adobe Illustrator for diverse client needs.</li>
                                    <li>Managed client relations and order processing, ensuring timely delivery and customer satisfaction.</li>
                                    <li>Maintained accurate financial records and invoice management systems.</li>
                                </ul>
                                <p style={{ fontSize: '11px', color: '#0054E3', marginTop: '5px' }}>
                                    <strong>Skills:</strong> System Development, Adobe Illustrator, Graphic Design, Client Management
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'geric' && (
                    <div className="profile-section" style={{ padding: 0 }}>
                        <div className="geric-header-bar">
                            <div className="geric-header-title">
                                <img src="/icons/windows_vista/vista_sticky_notes.ico" style={{ width: 16 }} />
                                FEATURED INTERNSHIP: GERIC UMK
                            </div>
                            <button className="xp-back-btn" onClick={() => setActiveTab('experience')}>Back to List</button>
                        </div>

                        <div className="xp-tabs">
                            {['overview', 'system', 'design', 'publication', 'evaluation'].map(tab => (
                                <div
                                    key={tab}
                                    className={`xp-tab-item ${gericTab === tab ? 'active' : ''}`}
                                    onClick={() => setGericTab(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </div>
                            ))}
                        </div>

                        <div className="xp-tab-content">
                            {gericTab === 'overview' && (
                                <>
                                    <div className="geric-info-grid">
                                        <div className="geric-info-item">
                                            <label>Role</label>
                                            <span>Software Development Intern</span>
                                        </div>
                                        <div className="geric-info-item">
                                            <label>Organization</label>
                                            <span>GERIC, Universiti Malaysia Kelantan (UMK)</span>
                                            <div style={{ fontSize: 10, color: '#666' }}>Global Entrepreneurship Research and Innovation Center</div>
                                        </div>
                                        <div className="geric-info-item">
                                            <label>Duration & Location</label>
                                            <span>Sept 2025 – Jan 2026</span>
                                            <div style={{ fontSize: 10, color: '#666' }}>Pengkalan Chepa, Kelantan</div>
                                        </div>
                                        <div className="geric-info-item">
                                            <label>Key Achievement</label>
                                            <span style={{ color: '#003399' }}>Developed GIMS v12 & Secured myIPO Copyright</span>
                                        </div>
                                    </div>

                                    <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: 5, color: '#003399' }}>About The Organization</h4>
                                    <p style={{ fontSize: 12, lineHeight: 1.5 }}>
                                        GERIC is a research center dedicated to fostering entrepreneurship, innovation, and research excellence.
                                        During my 20-week internship, I was entrusted with significant projects that combined
                                        <strong> software development, graphic design, and operational support</strong>.
                                    </p>

                                    <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: 5, color: '#003399', marginTop: 20 }}>Key Contributions</h4>
                                    <ul className="xp-list-check">
                                        <li><strong>System Development:</strong> Built GIMS v12 with Laravel, MySQL, and RBAC architecture.</li>
                                        <li><strong>IP Registration:</strong> Secured myIPO copyright (CRLY2025C13186).</li>
                                        <li><strong>Brand Design:</strong> Created logos for AENC and ICERI 2026.</li>
                                        <li><strong>Publication Editor:</strong> Edited NPC 2026 e-Proceeding book.</li>
                                    </ul>
                                </>
                            )}

                            {gericTab === 'system' && (
                                <>
                                    <div className="xp-card" style={{ background: '#f9f9f9' }}>
                                        <div className="xp-card-icon"><img src="/icons/windows_vista/vista_console.ico" alt="GIMS" /></div>
                                        <div className="xp-card-content">
                                            <h4 style={{ fontSize: 16 }}>GIMS v12 (GERIC Integrated Management System)</h4>
                                            <p>Replaced legacy XAMPP setup with a modern, secure architecture to solve document tracking and reporting issues.</p>
                                        </div>
                                    </div>

                                    <div className="geric-info-grid" style={{ marginTop: 20 }}>
                                        <div className="geric-info-item">
                                            <label>Framework</label>
                                            <span>Laravel (PHP) + Modular Architecture</span>
                                        </div>
                                        <div className="geric-info-item">
                                            <label>Database</label>
                                            <span>MySQL 8.0 (ERD Designed)</span>
                                        </div>
                                        <div className="geric-info-item">
                                            <label>Security</label>
                                            <span>Role-Based Access Control (RBAC)</span>
                                        </div>
                                        <div className="geric-info-item">
                                            <label>Testing</label>
                                            <span>Formal UAT & Test Cases</span>
                                        </div>
                                    </div>

                                    <h5 style={{ color: '#444' }}>Process Modeling & Documentation</h5>
                                    <ul className="xp-list-check">
                                        <li>Created Level-0 Context Diagrams and Use Case Diagrams.</li>
                                        <li>Authored Software Requirements Specification (SRS) and User Manual.</li>
                                        <li>Implemented Three-Layer Model (UI, Domain, Data Access).</li>
                                    </ul>

                                    <div style={{ marginTop: 20, padding: 15, border: '1px solid #D0D0BF', borderRadius: 3, position: 'relative', background: '#F5F5F3' }}>
                                        <div style={{ position: 'absolute', top: -8, left: 10, background: '#F5F5F3', padding: '0 5px', fontSize: 11, color: '#003399' }}>
                                            Intellectual Property
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                            <img src="/icons/Windows XP Icons/Certificate.png" style={{ width: 32, height: 32 }} alt="Certificate" />
                                            <div>
                                                <div style={{ fontFamily: 'Tahoma, sans-serif', fontWeight: 'bold', fontSize: 12, color: '#333', marginBottom: 2 }}>
                                                    myIPO Copyright Registered
                                                </div>
                                                <div style={{ fontFamily: 'Tahoma, sans-serif', fontSize: 11, color: '#555' }}>
                                                    Certificate No: CRLY2025C13186
                                                </div>
                                                <div style={{ fontFamily: 'Tahoma, sans-serif', fontSize: 11, color: '#888', fontStyle: 'italic', marginTop: 2 }}>
                                                    Official protection as institutional asset.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {gericTab === 'design' && (
                                <>
                                    <h4 style={{ color: '#003399', borderBottom: '1px solid #eee', paddingBottom: 5 }}>Strategic Visual Communication</h4>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, marginTop: 15 }}>
                                        <div className="xp-publication-card" style={{ textAlign: 'center' }}>
                                            <div style={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10, background: '#f5f5f5', borderRadius: 4 }}>
                                                <img src="/images/AENC.png" alt="AENC Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                            </div>
                                            <h4>AENC Branding</h4>
                                            <p style={{ fontSize: 11 }}>ASEAN Entrepreneurship Network Council</p>
                                            <p>Conceptualized and designed the logo to establish regional brand identity.</p>
                                        </div>
                                        <div className="xp-publication-card" style={{ textAlign: 'center' }}>
                                            <div style={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10, background: '#f5f5f5', borderRadius: 4 }}>
                                                <img src="/images/ICERI.png" alt="ICERI Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                            </div>
                                            <h4>ICERI 2026 Logo</h4>
                                            <p style={{ fontSize: 11 }}>Intl. Conference on Entrepreneurship</p>
                                            <p>Designed the official conference logo.</p>
                                        </div>
                                    </div>

                                    <h4 style={{ marginTop: 20, color: '#003399' }}>Executive Presentations</h4>
                                    <p>Developed high-impact decks for the Vice Chancellor and strategic workshops regarding the 2026–2030 GERIC Roadmap.</p>

                                    <div className="geric-info-grid" style={{ marginTop: 20 }}>
                                        <div className="geric-info-item">
                                            <label>Tools Used</label>
                                            <span>Affinity Designer, Canva</span>
                                        </div>
                                        <div className="geric-info-item">
                                            <label>Operational Support</label>
                                            <span>Social Media Management & Web Content</span>
                                        </div>
                                    </div>
                                </>
                            )}

                            {gericTab === 'publication' && (
                                <>
                                    <h4 style={{ color: '#003399' }}>Publication & Editorial Work</h4>

                                    <div className="xp-publication-card">
                                        <h4>NPC 2026 e-Proceeding Editor</h4>
                                        <p>Served as editor and layout designer for the National Postgraduate Conference 2026 e-Proceeding book.</p>
                                        <div style={{ marginTop: 5, fontSize: 11, color: '#666' }}>
                                            <strong>Workflow:</strong> Affinity Designer (Layout) + Microsoft Word (Templates)
                                        </div>
                                    </div>

                                    <div className="xp-publication-card">
                                        <h4>AKKPT 2025 Book Design</h4>
                                        <p>Transformed dense documentation into a professional, user-friendly format enhancing readability.</p>
                                        <div style={{ marginTop: 5, fontSize: 11, color: '#666' }}>
                                            <strong>Focus:</strong> Editorial Design, Typography, Visual Layouts
                                        </div>
                                    </div>

                                    <h5 style={{ marginTop: 20 }}>Documentation Produced</h5>
                                    <ul className="xp-list-check" style={{ fontSize: 12 }}>
                                        <li>Software Requirements Specification (SRS) for GIMS v12</li>
                                        <li>User Manual for GIMS v12</li>
                                        <li>UAT Test Cases and Reports</li>
                                        <li>GERIC Roadmap 2026-2030 Presentation Materials</li>
                                    </ul>
                                </>
                            )}

                            {gericTab === 'evaluation' && (
                                <>
                                    <div style={{ textAlign: 'center', padding: 20, background: '#f9f9f9', marginBottom: 20 }}>
                                        <h3 style={{ color: '#003399', margin: 0 }}>Supervisor Evaluation</h3>
                                        <div style={{ fontSize: 32, fontWeight: 'bold', color: '#4CAF50', margin: '10px 0' }}>5 / 5</div>
                                        <div style={{ fontStyle: 'italic', maxWidth: '400px', margin: '0 auto' }}>
                                            "She has the potential to be a great employee. She is self-independent and has excellent ideas."
                                        </div>
                                        <div style={{ marginTop: 10, fontWeight: 'bold', fontSize: 12 }}>
                                            — Prof. Madya Dr. Roslizawati Binti Che Aziz, Director of GERIC
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                                        <div>
                                            <h5 style={{ borderBottom: '2px solid #ddd' }}>Interpersonal Skills</h5>
                                            <table className="xp-score-table">
                                                <tbody>
                                                    <tr><td>Relationship Management</td><td><span className="xp-score-badge">5/5</span></td></tr>
                                                    <tr><td>Responsibility</td><td><span className="xp-score-badge">5/5</span></td></tr>
                                                    <tr><td>Collaboration</td><td><span className="xp-score-badge">5/5</span></td></tr>
                                                    <tr><td>Contribution</td><td><span className="xp-score-badge">5/5</span></td></tr>
                                                    <tr><td>Communication</td><td><span className="xp-score-badge">4/5</span></td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <h5 style={{ borderBottom: '2px solid #ddd' }}>Personal Skills</h5>
                                            <table className="xp-score-table">
                                                <tbody>
                                                    <tr><td>Self-Commitment</td><td><span className="xp-score-badge">5/5</span></td></tr>
                                                    <tr><td>Creativity</td><td><span className="xp-score-badge">5/5</span></td></tr>
                                                    <tr><td>Professionalism</td><td><span className="xp-score-badge">5/5</span></td></tr>
                                                    <tr><td>Intellectual Dev</td><td><span className="xp-score-badge">5/5</span></td></tr>
                                                    <tr><td>Independent Learning</td><td><span className="xp-score-badge">4/5</span></td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: 20, fontSize: 12, lineHeight: 1.5 }}>
                                        <strong>Key Technical Feedback:</strong> My work was described as "well-designed" and collaborative. I was praised for taking the initiative to update the SRS and sustain the project beyond the internship scope.
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'skills' && (
                    <div className="profile-section">
                        <h3 className="section-title">Technical Expertise</h3>
                        <hr />
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>

                            {/* Programming */}
                            <div className="xp-card" style={{ marginBottom: 0, alignItems: 'flex-start' }}>
                                <div className="xp-card-icon" style={{ marginTop: '5px' }}>
                                    <img src="/icons/windows_vista/vista_console.ico" alt="Code" style={{ width: '32px', height: '32px' }} />
                                </div>
                                <div className="xp-card-content">
                                    <h4 style={{ marginBottom: '5px' }}>Programming</h4>
                                    <h5 style={{ fontWeight: 'normal', color: '#666', marginBottom: '8px' }}>Languages & Frameworks</h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                        {['PHP', 'Laravel', 'JavaScript', 'Java', 'C++', 'HTML', 'CSS', 'MVC', 'Blade'].map(s => (
                                            <span key={s} style={{ background: '#f4f4f4', border: '1px solid #dcdcdc', borderRadius: '3px', padding: '2px 8px', fontSize: '11px' }}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Database & Tools */}
                            <div className="xp-card" style={{ marginBottom: 0, alignItems: 'flex-start' }}>
                                <div className="xp-card-icon" style={{ marginTop: '5px' }}>
                                    <img src="/icons/windows_vista/vista_perf_center.ico" alt="DB" style={{ width: '32px', height: '32px' }} />
                                </div>
                                <div className="xp-card-content">
                                    <h4 style={{ marginBottom: '5px' }}>Database & Tools</h4>
                                    <h5 style={{ fontWeight: 'normal', color: '#666', marginBottom: '8px' }}>Data Management & Dev Tools</h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                        {['MySQL', 'phpMyAdmin', 'Oracle SQL', 'MongoDB', 'GitHub', 'VS Code', 'Trello'].map(s => (
                                            <span key={s} style={{ background: '#f4f4f4', border: '1px solid #dcdcdc', borderRadius: '3px', padding: '2px 8px', fontSize: '11px' }}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Design & Creative */}
                            <div className="xp-card" style={{ marginBottom: 0, alignItems: 'flex-start' }}>
                                <div className="xp-card-icon" style={{ marginTop: '5px' }}>
                                    <img src="/icons/windows_vista/vista_photo_gallery.ico" alt="Design" style={{ width: '32px', height: '32px' }} />
                                </div>
                                <div className="xp-card-content">
                                    <h4 style={{ marginBottom: '5px' }}>Design & Creative</h4>
                                    <h5 style={{ fontWeight: 'normal', color: '#666', marginBottom: '8px' }}>UI/UX & Graphic Design</h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                        {['Figma', 'Adobe Illustrator', 'Affinity Designer', 'Canva', 'StarUML', 'Draw.io'].map(s => (
                                            <span key={s} style={{ background: '#f4f4f4', border: '1px solid #dcdcdc', borderRadius: '3px', padding: '2px 8px', fontSize: '11px' }}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* AI & Analytics */}
                            <div className="xp-card" style={{ marginBottom: 0, alignItems: 'flex-start' }}>
                                <div className="xp-card-icon" style={{ marginTop: '5px' }}>
                                    <img src="/icons/windows_vista/vista_search_globe.ico" alt="AI" style={{ width: '32px', height: '32px' }} />
                                </div>
                                <div className="xp-card-content">
                                    <h4 style={{ marginBottom: '5px' }}>AI & Analytics</h4>
                                    <h5 style={{ fontWeight: 'normal', color: '#666', marginBottom: '8px' }}>Machine Learning & Data</h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                        {['Weka', 'AI Studio'].map(s => (
                                            <span key={s} style={{ background: '#f4f4f4', border: '1px solid #dcdcdc', borderRadius: '3px', padding: '2px 8px', fontSize: '11px' }}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Methodologies */}
                            <div className="xp-card" style={{ marginBottom: 0, alignItems: 'flex-start' }}>
                                <div className="xp-card-icon" style={{ marginTop: '5px' }}>
                                    <img src="/icons/windows_vista/vista_book_3.ico" alt="Docs" style={{ width: '32px', height: '32px' }} />
                                </div>
                                <div className="xp-card-content">
                                    <h4 style={{ marginBottom: '5px' }}>Methodologies</h4>
                                    <h5 style={{ fontWeight: 'normal', color: '#666', marginBottom: '8px' }}>Dev Practices & Writing</h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                        {['Waterfall', 'Requirement Analysis', 'System Design', '3-Layer Arch', 'Modular Design', 'ERD', 'Use Case Diagrams', 'Flowcharts', 'Gantt Charts', 'SRS', 'SDD', 'User Manuals', 'Tech Reports', 'UAT', 'Test Cases'].map(s => (
                                            <span key={s} style={{ background: '#f4f4f4', border: '1px solid #dcdcdc', borderRadius: '3px', padding: '2px 8px', fontSize: '11px' }}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Professional Skills */}
                            <div className="xp-card" style={{ marginBottom: 0, alignItems: 'flex-start' }}>
                                <div className="xp-card-icon" style={{ marginTop: '5px' }}>
                                    <img src="/icons/windows_vista/vista_collab.ico" alt="Pro" style={{ width: '32px', height: '32px' }} />
                                </div>
                                <div className="xp-card-content">
                                    <h4 style={{ marginBottom: '5px' }}>Professional Skills</h4>
                                    <h5 style={{ fontWeight: 'normal', color: '#666', marginBottom: '8px' }}>Communication & Management</h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                        {['Stakeholder Interviews', 'Timeline Management', 'Cross-functional Teams', 'Process Optimization', 'Risk Assessment'].map(s => (
                                            <span key={s} style={{ background: '#f4f4f4', border: '1px solid #dcdcdc', borderRadius: '3px', padding: '2px 8px', fontSize: '11px' }}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="xp-card" style={{ marginBottom: 0, alignItems: 'flex-start' }}>
                                <div className="xp-card-icon" style={{ marginTop: '5px' }}>
                                    <img src="/icons/windows_vista/vista_accessibility.ico" alt="Lang" style={{ width: '32px', height: '32px' }} />
                                </div>
                                <div className="xp-card-content">
                                    <h4 style={{ marginBottom: '5px' }}>Languages</h4>
                                    <h5 style={{ fontWeight: 'normal', color: '#666', marginBottom: '8px' }}>Communication Proficiency</h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                        {['Malay (Native)', 'English (Fluent)', 'French (Beginner)'].map(s => (
                                            <span key={s} style={{ background: '#f4f4f4', border: '1px solid #dcdcdc', borderRadius: '3px', padding: '2px 8px', fontSize: '11px' }}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {activeTab === 'certificates' && (
                    <div className="profile-section">
                        <h3 className="section-title">Certifications</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                            {/* IoT */}
                            <div className="xp-card" style={{ marginBottom: 0 }}>
                                <div className="xp-card-icon">
                                    <img src="/images/cisco.jpeg" alt="Cert" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '3px', border: '1px solid #ddd' }} />
                                </div>
                                <div className="xp-card-content" style={{ flex: 1 }}>
                                    <div style={{ float: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <span style={{ background: '#4CAF50', color: 'white', padding: '2px 6px', borderRadius: '3px', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                            VERIFIED <span style={{ fontSize: '10px' }}>✓</span>
                                        </span>
                                        <button className="xp-button" onClick={() => onOpenWindow({ title: 'IoT Certificate.jpg', content: 'image-viewer', width: 800, height: 600, data: { image: '/images/cisco.jpeg', title: 'Introduction to IoT' } })} style={{ marginTop: '5px', fontSize: '11px', padding: '3px 8px' }}>View Certificate</button>
                                    </div>
                                    <h4 style={{ marginBottom: '2px', color: '#000' }}>Introduction to Internet of Things (IoT)</h4>
                                    <h5 style={{ fontWeight: 'normal', color: '#555', marginBottom: '2px' }}>Cisco Networking Academy</h5>
                                    <p style={{ fontSize: '11px', color: '#888' }}>2025</p>
                                </div>
                            </div>

                            {/* Google UX */}
                            <div className="xp-card" style={{ marginBottom: 0 }}>
                                <div className="xp-card-icon">
                                    <img src="/images/google ux design.jpeg" alt="Cert" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '3px', border: '1px solid #ddd' }} />
                                </div>
                                <div className="xp-card-content" style={{ flex: 1 }}>
                                    <div style={{ float: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <span style={{ background: '#4CAF50', color: 'white', padding: '2px 6px', borderRadius: '3px', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                            VERIFIED <span style={{ fontSize: '10px' }}>✓</span>
                                        </span>
                                        <button className="xp-button" onClick={() => onOpenWindow({ title: 'Google UX.crt', content: 'image-viewer', width: 800, height: 600, data: { image: '/images/google ux design.jpeg', title: 'Google UX Design' } })} style={{ marginTop: '5px', fontSize: '11px', padding: '3px 8px' }}>View Certificate</button>
                                    </div>
                                    <h4 style={{ marginBottom: '2px', color: '#000' }}>Google User Experience (UX) Design Specialization</h4>
                                    <h5 style={{ fontWeight: 'normal', color: '#555', marginBottom: '2px' }}>Coursera</h5>
                                    <p style={{ fontSize: '11px', color: '#888' }}>2025 • Credential ID: GE2YUNPNWM65</p>
                                </div>
                            </div>

                            {/* Data Analysis */}
                            <div className="xp-card" style={{ marginBottom: 0 }}>
                                <div className="xp-card-icon">
                                    <img src="/images/data analysis.jpg" alt="Cert" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '3px', border: '1px solid #ddd' }} />
                                </div>
                                <div className="xp-card-content" style={{ flex: 1 }}>
                                    <div style={{ float: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <span style={{ background: '#4CAF50', color: 'white', padding: '2px 6px', borderRadius: '3px', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                            VERIFIED <span style={{ fontSize: '10px' }}>✓</span>
                                        </span>
                                        <button className="xp-button" onClick={() => onOpenWindow({ title: 'Data Analysis.crt', content: 'image-viewer', width: 800, height: 600, data: { image: '/images/data analysis.jpg', title: 'Data Analysis' } })} style={{ marginTop: '5px', fontSize: '11px', padding: '3px 8px' }}>View Certificate</button>
                                    </div>
                                    <h4 style={{ marginBottom: '2px', color: '#000' }}>Career Essentials in Data Analysis</h4>
                                    <h5 style={{ fontWeight: 'normal', color: '#555', marginBottom: '2px' }}>Microsoft and LinkedIn</h5>
                                    <p style={{ fontSize: '11px', color: '#888' }}>December 2025</p>
                                </div>
                            </div>

                            {/* MyIPO */}
                            <div className="xp-card" style={{ marginBottom: 0 }}>
                                <div className="xp-card-icon">
                                    <img src="/images/copyright.png" alt="Cert" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '3px', border: '1px solid #ddd' }} />
                                </div>
                                <div className="xp-card-content" style={{ flex: 1 }}>
                                    <div style={{ float: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <span style={{ background: '#4CAF50', color: 'white', padding: '2px 6px', borderRadius: '3px', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                            VERIFIED <span style={{ fontSize: '10px' }}>✓</span>
                                        </span>
                                        <button className="xp-button" onClick={() => onOpenWindow({ title: 'myIPO Copyright.crt', content: 'image-viewer', width: 800, height: 600, data: { image: '/images/copyright.png', title: 'Copyright Registration' } })} style={{ marginTop: '5px', fontSize: '11px', padding: '3px 8px' }}>View Certificate</button>
                                    </div>
                                    <h4 style={{ marginBottom: '2px', color: '#000' }}>Certificate of Notification of Copyright</h4>
                                    <h5 style={{ fontWeight: 'normal', color: '#555', marginBottom: '2px' }}>MyIPO Malaysia</h5>
                                    <p style={{ fontSize: '11px', color: '#888' }}>December 2025 • GERIC Integrated Management System (GIMS)</p>
                                    <p style={{ fontSize: '11px', color: '#555', marginTop: '2px', fontStyle: 'italic' }}>Notification No: CRLY2025C13186</p>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Internal Component for the "My Projects" Youtube-style Layout
const ProjectsExplorer = ({ onOpenWindow, onLink }) => {
    const [view, setView] = useState('grid'); // 'grid' or 'detail'
    const [selectedProject, setSelectedProject] = useState(null);
    const [filterCategory, setFilterCategory] = useState('All');

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setView('detail');
    };

    const handleBack = () => {
        setView('grid');
        setSelectedProject(null);
    };

    const filteredProjects = projectsData.filter(project => {
        if (filterCategory === 'All') return true;
        return project.category === filterCategory;
    });

    const sidebarItems = [
        { id: 'All', label: 'All', icon: '/icons/Windows XP Icons/Search Results.png' },
        { id: 'Systems', label: 'Systems', icon: '/icons/Windows XP Icons/My Computer.png' },
        { id: 'UI/UX', label: 'UI/UX', icon: '/icons/Windows XP Icons/Paint.png' },
        { id: 'AI/Data', label: 'AI/Data', icon: '/icons/Windows XP Icons/Performance.png' }
    ];

    return (
        <div className="project-app-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0f0f0f', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>

            {/* Header */}
            <div style={{ height: '56px', display: 'flex', alignItems: 'center', padding: '0 16px', justifyContent: 'space-between', background: '#0f0f0f', borderBottom: '1px solid #222', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }} onClick={() => { setView('grid'); setFilterCategory('All'); }}>
                    <div style={{ background: 'red', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <img src="/icons/Windows XP Icons/Play.png" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} alt="YT" />
                    </div>
                    <h2 style={{ margin: 0, fontSize: '1.2rem', letterSpacing: '-1px', color: '#fff' }}>MyProjects</h2>
                </div>

                <div style={{ flex: 1, maxWidth: '600px', margin: '0 20px', display: 'flex' }}>
                    <input type="text" placeholder="Search" style={{
                        width: '100%',
                        background: '#121212',
                        border: '1px solid #333',
                        borderRadius: '20px 0 0 20px',
                        padding: '8px 16px',
                        color: '#fff',
                        outline: 'none'
                    }} />
                    <button style={{
                        background: '#222',
                        border: '1px solid #333',
                        borderLeft: 'none',
                        borderRadius: '0 20px 20px 0',
                        padding: '0 20px',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img src="/icons/Windows XP Icons/Search.png" style={{ width: '16px', filter: 'invert(0.7)' }} alt="Search" />
                    </button>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <img src="/icons/communication/wlm.ico" style={{ width: 24, cursor: 'pointer' }} title="Chat" />
                    <img src="/icons/windows_vista/vista_sidebar_1.ico" style={{ width: 24, cursor: 'pointer' }} title="Apps" />
                    <img src="/icons/windows_vista/vista_pc_1.ico" style={{ width: 32, borderRadius: '50%', background: '#333', padding: '2px', cursor: 'pointer' }} />
                </div>
            </div>

            {/* Main Body */}
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

                {/* Sidebar */}
                <div style={{ width: '240px', padding: '12px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {sidebarItems.map(item => (
                        <div
                            key={item.id}
                            onClick={() => { setFilterCategory(item.id); setView('grid'); }}
                            style={{
                                padding: '10px 12px',
                                borderRadius: '10px',
                                background: filterCategory === item.id ? '#272727' : 'transparent',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                fontSize: '0.9rem',
                                color: '#fff'
                            }}
                        >
                            <img src={item.icon} style={{ width: 20, height: 20 }} />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Content Area */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                    {view === 'grid' ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                            {filteredProjects.map((project) => (
                                <div key={project.id} onClick={() => handleProjectClick(project)} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{ aspectRatio: '16/9', background: '#333', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                                        {project.image ?
                                            <img src={project.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> :
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
                                                {project.icon === 'clock' ? <Clock size={48} /> : <Folder size={48} />}
                                            </div>
                                        }
                                    </div>
                                    <div>
                                        <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem', lineHeight: '1.2', color: '#fff' }}>{project.title}</h4>
                                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#aaa' }}>{project.category} • 3 years ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Detail / YouTube Player View
                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                            <div style={{ flex: '1 1 600px', minWidth: '300px' }}>
                                {/* Player */}
                                <div className="yt-player" style={{
                                    width: '100%',
                                    aspectRatio: '16/9',
                                    background: '#000',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                                }}>
                                    <div className="yt-player-content" onClick={() => selectedProject.image && onOpenWindow && onOpenWindow({
                                        title: selectedProject.title + ' - Image Preview',
                                        content: 'image-viewer',
                                        width: 800,
                                        height: 600,
                                        data: { image: selectedProject.image, title: selectedProject.title }
                                    })} style={{ cursor: selectedProject.image ? 'pointer' : 'default', width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                        {selectedProject.image ? (
                                            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                        ) : (
                                            <span style={{ color: '#555', alignSelf: 'center' }}>
                                                {selectedProject.icon === 'clock' ? <Clock size={80} /> : <Folder size={80} />}
                                            </span>
                                        )}
                                    </div>
                                    {/* Controls Overlay */}
                                    <div className="yt-controls-overlay" style={{
                                        position: 'absolute', bottom: 0, left: 0, right: 0, height: '48px', background: 'rgba(0,0,0,0.6)',
                                        display: 'flex', flexDirection: 'column', padding: '0 12px', justifyContent: 'center'
                                    }}>
                                        <div style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.3)', marginBottom: '8px', position: 'relative' }}>
                                            <div style={{ width: '35%', height: '100%', background: '#f00' }}></div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#fff' }}>
                                            <Play size={20} fill="white" />
                                            <Volume2 size={20} />
                                            <span style={{ fontSize: '12px' }}>3:45 / 10:00</span>
                                            <div style={{ flex: 1 }}></div>
                                            <Settings size={20} style={{ cursor: 'pointer' }} />
                                            <Maximize size={20} style={{ cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>

                                {/* Title & Actions */}
                                <h2 style={{ marginTop: '12px', marginBottom: '8px', fontSize: '1.25rem', color: '#fff' }}>{selectedProject.title}</h2>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', paddingBottom: '12px', marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <img src="/icons/windows_vista/vista_pc_1.ico" style={{ width: 40, height: 40, borderRadius: '50%', background: '#333' }} />
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#fff' }}>Nur Syafika Alya</div>
                                            <div style={{ fontSize: '0.8rem', color: '#aaa' }}>3.7K subscribers</div>
                                        </div>
                                        <button style={{
                                            background: '#f1f1f1', color: '#0f0f0f', border: 'none',
                                            padding: '8px 16px', borderRadius: '18px', fontWeight: 'bold', marginLeft: '12px', cursor: 'pointer'
                                        }}>Subscribe</button>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button onClick={handleBack} style={{ background: '#222', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <ArrowLeft size={16} /> Back
                                        </button>
                                        {selectedProject.link && (
                                            <div onMouseDown={(e) => e.stopPropagation()}>
                                                <div onClick={() => onLink && onLink({ url: selectedProject.link, title: selectedProject.title })} className="yt-action-btn" style={{
                                                    background: '#222', color: '#fff', padding: '8px 16px', borderRadius: '18px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', cursor: 'pointer'
                                                }}>
                                                    <Link size={16} /> Source
                                                </div>
                                            </div>
                                        )}
                                        <button style={{ background: '#222', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <ThumbsUp size={16} /> 1.2K
                                        </button>
                                    </div>
                                </div>

                                {/* Description Box */}
                                <div style={{ background: '#222', borderRadius: '12px', padding: '16px', fontSize: '0.9rem', color: '#fff', lineHeight: '1.7' }}>
                                    <div style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '0.95rem' }}>12K views • 2 years ago</div>
                                    <div style={{ marginBottom: '12px', fontSize: '0.9rem', color: '#fff' }}>{selectedProject.desc}</div>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: selectedProject.fullDesc || '' }}
                                        style={{ color: '#ddd', fontSize: '0.9rem' }}
                                        className="yt-description-content"
                                        onMouseDown={(e) => {
                                            if (e.target.closest('a')) {
                                                e.stopPropagation();
                                            }
                                        }}
                                        onClick={(e) => {
                                            const link = e.target.closest('a');
                                            if (link && onLink) {
                                                e.preventDefault();
                                                onLink({ url: link.href, title: link.textContent });
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Sidebar Suggestions */}
                            <div style={{ flex: '0 0 350px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {filteredProjects.filter(p => p.id !== selectedProject.id).map(p => (
                                    <div key={p.id} onClick={() => handleProjectClick(p)} style={{ display: 'flex', gap: '8px', cursor: 'pointer' }}>
                                        <div style={{ width: '168px', height: '94px', background: '#333', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                                            {p.image ?
                                                <img src={p.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> :
                                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
                                                    {p.icon === 'clock' ? <Clock size={32} /> : <Folder size={32} />}
                                                </div>
                                            }
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                            <div style={{ fontWeight: 'bold', fontSize: '0.9rem', lineHeight: '1.1', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', color: '#fff' }}>{p.title}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Nur Syafika Alya</div>
                                            <div style={{ fontSize: '0.8rem', color: '#aaa' }}>3K views • 1 year ago</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ImageViewer = ({ data }) => {
    return (
        <div className="image-viewer-container" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="image-view-area" style={{
                flex: 1,
                position: 'relative',
                backgroundColor: '#909090',
                backgroundImage: 'linear-gradient(45deg, #b0b0b0 25%, transparent 25%), linear-gradient(-45deg, #b0b0b0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #b0b0b0 75%), linear-gradient(-45deg, transparent 75%, #b0b0b0 75%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'auto',
                padding: '20px'
            }}>
                <div style={{
                    background: '#fff',
                    padding: '10px',
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img src={data?.image} alt={data?.title} style={{ maxWidth: '100%', maxHeight: 'calc(100vh - 200px)', objectFit: 'contain', border: '1px solid #777' }} />
                </div>
            </div>

            <div style={{
                height: '50px',
                background: '#f0f0f0',
                borderTop: '1px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px'
            }}>
                <button className="xp-footer-btn" title="Previous" style={{ border: '1px solid transparent', background: 'none', cursor: 'pointer', padding: '4px' }}><img src="/icons/Windows XP Icons/Back.png" style={{ width: 24, height: 24 }} /></button>
                <button className="xp-footer-btn" title="Next" style={{ border: '1px solid transparent', background: 'none', cursor: 'pointer', padding: '4px' }}><img src="/icons/Windows XP Icons/Forward.png" style={{ width: 24, height: 24 }} /></button>
                <div style={{ width: '2px', borderRight: '1px solid #bfbfbf', height: '30px', margin: '0 5px' }}></div>
                <button className="xp-footer-btn" title="Zoom In" style={{ border: '1px solid transparent', background: 'none', cursor: 'pointer', padding: '4px' }}><img src="/icons/Windows XP Icons/Search.png" style={{ width: 24, height: 24 }} /></button>
                <button className="xp-footer-btn" title="Save" style={{ border: '1px solid transparent', background: 'none', cursor: 'pointer', padding: '4px' }}><img src="/icons/Windows XP Icons/Save.png" style={{ width: 24, height: 24 }} /></button>
                <button className="xp-footer-btn" title="Print" style={{ border: '1px solid transparent', background: 'none', cursor: 'pointer', padding: '4px' }}><img src="/icons/Windows XP Icons/Printer.png" style={{ width: 24, height: 24 }} /></button>
            </div>
        </div>
    );
};


const Notepad = ({ content }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontFamily: 'Consolas, monospace', background: '#fff' }}>
            <div style={{ background: '#f0f0f0', borderBottom: '1px solid #ccc', padding: '2px 5px', fontSize: '12px' }}>
                <span style={{ marginRight: '10px' }}>File</span>
                <span style={{ marginRight: '10px' }}>Edit</span>
                <span style={{ marginRight: '10px' }}>Format</span>
                <span style={{ marginRight: '10px' }}>View</span>
                <span style={{ marginRight: '10px' }}>Help</span>
            </div>
            <textarea
                style={{
                    flex: 1,
                    border: 'none',
                    resize: 'none',
                    padding: '5px',
                    outline: 'none',
                    fontFamily: 'Consolas, monospace',
                    fontSize: '14px',
                    whiteSpace: 'pre-wrap'
                }}
                readOnly
                defaultValue={content}
            />
        </div>
    );
};


const ResumeViewer = ({ data, onOpenWindow }) => {
    const [zoom, setZoom] = useState(100);
    const pdfUrl = data?.image || '/images/RESUME%20NUR%20SYAFIKA%20ALYA%20(1).pdf';

    const handleZoom = () => {
        setZoom(prev => prev >= 150 ? 100 : prev + 25);
    };

    const handleSave = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Resume_Nur_Syafika_Alya.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePrint = () => {
        const iframe = document.getElementById('resume-pdf-iframe');
        if (iframe) {
            iframe.contentWindow.print();
        }
    };

    return (
        <div className="resume-viewer-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#525659' }}>
            <div style={{
                height: '50px',
                background: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                padding: '0 16px',
                justifyContent: 'flex-start',
                gap: '20px',
                borderBottom: '1px solid #ccc',
                zIndex: 10
            }}>
                <button className="xp-toolbar-btn" onClick={handleZoom} title={`Current Zoom: ${zoom}%`} style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    background: 'none', border: 'none', cursor: 'pointer', color: '#000', fontSize: '12px'
                }}>
                    <img src="/icons/Windows XP Icons/Search.png" style={{ width: 24, height: 24 }} />
                    Zoom
                </button>

                <div style={{ width: '1px', height: '30px', background: '#bfbfbf', margin: '0 5px' }}></div>

                <button className="xp-toolbar-btn" onClick={handleSave} style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    background: 'none', border: 'none', cursor: 'pointer', color: '#000', fontSize: '12px'
                }}>
                    <img src="/icons/Windows XP Icons/Save.png" style={{ width: 24, height: 24 }} />
                    Save
                </button>

                <div style={{ width: '1px', height: '30px', background: '#bfbfbf', margin: '0 5px' }}></div>

                <button className="xp-toolbar-btn" onClick={handlePrint} style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    background: 'none', border: 'none', cursor: 'pointer', color: '#000', fontSize: '12px'
                }}>
                    <img src="/icons/Windows XP Icons/Printer.png" style={{ width: 24, height: 24 }} />
                    Print
                </button>

                <div style={{ width: '1px', height: '30px', background: '#bfbfbf', margin: '0 5px' }}></div>

                <button className="xp-toolbar-btn" onClick={() => onOpenWindow && onOpenWindow({ title: 'Contact Me', content: 'contact', width: 400, height: 300 })} style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    background: 'none', border: 'none', cursor: 'pointer', color: '#000', fontSize: '12px'
                }}>
                    <img src="/icons/Windows XP Icons/OE Reply.png" style={{ width: 24, height: 24 }} />
                    Contact Me
                </button>
            </div>

            <div style={{ flex: 1, position: 'relative', overflow: 'auto', padding: '20px', display: 'flex', justifyContent: 'center', background: 'url(/images/grid_bg.png) repeat, #525659' }}>
                <iframe
                    id="resume-pdf-iframe"
                    src={`${pdfUrl}#view=FitH`}
                    style={{
                        width: zoom === 100 ? '100%' : `${800 * (zoom / 100)}px`,
                        height: '100%',
                        maxWidth: zoom === 100 ? '800px' : 'none',
                        border: '1px solid #000',
                        background: '#fff',
                        boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                        transition: 'width 0.3s ease, max-width 0.3s ease',
                        flexShrink: 0
                    }}
                    title="Resume PDF"
                />
            </div>
        </div>
    );
};

const CommandPrompt = () => {
    const [history, setHistory] = useState([
        { type: 'info', content: 'Alya XP v1.0 (Feb 2026)' },
        { type: 'info', content: 'Inspired by Windows XP and MitchIvin XP' },
        { type: 'break' },
        { type: 'info', content: "Type 'help' for a list of commands." },
        { type: 'info', content: "Press ENTER/RETURN to execute commands." },
        { type: 'break' }
    ]);
    const [input, setInput] = useState('');
    const inputRef = React.useRef(null);
    const endRef = React.useRef(null);

    const handleCommand = (cmd) => {
        const trimmed = cmd.trim().toLowerCase();
        let output = [];

        switch (trimmed) {
            case 'help':
                output = [
                    { type: 'info', content: 'Info: AUTHOR, STACK, DISCLAIMER' },
                    { type: 'info', content: 'Commands: DATE, TIME, VER, HELP, EXIT' }
                ];
                break;
            case 'stack':
                output = [
                    { type: 'info', content: 'Core Stack:' },
                    { type: 'info', content: 'React 19, Vite, JavaScript (ES6+)' },
                    { type: 'break' },
                    { type: 'info', content: 'Libraries & Dependencies:' },
                    { type: 'info', content: '- framer-motion (Animations)' },
                    { type: 'info', content: '- react-draggable (Window Management)' },
                    { type: 'info', content: '- lucide-react (Icons)' },
                    { type: 'break' },
                    { type: 'info', content: 'Integrations & Credits:' },
                    { type: 'info', content: '- JSPaint (via iframe) - github.com/1j01/jspaint' },
                    { type: 'info', content: '- Custom XP CSS Styling' }
                ];
                break;
            case 'author':
                output = [{ type: 'info', content: 'Nur Syafika Alya' }];
                break;
            case 'disclaimer':
                output = [{ type: 'info', content: 'This site is a personal portfolio project. All logos, artwork, and assets referenced remain the property of their respective owners. They are included here as inspiration, homage, or parody, not as original creations or with any claim of ownership. This project is independent and has no affiliation with or endorsement from the original creators.' }];
                break;
            case 'github':
                output = [
                    { type: 'info', content: 'Repository: https://github.com/alyasy07/portfolio-windows' },
                    { type: 'break' },
                    { type: 'info', content: 'Dependencies:' },
                    { type: 'info', content: '- react' },
                    { type: 'info', content: '- vite' },
                    { type: 'info', content: '- framer-motion' },
                    { type: 'info', content: '- lucide-react' },
                    { type: 'info', content: '- react-draggable' },
                    { type: 'break' },
                    { type: 'info', content: 'External: github.com/1j01/jspaint' },
                    { type: 'break' },
                    { type: 'info', content: 'Ownership: Independent Project' }
                ];
                break;
            case 'date':
                output = [{ type: 'info', content: new Date().toLocaleDateString() }];
                break;
            case 'time':
                output = [{ type: 'info', content: new Date().toLocaleTimeString() }];
                break;
            case 'ver':
                output = [{ type: 'info', content: 'Microsoft Windows XP [Version 5.1.2600]' }];
                break;
            case 'exit':
                output = [{ type: 'info', content: 'Terminating session...' }];
                break;
            case 'cls':
            case 'clear':
                setHistory([]);
                return;
            case '':
                break;
            default:
                output = [{ type: 'error', content: `'${cmd}' is not recognized as an internal or external command, operable program or batch file.` }];
        }

        setHistory(prev => [...prev, { type: 'command', content: `C:\\> ${cmd}` }, ...output, { type: 'break' }]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    React.useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="cmd-container" onClick={focusInput}>
            {history.map((item, i) => (
                <div key={i} className={`cmd-line ${item.type}`}>
                    {item.type === 'break' ? <br /> : item.content}
                </div>
            ))}
            <div className="cmd-input-line">
                <span>C:\&gt;</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            </div>
            <div ref={endRef} />
        </div>
    );
};

const WindowContent = ({ type, onOpenWindow, data, onLink }) => {
    if (type === 'notepad') {
        return <Notepad content={data?.text || ''} />;
    }

    if (type === 'paint') {
        return (
            <iframe
                src="https://jspaint.app"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                title="Paint"
            />
        );
    }

    if (type === 'cmd' || type === 'terminal') {
        return <CommandPrompt />;
    }

    if (type === 'resume-viewer' || type === 'resume') {
        return <ResumeViewer data={data} onOpenWindow={onOpenWindow} />;
    }

    if (type === 'image-viewer') {
        return <ImageViewer data={data} />;
    }

    if (type === 'about') {
        return <ProfileExplorer onOpenWindow={onOpenWindow} />;
    }

    if (type === 'projects') {
        return <ProjectsExplorer onOpenWindow={onOpenWindow} onLink={onLink} />;
    }

    const renderXPFolder = (title, icon, children) => (
        <div className="xp-folder-container">
            <div className="xp-sidebar">
                <div className="xp-task-group">
                    <div className="xp-task-header">
                        <span className="task-header-title">{title} Tasks</span>
                        <button className="task-toggle">^</button>
                    </div>
                    <div className="xp-task-content">
                        <a href="#" className="task-link">
                            <img src="/icons/utilities/explorer.ico" alt="" />
                            <span>View details</span>
                        </a>
                        <a href="#" className="task-link">
                            <img src="/icons/windows_vista/vista_netcenter.ico" alt="" />
                            <span>Share this folder</span>
                        </a>
                    </div>
                </div>

                <div className="xp-task-group">
                    <div className="xp-task-header">
                        <span className="task-header-title">Other Places</span>
                        <button className="task-toggle">^</button>
                    </div>
                    <div className="xp-task-content">
                        <a href="#" className="task-link">
                            <img src="/icons/utilities/explorer.ico" alt="" />
                            <span>My Computer</span>
                        </a>
                        <a href="#" className="task-link">
                            <img src="/icons/windows_vista/vista_book_1.ico" alt="" />
                            <span>My Documents</span>
                        </a>
                        <a href="#" className="task-link">
                            <img src="/icons/windows_vista/vista_netcenter.ico" alt="" />
                            <span>My Network Places</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="xp-main-content">
                {children}
            </div>
        </div>
    );

    // projectsData moved to top of file
    const content = {
        // about: removed here - handled above
        resume: renderXPFolder('File', 'resume', (
            <div className="document-view">
                <div className="paper">
                    <h1>Resume</h1>
                    <hr />
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <a
                            href="/images/RESUME NUR SYAFIKA ALYA (1).pdf"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                background: '#0054E3',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '4px',
                                fontWeight: 'bold'
                            }}
                        >
                            View Full Resume (PDF)
                        </a>
                    </div>

                    <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Refer to "About Me" for interactive education and experience details.</p>
                </div>
            </div>
        )),
        contact: renderXPFolder('Communication', 'contact', (
            <div className="folder-content">
                <a href="mailto:syafikaalya10@gmail.com" onClick={(e) => { e.preventDefault(); onLink && onLink({ url: 'mailto:syafikaalya10@gmail.com', title: 'Email Me', icon: '/icons/communication/wlm.ico' }); }} className="folder-item" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                    <img src="/icons/communication/wlm.ico" alt="Email" />
                    <span>Email Me</span>
                </a>
                <a href="https://github.com/alyasy07" onClick={(e) => { e.preventDefault(); onLink && onLink({ url: 'https://github.com/alyasy07', title: 'GitHub', icon: '/images/github.png' }); }} className="folder-item" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                    <img src="/images/github.png" alt="GitHub" />
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/syafika-zamri/" onClick={(e) => { e.preventDefault(); onLink && onLink({ url: 'https://www.linkedin.com/in/syafika-zamri/', title: 'LinkedIn', icon: '/images/linkedin.png' }); }} className="folder-item" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                    <img src="/images/linkedin.png" alt="LinkedIn" />
                    <span>LinkedIn</span>
                </a>
                <div className="folder-item">
                    <img src="/images/phone.png" alt="Phone" />
                    <span>011-59593965</span>
                </div>
            </div>
        )),
        recycle: renderXPFolder('Recycle Bin', 'recycle', (
            <div className="folder-content">
                <div className="folder-item">
                    <img src="/icons/windows_vista/vista_sticky_notes.ico" alt="File" />
                    <span>bad-idea.txt</span>
                </div>
                <div className="folder-item">
                    <img src="/icons/utilities/trashbin1.ico" alt="File" />
                    <span>old_design.png</span>
                </div>
            </div>
        )),
        // Custom "App" Layout for Projects
        projects: (
            <div className="project-app-container">
                <div className="project-app-sidebar">
                    <div className="sidebar-section">
                        <button className="sidebar-btn active">🏠 All Projects</button>
                        <button className="sidebar-btn">💻 Systems</button>
                        <button className="sidebar-btn">🎨 UI/UX</button>
                        <button className="sidebar-btn">🤖 AI/Data</button>
                    </div>
                </div>
                <div className="project-app-main">
                    <div className="project-search-bar">
                        <h2>My Projects ({projectsData.length})</h2>
                        <input type="text" placeholder="Search..." />
                    </div>

                    <div className="project-grid">
                        {projectsData.map((project) => (
                            <div className="project-card" key={project.id}>
                                <div className="card-image" style={{
                                    background: '#333',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <span style={{ color: '#fff' }}>
                                            {project.icon === 'clock' ? <Clock size={48} /> : <Folder size={48} />}
                                        </span>
                                    )}
                                </div>
                                <div className="card-info">
                                    <h4>{project.title}</h4>
                                    <p className="card-tech">{project.tech}</p>
                                    <p className="card-desc" style={{ fontSize: '10px', color: '#aaa', marginBottom: '4px' }}>{project.desc}</p>
                                    {project.link !== '#' && (
                                        <a href={project.link} onClick={(e) => { e.preventDefault(); onLink && onLink({ url: project.link, title: project.title }); }} className="card-link" style={{ cursor: 'pointer' }}>View Project</a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    };

    return content[type] || <div>Content not found</div>;
}

export default WindowContent;
