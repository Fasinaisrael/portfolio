interface AboutCardProps {
    title: string
    content: string
}

export default function AboutCard({ title, content }: AboutCardProps) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold mb-3">{title}</h3>

            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                {content.trim()}
            </p>
        </div>
    )
}