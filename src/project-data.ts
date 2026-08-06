import debateArena from "./assets/debateArena.jpg";
import tufconnect from "./assets/tuf-connect.jpg";
import manifest from "./assets/manifest.jpg";
import ZarKhoon from "./assets/ZarKhoon.png";

export const projects = [
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