export default function SkillsPage() {
    return (
        <section className="space-y-10">
            <h1 className="text-3xl font-bold">Skills</h1>

            <div>
                <h2 className="text-xl font-semibold">Mobile & Frontend</h2>
                <p className="text-gray-400 mt-2">
                    React Native (Bare & Expo), React, Next.js, TypeScript,
                    Swift, Kotlin
                </p>
            </div>

            <div>
                <h2 className="text-xl font-semibold">Fintech & Security</h2>
                <p className="text-gray-400 mt-2">
                    Secure authentication, OTP flows, BVN verification,
                    encrypted API communication, defensive UI patterns
                </p>
            </div>

            <div>
                <h2 className="text-xl font-semibold">Build & Release</h2>
                <p className="text-gray-400 mt-2">
                    Xcode, TestFlight, IPA signing, CSR generation,
                    Android Gradle, APK/AAB builds, Fastlane
                </p>
            </div>
        </section>
    )
}