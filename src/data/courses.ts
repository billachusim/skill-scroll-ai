export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: number; // 0 for free courses
  studentsCount: number;
  rating: number;
  likes: number;
  tutor: {
    name: string;
    title: string;
  };
  category: string;
  curriculum: string[];
  resources: string[];
  learningOutcomes: string[];
}

export const courses: Course[] = [
  {
    id: "1",
    title: "AI Prompt Engineering Mastery",
    description: "Master the art of crafting perfect prompts for ChatGPT, Claude, and other AI models. Learn advanced techniques to get better results.",
    image: "ai-prompting",
    duration: "6 weeks",
    price: 0,
    studentsCount: 12547,
    rating: 4.9,
    likes: 8934,
    tutor: {
      name: "Dr. Ada Neural",
      title: "AI Research Expert"
    },
    category: "AI & Machine Learning",
    curriculum: [
      "Understanding AI models and how they think",
      "Basic prompt structures and patterns",
      "Advanced prompt engineering techniques",
      "Chain-of-thought prompting",
      "Few-shot learning strategies",
      "Building AI-powered workflows"
    ],
    resources: [
      "Prompt template library",
      "AI model comparison guide",
      "Real-world prompt examples",
      "Best practices cheat sheet"
    ],
    learningOutcomes: [
      "Write effective prompts for any AI model",
      "Understand AI limitations and capabilities",
      "Build complex AI workflows",
      "Optimize AI outputs for your needs"
    ]
  },
  {
    id: "2",
    title: "Vibe Coding: Code with AI",
    description: "Learn to code by vibing with AI assistants. Build real projects using Cursor, GitHub Copilot, and AI-powered development.",
    image: "vibe-coding",
    duration: "8 weeks",
    price: 25000,
    studentsCount: 8923,
    rating: 4.8,
    likes: 6721,
    tutor: {
      name: "Marcus Flow",
      title: "Full-Stack Developer"
    },
    category: "Programming",
    curriculum: [
      "Setting up AI coding assistants",
      "Natural language to code",
      "Debugging with AI",
      "Building full applications with AI help",
      "Best practices for AI-assisted development",
      "Deploying AI-built projects"
    ],
    resources: [
      "AI coding tools comparison",
      "Project starter templates",
      "Code quality checklist",
      "Deployment guides"
    ],
    learningOutcomes: [
      "Build functional applications with AI",
      "Debug code efficiently",
      "Understand code AI generates",
      "Deploy production-ready apps"
    ]
  },
  {
    id: "3",
    title: "Data Analysis with Python",
    description: "Transform raw data into actionable insights. Learn pandas, NumPy, and visualization libraries to analyze real-world datasets.",
    image: "data-analysis",
    duration: "10 weeks",
    price: 35000,
    studentsCount: 15234,
    rating: 4.9,
    likes: 11890,
    tutor: {
      name: "Dr. Sarah Analytics",
      title: "Data Science Expert"
    },
    category: "Data Science",
    curriculum: [
      "Python fundamentals for data analysis",
      "Working with pandas DataFrames",
      "Data cleaning and preprocessing",
      "Exploratory data analysis",
      "Statistical analysis basics",
      "Data visualization with matplotlib and seaborn"
    ],
    resources: [
      "Dataset collection",
      "Analysis templates",
      "Visualization cookbook",
      "Python cheat sheets"
    ],
    learningOutcomes: [
      "Clean and prepare data for analysis",
      "Perform statistical analysis",
      "Create compelling visualizations",
      "Extract insights from data"
    ]
  },
  {
    id: "4",
    title: "Master Lovable: No-Code AI Apps",
    description: "Build full-stack web applications without traditional coding. Learn to use Lovable's AI to create production-ready apps.",
    image: "lovable",
    duration: "4 weeks",
    price: 0,
    studentsCount: 6789,
    rating: 4.7,
    likes: 4521,
    tutor: {
      name: "Emma Builder",
      title: "No-Code Expert"
    },
    category: "No-Code Development",
    curriculum: [
      "Introduction to Lovable platform",
      "Building your first app",
      "Database integration",
      "User authentication",
      "Deployment and hosting",
      "Advanced features and integrations"
    ],
    resources: [
      "Lovable templates library",
      "Component examples",
      "Integration guides",
      "Best practices guide"
    ],
    learningOutcomes: [
      "Build complete web applications",
      "Integrate databases and APIs",
      "Deploy production apps",
      "Use AI to accelerate development"
    ]
  },
  {
    id: "5",
    title: "Replit Rapid Development",
    description: "Code, collaborate, and deploy from your browser. Master Replit for fast prototyping and collaborative development.",
    image: "replit",
    duration: "5 weeks",
    price: 18000,
    studentsCount: 5432,
    rating: 4.6,
    likes: 3890,
    tutor: {
      name: "Alex Cloud",
      title: "Cloud Development Specialist"
    },
    category: "Development Tools",
    curriculum: [
      "Replit workspace setup",
      "Multi-language development",
      "Real-time collaboration",
      "Database integration",
      "Deploying Replit apps",
      "Building with AI on Replit"
    ],
    resources: [
      "Replit templates",
      "Collaboration guides",
      "Deployment checklists",
      "Integration examples"
    ],
    learningOutcomes: [
      "Develop in multiple languages",
      "Collaborate in real-time",
      "Deploy applications instantly",
      "Build AI-powered features"
    ]
  },
  {
    id: "6",
    title: "React Fundamentals 2024",
    description: "Master modern React development. Learn hooks, components, state management, and build scalable applications.",
    image: "react",
    duration: "12 weeks",
    price: 45000,
    studentsCount: 23456,
    rating: 4.9,
    likes: 18734,
    tutor: {
      name: "Jordan React",
      title: "Frontend Architect"
    },
    category: "Web Development",
    curriculum: [
      "React basics and JSX",
      "Components and props",
      "State and lifecycle",
      "Hooks deep dive",
      "Context API and state management",
      "Performance optimization",
      "Testing React applications"
    ],
    resources: [
      "React component library",
      "Code snippets collection",
      "Performance optimization guide",
      "Testing examples"
    ],
    learningOutcomes: [
      "Build complex React applications",
      "Manage application state effectively",
      "Optimize performance",
      "Test components thoroughly"
    ]
  },
  {
    id: "7",
    title: "TypeScript Mastery",
    description: "Write safer, more maintainable code with TypeScript. Learn type systems, generics, and advanced patterns.",
    image: "typescript",
    duration: "8 weeks",
    price: 32000,
    studentsCount: 11234,
    rating: 4.8,
    likes: 8956,
    tutor: {
      name: "Dr. Types McCode",
      title: "TypeScript Expert"
    },
    category: "Programming",
    curriculum: [
      "TypeScript basics and setup",
      "Type annotations and inference",
      "Interfaces and type aliases",
      "Generics and utility types",
      "Advanced type patterns",
      "TypeScript with React"
    ],
    resources: [
      "TypeScript cheat sheet",
      "Type examples library",
      "Best practices guide",
      "Migration guide from JS"
    ],
    learningOutcomes: [
      "Write type-safe code",
      "Use advanced type features",
      "Debug type errors efficiently",
      "Migrate JavaScript projects"
    ]
  },
  {
    id: "8",
    title: "Node.js Backend Development",
    description: "Build scalable backend services with Node.js. Learn Express, databases, APIs, and deployment.",
    image: "nodejs",
    duration: "10 weeks",
    price: 38000,
    studentsCount: 14567,
    rating: 4.7,
    likes: 10234,
    tutor: {
      name: "Sam Server",
      title: "Backend Engineer"
    },
    category: "Backend Development",
    curriculum: [
      "Node.js fundamentals",
      "Express framework",
      "RESTful API design",
      "Database integration",
      "Authentication and security",
      "Testing and deployment"
    ],
    resources: [
      "API templates",
      "Security checklist",
      "Database schemas",
      "Deployment guides"
    ],
    learningOutcomes: [
      "Build RESTful APIs",
      "Implement authentication",
      "Work with databases",
      "Deploy to production"
    ]
  },
  {
    id: "9",
    title: "UI/UX Design for Developers",
    description: "Design beautiful, user-friendly interfaces. Learn design principles, Figma, and prototyping.",
    image: "uiux",
    duration: "6 weeks",
    price: 28000,
    studentsCount: 9876,
    rating: 4.8,
    likes: 7234,
    tutor: {
      name: "Maya Design",
      title: "Senior UX Designer"
    },
    category: "Design",
    curriculum: [
      "Design fundamentals",
      "User research methods",
      "Wireframing and prototyping",
      "Visual design principles",
      "Figma mastery",
      "Design systems"
    ],
    resources: [
      "Figma templates",
      "Design pattern library",
      "Color palette tools",
      "Accessibility guidelines"
    ],
    learningOutcomes: [
      "Create user-centered designs",
      "Use Figma professionally",
      "Build design systems",
      "Conduct user research"
    ]
  },
  {
    id: "10",
    title: "Git & GitHub Essentials",
    description: "Master version control and collaboration. Learn Git workflows, branching strategies, and open source contribution.",
    image: "git",
    duration: "4 weeks",
    price: 0,
    studentsCount: 18234,
    rating: 4.7,
    likes: 12345,
    tutor: {
      name: "Chris Version",
      title: "DevOps Engineer"
    },
    category: "Development Tools",
    curriculum: [
      "Git basics and setup",
      "Branching and merging",
      "GitHub workflows",
      "Pull requests and reviews",
      "Resolving conflicts",
      "Contributing to open source"
    ],
    resources: [
      "Git command reference",
      "Workflow diagrams",
      "Best practices guide",
      "Troubleshooting guide"
    ],
    learningOutcomes: [
      "Use Git confidently",
      "Collaborate on GitHub",
      "Manage code versions",
      "Contribute to projects"
    ]
  },
  {
    id: "11",
    title: "Python for Beginners",
    description: "Start your programming journey with Python. Learn syntax, data structures, and build real projects.",
    image: "python",
    duration: "8 weeks",
    price: 22000,
    studentsCount: 19876,
    rating: 4.8,
    likes: 14234,
    tutor: {
      name: "Lisa Python",
      title: "Python Developer"
    },
    category: "Programming",
    curriculum: [
      "Python basics",
      "Data types and structures",
      "Functions and modules",
      "Object-oriented programming",
      "File handling",
      "Building CLI applications"
    ],
    resources: [
      "Python cheat sheet",
      "Practice exercises",
      "Project ideas",
      "Code examples"
    ],
    learningOutcomes: [
      "Write Python programs",
      "Use data structures",
      "Build practical applications",
      "Debug code effectively"
    ]
  },
  {
    id: "12",
    title: "SQL Database Design",
    description: "Design and query relational databases. Learn SQL, normalization, and optimization techniques.",
    image: "sql",
    duration: "7 weeks",
    price: 30000,
    studentsCount: 10234,
    rating: 4.7,
    likes: 7823,
    tutor: {
      name: "David Query",
      title: "Database Administrator"
    },
    category: "Database",
    curriculum: [
      "SQL fundamentals",
      "Database design principles",
      "Writing complex queries",
      "Joins and subqueries",
      "Indexes and optimization",
      "Transactions and security"
    ],
    resources: [
      "SQL reference guide",
      "Database design templates",
      "Query optimization tips",
      "Practice databases"
    ],
    learningOutcomes: [
      "Design normalized databases",
      "Write efficient queries",
      "Optimize performance",
      "Manage data securely"
    ]
  },
  {
    id: "13",
    title: "Tailwind CSS Styling",
    description: "Build beautiful interfaces rapidly with Tailwind CSS. Learn utility-first design and responsive layouts.",
    image: "tailwind",
    duration: "5 weeks",
    price: 20000,
    studentsCount: 13456,
    rating: 4.9,
    likes: 10234,
    tutor: {
      name: "Taylor Style",
      title: "Frontend Designer"
    },
    category: "Web Development",
    curriculum: [
      "Tailwind setup and configuration",
      "Utility classes mastery",
      "Responsive design patterns",
      "Custom components",
      "Dark mode implementation",
      "Performance optimization"
    ],
    resources: [
      "Component library",
      "Configuration templates",
      "Design patterns",
      "Customization guide"
    ],
    learningOutcomes: [
      "Build interfaces quickly",
      "Create responsive layouts",
      "Customize Tailwind",
      "Optimize CSS output"
    ]
  },
  {
    id: "14",
    title: "Next.js Full-Stack Apps",
    description: "Build production-ready applications with Next.js. Learn SSR, API routes, and deployment strategies.",
    image: "nextjs",
    duration: "10 weeks",
    price: 42000,
    studentsCount: 11234,
    rating: 4.8,
    likes: 8934,
    tutor: {
      name: "Nina Next",
      title: "Full-Stack Developer"
    },
    category: "Web Development",
    curriculum: [
      "Next.js fundamentals",
      "File-based routing",
      "Server-side rendering",
      "API routes",
      "Data fetching strategies",
      "Deployment and optimization"
    ],
    resources: [
      "Next.js templates",
      "API examples",
      "Performance guides",
      "Deployment checklists"
    ],
    learningOutcomes: [
      "Build full-stack apps",
      "Implement SSR/SSG",
      "Create API routes",
      "Deploy to production"
    ]
  },
  {
    id: "15",
    title: "Docker Container Mastery",
    description: "Containerize applications with Docker. Learn images, containers, and orchestration basics.",
    image: "docker",
    duration: "6 weeks",
    price: 35000,
    studentsCount: 8765,
    rating: 4.7,
    likes: 6543,
    tutor: {
      name: "Dan Container",
      title: "DevOps Specialist"
    },
    category: "DevOps",
    curriculum: [
      "Docker fundamentals",
      "Images and containers",
      "Dockerfile best practices",
      "Docker Compose",
      "Networking and volumes",
      "Security considerations"
    ],
    resources: [
      "Dockerfile templates",
      "Compose configurations",
      "Security checklist",
      "Troubleshooting guide"
    ],
    learningOutcomes: [
      "Containerize applications",
      "Manage containers efficiently",
      "Use Docker Compose",
      "Implement security best practices"
    ]
  },
  {
    id: "16",
    title: "AWS Cloud Fundamentals",
    description: "Get started with Amazon Web Services. Learn EC2, S3, Lambda, and cloud architecture.",
    image: "aws",
    duration: "9 weeks",
    price: 48000,
    studentsCount: 12345,
    rating: 4.8,
    likes: 9876,
    tutor: {
      name: "Amy Cloud",
      title: "Cloud Architect"
    },
    category: "Cloud Computing",
    curriculum: [
      "AWS basics and setup",
      "EC2 instances",
      "S3 storage",
      "Lambda serverless",
      "RDS databases",
      "IAM and security"
    ],
    resources: [
      "AWS architecture diagrams",
      "Cost optimization guide",
      "Security best practices",
      "Service comparison"
    ],
    learningOutcomes: [
      "Deploy on AWS",
      "Design cloud architectures",
      "Manage costs effectively",
      "Implement security"
    ]
  },
  {
    id: "17",
    title: "JavaScript ES6+ Modern Syntax",
    description: "Master modern JavaScript features. Learn ES6+, async programming, and functional concepts.",
    image: "javascript",
    duration: "7 weeks",
    price: 0,
    studentsCount: 22345,
    rating: 4.9,
    likes: 16789,
    tutor: {
      name: "Jack Script",
      title: "JavaScript Expert"
    },
    category: "Programming",
    curriculum: [
      "ES6 syntax and features",
      "Arrow functions and destructuring",
      "Promises and async/await",
      "Modules and imports",
      "Functional programming",
      "Advanced patterns"
    ],
    resources: [
      "ES6 cheat sheet",
      "Code examples",
      "Practice exercises",
      "Browser compatibility guide"
    ],
    learningOutcomes: [
      "Use modern JS features",
      "Write cleaner code",
      "Handle async operations",
      "Apply functional concepts"
    ]
  },
  {
    id: "18",
    title: "MongoDB NoSQL Databases",
    description: "Work with NoSQL databases using MongoDB. Learn schema design, queries, and aggregation.",
    image: "mongodb",
    duration: "6 weeks",
    price: 28000,
    studentsCount: 9234,
    rating: 4.7,
    likes: 6789,
    tutor: {
      name: "Monica Data",
      title: "Database Expert"
    },
    category: "Database",
    curriculum: [
      "MongoDB fundamentals",
      "Document model design",
      "CRUD operations",
      "Aggregation framework",
      "Indexes and performance",
      "Mongoose ODM"
    ],
    resources: [
      "Schema examples",
      "Query patterns",
      "Aggregation cookbook",
      "Performance guide"
    ],
    learningOutcomes: [
      "Design MongoDB schemas",
      "Write complex queries",
      "Optimize performance",
      "Use Mongoose effectively"
    ]
  },
  {
    id: "19",
    title: "API Design & Development",
    description: "Design and build robust APIs. Learn REST, GraphQL, authentication, and documentation.",
    image: "api",
    duration: "8 weeks",
    price: 36000,
    studentsCount: 10876,
    rating: 4.8,
    likes: 8234,
    tutor: {
      name: "Ryan API",
      title: "API Architect"
    },
    category: "Backend Development",
    curriculum: [
      "API design principles",
      "RESTful best practices",
      "GraphQL basics",
      "Authentication strategies",
      "Rate limiting and security",
      "Documentation with OpenAPI"
    ],
    resources: [
      "API design templates",
      "Security checklist",
      "Documentation examples",
      "Testing strategies"
    ],
    learningOutcomes: [
      "Design scalable APIs",
      "Implement authentication",
      "Document APIs effectively",
      "Secure API endpoints"
    ]
  },
  {
    id: "20",
    title: "Figma for Developers",
    description: "Bridge the design-development gap. Learn Figma, design handoff, and component systems.",
    image: "figma",
    duration: "4 weeks",
    price: 18000,
    studentsCount: 11234,
    rating: 4.7,
    likes: 8456,
    tutor: {
      name: "Fiona Design",
      title: "Product Designer"
    },
    category: "Design",
    curriculum: [
      "Figma interface basics",
      "Design systems in Figma",
      "Components and variants",
      "Prototyping",
      "Developer handoff",
      "Design tokens"
    ],
    resources: [
      "Figma shortcuts",
      "Component libraries",
      "Handoff checklists",
      "Plugin recommendations"
    ],
    learningOutcomes: [
      "Navigate Figma efficiently",
      "Build component libraries",
      "Create prototypes",
      "Implement designs accurately"
    ]
  },
  {
    id: "21",
    title: "Vue.js 3 Composition API",
    description: "Build reactive applications with Vue 3. Learn Composition API, Pinia, and modern Vue patterns.",
    image: "vue",
    duration: "9 weeks",
    price: 38000,
    studentsCount: 8934,
    rating: 4.8,
    likes: 6723,
    tutor: {
      name: "Vera Vue",
      title: "Frontend Developer"
    },
    category: "Web Development",
    curriculum: [
      "Vue 3 fundamentals",
      "Composition API",
      "Reactivity system",
      "Pinia state management",
      "Vue Router",
      "Testing Vue apps"
    ],
    resources: [
      "Vue templates",
      "Composables library",
      "State patterns",
      "Testing examples"
    ],
    learningOutcomes: [
      "Build Vue applications",
      "Use Composition API",
      "Manage state with Pinia",
      "Test components"
    ]
  },
  {
    id: "22",
    title: "Firebase for Web Apps",
    description: "Build real-time applications with Firebase. Learn Authentication, Firestore, and Cloud Functions.",
    image: "firebase",
    duration: "7 weeks",
    price: 32000,
    studentsCount: 10456,
    rating: 4.7,
    likes: 7892,
    tutor: {
      name: "Frank Base",
      title: "Firebase Expert"
    },
    category: "Backend Development",
    curriculum: [
      "Firebase setup",
      "Authentication methods",
      "Firestore database",
      "Real-time updates",
      "Cloud Functions",
      "Storage and hosting"
    ],
    resources: [
      "Firebase templates",
      "Security rules guide",
      "Function examples",
      "Best practices"
    ],
    learningOutcomes: [
      "Implement authentication",
      "Use Firestore effectively",
      "Write Cloud Functions",
      "Deploy Firebase apps"
    ]
  },
  {
    id: "23",
    title: "Svelte & SvelteKit",
    description: "Build fast web apps with Svelte. Learn reactive programming and SvelteKit for full-stack apps.",
    image: "svelte",
    duration: "8 weeks",
    price: 35000,
    studentsCount: 6789,
    rating: 4.9,
    likes: 5234,
    tutor: {
      name: "Sarah Svelte",
      title: "Frontend Engineer"
    },
    category: "Web Development",
    curriculum: [
      "Svelte fundamentals",
      "Reactive declarations",
      "Component communication",
      "SvelteKit basics",
      "Routing and layouts",
      "Server-side rendering"
    ],
    resources: [
      "Svelte components",
      "SvelteKit templates",
      "Performance tips",
      "Migration guide"
    ],
    learningOutcomes: [
      "Build Svelte applications",
      "Use SvelteKit effectively",
      "Implement SSR",
      "Optimize performance"
    ]
  },
  {
    id: "24",
    title: "GraphQL API Development",
    description: "Build flexible APIs with GraphQL. Learn schema design, resolvers, and Apollo Server.",
    image: "graphql",
    duration: "7 weeks",
    price: 38000,
    studentsCount: 8234,
    rating: 4.8,
    likes: 6234,
    tutor: {
      name: "Greg Graph",
      title: "API Developer"
    },
    category: "Backend Development",
    curriculum: [
      "GraphQL fundamentals",
      "Schema design",
      "Resolvers and data sources",
      "Apollo Server setup",
      "Subscriptions",
      "Authentication and authorization"
    ],
    resources: [
      "Schema examples",
      "Resolver patterns",
      "Testing strategies",
      "Performance guide"
    ],
    learningOutcomes: [
      "Design GraphQL schemas",
      "Implement resolvers",
      "Handle subscriptions",
      "Secure GraphQL APIs"
    ]
  },
  {
    id: "25",
    title: "Redux State Management",
    description: "Master state management with Redux. Learn Redux Toolkit, middleware, and advanced patterns.",
    image: "redux",
    duration: "6 weeks",
    price: 28000,
    studentsCount: 12345,
    rating: 4.7,
    likes: 9234,
    tutor: {
      name: "Rachel Redux",
      title: "State Management Expert"
    },
    category: "Web Development",
    curriculum: [
      "Redux fundamentals",
      "Redux Toolkit",
      "Async actions with Thunk",
      "Redux Saga",
      "Selectors and reselect",
      "Testing Redux"
    ],
    resources: [
      "Redux patterns",
      "Toolkit examples",
      "Testing guide",
      "Migration strategies"
    ],
    learningOutcomes: [
      "Manage complex state",
      "Use Redux Toolkit",
      "Handle async operations",
      "Test Redux code"
    ]
  },
  {
    id: "26",
    title: "Testing with Jest & React Testing Library",
    description: "Write reliable tests for React apps. Learn Jest, React Testing Library, and testing strategies.",
    image: "testing",
    duration: "6 weeks",
    price: 30000,
    studentsCount: 9876,
    rating: 4.8,
    likes: 7456,
    tutor: {
      name: "Terry Test",
      title: "QA Engineer"
    },
    category: "Testing",
    curriculum: [
      "Testing fundamentals",
      "Jest setup and basics",
      "React Testing Library",
      "Integration testing",
      "Mocking and spies",
      "E2E testing intro"
    ],
    resources: [
      "Testing patterns",
      "Example test suites",
      "Mocking guide",
      "Best practices"
    ],
    learningOutcomes: [
      "Write unit tests",
      "Test React components",
      "Mock dependencies",
      "Implement testing strategies"
    ]
  },
  {
    id: "27",
    title: "Webpack & Build Tools",
    description: "Master modern build tools. Learn Webpack, Vite, and optimize your development workflow.",
    image: "webpack",
    duration: "5 weeks",
    price: 25000,
    studentsCount: 7234,
    rating: 4.6,
    likes: 5432,
    tutor: {
      name: "Will Pack",
      title: "Build Tools Expert"
    },
    category: "Development Tools",
    curriculum: [
      "Build tools overview",
      "Webpack configuration",
      "Loaders and plugins",
      "Code splitting",
      "Vite setup",
      "Performance optimization"
    ],
    resources: [
      "Webpack configs",
      "Plugin examples",
      "Optimization guide",
      "Migration tips"
    ],
    learningOutcomes: [
      "Configure build tools",
      "Optimize bundles",
      "Use modern tooling",
      "Improve build speed"
    ]
  },
  {
    id: "28",
    title: "Web Accessibility (a11y)",
    description: "Build inclusive web applications. Learn WCAG guidelines, ARIA, and testing for accessibility.",
    image: "accessibility",
    duration: "5 weeks",
    price: 0,
    studentsCount: 8456,
    rating: 4.9,
    likes: 6789,
    tutor: {
      name: "Alice Access",
      title: "Accessibility Expert"
    },
    category: "Web Development",
    curriculum: [
      "Accessibility fundamentals",
      "WCAG guidelines",
      "Semantic HTML",
      "ARIA attributes",
      "Keyboard navigation",
      "Testing for accessibility"
    ],
    resources: [
      "WCAG checklist",
      "ARIA patterns",
      "Testing tools",
      "Best practices"
    ],
    learningOutcomes: [
      "Build accessible sites",
      "Use ARIA correctly",
      "Test accessibility",
      "Meet WCAG standards"
    ]
  },
  {
    id: "29",
    title: "Stripe Payment Integration",
    description: "Accept payments online with Stripe. Learn payment flows, webhooks, and subscription billing.",
    image: "stripe",
    duration: "6 weeks",
    price: 40000,
    studentsCount: 9123,
    rating: 4.8,
    likes: 6890,
    tutor: {
      name: "Steve Stripe",
      title: "Payment Integration Specialist"
    },
    category: "Backend Development",
    curriculum: [
      "Stripe basics and setup",
      "Payment intents",
      "Checkout sessions",
      "Webhooks handling",
      "Subscription billing",
      "Security best practices"
    ],
    resources: [
      "Integration examples",
      "Webhook handlers",
      "Testing guide",
      "Security checklist"
    ],
    learningOutcomes: [
      "Integrate Stripe payments",
      "Handle webhooks",
      "Implement subscriptions",
      "Secure payment flows"
    ]
  },
  {
    id: "30",
    title: "Machine Learning Basics",
    description: "Introduction to machine learning with Python. Learn algorithms, scikit-learn, and build ML models.",
    image: "ml",
    duration: "10 weeks",
    price: 50000,
    studentsCount: 11234,
    rating: 4.9,
    likes: 8934,
    tutor: {
      name: "Dr. Max Learn",
      title: "ML Researcher"
    },
    category: "AI & Machine Learning",
    curriculum: [
      "ML fundamentals",
      "Supervised learning",
      "Unsupervised learning",
      "scikit-learn library",
      "Model evaluation",
      "Feature engineering"
    ],
    resources: [
      "Dataset collection",
      "Algorithm guide",
      "Model templates",
      "Evaluation metrics"
    ],
    learningOutcomes: [
      "Understand ML concepts",
      "Build ML models",
      "Evaluate models",
      "Apply ML to problems"
    ]
  },
  {
    id: "31",
    title: "Shopify Theme Development",
    description: "Build custom Shopify themes. Learn Liquid templating, theme customization, and e-commerce best practices.",
    image: "shopify",
    duration: "8 weeks",
    price: 42000,
    studentsCount: 6789,
    rating: 4.7,
    likes: 5123,
    tutor: {
      name: "Sophie Shop",
      title: "E-commerce Developer"
    },
    category: "E-commerce",
    curriculum: [
      "Shopify basics",
      "Liquid templating",
      "Theme structure",
      "Customization techniques",
      "App integration",
      "Performance optimization"
    ],
    resources: [
      "Theme templates",
      "Liquid snippets",
      "App examples",
      "Optimization guide"
    ],
    learningOutcomes: [
      "Build Shopify themes",
      "Use Liquid effectively",
      "Customize stores",
      "Integrate apps"
    ]
  },
  {
    id: "32",
    title: "WordPress Development",
    description: "Develop custom WordPress sites. Learn theme development, plugins, and modern WordPress workflows.",
    image: "wordpress",
    duration: "9 weeks",
    price: 35000,
    studentsCount: 10234,
    rating: 4.6,
    likes: 7456,
    tutor: {
      name: "Wesley Press",
      title: "WordPress Expert"
    },
    category: "Web Development",
    curriculum: [
      "WordPress fundamentals",
      "Theme development",
      "Custom post types",
      "Plugin development",
      "Gutenberg blocks",
      "Security and performance"
    ],
    resources: [
      "Theme starters",
      "Plugin examples",
      "Security checklist",
      "Performance guide"
    ],
    learningOutcomes: [
      "Build custom themes",
      "Create plugins",
      "Use Gutenberg",
      "Secure WordPress sites"
    ]
  },
  {
    id: "33",
    title: "Mobile App Development with React Native",
    description: "Build native mobile apps with React Native. Learn iOS and Android development with one codebase.",
    image: "react-native",
    duration: "12 weeks",
    price: 55000,
    studentsCount: 12345,
    rating: 4.8,
    likes: 9876,
    tutor: {
      name: "Rita Native",
      title: "Mobile Developer"
    },
    category: "Mobile Development",
    curriculum: [
      "React Native basics",
      "Navigation",
      "Native modules",
      "Platform-specific code",
      "Performance optimization",
      "Publishing to stores"
    ],
    resources: [
      "App templates",
      "Component library",
      "Publishing guides",
      "Performance tips"
    ],
    learningOutcomes: [
      "Build mobile apps",
      "Use native features",
      "Optimize performance",
      "Publish to app stores"
    ]
  },
  {
    id: "34",
    title: "Flutter Cross-Platform Apps",
    description: "Develop beautiful apps with Flutter. Learn Dart, widgets, and build for iOS, Android, and web.",
    image: "flutter",
    duration: "11 weeks",
    price: 52000,
    studentsCount: 9876,
    rating: 4.9,
    likes: 7890,
    tutor: {
      name: "Flora Flutter",
      title: "Flutter Developer"
    },
    category: "Mobile Development",
    curriculum: [
      "Dart programming",
      "Flutter widgets",
      "State management",
      "Navigation and routing",
      "Platform integration",
      "Building for multiple platforms"
    ],
    resources: [
      "Flutter templates",
      "Widget catalog",
      "State patterns",
      "Publishing guides"
    ],
    learningOutcomes: [
      "Build Flutter apps",
      "Use Dart effectively",
      "Manage state",
      "Deploy to platforms"
    ]
  },
  {
    id: "35",
    title: "Electron Desktop Apps",
    description: "Build cross-platform desktop applications with Electron. Learn to package web apps as native apps.",
    image: "electron",
    duration: "7 weeks",
    price: 38000,
    studentsCount: 6234,
    rating: 4.7,
    likes: 4567,
    tutor: {
      name: "Ethan Electron",
      title: "Desktop Developer"
    },
    category: "Desktop Development",
    curriculum: [
      "Electron basics",
      "Main and renderer processes",
      "Native APIs",
      "Auto updates",
      "Packaging and distribution",
      "Security considerations"
    ],
    resources: [
      "Electron templates",
      "API examples",
      "Packaging scripts",
      "Security guide"
    ],
    learningOutcomes: [
      "Build desktop apps",
      "Use native APIs",
      "Package applications",
      "Implement updates"
    ]
  },
  {
    id: "36",
    title: "Rust Programming Language",
    description: "Learn systems programming with Rust. Master memory safety, concurrency, and performance.",
    image: "rust",
    duration: "12 weeks",
    price: 48000,
    studentsCount: 7890,
    rating: 4.9,
    likes: 6123,
    tutor: {
      name: "Rex Rust",
      title: "Systems Engineer"
    },
    category: "Programming",
    curriculum: [
      "Rust fundamentals",
      "Ownership and borrowing",
      "Error handling",
      "Traits and generics",
      "Concurrency",
      "Unsafe Rust"
    ],
    resources: [
      "Rust by Example",
      "Project ideas",
      "Concurrency patterns",
      "Best practices"
    ],
    learningOutcomes: [
      "Write safe Rust code",
      "Manage memory efficiently",
      "Handle concurrency",
      "Build system tools"
    ]
  },
  {
    id: "37",
    title: "Go Programming Language",
    description: "Build efficient backend services with Go. Learn Go syntax, concurrency, and web development.",
    image: "golang",
    duration: "10 weeks",
    price: 45000,
    studentsCount: 9234,
    rating: 4.8,
    likes: 7123,
    tutor: {
      name: "Gary Go",
      title: "Go Developer"
    },
    category: "Programming",
    curriculum: [
      "Go basics",
      "Goroutines and channels",
      "Web servers in Go",
      "Database access",
      "Testing in Go",
      "Deployment"
    ],
    resources: [
      "Go patterns",
      "Web templates",
      "Testing examples",
      "Deployment guides"
    ],
    learningOutcomes: [
      "Write Go programs",
      "Use concurrency",
      "Build web services",
      "Test Go code"
    ]
  },
  {
    id: "38",
    title: "Kubernetes Container Orchestration",
    description: "Deploy and manage containerized applications with Kubernetes. Learn pods, services, and deployments.",
    image: "kubernetes",
    duration: "9 weeks",
    price: 52000,
    studentsCount: 7456,
    rating: 4.8,
    likes: 5890,
    tutor: {
      name: "Kate Kube",
      title: "DevOps Engineer"
    },
    category: "DevOps",
    curriculum: [
      "Kubernetes fundamentals",
      "Pods and services",
      "Deployments and scaling",
      "ConfigMaps and Secrets",
      "Monitoring and logging",
      "Production best practices"
    ],
    resources: [
      "YAML templates",
      "Architecture diagrams",
      "Troubleshooting guide",
      "Security checklist"
    ],
    learningOutcomes: [
      "Deploy to Kubernetes",
      "Manage clusters",
      "Scale applications",
      "Monitor systems"
    ]
  },
  {
    id: "39",
    title: "CI/CD with GitHub Actions",
    description: "Automate your development workflow. Learn continuous integration and deployment with GitHub Actions.",
    image: "cicd",
    duration: "5 weeks",
    price: 0,
    studentsCount: 11234,
    rating: 4.7,
    likes: 8456,
    tutor: {
      name: "Carl CI",
      title: "DevOps Specialist"
    },
    category: "DevOps",
    curriculum: [
      "CI/CD concepts",
      "GitHub Actions basics",
      "Workflow syntax",
      "Building and testing",
      "Deployment strategies",
      "Security in pipelines"
    ],
    resources: [
      "Workflow templates",
      "Action marketplace",
      "Best practices",
      "Security guide"
    ],
    learningOutcomes: [
      "Set up CI/CD pipelines",
      "Automate testing",
      "Deploy automatically",
      "Secure workflows"
    ]
  },
  {
    id: "40",
    title: "Blockchain Development",
    description: "Build decentralized applications. Learn Solidity, smart contracts, and Web3 development.",
    image: "blockchain",
    duration: "12 weeks",
    price: 65000,
    studentsCount: 6789,
    rating: 4.9,
    likes: 5234,
    tutor: {
      name: "Blake Chain",
      title: "Blockchain Developer"
    },
    category: "Blockchain",
    curriculum: [
      "Blockchain fundamentals",
      "Solidity programming",
      "Smart contract development",
      "Web3.js integration",
      "DApp architecture",
      "Security best practices"
    ],
    resources: [
      "Smart contract templates",
      "Security checklist",
      "DApp examples",
      "Testing frameworks"
    ],
    learningOutcomes: [
      "Write smart contracts",
      "Build DApps",
      "Use Web3 libraries",
      "Audit contracts"
    ]
  },
  {
    id: "41",
    title: "Cybersecurity Fundamentals",
    description: "Learn to protect systems and data. Cover security principles, common attacks, and defense strategies.",
    image: "security",
    duration: "10 weeks",
    price: 45000,
    studentsCount: 8123,
    rating: 4.8,
    likes: 6234,
    tutor: {
      name: "Cyrus Security",
      title: "Security Expert"
    },
    category: "Security",
    curriculum: [
      "Security fundamentals",
      "Common vulnerabilities",
      "Network security",
      "Application security",
      "Cryptography basics",
      "Security best practices"
    ],
    resources: [
      "Security checklists",
      "Tools guide",
      "Vulnerability database",
      "Best practices"
    ],
    learningOutcomes: [
      "Identify vulnerabilities",
      "Implement security measures",
      "Use security tools",
      "Develop secure applications"
    ]
  },
  {
    id: "42",
    title: "SEO & Web Analytics",
    description: "Optimize websites for search engines. Learn SEO techniques, Google Analytics, and data-driven optimization.",
    image: "seo",
    duration: "6 weeks",
    price: 28000,
    studentsCount: 10456,
    rating: 4.7,
    likes: 7890,
    tutor: {
      name: "Sam SEO",
      title: "Digital Marketing Expert"
    },
    category: "Marketing",
    curriculum: [
      "SEO fundamentals",
      "On-page optimization",
      "Technical SEO",
      "Google Analytics setup",
      "Data analysis",
      "Conversion optimization"
    ],
    resources: [
      "SEO checklist",
      "Analytics templates",
      "Keyword tools",
      "Optimization guide"
    ],
    learningOutcomes: [
      "Optimize for search",
      "Use Analytics effectively",
      "Analyze website data",
      "Improve conversions"
    ]
  },
  {
    id: "43",
    title: "Digital Marketing with AI",
    description: "Leverage AI for marketing. Learn AI tools for content creation, analytics, and campaign optimization.",
    image: "ai-marketing",
    duration: "7 weeks",
    price: 38000,
    studentsCount: 9234,
    rating: 4.8,
    likes: 6890,
    tutor: {
      name: "Mia Marketing",
      title: "AI Marketing Specialist"
    },
    category: "Marketing",
    curriculum: [
      "AI marketing fundamentals",
      "Content generation with AI",
      "Predictive analytics",
      "Personalization strategies",
      "Campaign automation",
      "ROI measurement"
    ],
    resources: [
      "AI tools directory",
      "Campaign templates",
      "Analytics guides",
      "Case studies"
    ],
    learningOutcomes: [
      "Use AI marketing tools",
      "Create AI-powered campaigns",
      "Analyze with AI",
      "Optimize marketing ROI"
    ]
  },
  {
    id: "44",
    title: "Content Creation with AI",
    description: "Create compelling content using AI tools. Learn to use ChatGPT, Midjourney, and other AI for content.",
    image: "ai-content",
    duration: "5 weeks",
    price: 0,
    studentsCount: 13456,
    rating: 4.9,
    likes: 10234,
    tutor: {
      name: "Cara Content",
      title: "Content Strategist"
    },
    category: "AI & Machine Learning",
    curriculum: [
      "AI content tools overview",
      "Writing with ChatGPT",
      "Image generation",
      "Video creation with AI",
      "Content optimization",
      "Ethical considerations"
    ],
    resources: [
      "Tool directory",
      "Prompt templates",
      "Style guides",
      "Best practices"
    ],
    learningOutcomes: [
      "Generate AI content",
      "Use multiple AI tools",
      "Optimize content",
      "Create ethical AI content"
    ]
  },
  {
    id: "45",
    title: "Video Editing Fundamentals",
    description: "Edit professional videos. Learn Adobe Premiere Pro, DaVinci Resolve, and storytelling techniques.",
    image: "video-editing",
    duration: "8 weeks",
    price: 35000,
    studentsCount: 8934,
    rating: 4.8,
    likes: 6723,
    tutor: {
      name: "Victor Edit",
      title: "Video Editor"
    },
    category: "Creative",
    curriculum: [
      "Video editing basics",
      "Premiere Pro workflow",
      "Color grading",
      "Audio editing",
      "Motion graphics",
      "Export settings"
    ],
    resources: [
      "Project templates",
      "Color LUTs",
      "Sound effects",
      "Export presets"
    ],
    learningOutcomes: [
      "Edit professional videos",
      "Color grade footage",
      "Mix audio",
      "Create motion graphics"
    ]
  },
  {
    id: "46",
    title: "3D Modeling with Blender",
    description: "Create 3D models and animations with Blender. Learn modeling, texturing, and rendering.",
    image: "blender",
    duration: "10 weeks",
    price: 42000,
    studentsCount: 7234,
    rating: 4.9,
    likes: 5678,
    tutor: {
      name: "Betty Blend",
      title: "3D Artist"
    },
    category: "Creative",
    curriculum: [
      "Blender interface",
      "3D modeling basics",
      "Texturing and materials",
      "Lighting and rendering",
      "Animation basics",
      "Compositing"
    ],
    resources: [
      "Model templates",
      "Material library",
      "Lighting setups",
      "Render settings"
    ],
    learningOutcomes: [
      "Create 3D models",
      "Apply textures",
      "Render scenes",
      "Animate objects"
    ]
  },
  {
    id: "47",
    title: "Game Development with Unity",
    description: "Build games with Unity. Learn C# scripting, game physics, and publishing to multiple platforms.",
    image: "unity",
    duration: "14 weeks",
    price: 58000,
    studentsCount: 11234,
    rating: 4.8,
    likes: 8934,
    tutor: {
      name: "Uma Unity",
      title: "Game Developer"
    },
    category: "Game Development",
    curriculum: [
      "Unity basics",
      "C# for Unity",
      "Game physics",
      "UI and menus",
      "Audio integration",
      "Publishing games"
    ],
    resources: [
      "Game templates",
      "Asset packages",
      "Script examples",
      "Publishing guides"
    ],
    learningOutcomes: [
      "Build games in Unity",
      "Script in C#",
      "Implement physics",
      "Publish to platforms"
    ]
  },
  {
    id: "48",
    title: "Unreal Engine Game Development",
    description: "Create AAA-quality games with Unreal Engine. Learn Blueprints, C++, and advanced rendering.",
    image: "unreal",
    duration: "14 weeks",
    price: 62000,
    studentsCount: 8456,
    rating: 4.9,
    likes: 6789,
    tutor: {
      name: "Ursula Unreal",
      title: "Game Engineer"
    },
    category: "Game Development",
    curriculum: [
      "Unreal Engine basics",
      "Blueprint visual scripting",
      "C++ in Unreal",
      "Materials and shaders",
      "Animation systems",
      "Optimization techniques"
    ],
    resources: [
      "Project templates",
      "Blueprint examples",
      "Material library",
      "Performance guide"
    ],
    learningOutcomes: [
      "Build Unreal games",
      "Use Blueprints",
      "Write Unreal C++",
      "Optimize performance"
    ]
  },
  {
    id: "49",
    title: "Product Management Essentials",
    description: "Learn to manage digital products. Cover user research, roadmapping, and agile methodologies.",
    image: "product-management",
    duration: "8 weeks",
    price: 45000,
    studentsCount: 9876,
    rating: 4.7,
    likes: 7234,
    tutor: {
      name: "Penny Product",
      title: "Senior Product Manager"
    },
    category: "Business",
    curriculum: [
      "Product management fundamentals",
      "User research methods",
      "Roadmap planning",
      "Agile and Scrum",
      "Metrics and KPIs",
      "Stakeholder management"
    ],
    resources: [
      "PM templates",
      "Research frameworks",
      "Roadmap tools",
      "Metrics dashboards"
    ],
    learningOutcomes: [
      "Manage product lifecycle",
      "Conduct user research",
      "Build roadmaps",
      "Work with agile teams"
    ]
  },
  {
    id: "50",
    title: "Startup & Entrepreneurship",
    description: "Launch your startup successfully. Learn validation, funding, growth strategies, and building teams.",
    image: "startup",
    duration: "10 weeks",
    price: 0,
    studentsCount: 14567,
    rating: 4.9,
    likes: 11234,
    tutor: {
      name: "Eric Entrepreneur",
      title: "Serial Entrepreneur"
    },
    category: "Business",
    curriculum: [
      "Startup fundamentals",
      "Idea validation",
      "Business models",
      "Fundraising strategies",
      "Growth hacking",
      "Team building"
    ],
    resources: [
      "Business plan templates",
      "Pitch deck examples",
      "Fundraising guides",
      "Growth playbooks"
    ],
    learningOutcomes: [
      "Validate business ideas",
      "Create business plans",
      "Pitch to investors",
      "Scale startups"
    ]
  }
];
