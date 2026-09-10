export const portfolioData = {
  personal: {
    name: "Gopinath P",
    avatar: "/profile.jpg",
    role: "Frontend Developer & React Specialist",
    rolesList: [
      "Frontend Developer (React.js)",
      "React Native Mobile Developer",
      "Python & ERP Systems Enthusiast",
      "MCA Candidate @ Kalasalingam University"
    ],
    bio: "Motivated graduate and fresher equipped with a solid understanding of frontend development using React.js and React Native. Skilled in programming across JavaScript, Python, and Java, with hands-on knowledge of both structured and unstructured databases. Passionate about applying my technical skills and familiarity with ERP systems to contribute to impactful software projects.",
    phone: "+91 6374170465",
    email: "pgopinathpitchai@gmail.com",
    location: "29/107, North Street, Keelamatayan, Madurai, Tamil Nadu, India",
    experienceYears: "Fresher / Graduate",
    status: "Actively seeking Frontend & Software Engineering roles",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:pgopinathpitchai@gmail.com",
      phone: "tel:+916374170465"
    }
  },

  stats: [
    { label: "BCA CGPA", value: "8.1", sub: "Kalasalingam University" },
    { label: "Key Projects", value: "3+", sub: "ERP, AI & Mobile" },
    { label: "MCA Pursuing", value: "2025-27", sub: "Post Graduation" },
    { label: "Core Stack", value: "React / RN", sub: "Web & Mobile" }
  ],

  highlights: [
    {
      title: "Frontend Craftsmanship",
      desc: "Deep focus on modern component-driven architectures, responsive UIs, clean hooks, and seamless animations in React.js and React Native.",
      icon: "Layout"
    },
    {
      title: "ERP & Business Workflows",
      desc: "Practical experience with custom DocTypes, relational data modeling, and business logic streamlining in enterprise ERP systems.",
      icon: "Layers"
    },
    {
      title: "Full Database Fluency",
      desc: "Comfortable across relational databases (MySQL, PostgreSQL) and modern NoSQL stores (MongoDB, Firebase).",
      icon: "Database"
    },
    {
      title: "AI & Innovation Mindset",
      desc: "Proven hackathon builder who trained conversational AI models on real-world Kaggle medical datasets.",
      icon: "Sparkles"
    }
  ],

  skillsCategories: [
    {
      id: "all",
      name: "All Skills"
    },
    {
      id: "frontend",
      name: "Frontend & Mobile"
    },
    {
      id: "programming",
      name: "Programming & Backend"
    },
    {
      id: "database",
      name: "Databases"
    },
    {
      id: "tools",
      name: "Tools & Platforms"
    },
    {
      id: "soft",
      name: "Soft Skills"
    }
  ],

  skills: [
    { name: "React.js", category: "frontend", level: "Intermediate", percent: 85, color: "#00f2fe", icon: "Atom" },
    { name: "React Native", category: "frontend", level: "Intermediate", percent: 82, color: "#38bdf8", icon: "Smartphone" },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Intermediate", percent: 88, color: "#f7df1e", icon: "Code2" },
    { name: "HTML5 & CSS3", category: "frontend", level: "Intermediate", percent: 90, color: "#e34f26", icon: "Palette" },
    { name: "Python", category: "programming", level: "Intermediate", percent: 82, color: "#3776ab", icon: "Terminal" },
    { name: "SQL", category: "programming", level: "Intermediate", percent: 80, color: "#00b4d8", icon: "Binary" },
    { name: "AI / ML & Kaggle", category: "programming", level: "Intermediate", percent: 75, color: "#a855f7", icon: "Cpu" },
    { name: "Java", category: "programming", level: "Beginner", percent: 65, color: "#ea580c", icon: "Coffee" },
    { name: "MySQL", category: "database", level: "Intermediate", percent: 80, color: "#00758f", icon: "Database" },
    { name: "PostgreSQL", category: "database", level: "Intermediate", percent: 78, color: "#336791", icon: "Server" },
    { name: "MongoDB", category: "database", level: "Beginner", percent: 68, color: "#47a248", icon: "Layers" },
    { name: "Firebase (NoSQL)", category: "database", level: "Intermediate", percent: 74, color: "#ffca28", icon: "Flame" },
    { name: "Git & GitHub", category: "tools", level: "Intermediate", percent: 85, color: "#f05032", icon: "GitBranch" },
    { name: "VS Code", category: "tools", level: "Proficient", percent: 92, color: "#007acc", icon: "Laptop" },
    { name: "ERP Frameworks & DocTypes", category: "tools", level: "Intermediate", percent: 80, color: "#10b981", icon: "Workflow" },
    { name: "Problem Solving", category: "soft", level: "Core Strength", percent: 90, color: "#ec4899", icon: "CheckCircle2" },
    { name: "Critical Thinking", category: "soft", level: "Core Strength", percent: 88, color: "#8b5cf6", icon: "CheckCircle2" },
    { name: "Time Management", category: "soft", level: "Core Strength", percent: 85, color: "#06b6d4", icon: "CheckCircle2" },
    { name: "Team Collaboration", category: "soft", level: "Core Strength", percent: 92, color: "#10b981", icon: "CheckCircle2" },
    { name: "Quick Learner", category: "soft", level: "Core Strength", percent: 95, color: "#f59e0b", icon: "CheckCircle2" }
  ],

  projects: [
    {
      id: "manufacturing-erp",
      title: "Manufacturing ERP System",
      subtitle: "Enterprise Resource Planning & Workflow Automation",
      tagline: "Streamlined operational tracking, inventory workflows, and business intelligence for manufacturing.",
      category: "Enterprise Software",
      technologies: ["Python", "SQL", "ERP Frameworks", "DocTypes", "Relational DB"],
      featured: true,
      accentColor: "#00f2fe",
      description: "Designed and developed a customized ERP system tailored for a manufacturing company. Leveraged various DocTypes to streamline core business workflows, manage data entry efficiently, and improve overall operational tracking.",
      highlights: [
        "Architected custom DocTypes to manage bills of materials, work orders, and inventory dispatch with minimal manual effort.",
        "Engineered relational database queries ensuring accurate stock levels, vendor records, and production timelines.",
        "Implemented validation checkpoints and audit trails to prevent data entry redundancies and operational bottlenecks.",
        "Provided clean dashboard views for floor supervisors and administrative decision-makers."
      ],
      deliverables: [
        "Customized DocTypes & Schema Modeling",
        "Automated Production Workflow Pipeline",
        "Integrated SQL Reporting & Inventory Analytics"
      ]
    },
    {
      id: "healthcare-ai-chatbot",
      title: "Medical Healthcare AI Chatbot",
      subtitle: "Hackathon Innovation Project",
      tagline: "Conversational healthcare intelligence delivering rapid symptom insights and medical data interpretation.",
      category: "AI & Machine Learning",
      technologies: ["Python", "Machine Learning", "Kaggle Datasets", "NLP", "Data Preprocessing"],
      featured: true,
      accentColor: "#a855f7",
      description: "Built and trained a conversational AI chatbot for the healthcare domain during a fast-paced hackathon. Utilized medical datasets from Kaggle to train machine learning models, enabling the bot to understand queries and provide relevant health-related insights.",
      highlights: [
        "Rapidly trained and fine-tuned machine learning classification models on curated medical datasets from Kaggle.",
        "Structured a responsive conversational flow that parses natural language queries about symptoms and preventative healthcare.",
        "Achieved high accuracy within hackathon deadlines through effective data cleaning and feature engineering.",
        "Built-in clinical disclaimer safeguards prioritizing patient safety and directing critical emergencies to professionals."
      ],
      deliverables: [
        "NLP Symptom Understanding Engine",
        "Hackathon Fast-Paced Model Deployment",
        "Medical Knowledge Query Interface"
      ]
    },
    {
      id: "smart-bus-tracking",
      title: "Smart Bus Tracking Mobile App",
      subtitle: "Transit Tracking & Real-Time Commuter Interface",
      tagline: "Cross-platform mobile solution for live vehicle localization, route schedules, and map visualization.",
      category: "Mobile Application",
      technologies: ["React Native", "JavaScript", "Geolocation API", "Map Interfaces", "Mobile UX"],
      featured: true,
      accentColor: "#00f5a0",
      description: "Developed a cross-platform mobile application framework aimed at transit tracking. Implemented user-friendly frontend screens using React Native to handle real-time location updates and map interfaces for commuters.",
      highlights: [
        "Engineered responsive, cross-platform mobile interfaces in React Native tailored for commuters on-the-go.",
        "Integrated live GPS coordinates onto dynamic map overlays with real-time bus location pings and route trails.",
        "Crafted smooth transitions, bus schedule lookups, estimated arrival times, and interactive station markers.",
        "Optimized mobile state management for minimal battery drain and fluid touch gestures."
      ],
      deliverables: [
        "Cross-Platform React Native App",
        "Real-Time Map & Transit UI",
        "Route Navigation & ETA Tracker"
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Kalasalingam University",
      period: "2025 - 2027",
      status: "Pursuing",
      grade: "Master's Degree Candidate",
      description: "Advancing knowledge in distributed enterprise systems, scalable web architectures, modern algorithms, and software engineering methodologies.",
      badge: "In Progress"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Kalasalingam University",
      period: "2022 - 2025",
      status: "Graduated",
      grade: "CGPA: 8.1 / 10",
      description: "Graduated with strong academic distinction. Specialized in web application development, database management systems, object-oriented programming, and software engineering.",
      badge: "CGPA: 8.1"
    },
    {
      degree: "Higher Secondary Education (HSE)",
      institution: "GHSS Athoor",
      period: "2021 - 2022",
      status: "Completed",
      grade: "Percentage: 59%",
      description: "Completed secondary education with foundational focus on mathematics, physical sciences, and computer science concepts.",
      badge: "Completed"
    }
  ]
};
