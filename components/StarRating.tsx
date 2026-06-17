interface StarRatingProps {
  rating: number
}

export default function StarRating({ rating }: StarRatingProps) {
  const safeRating = Math.max(0, Math.min(5, Math.round(rating)))
  return (
    <div className="flex" aria-label={`${safeRating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 ${index < safeRating ? 'text-sand-400' : 'text-brand-100'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.287-3.957z" />
        </svg>
      ))}
    </div>
  )
}