import React, { CSSProperties } from 'react'

interface LogoIconProps {
	width?: number | string
	height?: number | string
	color?: string
	className?: string
	style?: CSSProperties
}

const LogoIcon: React.FC<LogoIconProps> = ({
	width = 33,
	height = 33,
	color = '#FC8A00',
	className = '',
	style = {},
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 33 33"
			className={className}
			style={style}
			fill="none"
			{...props}
		>
			<g clipPath="url(#clip0_55_1704)">
				<path
					d="M16.1268 2.56543C16.2558 2.58804 16.3862 2.57142 16.5159 2.57807C16.736 2.58937 16.9562 2.60001 17.1763 2.60799C17.2262 2.60999 17.2395 2.62994 17.2348 2.67716C17.2202 2.84077 17.2076 3.00504 17.1956 3.16931C17.1916 3.22718 17.1657 3.25511 17.1045 3.25245C16.9961 3.24646 16.887 3.24646 16.7786 3.24048C16.7167 3.23715 16.6954 3.26375 16.6888 3.32295C16.6416 3.72332 16.5904 4.12369 16.5431 4.52406C16.5345 4.59656 16.5092 4.63048 16.4281 4.62848C16.2691 4.62449 16.1089 4.62183 15.9506 4.64112C15.8754 4.65043 15.8501 4.61917 15.8541 4.54734C15.8748 4.15428 15.8634 3.76123 15.8681 3.36817C15.8694 3.25245 15.8621 3.25045 15.7444 3.26109C15.644 3.27041 15.5429 3.26974 15.4425 3.27706C15.3966 3.28038 15.3879 3.25577 15.3886 3.21919C15.3899 3.00172 15.3886 2.78357 15.4085 2.56676H16.1261L16.1268 2.56543Z"
					fill="black"
				/>
				<path
					d="M11.3097 6.51566C11.355 6.50569 11.3723 6.53029 11.3776 6.58084C11.4408 7.17209 11.5059 7.76267 11.5698 8.35392C11.5798 8.44437 11.5864 8.44902 11.6795 8.43506C11.8684 8.40712 12.0573 8.37786 12.2468 8.35259C12.2947 8.34594 12.3087 8.33064 12.302 8.28076C12.2156 7.63365 12.1324 6.98587 12.046 6.33875C12.0373 6.27424 12.0579 6.25296 12.1185 6.24697C12.594 6.19975 13.0695 6.15187 13.547 6.13258C13.7406 6.1246 13.7452 6.12194 13.7652 6.31215C13.8024 6.66863 13.833 7.02577 13.8669 7.38225C13.9022 7.74937 13.9381 8.11649 13.9727 8.48361C14.0026 8.80351 14.0299 9.12341 14.0585 9.4433C14.0724 9.59627 14.0871 9.7499 14.1024 9.90287C14.1123 10.004 14.105 10.0099 14.0059 10.0206C13.5437 10.0698 13.0841 10.135 12.6266 10.2168C12.5521 10.2301 12.5275 10.2115 12.5175 10.1396C12.467 9.77717 12.4111 9.41471 12.3606 9.05224C12.3539 9.00303 12.3379 8.98906 12.2901 8.99704C12.0859 9.02963 11.881 9.06155 11.6762 9.09082C11.627 9.09813 11.6183 9.11809 11.625 9.16597C11.6729 9.51314 11.7154 9.86097 11.7646 10.2075C11.774 10.2733 11.7487 10.2886 11.6915 10.2986C11.2725 10.3711 10.8568 10.4569 10.4438 10.5573C10.3753 10.5739 10.3613 10.542 10.3507 10.4888C10.2503 9.99731 10.1479 9.50582 10.0488 9.01433C9.90577 8.3067 9.76544 7.5984 9.62112 6.89076C9.60716 6.8216 9.61713 6.791 9.69295 6.77704C10.215 6.67794 10.7384 6.59215 11.2645 6.52032C11.2778 6.51832 11.2911 6.51832 11.3111 6.51699L11.3097 6.51566Z"
					fill="black"
				/>
				<path
					d="M2.15169 9.91927C2.14571 9.8634 2.18361 9.84811 2.21421 9.82815C2.63187 9.55348 3.05619 9.29011 3.48981 9.04071C3.62349 8.96356 3.75983 8.89173 3.89152 8.81193C3.95071 8.77601 3.98995 8.77668 4.04382 8.82456C4.48476 9.21695 4.91706 9.61866 5.34137 10.029C5.80759 10.4806 6.25518 10.9488 6.69745 11.4237C6.70676 11.4336 6.71475 11.4443 6.72472 11.4529C6.78258 11.5015 6.77194 11.5334 6.70743 11.5693C6.31105 11.7914 5.92531 12.0322 5.54488 12.2816C5.39391 12.3807 5.39391 12.3794 5.26489 12.2523C5.17045 12.1592 5.07268 12.0688 4.97891 11.975C4.94499 11.9411 4.91706 11.9351 4.87449 11.959C4.69426 12.0615 4.51336 12.1632 4.33113 12.261C4.28258 12.2869 4.2879 12.3195 4.29921 12.3607C4.34244 12.517 4.38301 12.674 4.4289 12.829C4.44552 12.8855 4.43488 12.9154 4.38034 12.942C3.91613 13.1668 3.46122 13.4089 3.01628 13.6703C2.95111 13.7088 2.93714 13.6809 2.92184 13.6231C2.7303 12.8988 2.56271 12.1685 2.41838 11.4336C2.32128 10.9415 2.2335 10.4473 2.15834 9.95119C2.15635 9.93789 2.15302 9.92526 2.15236 9.91993L2.15169 9.91927ZM3.76449 10.601C3.83366 10.877 3.90282 11.149 3.97066 11.421C3.98064 11.4609 4.00059 11.4662 4.03384 11.4469C4.14491 11.3844 4.25531 11.3212 4.36771 11.2607C4.40894 11.2388 4.39764 11.2201 4.37236 11.1955C4.32514 11.149 4.28058 11.0998 4.23336 11.0532C4.07973 10.9036 3.92477 10.7553 3.76449 10.601Z"
					fill="black"
				/>
				<path
					d="M29.2253 11.2812C29.2047 11.2699 29.1808 11.258 29.1588 11.244C28.7658 10.9999 28.3654 10.7685 27.9604 10.545C27.9012 10.5124 27.8659 10.5137 27.8307 10.5723C27.8034 10.6175 27.7708 10.6607 27.7356 10.7C27.6937 10.7472 27.7063 10.7724 27.7569 10.8037C28.0156 10.9613 28.273 11.1216 28.5303 11.2812C28.6121 11.3318 28.6121 11.3331 28.551 11.4109C28.408 11.5931 28.263 11.7734 28.1233 11.9569C28.0847 12.0075 28.0542 12.0062 28.0049 11.9762C27.7529 11.8279 27.4988 11.6836 27.2474 11.5346C27.1882 11.4994 27.149 11.4987 27.1117 11.5632C27.0758 11.6251 27.0326 11.6829 26.988 11.7395C26.9521 11.7847 26.9601 11.8066 27.0093 11.8352C27.3764 12.0501 27.7382 12.2735 28.0921 12.5096C28.1872 12.5728 28.1872 12.5735 28.118 12.6632C27.9125 12.9313 27.7043 13.1973 27.5015 13.4667C27.4582 13.5238 27.427 13.5219 27.3718 13.4866C26.7586 13.0975 26.1261 12.7417 25.4763 12.4178C25.3333 12.3467 25.1897 12.2775 25.0454 12.211C24.9928 12.1864 24.9815 12.1631 25.0101 12.1086C25.6027 10.9939 26.1939 9.87859 26.7832 8.76194C26.8165 8.69942 26.8464 8.6941 26.9069 8.72469C27.9205 9.23347 28.8955 9.80743 29.8339 10.4446C29.8738 10.4718 29.8997 10.4911 29.8572 10.5423C29.6663 10.7711 29.4794 11.0026 29.2905 11.2327C29.2739 11.2526 29.2593 11.2759 29.2253 11.2806V11.2812Z"
					fill="black"
				/>
				<path
					d="M17.9079 10.044C17.9371 9.83645 17.9664 9.62895 17.9963 9.42145C18.0735 8.88274 18.1506 8.34403 18.2291 7.80599C18.3036 7.29388 18.3801 6.78178 18.4552 6.26967C18.4625 6.21913 18.4832 6.19718 18.5403 6.2045C19.6277 6.33818 20.7018 6.53969 21.7633 6.80772C21.8637 6.83299 21.8637 6.83365 21.8311 6.9281C21.738 7.19678 21.6429 7.46481 21.5525 7.73416C21.5305 7.79934 21.4979 7.81131 21.4341 7.79801C20.9905 7.70224 20.5429 7.62442 20.0946 7.55393C20.0441 7.54595 20.0201 7.55991 20.0082 7.60713C19.9942 7.661 19.9809 7.71554 19.9596 7.76741C19.931 7.83791 19.9596 7.85986 20.0255 7.87316C20.3068 7.92969 20.5868 7.99088 20.8681 8.04741C20.9379 8.06138 20.9612 8.08332 20.9346 8.15848C20.8575 8.37662 20.7863 8.59609 20.7178 8.8169C20.6985 8.87808 20.6719 8.89471 20.6094 8.88274C20.336 8.82953 20.0607 8.78298 19.7874 8.72977C19.7129 8.71514 19.673 8.73243 19.6603 8.81091C19.651 8.86811 19.6311 8.92397 19.6158 8.9805C19.5878 9.08093 19.5878 9.08093 19.6942 9.10022C20.0028 9.15542 20.3088 9.22259 20.614 9.29242C20.7071 9.3137 20.7996 9.33765 20.8934 9.3576C20.9479 9.36891 20.9699 9.38952 20.9499 9.45071C20.8402 9.78923 20.7338 10.1291 20.6273 10.4689C20.6107 10.5221 20.5834 10.5295 20.5322 10.5181C20.1226 10.4284 19.7109 10.3486 19.2959 10.2834C18.9055 10.2222 18.5137 10.1683 18.12 10.1297C18.0701 10.1251 18.0196 10.1171 17.9697 10.1145C17.9225 10.1118 17.9005 10.0925 17.9085 10.044H17.9079Z"
					fill="black"
				/>
				<path
					d="M22.4697 7.03785C22.6173 7.08175 22.7656 7.12365 22.9126 7.16887C24.0246 7.50806 25.1093 7.91973 26.1661 8.40524C26.1854 8.41388 26.204 8.42452 26.224 8.43251C26.2672 8.4498 26.2785 8.47507 26.2566 8.51896C26.097 8.83155 25.938 9.14413 25.7811 9.45804C25.7518 9.51591 25.7159 9.49529 25.676 9.47933C25.398 9.36626 25.118 9.25653 24.842 9.14014C24.7708 9.11021 24.7429 9.1275 24.7083 9.19202C24.3279 9.89899 23.9528 10.608 23.5857 11.3216C23.5504 11.3907 23.5152 11.3954 23.4493 11.3715C23.0795 11.2384 22.7038 11.1221 22.3247 11.017C22.2529 10.997 22.2402 10.9698 22.2635 10.8993C22.5169 10.1437 22.7663 9.38622 23.0197 8.6307C23.0443 8.55687 23.0323 8.53027 22.9558 8.51165C22.6745 8.44315 22.3958 8.36467 22.1152 8.29484C22.0427 8.27688 22.0281 8.25094 22.0513 8.17978C22.1697 7.8213 22.2828 7.4615 22.3985 7.10303C22.4091 7.07044 22.4125 7.02322 22.4697 7.03719V7.03785Z"
					fill="black"
				/>
				<path
					d="M9.26664 7.98635C9.26863 8.03424 9.22806 8.0349 9.1968 8.04554C8.9188 8.13466 8.6408 8.22578 8.36147 8.31091C8.28699 8.33352 8.26304 8.36212 8.28033 8.44591C8.43862 9.22405 8.60023 10.0015 8.77182 10.7763C8.79577 10.8847 8.79709 10.8847 8.69201 10.924C8.33088 11.059 7.9744 11.2046 7.62191 11.3596C7.52614 11.4015 7.52614 11.4028 7.48691 11.3017C7.20159 10.5688 6.91694 9.83591 6.63229 9.10234C6.59105 8.99593 6.58972 8.99393 6.48863 9.04115C6.23059 9.16087 5.9732 9.28124 5.71582 9.40229C5.62138 9.44685 5.62205 9.44818 5.58414 9.35573C5.4458 9.01322 5.31013 8.66938 5.16913 8.3282C5.1392 8.25637 5.14718 8.22312 5.22234 8.19053C6.41614 7.67111 7.64054 7.24081 8.89819 6.90494C9.01191 6.87435 9.01324 6.87435 9.04051 6.99007C9.11367 7.30598 9.1855 7.62189 9.25732 7.9378C9.26065 7.9531 9.26398 7.96906 9.2673 7.98635H9.26664Z"
					fill="black"
				/>
				<path
					d="M14.5905 7.52657C14.5905 7.0251 14.5918 6.57086 14.5892 6.11661C14.5892 6.03681 14.6138 6.00954 14.6936 6.00887C15.201 6.00422 15.7085 6.00222 16.2166 6.01087C16.2964 6.0122 16.3756 6.02284 16.4554 6.02084C16.5239 6.01951 16.5438 6.04279 16.5312 6.11063C16.484 6.36336 16.4414 6.61741 16.3962 6.87081C16.3097 7.35431 16.2465 7.84114 16.198 8.32997C16.1913 8.40047 16.2326 8.41045 16.2844 8.41311C16.3955 8.41909 16.5072 8.42375 16.6183 8.4304C16.9043 8.44702 17.1909 8.46432 17.4769 8.47961C17.5414 8.48294 17.5574 8.50888 17.5447 8.57139C17.4716 8.92188 17.3998 9.27371 17.3306 9.62487C17.3186 9.68472 17.29 9.70135 17.2328 9.70135C16.9668 9.69935 16.7008 9.69403 16.4354 9.70268C15.9951 9.71731 15.5549 9.73194 15.1159 9.77517C14.9736 9.78914 14.8299 9.79845 14.6876 9.81242C14.6317 9.81774 14.6105 9.79845 14.6111 9.74258C14.6124 9.63883 14.6098 9.53508 14.6078 9.43199C14.5991 8.78089 14.5852 8.13045 14.5912 7.5259L14.5905 7.52657Z"
					fill="black"
				/>
				<path
					d="M20.8788 3.64824C20.7079 3.62363 20.5177 3.60035 20.3294 3.56776C20.243 3.55313 20.2596 3.61698 20.243 3.65821C20.2224 3.71009 20.2516 3.72206 20.2955 3.72938C20.4053 3.748 20.5143 3.77194 20.6241 3.79123C20.6813 3.8012 20.6992 3.82648 20.6806 3.885C20.6473 3.98875 20.6194 4.09384 20.5915 4.19958C20.5775 4.25146 20.5496 4.26542 20.4977 4.25545C20.3906 4.23483 20.2822 4.22286 20.1758 4.20158C20.0714 4.1803 20.086 4.26343 20.0661 4.31796C20.0401 4.38846 20.098 4.38447 20.1352 4.39179C20.3015 4.42571 20.4684 4.45896 20.636 4.48889C20.6926 4.49886 20.7065 4.52347 20.6919 4.57601C20.6453 4.74228 20.5995 4.90855 20.5562 5.07615C20.5423 5.13068 20.5157 5.13866 20.4638 5.12935C20.0694 5.05819 19.6737 4.99434 19.2753 4.94779C19.1988 4.93914 19.2101 4.89325 19.2188 4.84537C19.2673 4.56537 19.3159 4.28538 19.3651 4.00538C19.4276 3.64957 19.4915 3.29442 19.5506 2.93794C19.5626 2.86611 19.5866 2.83752 19.663 2.85082C20.1186 2.92797 20.5742 3.00378 21.0264 3.10022C21.0903 3.11352 21.1136 3.13281 21.0923 3.19998C21.051 3.329 21.0165 3.46002 20.9792 3.59038C20.9672 3.63294 20.948 3.66487 20.8781 3.64824H20.8788Z"
					fill="black"
				/>
				<path
					d="M15.0128 2.90323C15.0128 2.98038 15.0102 3.05753 15.0135 3.13401C15.0161 3.19453 14.9929 3.22047 14.9317 3.22247C14.8259 3.22579 14.7195 3.23643 14.6138 3.23976C14.5493 3.24175 14.5213 3.26237 14.5187 3.3342C14.506 3.74255 14.4874 4.15091 14.4734 4.55926C14.4714 4.62045 14.4488 4.6404 14.389 4.64572C14.2254 4.66102 14.0618 4.6803 13.8995 4.70358C13.8263 4.71422 13.7991 4.69094 13.7944 4.61845C13.7685 4.22938 13.7399 3.84032 13.7119 3.45125C13.704 3.33819 13.6986 3.33353 13.5916 3.34816C13.4891 3.36213 13.3861 3.37277 13.2836 3.38807C13.2391 3.39472 13.2205 3.38208 13.2178 3.33619C13.2052 3.14266 13.1912 2.94979 13.1746 2.75692C13.1686 2.68974 13.2125 2.68309 13.259 2.67844C13.3834 2.66647 13.5071 2.6545 13.6315 2.64585C14.0551 2.61659 14.4788 2.58599 14.9031 2.57801C15.0122 2.57602 15.0122 2.57801 15.0128 2.68841C15.0128 2.76024 15.0128 2.83207 15.0128 2.9039V2.90323Z"
					fill="black"
				/>
				<path
					d="M11.7221 4.72344C11.7367 4.79327 11.7088 4.81854 11.6563 4.83118C11.2772 4.92296 10.9001 5.02338 10.5263 5.13778C10.4591 5.15839 10.4385 5.13578 10.4259 5.0726C10.3042 4.46073 10.1825 3.84953 10.0694 3.23634C10.0568 3.16717 10.0721 3.14123 10.1406 3.1286C10.3727 3.0847 10.6035 3.03549 10.8356 2.9896C10.9273 2.97164 10.9347 2.97696 10.942 3.07206C10.9553 3.24432 10.9666 3.41591 10.9779 3.58816C10.9912 3.79234 11.0158 3.99452 11.0411 4.19736C11.0471 4.24525 11.067 4.25257 11.1102 4.24392C11.2798 4.212 11.4501 4.18473 11.6197 4.15214C11.6742 4.1415 11.6922 4.16145 11.6948 4.212C11.7035 4.38691 11.7135 4.56182 11.7228 4.72344H11.7221Z"
					fill="black"
				/>
				<path
					d="M18.6993 4.68904C18.3209 4.66842 17.9524 4.65446 17.5826 4.65911C17.5122 4.65978 17.4869 4.63583 17.4942 4.566C17.5308 4.2175 17.564 3.86901 17.5999 3.52051C17.6272 3.25116 17.6591 2.98247 17.6831 2.71245C17.6897 2.63995 17.7123 2.61601 17.7848 2.62333C18.0276 2.6486 18.271 2.66988 18.5144 2.6905C18.5929 2.69715 18.5749 2.7457 18.5643 2.79292C18.4891 3.12147 18.412 3.45001 18.3541 3.78255C18.3229 3.96212 18.3209 3.96145 18.5064 3.98273C18.6355 3.99736 18.7645 4.01466 18.8942 4.02796C18.9434 4.03261 18.968 4.04658 18.9547 4.10178C18.9108 4.28002 18.8689 4.45826 18.827 4.6365C18.807 4.72296 18.7379 4.6784 18.6993 4.68904Z"
					fill="black"
				/>
				<path
					d="M12.846 4.46354C12.846 4.56729 12.8441 4.63646 12.846 4.70563C12.848 4.75418 12.8288 4.77812 12.7802 4.7861C12.6073 4.81603 12.435 4.84795 12.2634 4.88054C12.2116 4.89052 12.187 4.87854 12.179 4.82068C12.1125 4.35048 12.0433 3.88027 11.9741 3.41007C11.9542 3.27373 11.9349 3.13672 11.9123 3.00105C11.9016 2.9372 11.9163 2.90528 11.9881 2.89397C12.2295 2.85606 12.4696 2.81217 12.7097 2.76827C12.7729 2.75697 12.7982 2.7696 12.7995 2.8421C12.8068 3.29102 12.8188 3.73928 12.8308 4.1882C12.8334 4.29195 12.8421 4.39504 12.846 4.46421V4.46354Z"
					fill="black"
				/>
				<path
					d="M23.4007 25.6539C22.739 25.6559 22.1976 25.5289 21.6775 25.3001C21.0324 25.0161 20.489 24.6011 20.0508 24.0491C19.8719 23.8236 19.7182 23.5809 19.5885 23.3241C19.5599 23.2676 19.536 23.2689 19.4855 23.2929C19.0658 23.4951 18.6328 23.664 18.1812 23.7804C17.8022 23.8781 17.4184 23.9433 17.026 23.9593C15.9865 24.0018 15.0275 23.7332 14.1356 23.2111C13.5996 22.8972 13.15 22.4808 12.7749 21.9873C12.1883 21.2159 11.8504 20.3446 11.7434 19.3823C11.6549 18.5882 11.76 17.8134 11.9761 17.0499C12.1417 16.4639 12.3958 15.9199 12.7456 15.4211C13.1234 14.8824 13.5849 14.4288 14.1236 14.0511C14.7428 13.6174 15.4225 13.3168 16.1475 13.1173C16.6143 12.9889 17.0885 12.8985 17.5727 12.8626C18.0422 12.8273 18.5125 12.8213 18.9827 12.838C19.7116 12.8639 20.4265 12.9783 21.1129 13.2337C21.6077 13.4172 22.056 13.6813 22.4124 14.075C22.5248 14.1987 22.6246 14.2187 22.7815 14.2007C23.6195 14.1063 24.3398 14.637 24.5008 15.4011C24.5945 15.8481 24.4961 16.2538 24.264 16.6362C24.1044 16.9002 23.9135 17.1436 23.7366 17.395C23.4679 17.7768 23.2983 18.2011 23.1779 18.648C23.0423 19.1488 22.989 19.6603 22.9791 20.177C22.9731 20.469 22.9638 20.761 23.015 21.0503C23.0389 21.1859 23.0669 21.3216 23.1413 21.442C23.2152 21.5617 23.2757 21.583 23.4074 21.5284C23.5803 21.4566 23.7313 21.3469 23.8889 21.2485C24.2274 21.037 24.5686 20.8295 24.965 20.7423C25.3673 20.6539 25.8342 20.6466 26.2306 20.7683C26.5691 20.8727 26.8804 21.0842 27.0693 21.3841C27.3832 21.8829 27.4164 22.6897 27.2275 23.241C27.1218 23.5509 26.9429 23.8163 26.7474 24.0723C26.4787 24.4242 26.1282 24.6822 25.7571 24.915C25.3427 25.175 24.8991 25.3719 24.4276 25.5016C24.0618 25.602 23.69 25.6605 23.4021 25.6539H23.4007ZM15.7511 18.7604C15.781 19.3311 16.1654 19.8598 16.7779 19.9023C16.9642 19.9156 17.1404 19.8585 17.3147 19.7999C17.6286 19.6948 17.9159 19.5326 18.2072 19.3789C18.5131 19.218 18.8144 19.0497 19.1117 18.8735C19.1542 18.8482 19.1862 18.8209 19.1961 18.7664C19.3065 18.1612 19.4682 17.5699 19.7049 17.0006C19.7661 16.853 19.7648 16.8537 19.6072 16.8251C19.2786 16.7645 18.9467 16.7665 18.6149 16.7606C18.0389 16.7499 17.4823 16.8364 16.9475 17.0545C16.3483 17.2986 15.8389 17.8706 15.7597 18.5257C15.7504 18.6041 15.7478 18.6826 15.7517 18.7604H15.7511Z"
					fill="black"
				/>
				<path
					d="M10.3002 31.1045C9.34113 31.0905 8.40204 30.8943 7.5308 30.4288C6.97347 30.1308 6.50061 29.7278 6.0989 29.239C5.52096 28.5353 5.14187 27.7299 4.86985 26.8693C4.6118 26.0533 4.45352 25.216 4.35642 24.3667C4.29922 23.8679 4.27328 23.3664 4.25732 22.8649C4.23803 22.273 4.23803 21.6811 4.25134 21.0892C4.26264 20.595 4.2959 20.1022 4.3378 19.6101C4.38701 19.0328 4.45418 18.4575 4.53532 17.8842C4.62777 17.2285 4.7395 16.576 4.93769 15.9429C5.06405 15.5378 5.227 15.1481 5.50566 14.8189C5.87943 14.3773 6.35296 14.1246 6.93024 14.0793C7.57869 14.0288 8.1287 14.2496 8.56698 14.7251C9.0199 15.2159 9.11966 15.8524 9.02854 16.4949C8.86161 17.6774 8.7532 18.8359 8.74389 20.0337C8.74057 20.5086 8.74655 20.9834 8.76384 21.4583C8.78779 22.1034 8.81572 22.7485 8.88289 23.3903C8.94208 23.9583 9.02588 24.5249 9.17087 25.0776C9.26996 25.4547 9.39965 26.0832 9.75147 26.304C9.87451 26.3812 10.0228 26.4058 10.1678 26.4151C10.9147 26.461 11.6609 26.1584 12.3466 25.897C12.7137 25.7567 13.0722 25.5931 13.4466 25.4707C14.1662 25.2352 14.8778 25.2605 15.5529 25.6083C16.2565 25.9715 16.6503 26.5614 16.7128 27.3581C16.7633 27.9953 16.5359 28.5393 16.1435 29.0275C15.8695 29.368 15.5303 29.624 15.1359 29.8043C14.3571 30.1601 13.5583 30.4674 12.7376 30.7141C12.1178 30.9003 11.4853 31.0267 10.8389 31.0772C10.6666 31.0905 10.4944 31.1012 10.2982 31.1052L10.3002 31.1045Z"
					fill="black"
				/>
				<path
					d="M29.2413 20.8871C29.2174 20.4834 29.0265 20.0916 28.7206 19.8269C28.4678 19.6075 28.1479 19.5104 27.8254 19.535C27.9019 20.2672 28.4998 20.8445 29.2413 20.8897C29.2413 20.8891 29.2413 20.8877 29.2413 20.8871Z"
					fill="black"
				/>
				<path
					d="M29.6723 18.339C29.7687 18.603 29.9443 18.8558 30.1704 19.0247C30.2675 19.0978 30.3759 19.1544 30.493 19.1863C30.5921 19.2136 30.6592 19.2182 30.7643 19.2229C30.7916 19.2242 30.8188 19.2249 30.8468 19.2249C30.7796 18.5399 30.2575 17.9892 29.5871 17.8774C29.5858 18.0331 29.6184 18.1907 29.6729 18.339H29.6723Z"
					fill="black"
				/>
				<path
					d="M30.6693 19.4757C30.384 19.4498 30.1346 19.342 29.9184 19.1518C29.5686 18.8426 29.3139 18.3391 29.3259 17.8569C28.5258 17.8616 27.8727 18.4861 27.8208 19.2742C28.0004 19.2609 28.1819 19.2782 28.3555 19.3327C28.8118 19.4764 29.1702 19.8395 29.3551 20.2751C29.4383 20.4713 29.4855 20.6775 29.4961 20.885C30.2224 20.8079 30.795 20.2186 30.8475 19.485C30.7877 19.4844 30.7272 19.4817 30.668 19.4764L30.6693 19.4757Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_55_1704">
					<rect
						width="28.6965"
						height="28.5389"
						fill="white"
						transform="translate(2.15167 2.56543)"
					/>
				</clipPath>
			</defs>
		</svg>
	)
}

export default LogoIcon
