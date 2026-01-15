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
        period: "2024 – Present",
        highlights: [
            "Designed and implemented a fintech mobile application end-to-end using React Native & Expo, covering onboarding (splash, welcome screens), authentication (sign up, login, OTP, BVN verification), and payout account setup.",
            "Built a modular dashboard with investment products (FastLock, Target, USD, Flexible), wallet management, and recent activity tracking, leveraging reusable components and centralized API services for maintainability and scalability.",
            "Developed advanced account management flows including profile completion, Face ID login, balance visibility toggles, and support features for secure, user-centric financial operations.",
            "Implemented secure, bank-grade workflows for sensitive financial operations, including OTP verification, session management, and transaction integrity.",
            "Architected robust state management and persistent secure storage, integrating Expo SecureStore to manage tokens and session expiration for continuous, secure access control.",
            "Handled release management and QA-ready builds using Expo prebuilds, OTA updates, and testing pipelines, ensuring production-ready deployments across iOS and Android.",
        ],
    }
]