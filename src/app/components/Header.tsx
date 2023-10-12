import Link from "next/link"

export default function Header() {
  return (
    <div className="border-2 rounded-lg p-6 flex justify-between">
      <div className="mt-4 text-2xl font-mono text-amber-700">AdesewaTheDev🌷</div>
      <div>
        <Link
          className="mr-4 hover:underline hover:decoration-dotted underline-offset-8"
          href="/"
        >
          Home
        </Link>
        <Link
          className="mr-4 hover:underline hover:decoration-dotted underline-offset-8"
          href="/about"
        >
          About
        </Link>
        <Link
          className="mr-4 hover:underline hover:decoration-dotted underline-offset-8"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="mr-4 hover:underline hover:decoration-dotted underline-offset-8"
          href="/projects">
         Projects
          </Link>
        <button className="border-amber-700 border-2 rounded-lg p-3">RESUME</button> 
        
      </div>

    </div>
  )
}
