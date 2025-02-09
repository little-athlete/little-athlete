import React, { CSSProperties } from 'react'

interface MaskingImage4Props {
	src: string // Gambar yang ingin dimasukkan
	width?: number | string
	height?: number | string
	className?: string
	style?: CSSProperties
}

const MaskingImage4Icon: React.FC<MaskingImage4Props> = ({
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
			<mask id="mask-image-4">
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
				mask="url(#mask-image-4)"
				preserveAspectRatio="xMaxYMax slice"
			/>
		</svg>
	)
}

export default MaskingImage4Icon

{
	/* <svg width="770" height="615" viewBox="0 0 770 615" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<mask id="mask0_55_1861" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="18" y="48" width="726" height="511">
<path d="M518.142 479.053C417.703 476.322 384.269 483.728 308.452 525.506C195.874 587.521 44.0475 566.345 21.3799 413.972C3.95392 296.781 55.9167 161.816 139.052 108.348C279.043 18.3048 512.592 31.7731 644.079 135.198C757.438 224.351 777.586 367.802 687.832 446.7C657.391 473.46 614.343 481.671 518.142 479.053Z" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0_55_1861)">
<rect x="4.03798" y="11.1387" width="822.848" height="960.204" fill="url(#pattern0_55_1861)"/>
</g>
<defs>
<pattern id="pattern0_55_1861" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_55_1861" transform="matrix(0.00126904 0 0 0.0010875 0 -0.0916013)"/>
</pattern>
</defs>
</svg> */
}
