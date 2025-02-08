import React, { useRef, useState } from 'react'
import { cn } from '@/utils/tailwind'
import './InputField.css'
import IconClock from '../Icon/IconClock'
import IconEyeOpenSvg from '../Icon/IconEyeOpen'
import IconEyeClose from '../Icon/IconEyeOff'

export enum InputType {
	Text = 'text',
	Password = 'password',
	Email = 'email',
	Number = 'number',
	Date = 'date',
	Time = 'time',
	Checkbox = 'checkbox',
	Radio = 'radio',
	Select = 'select',
	Textarea = 'textarea',
	Search = 'search',
	Url = 'url',
}

export interface InputProps {
	type?: InputType
	readOnly?: boolean
	name?: string
	label?: string
	placeholder?: string
	value?: string
	defaultValue?: string
	onChange?: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => void
	onBlur?: (
		event: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => void
	onFocus?: (
		event: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => void
	required?: boolean
	disabled?: boolean
	error?: string
	className?: string
	inputClassName?: string
	labelClassName?: string
	errorClassName?: string
	options?: Array<{ label: string | number; value: string | number; disabled?: boolean }>
	prefix?: React.ReactNode
	suffix?: React.ReactNode
	isFocused?: boolean
	onPrefixClick?: () => void
	onSuffixClick?: () => void
}

const Input: React.FC<InputProps> = ({
	type = InputType.Text,
	readOnly,
	name,
	label,
	placeholder,
	value,
	defaultValue,
	onChange,
	onFocus,
	onBlur,
	required,
	disabled,
	error,
	className,
	inputClassName,
	labelClassName,
	errorClassName,
	options,
	prefix,
	suffix,
	isFocused, // For keep the style of the input when interact with other component
	onPrefixClick,
	onSuffixClick,
}) => {
	const inputRef = useRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(null)
	const [showPassword, setShowPassword] = useState(false)

	const handleBlur = (
		event: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		if (onBlur) {
			onBlur(event)
		}
	}

	const renderInput = () => {
		const isPasswordType = type === InputType.Password
		const inputType =
			isPasswordType && !showPassword
				? 'password'
				: (type === InputType.Password && showPassword) || type === InputType.Search
					? 'text'
					: type
		return (
			<div className="relative">
				{prefix && (
					<span
						className={`absolute left-3 top-1/2 -translate-y-1/2 transform ${onPrefixClick ? 'cursor-pointer' : ''}`}
						onClick={onPrefixClick}
					>
						{prefix}
					</span>
				)}

				{type === InputType.Select ? (
					<select
						ref={inputRef as React.RefObject<HTMLSelectElement>}
						value={value}
						onChange={onChange}
						onBlur={handleBlur}
						required={required}
						disabled={disabled}
						className={cn(
							'focus:shadow-outline border-slate-350 w-full appearance-none rounded-lg border p-3 leading-tight text-gray-700 shadow focus:outline-none',
							inputClassName,
							{ 'pl-10': prefix, 'cursor-not-allowed opacity-50': disabled }
						)}
					>
						{placeholder ? (
							<option key={''} value={''}>
								{placeholder}
							</option>
						) : null}
						{options?.map((option) => (
							<option
								key={option.value}
								value={option.value}
								disabled={option.disabled}
								selected={option.disabled}
							>
								{option.label}
							</option>
						))}
					</select>
				) : type === InputType.Textarea ? (
					<textarea
						ref={inputRef as React.RefObject<HTMLTextAreaElement>}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						onBlur={handleBlur}
						required={required}
						disabled={disabled}
						className={cn(
							'focus:shadow-outline border-slate-350 w-full resize-none rounded-lg border p-3 leading-tight text-gray-700 shadow focus:outline-2 focus:outline-slate-800',
							inputClassName,
							{ 'pl-10': prefix }
						)}
					/>
				) : type === InputType.Date ? (
					<div className="relative">
						<input
							ref={inputRef as React.RefObject<HTMLInputElement>}
							type="date"
							value={value}
							onChange={onChange}
							className="date-input texoutline-700 border-slate-350 w-full rounded-lg border p-3 leading-tight placeholder-slate-900 shadow [appearance:textfield] focus:outline-2 focus:outline-slate-800 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
						/>
						<span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform">
							<IconClock />
						</span>
					</div>
				) : (
					<input
						name={name}
						readOnly={readOnly}
						ref={inputRef as React.RefObject<HTMLInputElement>}
						type={inputType}
						placeholder={placeholder}
						value={value}
						defaultValue={defaultValue}
						onChange={onChange}
						onFocus={onFocus}
						onBlur={handleBlur}
						required={required}
						disabled={disabled}
						className={cn(
							'border-slate-350 leading-5.5 w-full rounded-lg border p-3 text-gray-700 placeholder-slate-900 shadow [appearance:textfield] focus:outline-2 focus:outline-slate-800 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
							inputClassName,
							{
								'pl-10': prefix,
								'pr-10': suffix || isPasswordType,
								'border-2 border-slate-800': isFocused,
							}
						)}
						aria-invalid={error ? 'true' : 'false'}
						aria-required={required}
					/>
				)}
				{isPasswordType && (
					<button
						type="button"
						className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
						onClick={() => setShowPassword((prev) => !prev)}
					>
						{showPassword ? <IconEyeOpenSvg /> : <IconEyeClose />}
					</button>
				)}
				{suffix && (
					<span
						className={`absolute right-3 top-1/2 -translate-y-1/2 transform ${onSuffixClick ? 'cursor-pointer' : ''}`}
						onClick={onSuffixClick}
					>
						{suffix}
					</span>
				)}
			</div>
		)
	}

	return (
		<div className={`input-group ${className}`}>
			{label && (
				<label
					className={`mb-2 block text-sm font-medium text-black ${labelClassName}`}
					htmlFor={label}
				>
					{label} {required && <span className="text-danger-500">*</span>}
				</label>
			)}
			{renderInput()}
			{error && <p className={`text-xs italic text-red-500 ${errorClassName}`}>{error}</p>}
		</div>
	)
}

export default Input
