import React, { CSSProperties } from 'react'

interface IconDirectionProps {
	width?: number | string
	height?: number | string
	color?: string
	className?: string
	style?: CSSProperties
}

const IconDirection: React.FC<IconDirectionProps> = ({
	width = 25,
	height = 25,
	className = '',
	style = {},
	...props
}) => {
	return (
		<svg
			width={width}
			height={height}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
			viewBox="0 0 25 25"
			{...props}
		>
			<g clipPath="url(#clip0_129_103)">
				<path
					d="M15.8178 24.958C14.8412 24.958 13.9721 24.3024 13.7039 23.3637L11.1085 14.2798L2.02469 11.6845C1.08597 11.4162 0.43042 10.5471 0.43042 9.5709C0.43042 8.58095 1.06726 7.72501 2.01517 7.44062L23.5252 0.987623C23.6468 0.951169 23.776 0.948314 23.8991 0.979363C24.0222 1.01041 24.1346 1.07421 24.2244 1.16398C24.3142 1.25375 24.378 1.36614 24.409 1.48924C24.4401 1.61234 24.4372 1.74155 24.4007 1.86315L17.9477 23.3732C17.6634 24.3211 16.8074 24.958 15.8178 24.958Z"
					fill="#02D9FF"
				/>
				<path
					d="M15.8178 24.9581C14.8412 24.9581 13.9721 24.3025 13.7039 23.3638L11.1085 14.28L24.2244 1.16406C24.3142 1.25384 24.378 1.36625 24.409 1.48936C24.4401 1.61247 24.4372 1.74169 24.4007 1.8633L17.9477 23.3734C17.6633 24.3212 16.8074 24.9581 15.8178 24.9581Z"
					fill="#23B0FF"
				/>
			</g>
			<defs>
				<clipPath id="clip0_129_103">
					<rect
						width="24"
						height="24"
						fill="white"
						transform="translate(0.43042 0.958008)"
					/>
				</clipPath>
			</defs>
		</svg>
	)
}

export default IconDirection
