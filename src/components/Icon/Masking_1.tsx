import { CSSProperties } from 'react'

interface MaskingImage1Props {
	src: string // Gambar yang ingin dimasukkan
	width?: number | string
	height?: number | string
	className?: string
	style?: CSSProperties
}

const MaskingImage1Icon: React.FC<MaskingImage1Props> = ({
	src,
	width = 731,
	height = 495,
	className = '',
	style = {},
	...props
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 731 495"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
			{...props}
		>
			<mask id="image-mask">
				<path
					d="M207.376 116.842C308.981 106.354 341.615 95.2876 412.048 47.4293C516.635 -23.6154 672.661 -23.9372 717.277 111.959C751.583 216.479 718.505 346.156 642.368 405.61C514.161 505.733 276.883 523.634 129.602 446.392C2.62722 379.811 -38.1749 251.718 40.9979 168.241C67.8504 139.928 110.058 126.885 207.376 116.842Z"
					fill="white"
				/>
			</mask>

			<image
				x="0"
				y="0"
				width="731"
				height="495"
				href={src}
				mask="url(#image-mask)"
				preserveAspectRatio="xMidYMid slice"
			/>
		</svg>
	)
}

export default MaskingImage1Icon
