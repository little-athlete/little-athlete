import React from 'react'

const AddsBannerSection = () => {
	return (
		<div className="bg-white pb-16 pt-24">
			<div className="container mx-auto px-6">
				<div className="grid w-full place-items-center">
					<div className="flex h-[450px] rounded-[10px] bg-[url('/banner.png')] bg-contain bg-no-repeat lg:h-[237px] lg:w-[1141px] lg:bg-right">
						<div className="bg-linear-secondary flex w-full items-end justify-end rounded-xl lg:block">
							<div className="my-12 pl-4 pr-4 lg:w-[70%] lg:pl-12">
								<div className="">
									<p className="text-xl font-bold text-white lg:text-[2rem]">
										Mom, Dad, what are you waiting for?
									</p>
									<p className="mt-1 text-sm text-white lg:text-xl">
										Join us for one month free trial
									</p>
								</div>
								<button className="mt-6 flex items-center rounded-full border-2 border-border bg-white px-6 py-2 text-base font-semibold text-black">
									Start Free Trial
								</button>
							</div>
						</div>
						{/* <div className="my-12 w-[70%] pl-12">
                    <div className="">
                        <p className="text-[2rem] font-bold text-white">
                            Mom, Dad, what are you waiting for?
                        </p>
                        <p className="mt-1 text-xl text-white">
                            Join us for one month free trial
                        </p>
                    </div>
                    <button className="mt-6 flex items-center rounded-full border-2 border-border bg-white px-6 py-2 text-base font-semibold text-black">
                        Start Free Trial
                    </button>
                </div> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddsBannerSection
