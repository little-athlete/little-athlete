import { LandingContentProps } from '@/components/Admin/LandingContent/LandingContentProps'
import Box, { BoxDirection } from '@/components/Box'
import Input, { InputType } from '@/components/InputField/InputField'
import Typography, { TextSize } from '@/components/Typography/Typography'
import { ISectionLink } from '@/db/firestore/interfaces/landing'
import { onChangeArrayItem } from '@/utils/stateUtils'

const HeaderNavbarForm = ({ contentData, setContentData }: LandingContentProps) => {
	const onChangeTestimony = (field: keyof ISectionLink, value: string, index: number) => {
		const newValue = { ...contentData?.sections[index], [field]: value }
		onChangeArrayItem(contentData, setContentData, 'sections', newValue, index)
	}

	// const onAddTestimony = () => {
	// 	onChangeArrayItem(contentData, setContentData, 'testimony_data', DefaultTestimony)
	// }

	// const onDeleteTestimony = (index: number) => {
	// 	onDeleteArrayItem(contentData, setContentData, 'testimony_data', index)
	// }

	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			{/*Testimony Data Start*/}
			<Typography className="mb-2 block text-sm font-medium text-black">
				Header List Navbar
			</Typography>
			{contentData?.sections?.map((item, i) => (
				<Box
					flex
					flexDirection={BoxDirection.Col}
					className={'my-6 gap-2 rounded-lg p-12 shadow-lg'}
					key={`testimony_${i}`}
				>
					<Typography>Section {i + 1}</Typography>
					<Input
						label={'Label'}
						type={InputType.Text}
						value={String(item.label)}
						onChange={(e) => onChangeTestimony('label', e.target.value, i)}
					/>
					<Input
						label={'Key'}
						type={InputType.Text}
						value={String(item.key)}
						onChange={(e) => onChangeTestimony('key', e.target.value, i)}
					/>
					<Typography size={TextSize.Small}>
						*keys must always be marked with <b>#</b> at the beginning of the letter
					</Typography>
				</Box>
			))}
			{/* <Button
				variant={ButtonVariant.Secondary}
				label={'Add Testimony'}
				textSize={TextSize.XSmall}
				onClick={() => onAddTestimony()}
			/> */}
			{/*Testimony Data End*/}
		</Box>
	)
}
export default HeaderNavbarForm
