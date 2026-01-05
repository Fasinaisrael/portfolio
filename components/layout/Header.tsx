import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full border-b border-white/10">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link href="/" className="text-lg font-semibold">
                    Fasina Israel
                </Link>

                <nav className="flex gap-6 text-sm text-white/80">
                    <Link href="/about">About</Link>
                    <Link href="/experience">Experience</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/skills">Skills</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    )
}