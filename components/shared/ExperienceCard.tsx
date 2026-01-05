import { Experience } from "@/types/experience"

export default function ExperienceCard({
    company,
    role,
    period,
    highlights,
}: Experience) {
    return (
        <div className="rounded-xl border border-white/10 p-6 mb-6">
            <h3 className="text-xl font-semibold">{company}</h3>
            <p className="text-sm text-gray-400">
                {role} • {period}
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                {highlights.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}