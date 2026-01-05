import { experience } from "@/data/experience"
import ExperienceCard from "@/components/shared/ExperienceCard"

export default function ExperiencePage() {
    return (
        <section>
            <h1 className="text-3xl font-bold mb-8">Experience</h1>

            {experience.map((item) => (
                <ExperienceCard key={item.company} {...item} />
            ))}
        </section>
    )
}