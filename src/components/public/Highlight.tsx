import { cn } from '@/lib/utils'

/**
 * Renders `text` with the first occurrence of `accent` wrapped in
 * `text-brand-accent` (the orange highlight pattern used across the landing).
 * Falls back to plain text when `accent` is empty or not found.
 */
export function Highlight({
	text,
	accent,
	className,
}: {
	text: string
	accent?: string
	className?: string
}) {
	if (!accent || !text.includes(accent)) return <>{text}</>
	const idx = text.indexOf(accent)
	const before = text.slice(0, idx)
	const after = text.slice(idx + accent.length)
	return (
		<>
			{before}
			<span className={cn('text-brand-accent', className)}>{accent}</span>
			{after}
		</>
	)
}
