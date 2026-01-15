import { Experience } from "@/types/experience"

export const experience: Experience[] = [
    {
        company: "Abbey Mortgage Bank",
        role: "Senior Mobile Engineer",
        period: "Mar 2025 – Present",
        highlights: [
            "Revamped and maintained a legacy Bare React Native application for iOS and Android, addressing critical build and deployment challenges (Gradle build errors, CodePush integration issues, Xcode signing and bundle identifier conflicts).",
            "Engineered secure mobile banking features, including tier-based account displays, account upgrades, bill payments, and beneficiary verification flows.",
            "Enhanced onboarding and registration flows with robust third-party integrations and advanced liveness checks to improve KYC compliance and fraud prevention.",
            "Led security hardening through comprehensive VAPT testing, addressing: OTP generation and reuse vulnerabilities, client-side and server-side authorization flaws, SSL certificate pinning, hook detection, and tampering protection.",
            "Managed end-to-end release pipelines: configured `android/app/build.gradle` for release signing, executed `assembleRelease` builds for Android, and generated TestFlight builds for iOS ensuring store-ready deployment compliance.",
            "Optimized business logic and transaction flows to prevent unauthorized access and mitigate potential financial risks, ensuring regulatory and operational security standards were met.",
        ],
    },
    {
        company: "FastCash",
        role: "Mobile Engineer (Sole Developer)",
        period: "2024 – 2025",
        highlights: [
            "Designed and implemented a fintech mobile application end-to-end using React Native & Expo, covering onboarding (splash, welcome screens), authentication (sign up, login, OTP, BVN verification), and payout account setup.",
            "Built a modular dashboard with investment products (FastLock, Target, USD, Flexible), wallet management, and recent activity tracking, leveraging reusable components and centralized API services for maintainability and scalability.",
            "Developed advanced account management flows including profile completion, Face ID login, balance visibility toggles, and support features for secure, user-centric financial operations.",
            "Implemented secure, bank-grade workflows for sensitive financial operations, including OTP verification, session management, and transaction integrity.",
            "Architected robust state management and persistent secure storage, integrating Expo SecureStore to manage tokens and session expiration for continuous, secure access control.",
            "Handled release management and QA-ready builds using Expo prebuilds, OTA updates, and testing pipelines, ensuring production-ready deployments across iOS and Android.",
        ],
    },
    {
        company: "Sterling Tech",
        role: "Frontend Developer",
        period: "2022 – Jul 2024",
        highlights: [
            "Contributed to multiple outsourced client projects across diverse industries, delivering responsive, production-ready web applications and optimizing existing platforms for performance and usability.",
            "Led the development of a full-scale web-based registration and management system for the National Civil Aviation Authority (NCAA), enabling airports and regulatory officials to register, manage roles, and submit approvals digitally.",
            "Designed and implemented both user-facing and administrative dashboards to streamline registration tracking, approvals, and operational oversight.",
            "Built reusable UI components and application architecture using React, Redux, and Tailwind CSS, ensuring maintainable codebases and consistent user experience across the platform.",
            "Collaborated closely with stakeholders and product teams to gather requirements, translate business workflows into technical solutions, and initiate the transition to a mobile version using React Native.",
            "Worked within an Agile development environment, leveraging Git-based workflows, REST APIs, and design tools to deliver features efficiently and at scale.",
        ],
    }, {
        company: "Urban Eats",
        role: "Mid-level Mobile Developer",
        period: "Nov 2023 – Jan 2025 (Remote)",
        highlights: [
            "Contributed to the development of a cross-platform food delivery platform connecting customers, vendors, and dispatch riders, supporting seamless food ordering and delivery workflows.",
            "Implemented secure authentication flows, including biometric and Face ID support, alongside robust cart, checkout, and payment experiences integrated with third-party payment gateways.",
            "Developed vendor and rider management modules, enabling efficient order assignment, real-time status updates, and operational visibility across the delivery lifecycle.",
            "Collaborated with the team to design and implement real-time order tracking using push notifications and WebSockets, delivering live updates to users.",
            "Assisted in diagnosing and resolving Android and iOS build issues, including Gradle configuration errors and Xcode signing and build failures, ensuring stable cross-platform releases.",
        ],
    }
]