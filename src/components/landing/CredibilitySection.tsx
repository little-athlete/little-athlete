'use client'

interface CredibilityItem {
	value: string | number
	label: string
}

interface CredibilitySectionProps {
	data: CredibilityItem[]
}

const CredibilitySection: React.FC<CredibilitySectionProps> = ({ data }) => {
	return (
		<section id="credibility" className="bg-yellow-400 py-12 md:py-24">
			<div className="container mx-auto px-6 lg:text-center">
				<h2 className="mb-4 text-2xl font-bold text-black lg:text-[2.625rem]">
					Our Credibility
				</h2>
				<p className="mb-8 text-sm text-black lg:mb-12 lg:text-base">
					For almost 2 years, we have grown so fast, delivering high-quality programs for
					future athletes and satisfied parents.
				</p>

				<div className="grid grid-cols-2 gap-6 md:grid-cols-5">
					{data.map((el, i) => (
						<div
							key={i}
							className="rounded-2xl bg-white bg-[url('/bg-blue.png')] bg-cover p-6 text-center text-white shadow-md transition duration-300 hover:scale-105"
						>
							<p className="mb-2 text-[2rem] font-bold lg:text-5xl">{el.value}</p>
							<p className="text-xs lg:mt-6 lg:text-base">{el.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default CredibilitySection
