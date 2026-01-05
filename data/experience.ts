import { Experience } from "@/types/experience"

export const experience: Experience[] = [
    {
        company: "Abbey Mortgage Bank",
        role: "Senior Mobile Engineer",
        period: "Mar 2025 – Present",
        highlights: [
            "Owned end-to-end iOS & Android release pipelines (IPA/APK signing, TestFlight)",
            "Handled CSR generation, provisioning profiles, and store-ready builds",
            "Built secure, bank-grade React Native flows (transfers, payments, transactions)",
            "Migrated legacy Bare RN app to Expo Router",
        ],
    },
    {
        company: "FastCash",
        role: "Founder & Mobile Engineer",
        period: "2024 – Present",
        highlights: [
            "Designed and built a fintech mobile app from scratch using Expo",
            "Implemented BVN verification, OTP authentication, and payout onboarding",
            "Built income tracking, savings, and investment workflows",
            "Managed Expo prebuilds, OTA updates, and owner testing pipelines",
        ],
    },
]