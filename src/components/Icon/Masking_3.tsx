import React, { CSSProperties } from 'react'

interface MaskingImage2Props {
	src: string // Gambar yang ingin dimasukkan
	width?: number | string
	height?: number | string
	className?: string
	style?: CSSProperties
}

const MaskingImage3Icon: React.FC<MaskingImage2Props> = ({
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
			<mask id="mask-image-3">
				<path
					d="M286.239 90.6116C380.951 119.097 414.621 120.68 497.416 100.536C620.349 70.6438 759.122 129.898 741.377 280.493C727.722 396.315 643.567 511.133 550.807 540.496C394.607 589.948 176.212 516.949 77.9633 384.802C-6.74331 270.887 11.0953 129.418 116.697 77.6034C152.514 60.0292 195.526 63.3258 286.239 90.6116Z"
					fill="white"
				/>
			</mask>

			{/* Gambar dengan Mask */}
			<image
				x="0"
				y="0"
				width="100%"
				height="615"
				href={src}
				mask="url(#mask-image-3)"
				preserveAspectRatio="xMaxYMax slice"
			/>
		</svg>
	)
}

export default MaskingImage3Icon
