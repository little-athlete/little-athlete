import Image from 'next/image'
import React from 'react'

const SemiPrivateSection = () => {
	return (
		<div className="bg-white">
			<div className="mx-auto">
				<div className="flex w-full flex-wrap lg:flex-nowrap">
					<div className="order-2 bg-white lg:order-1 lg:min-w-[700px]">
						<Image
							src="/class-people.png"
							alt="Class"
							className="h-full w-[700px] object-fill lg:h-[600px]"
							width={700}
							height={600}
						/>
					</div>
					<div className="order-1 mx-auto flex w-full items-center justify-center px-4 pb-14 pt-20 lg:order-2 lg:pt-0">
						<div>
							<h3 className="mx-auto mb-4 text-[32px] font-bold text-black lg:w-3/4">
								Semi-Private Multi Sport Class
							</h3>
							<p className="mx-auto text-base text-gray-002 lg:w-3/4">
								The best of both worlds: Our semi-private classes combine the
								individualized attention of private coaching with the social
								benefits and affordability of group classes.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SemiPrivateSection
