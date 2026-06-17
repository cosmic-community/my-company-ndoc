interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="font-serif text-3xl font-bold text-brand-800 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-brand-600 ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}