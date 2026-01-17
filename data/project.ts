import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        title: "FastCash Mobile App",
        description:
            "A full-featured fintech mobile application built from the ground up, enabling users to manage income, savings, and investments with bank-grade security.",
        highlights: [
            "End-to-end solo development using React Native & Expo",
            "Secure onboarding with OTP verification and BVN validation",
            "Multi-step profile completion with payout account setup",
            "Investment products including FastLock, Target, USD, and Flexible savings",
            "Secure session handling using Expo SecureStore and token expiration",
            "OTA updates and QA-ready builds via Expo Prebuild",
        ],
        tags: ["Fintech", "React Native", "Expo", "Security"],

    },

    {
        title: "Abbey Mobile Banking App",
        description:
            "A secure mobile banking application for retail customers, focused on compliance, transaction integrity, and scalable financial workflows.",
        highlights: [
            "Revamped a legacy Bare React Native application for iOS and Android",
            "Resolved critical Gradle, CodePush, and Xcode build issues",
            "Implemented tier-based account views and upgrade flows",
            "Integrated bill payments, beneficiary validation, and transaction security",
            "Conducted and remediated VAPT findings including OTP reuse, authorization flaws, and SSL pinning",
            "Prepared store-ready builds for Google Play and Apple TestFlight",
        ],
        tags: ["Mobile Banking", "React Native", "Security", "VAPT"],

    },

    {
        title: "NCAA Registration & Management Platform",
        description:
            "A government-grade web platform enabling airports and aviation officials to digitally manage registrations, approvals, and operational roles.",
        highlights: [
            "Led development of a full-scale registration and approval system",
            "Built user-facing and admin dashboards for operational oversight",
            "Implemented role-based access and approval workflows",
            "Designed reusable UI components for scalability and consistency",
            "Worked closely with stakeholders to translate regulatory workflows into software",
            "Initiated mobile transition planning using React Native",
        ],
        tags: ["GovTech", "React", "Redux", "Web Platform"],

    },

    {
        title: "Urban Eats Food Delivery Platform",
        description:
            "A cross-platform food delivery application connecting customers, vendors, and dispatch riders with real-time order tracking.",
        highlights: [
            "Built cart, checkout, and payment flows with third-party gateways",
            "Implemented biometric and Face ID authentication",
            "Developed vendor and rider management modules",
            "Enabled real-time order tracking using WebSockets and push notifications",
            "Resolved Android and iOS build issues across Gradle and Xcode",
        ],
        tags: ["FoodTech", "React Native", "Payments", "Real-time"],

    },
];