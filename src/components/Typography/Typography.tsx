import { cn } from '@/utils/tailwind'
import React from 'react'

/**
 * Enum for font weights.
 * @enum {number}
 */
export enum FontWeight {
	Regular = 400, // font-normal
	Medium = 500, // font-medium
	SemiBold = 600, // font-semibold
	Bold = 700,
}

/**
 * Enum for text sizes.
 * @enum {string}
 */
export enum TextSize {
	XXSmall = '10px',
	XSmall = '12px',
	Small = '14px',
	MediumSmall = '16px',
	Medium = '18px',
	MediumLarge = '20px',
	MediumXLarge = '24px',
	MediumXXLarge = '28px',
	MediumJumbo = '32px',
	Large = '40px',
	XLarge = '48px',
	XXLarge = '56px',
	XXXLarge = '64px',
	Jumbo = '72px',
	Mega = '80px',
}

/**
 * Enum for typography variants.
 * @enum {string}
 */
export enum VariantTypography {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
	H5 = 'h5',
	H6 = 'h6',
	P = 'p',
}

/**
 * Props for the Typography component.
 * @interface TypographyProps
 * @prop {VariantTypography} [variant] - The variant of the typography (Heading or Paragraph).
 * @prop {TextSize} [size] - The size of the text.
 * @prop {FontWeight} [fontWeight] - The weight of the font.
 * @prop {React.ReactNode} children - The content to be rendered inside the typography.
 * @prop {string} [className] - Additional class names for styling.
 */
export interface TypographyProps {
	variant?: VariantTypography
	style?: React.CSSProperties
	size?: TextSize
	fontWeight?: FontWeight
	children: React.ReactNode
	className?: string
}

const Typography: React.FC<TypographyProps> = ({
	variant = VariantTypography.P,
	size = TextSize.MediumSmall,
	fontWeight = FontWeight.Regular,
	style,
	children,
	className,
}) => {
	const getFontWeight = (): string => {
		switch (fontWeight) {
			case FontWeight.Regular:
				return 'font-normal' // Tailwind CSS class for 400
			case FontWeight.Medium:
				return 'font-medium' // Tailwind CSS class for 500
			case FontWeight.SemiBold:
				return 'font-semibold' // Tailwind CSS class for 600
			case FontWeight.Bold:
				return 'font-bold' // Tailwind CSS class for 700
			default:
				return 'font-normal'
		}
	}

	const getFontSize = (): string => {
		switch (size) {
			case TextSize.XXSmall:
				return 'text-xxs' // 0.625rem (10px)
			case TextSize.XSmall:
				return 'text-xs' // 0.75rem (12px)
			case TextSize.Small:
				return 'text-sm' // 0.875rem (14px)
			case TextSize.MediumSmall:
				return 'text-base' // 1rem (16px)
			case TextSize.Medium:
				return 'text-lg' // 1.125rem (18px)
			case TextSize.MediumLarge:
				return 'text-xl' // 1.25rem (20px)
			case TextSize.MediumXLarge:
				return 'text-2xl' // 1.5rem (24px)
			case TextSize.MediumXXLarge:
				return 'text-2.5xl' // 1.75rem (28px)
			case TextSize.MediumJumbo:
				return 'text-3xl' // 2rem (32px)
			case TextSize.Large:
				return 'text-3.5xl' // 2.5rem (40px)
			case TextSize.XLarge:
				return 'text-4xl' // 3rem (48px)
			case TextSize.XXLarge:
				return 'text-4.5xl' // 3.5rem (56px)
			case TextSize.XXXLarge:
				return 'text-5xl' // 4rem (64px)
			case TextSize.Jumbo:
				return 'text-6xl' // 4.5rem (72px)
			case TextSize.Mega:
				return 'text-7xl' // 5rem (80px)
			default:
				return 'text-base' // 1rem (16px)
		}
	}

	const Component = variant

	return (
		<Component
			className={cn('text-black', getFontSize(), getFontWeight(), className)}
			style={style}
		>
			{children}
		</Component>
	)
}

export default Typography
