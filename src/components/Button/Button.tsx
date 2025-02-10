import React from 'react'
import { cn } from '@/utils/tailwind'
import Typography, { TextSize } from '../Typography/Typography'
export enum ButtonVariant {
	Primary = 'primary',
	Secondary = 'secondary',
	Outline = 'outline',
	Destructive = 'destructive',
	White = 'white',
}
/**
 * Props for the Button component.
 */
export interface ButtonProps {
	variant?: ButtonVariant
	disabled?: boolean
	onClick?: () => void
	label?: React.ReactNode
	full?: boolean
	containerClassName?: string
	textClassName?: string
	icon?: React.ReactNode
	iconPosition?: 'left' | 'right'
	iconStylingLeft?: string
	iconStylingRight?: string
	textSize?: TextSize
	type?: 'submit' | 'reset' | 'button' | undefined
	isLoading?: boolean
}
/**
 * Button component that renders a styled button with optional icon and label.
 * @param variant - The variant of the button to apply different styles.
 * @param disabled - Indicates if the button is disabled.
 * @param onClick - Function to be called when the button is clicked.
 * @param label - The label/content displayed inside the button.
 * @param full - Indicates whether the button should take the full width of the container.
 * @param containerClassName - Additional CSS class for the button container.
 * @param textClassName - Additional CSS class for the button text.
 * @param icon - Optional icon displayed inside the button.
 * @param iconPosition - Position of the icon, either 'left' or 'right' of the label.
 * @param iconStylingLeft - Additional styling for the icon when positioned on the left.
 * @param iconStylingRight - Additional styling for the icon when positioned on the right.
 * @returns The rendered Button component.
 */
const Button: React.FC<ButtonProps> = ({
	variant = ButtonVariant.Primary,
	disabled,
	onClick,
	label,
	full,
	containerClassName,
	textClassName,
	icon,
	iconPosition = 'left',
	iconStylingLeft,
	iconStylingRight,
	textSize = TextSize.MediumSmall,
	type = 'button',
	isLoading = false,
}) => {
	const getButtonClass = () => {
		switch (variant) {
			case ButtonVariant.Primary:
				return `bg-button ${{ disabled: 'hover:bg-black active:bg-gray-700' }}` // Primary style
			case ButtonVariant.Secondary:
				return 'bg-white hover:bg-gray-200 active:bg-gray-300 border border-button text-black' // Secondary style
			case ButtonVariant.Outline:
				return 'border border-white bg-transparent hover:bg-gray-100 active:bg-gray-200' // Outline style
			case ButtonVariant.Destructive:
				return 'bg-danger-500 hover:bg-red-400 active:bg-red-600' // Destructive style
			case ButtonVariant.White:
				return 'bg-white hover:bg-gray-200 active:bg-gray-300'
			default:
				return ''
		}
	}
	const getTextColors = () => {
		switch (variant) {
			case ButtonVariant.Primary:
				return 'text-white'
			case ButtonVariant.Secondary:
				return 'text-button'
			case ButtonVariant.Outline:
				return 'text-white'
			case ButtonVariant.Destructive:
				return 'text-white'
			case ButtonVariant.White:
				return 'text-black'
			default:
				return ''
		}
	}

	const defaultContainerClassName = 'rounded-lg px-5 py-2.5 w-max'
	const defaultTextClassName = 'font-medium leading-5.5'

	return (
		<button
			className={cn(defaultContainerClassName, getButtonClass(), containerClassName, {
				'flex items-center gap-2': icon,
				'w-full': full,
				'cursor-not-allowed opacity-20': disabled,
			})}
			onClick={disabled ? undefined : onClick}
			disabled={disabled || isLoading}
			type={type}
		>
			{isLoading ? (
				<div className="flex justify-center">
					<div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-4 border-slate-700 border-t-transparent"></div>
				</div>
			) : (
				<>
					{icon && iconPosition === 'left' && (
						<span className={iconStylingLeft}>{icon}</span>
					)}
					{label && (
						<Typography
							className={cn(defaultTextClassName, getTextColors(), textClassName)}
							size={textSize}
						>
							{label}
						</Typography>
					)}
					{icon && iconPosition === 'right' && (
						<span className={iconStylingRight}>{icon}</span>
					)}
				</>
			)}
		</button>
	)
}
export default Button
