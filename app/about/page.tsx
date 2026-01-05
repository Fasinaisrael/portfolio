import { aboutSections } from "@/data/about"
import AboutCard from "@/components/shared/AboutCard"

export default function AboutPage() {
    return (
        <section>
            <h1 className="text-3xl font-bold mb-8">About</h1>

            <div className="space-y-6 max-w-3xl">
                {aboutSections.map((section) => (
                    <AboutCard key={section.title} {...section} />
                ))}
            </div>
        </section>
    )
}