'use client'

import { Button } from '@/components/ui/button'

interface RepeatableListProps<T> {
	label: string
	items: T[]
	onChange: (items: T[]) => void
	newItem: () => T
	renderItem: (item: T, update: (patch: Partial<T>) => void) => React.ReactNode
}

export function RepeatableList<T>({
	label,
	items,
	onChange,
	newItem,
	renderItem,
}: RepeatableListProps<T>) {
	const update = (index: number, patch: Partial<T>) => {
		onChange(items.map((it, i) => (i === index ? { ...it, ...patch } : it)))
	}
	const remove = (index: number) => onChange(items.filter((_, i) => i !== index))

	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between">
				<span className="text-sm font-medium">{label}</span>
				<Button type="button" variant="outline" size="sm" onClick={() => onChange([...items, newItem()])}>
					+ Add
				</Button>
			</div>
			{items.map((item, i) => (
				<div key={i} className="flex items-start gap-2 rounded-md border p-3">
					<div className="grid flex-1 gap-2">{renderItem(item, (patch) => update(i, patch))}</div>
					<Button type="button" variant="ghost" size="sm" onClick={() => remove(i)}>
						Remove
					</Button>
				</div>
			))}
		</div>
	)
}
