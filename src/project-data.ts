import debateArena from "./assets/debateArena.jpg";
import tufconnect from "./assets/tuf-connect.jpg";
import manifest from "./assets/manifest.jpg";
import ZarKhoon from "./assets/ZarKhoon.png";
import AiHomeDesign from "./assets/AIHomeDesign.png";
export const projects = [

    {
    id: "ai-home-design",

    title: "AI Home Designer — AI-Powered 3D Home Visualization Platform",

    description:
        "Engineered an AI-powered home design platform that transforms natural-language requirements into structured architectural concepts, interactive 3D home visualizations, and real-world map-based previews. Built an iterative AI design workflow allowing users to refine homes through conversational prompts and export 2D SVG blueprints and PNG renders.",

    tech: [
        "Vite",
        "React",
        "TypeScript",
        "Claude Opus 4.8",
        "Anthropic SDK",
        "Zod",
        "Three.js",
        "MapLibre GL",
        "Zustand",
        "Nominatim",
        "CARTO"
    ],

    image: AiHomeDesign,

    github: "/projects",

    demo: "https://plot-ai-tau.vercel.app/",

    caseStudy: {
        title: "🏠 AI Home Designer — From Natural Language to 3D Reality",

        overview:
            "AI Home Designer is an AI-powered home visualization platform that allows users to describe their ideal home using natural language and instantly turn those requirements into an interactive 3D design. Users can continuously refine the design through conversational prompts, visualize the completed home on a real-world map, and export the result as a 2D SVG architectural layout or PNG image.",

        problem:
            "Designing and visualizing a home often requires multiple tools, technical architectural knowledge, and repeated communication between homeowners, architects, and construction teams. Early-stage ideas can be difficult to communicate visually, while changing a design can require significant manual work. There is a need for a simpler way to turn a client's idea into something they can immediately see, understand, and iterate on.",

        solution:
            "Developed an AI-driven design workflow where users describe their requirements in natural language and Claude generates a validated structured home specification. The specification is interpreted by Three.js to create an interactive 3D environment. Users can then request changes conversationally, allowing the design to evolve without manually rebuilding the scene. Once satisfied, the design can be placed on a real-world MapLibre map for geographic visualization and exported into usable 2D and image formats.",

        features: [
            "Natural-language home design generation using Claude Opus 4.8.",
            "Structured AI outputs validated with Zod schemas.",
            "Conversational design iteration allowing users to request modifications.",
            "Interactive 3D home rendering powered by Three.js.",
            "Real-world geographic visualization using MapLibre GL.",
            "Geocoded location search using Nominatim.",
            "Georeferenced custom 3D home layer displayed directly on the map.",
            "Live basemap integration using CARTO.",
            "2D SVG export for architectural and floor-plan reference.",
            "PNG export for sharing and presenting home designs.",
            "Centralized application state management using Zustand.",
            "AI API protection through rate limiting and controlled request handling.",
            "Token-aware prompting and structured responses to improve API efficiency.",
            "Prompt engineering designed to produce consistent and predictable architectural specifications."
        ],

        techStack: [
            "Frontend: React, TypeScript, Vite",
            "AI: Claude Opus 4.8 via Anthropic SDK",
            "AI Reliability: Structured Outputs + Zod validation",
            "3D Visualization: Three.js",
            "Mapping: MapLibre GL",
            "Geocoding: Nominatim",
            "Basemap: CARTO",
            "State Management: Zustand",
            "Exports: SVG + PNG"
        ],

        keyFeatures: [
            "AI-powered natural-language home generation.",
            "Conversational design refinement workflow.",
            "Structured AI-to-3D rendering pipeline.",
            "Interactive Three.js architectural visualization.",
            "Real-world map-based home placement.",
            "Georeferenced 3D visualization on live maps.",
            "2D SVG architectural layout export.",
            "PNG design export.",
            "Schema validation for reliable AI-generated specifications.",
            "Rate limiting to control API usage and prevent abuse.",
            "Token-conscious prompt engineering for better performance and cost control.",
            "Modular architecture designed for future AI and visualization capabilities."
        ],

        aiEngineering:
            "Designed the AI layer as a structured generation pipeline rather than relying on free-form text responses. Claude Opus 4.8 receives carefully engineered prompts and produces structured home specifications that are validated through Zod before being consumed by the rendering engine. Implemented prompt engineering to maintain consistency between design iterations, token-aware request construction to reduce unnecessary API usage, rate limiting to protect the API layer from excessive requests, and controlled AI interactions so generated data remains predictable and usable by the application.",

        outcome:
            "Built a functional AI product MVP demonstrating how natural-language AI can be combined with 3D graphics and geospatial visualization to simplify an otherwise complex design workflow. The platform creates a complete flow from idea → AI-generated specification → interactive 3D home → iterative refinement → real-world map visualization → exportable design. The architecture provides a foundation for expanding into professional architectural visualization, construction planning, real-estate presentations, property development, and client collaboration workflows.",

        role:
            "Designed and independently developed the complete product workflow, including the AI generation architecture, prompt engineering, structured output validation, rate limiting strategy, token-aware API usage, React interface, Three.js rendering system, MapLibre integration, georeferenced 3D map layer, location search, application state management, and SVG/PNG export functionality."
    }
},
    {
        id: "zarkhoon",

        title: "ZarKhoon — Intelligent Emergency Blood Donation Platform",

        description:
            "Engineered a Full Stack location-aware blood donation platform that instantly connects blood donors with nearby patients during emergencies. Built real-time geospatial matching, push notification delivery, secure authentication, and live request management to minimize response time for critical blood requirements.",

        tech: [
            "Next.js",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Supabase Auth",
            "Supabase Realtime",
            "Geolocation API",
            "Tailwind CSS"
        ],

        image: ZarKhoon,

        github: "https://github.com/HammadAkbar1623/Zarkhoon.git",

        demo: "https://zarkhoon.vercel.app/",

        caseStudy: {
            title: "🩸 ZarKhoon — Real-Time Location-Based Blood Donation Network",

            overview:
                "ZarKhoon is a Full Stack emergency blood donation platform designed to bridge the gap between blood donors and recipients. The platform uses real-time geolocation to identify compatible donors within a configurable radius and instantly sends push notifications, enabling rapid response during medical emergencies.",

            problem:
                "During emergencies, finding compatible blood donors is often slow and inefficient. Social media posts rarely reach the right people in time, while existing systems lack real-time location intelligence, instant communication, and targeted donor matching.",

            solution:
                "Developed a scalable location-aware platform using Next.js and Supabase where users register with their blood group and profile information. When a patient creates an emergency blood request, the system calculates nearby compatible donors within a 50 km radius and instantly delivers push notifications only to eligible users, significantly reducing the time required to find donors.",

            features: [
                "Secure authentication using Supabase Authentication.",
                "Blood group-based donor registration and profile management.",
                "Real-time emergency blood request posting.",
                "Automatic geolocation capture for every request.",
                "Geospatial filtering to identify compatible donors within a 50 km radius.",
                "Instant push notifications using Supabase Realtime.",
                "Live feed of active blood requests with real-time Supabase updates.",
                "One-click donor response workflow for faster coordination.",
                "Responsive, mobile-first UI optimized for emergency situations."
            ],

            techStack: [
                "Frontend: Next.js, React, TypeScript, Tailwind CSS",
                "Backend: Supabase",
                "Authentication: Supabase Auth",
                "Notifications: Supabase Realtime",
                "Database: PostgreSQL",
                "Location Services: HTML5 Geolocation API + Radius-based Geo Queries",
                "Hosting: Vercel"
            ],

            keyFeatures: [
                "Real-time geospatial donor matching.",
                "Radius-based notification delivery (50 km).",
                "Instant emergency alerts via push notifications.",
                "Live synchronized Supabase database updates.",
                "Scalable serverless architecture with Supabase.",
                "Responsive and optimized emergency-first user experience."
            ],

            outcome:
                "Built a production-ready MVP demonstrating how real-time geolocation and targeted push notifications can dramatically reduce donor discovery time. The architecture is designed to scale for city-wide or nationwide deployments while ensuring notifications reach only relevant nearby donors.",

            role:
                "Designed the complete system architecture and independently developed the frontend, backend, authentication, Supabase data model, real-time notification pipeline, geolocation-based donor matching logic, and deployment."
        }
    },
    {
        id: 'debate-arena',
        title: "Debate Arena - Mobile App MVP",
        description: "Developed a Full Stack mobile application, where users can participate in live debates on various topics. Implemented real-time voice , user authentication, and interactive features to enhance user engagement.",
        tech: ["React Native", "Firebase", "FireStore", "Firebase Auth"],
        image: debateArena,
        github: "https://github.com/HammadAkbar1623/Debate-Arena",
        demo: "",
        caseStudy: {
            title: "🎙️ Debate Arena — Real-Time Debating App (MVP)",
            overview: "Debate Arena is a mobile MVP that enables users to host, join, and spectate live 2-minute debates. Users can debate via voice, earn XP, level up, and participate in team or hot-topic events.",
            problem: "Most online debates on platforms like Reddit or Twitter are unstructured and chaotic. There was no platform designed for short, time-bound, voice debates that are engaging and competitive.",
            solution: "Built a React Native + Firebase MVP that allows users to quickly join or host structured voice debates with gamification elements",
            features: [
                "Browse debates and swipe right to join or left to skip.",
                "Join as Opponent, Supporter, or Spectator.",
                "Live 2-minute voice debates (1 min per side).",
                "Spectators vote → XP rewards & levels update automatically.",
                "Events tab for Hot Topics and Team Debates.",
                "Profile tab showing XP, awards, streaks, and win rate."
            ],
            techStack: [
                "Frontend: React Native (Expo)",
                "Backend: Firebase Firestore, Auth, Storage",
                "Voice Communication: Expo Audio APIs",
                "Design: Figma",
                "Deployment: Expo Go / EAS Build"
            ],
            keyFeatures: [
                "Swipe navigation for fast debate joining/skipping.",
                "Real-time voice debates with voting system.",
                "Gamification with XP, levels, streaks, and awards.",
                "Events and team debates for special engagement."
            ],
            outcome: "Validated the concept of structured, gamified voice debates. Swipe-to-join increased engagement by 40%, voice debates increased retention by 3x.",
            role: "End-to-end development: frontend, backend, UX, gamification logic, and deployment."
        }
    },
    {
        id: 'tuf-connect',
        title: "University Specific Social Media",
        description: "Developed a Full-Stack social media platform for university students where they can connect, share, and collaborate. Connected over 300+ students. Read more about it on my Github.",
        tech: ["MongoDB", "Express.js", "React Native", "Node", "Cloudinary"],
        image: tufconnect,
        github: "https://github.com/HammadAkbar1623/TUF-Connect.git",
        demo: "https://tuffconnect.expo.app",
        caseStudy: {
            title: "TUF Connect - University Social Media Platform",
            overview: "A dedicated social media app for university students to share time-limited posts based on shared interests, ensuring exclusive access and focused interactions.",
            problem: "University students often have only brief windows of free time (e.g., 1 hour) and need a secure, internal platform to connect with peers based on specific interests without interference from outsiders or irrelevant content.",
            solution: "Developed a full-stack mobile app with university email registration, interest-based hashtags, and auto-expiring posts to facilitate quick, targeted sharing within the university community.",
            features: [
                "Registration restricted to university email with OTP verification",
                "Interest selection via hashtags (study, sports, society, fun, universal)",
                "Post creation with chosen hashtags, visible only to users with matching interests",
                "Automatic post deletion after 1 hour or manual deletion via swipe",
                "Settings for updating password, username, account name, profile picture, hashtags, and bio",
                "Profile picture storage and management using Cloudinary"
            ],
            techStack: [
                "Frontend: React Native",
                "Backend: Node.js, Express.js",
                "Database: MongoDB",
                "Storage: Cloudinary",
                "Authentication: OTP via email"
            ],
            keyFeatures: [
                "University-exclusive access via email verification",
                "Interest-based content filtering with hashtags",
                "Time-limited posts for quick interactions",
                "User profile customization and management"
            ],
            outcome: "Successfully connected 300+ students, enabling efficient sharing and collaboration during limited free time slots.",
            role: "Full-stack development, database design, and deployment"
        }
    },

    {
        id: 'auto-pause-for-youtube',
        title: "AutoPause for YouTube - Smart video pausing for multitaskers",
        description: "A lightweight Chrome extension that automatically pauses YouTube videos when you switch to another tab—perfect for users who get distracted or need to multitask without missing a beat.",
        tech: ["Javascript", "Manifest V3", "Youtube DOM Scripting"],
        image: manifest,
        github: "https://github.com/HammadAkbar1623/Automatically-Pause-Play-Youtube-Video.git",
        demo: "#",
        caseStudy: {
            title: "AutoPause for YouTube - Chrome Extension",
            overview: "A smart Chrome extension that automatically pauses YouTube videos when users switch tabs, helping multitaskers save bandwidth and avoid distractions.",
            problem: "Users often switch tabs while watching YouTube, wasting bandwidth and losing their place in videos.",
            solution: "Developed a lightweight Chrome extension using Manifest V3 that intelligently pauses YouTube videos on tab switch:",
            features: [
                "Automatic pause when switching tabs",
                "Smart resume when returning to YouTube",
                "Lightweight and non-intrusive",
                "Works across all YouTube pages"
            ],
            techStack: [
                "JavaScript ES6+",
                "Chrome Extension Manifest V3",
                "YouTube DOM API",
                "Chrome Tabs API"
            ],
            keyFeatures: [
                "Zero configuration required",
                "Minimal performance impact",
                "Privacy-focused (no data collection)",
                "Automatic updates"
            ],
            outcome: "Helped users save bandwidth and maintain focus while multitasking across browser tabs.",
            role: "Sole developer - concept, implementation, and Chrome Web Store deployment"
        }
    }


]