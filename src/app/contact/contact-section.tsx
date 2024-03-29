import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center container mx-auto laptop:px-20 px-5 py-28 text-center text-5xl laptop:text-8xl laptop:py-80">
      <div>
        <h2
          className="font-medium mx-auto leading-tight"
          data-cursor-size="200"
          data-cursor-exclusion
        >
          Have an idea?
        </h2>
        <Link
          href="/contact"
          className="font-normal dark:text-neutral-400"
          data-cursor-text="Contact Me"
          data-cursor-size="80"
          data-cursor-color="#011bf4"
        >
          Tell me about it
        </Link>
      </div>
    </section>
  )
}
