import Image from "next/image"

export default function ProjectsPage() {
    return (
        <section className="space-y-12">
            <h1 className="text-3xl font-bold">Projects</h1>

            {/* FASTCASH */}
            <div className="rounded-xl border border-white/10 p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <Image
                        src="/images/fastcash.png"
                        alt="FastCash App"
                        width={120}
                        height={120}
                    />

                    <div>
                        <h2 className="text-2xl font-semibold">FastCash</h2>
                        <p className="mt-2 text-gray-400">
                            A fintech mobile application built from scratch to help users
                            manage income, savings, and investments.
                        </p>

                        <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                            <li>End-to-end solo development using React Native & Expo</li>
                            <li>Secure onboarding with BVN verification and OTP flows</li>
                            <li>Multi-step profile completion with payout account validation</li>
                            <li>Income tracking, savings, and investment workflows</li>
                            <li>Expo Prebuild for owner testing and OTA updates</li>
                        </ul>

                        <p className="mt-4 text-sm text-gray-400">
                            This project demonstrates full product ownership — from
                            architecture and security flows to build pipelines and testing
                            strategy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}