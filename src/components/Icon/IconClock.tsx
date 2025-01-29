import React, { CSSProperties } from 'react'

interface IconClockProps {
	width?: number | string
	height?: number | string
	color?: string
	className?: string
	style?: CSSProperties
}

const IconClock: React.FC<IconClockProps> = ({
	width = 24,
	height = 24,
	color = '#000',
	className = '',
	style = {},
	...props
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
			{...props}
		>
			<path
				d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
				stroke={color}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	)
}

export default IconClock
