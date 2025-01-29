import { cn } from '@/utils/tailwind'
import React from 'react'
export enum BoxVariant {
	xSmall = 'x-small',
	Small = 'small',
	Medium = 'medium',
	MediumSmall = 'medium-small',
	Regular = 'regular',
	Large = 'large',
	xLarge = 'x-large',
}
export enum BoxJustify {
	Start = 'start',
	End = 'end',
	Center = 'center',
	Between = 'between',
	Around = 'around',
	Evenly = 'evenly',
}
export enum BoxItems {
	Start = 'start',
	End = 'end',
	Center = 'center',
	Baseline = 'baseline',
	Stretch = 'stretch',
}
export enum BoxDirection {
	Row = 'row',
	RowReverse = 'row-reverse',
	Col = 'col',
	ColReverse = 'col-reverse',
}
/**
 * Props for the Box component.
 */
export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Whether to use flexbox. */
	flex?: boolean
	/** The direction of the flexbox. */
	flexDirection?: BoxDirection
	/** How to justify the content. */
	justify?: BoxJustify
	/** How to align the items. */
	items?: BoxItems
	/** Whether to add horizontal space. */
	spaceHorizontal?: boolean
	/** Whether to add vertical space. */
	spaceVertical?: boolean
	/** Variation to determine padding size. */
	variant?: BoxVariant
	/** Additional class name for styling. */
	className?: string
	/** The content to be displayed inside the Box. */
	children?: React.ReactNode
	/** Function to be called when the Box is clicked. */
	onClick?: () => void
}
// Mapping for padding size based on variant
const spacingMap = {
	[BoxVariant.xSmall]: { px: 'px-1', py: 'py-1' }, // 4px
	[BoxVariant.Small]: { px: 'px-2', py: 'py-2' }, // 8px
	[BoxVariant.MediumSmall]: { px: 'px-3', py: 'py-3' }, // 12px
	[BoxVariant.Medium]: { px: 'px-4', py: 'py-4' }, // 16px
	[BoxVariant.Regular]: { px: 'px-6', py: 'py-6' }, // 24px
	[BoxVariant.Large]: { px: 'px-8', py: 'py-8' }, // 32px
	[BoxVariant.xLarge]: { px: 'px-12', py: 'py-12' }, // 48px
}
/**
 * Determines the padding classes based on input props.
 * @param spaceHorizontal - Flag to add horizontal padding.
 * @param spaceVertical - Flag to add vertical padding.
 * @param variant - The variant of the Box to determine padding size.
 * @returns A string representing the padding classes.
 */
const getPaddingClass = (
	spaceHorizontal?: boolean,
	spaceVertical?: boolean,
	variant?: BoxVariant
): string => {
	const { px, py } = spacingMap[variant ?? BoxVariant.Medium]
	const paddingClasses: string[] = []
	if (spaceHorizontal) {
		paddingClasses.push(px)
	}
	if (spaceVertical) {
		paddingClasses.push(py)
	}
	return paddingClasses.join(' ')
}
/**
 * Box component that provides customizable padding and margin.
 * @param spaceHorizontal - Whether to apply horizontal padding.
 * @param spaceVertical - Whether to apply vertical padding.
 * @param variant - The variant of the Box to determine padding size.
 * @param className - Additional className for styling.
 * @param children - Content to be displayed inside the Box.
 * @returns The rendered Box component.
 */
const Box: React.FC<BoxProps> = ({
	spaceHorizontal = false,
	spaceVertical = false,
	variant = BoxVariant.Medium,
	className = '',
	flex = false,
	flexDirection,
	justify,
	items,
	children,
	onClick,
}) => {
	const paddingClasses = getPaddingClass(spaceHorizontal, spaceVertical, variant)
	return (
		<div
			className={cn(paddingClasses, className, {
				flex: flex,
				[`flex-${flexDirection}`]: flexDirection,
				[`justify-${justify}`]: justify,
				[`items-${items}`]: items,
			})}
			onClick={onClick}
		>
			{children}
		</div>
	)
}
export default Box
