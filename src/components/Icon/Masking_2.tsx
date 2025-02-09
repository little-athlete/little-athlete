import React, { CSSProperties } from 'react'

interface MaskingImage2Props {
	src: string // Gambar yang ingin dimasukkan
	width?: number | string
	height?: number | string
	className?: string
	style?: CSSProperties
}

const MaskingImage2Icon: React.FC<MaskingImage2Props> = ({
	src,
	width = 770,
	height = 615,
	className = '',
	style = {},
	...props
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 770 615"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
			{...props}
		>
			{/* Masking Definition */}
			<mask id="mask-image-2">
				<path
					d="M518.142 479.053C417.703 476.322 384.269 483.728 308.452 525.506C195.874 587.521 44.0475 566.345 21.3799 413.972C3.95392 296.781 55.9167 161.816 139.052 108.348C279.043 18.3048 512.592 31.7731 644.079 135.198C757.438 224.351 777.586 367.802 687.832 446.7C657.391 473.46 614.343 481.671 518.142 479.053Z"
					fill="white"
				/>
			</mask>

			{/* Gambar dengan Mask */}
			<image
				x="0"
				y="0"
				width="770"
				height="615"
				href={src} // Masukkan gambar
				mask="url(#mask-image-2)"
				preserveAspectRatio="xMidYMid slice"
			/>
		</svg>
	)
}

export default MaskingImage2Icon
