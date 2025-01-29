import React, { useRef, useState } from 'react'
import Box from '../Box'
import Button, { ButtonVariant } from '../Button/Button'
import Typography, { FontWeight, TextSize } from '../Typography/Typography'
import useAuthStore from '@/stores/authStore'
import { uploadFile } from '@/services/uploadImage'
import Image from 'next/image'
import { cn } from '@/utils/tailwind'
import IconImagePlus from '../Icons/IconImagePlus'
import IconDeleteRound from '../Icons/IconDeleteRound'

export interface IImageInput {
	imageUrl?: string
	isPrimary?: boolean
	id?: number
}

interface InputImageProps {
	titleLabel?: string
	stringImages: IImageInput[]
	setStringImage: React.Dispatch<React.SetStateAction<IImageInput[]>>
	disabledUploadClick?: boolean
	idEdit?: number
}

const InputImageMultipart = ({
	titleLabel,
	stringImages,
	setStringImage,
	disabledUploadClick,
	idEdit,
}: InputImageProps) => {
	const accessToken: string = useAuthStore.getState()?.accessToken as string
	const fileInputRef = useRef<HTMLInputElement | null>(null)

	// State to track the index of the image being replaced
	const [replaceImageIndex, setReplaceImageIndex] = useState<number | null>(null)

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const filesArray = Array.from(event.target.files)
			filesArray.map(async (item: File) => {
				const r = await uploadFile(item, accessToken)

				// Replace or add new image logic
				setStringImage((prevImages) => {
					const newImages = [...prevImages]
					if (replaceImageIndex !== null) {
						if (idEdit) {
							newImages[replaceImageIndex] = {
								id: idEdit,
								imageUrl: r?.url,
								isPrimary: newImages[replaceImageIndex]?.isPrimary || false,
							}
						} else {
							newImages[replaceImageIndex] = {
								imageUrl: r?.url,
								isPrimary: newImages[replaceImageIndex]?.isPrimary || false,
							}
						}

						setReplaceImageIndex(null) // Reset the state after replacing
					} else {
						newImages.push({ imageUrl: r?.url, isPrimary: prevImages.length === 0 })
					}
					return newImages
				})
			})
		}
	}

	const onDeleteImage = (stringImage: string) => {
		if (!disabledUploadClick)
			setStringImage((prevImage) =>
				prevImage.filter((image) => image.imageUrl !== stringImage)
			)
	}

	const handleUploadClick = () => {
		if (!disabledUploadClick) {
			setReplaceImageIndex(null)
			fileInputRef.current?.click()
		}
	}

	const handleReplaceImageClick = (index: number) => {
		if (!disabledUploadClick) {
			fileInputRef.current?.click()
			setReplaceImageIndex(index)
		}
	}

	return (
		<div>
			{titleLabel && (
				<Typography size={TextSize.Small} fontWeight={FontWeight.Medium} className="mb-2">
					{titleLabel}
				</Typography>
			)}
			<Box className="rounded-lg border border-slate-400 px-4 py-4">
				{stringImages?.length > 0 && (
					<Box flex className="mb-4 gap-2 border-b pb-2">
						{stringImages.map((item, i) => {
							return (
								<Box key={i} className="relative h-16 w-16 border p-1">
									<Image
										src={item?.imageUrl as string}
										width={60}
										height={60}
										className="w-full! !h-full object-contain"
										alt="image"
										onClick={() => handleReplaceImageClick(i)}
									/>
									<Box
										className={cn(
											'absolute -right-3 -top-3',
											!disabledUploadClick && 'cursor-pointer'
										)}
										onClick={() => onDeleteImage(item?.imageUrl as string)}
									>
										<IconDeleteRound />
									</Box>
								</Box>
							)
						})}
					</Box>
				)}

				<Box className="flex items-center">
					<label
						className={cn(
							'flex w-full items-center gap-2',
							!disabledUploadClick && 'cursor-pointer'
						)}
					>
						<div className="rounded-lg bg-slate-50 p-3">
							<IconImagePlus />
						</div>
						<div className="max-h-32 overflow-scroll">
							<Typography fontWeight={FontWeight.Medium}>
								Add Product Image
							</Typography>
						</div>
						<input
							type="file"
							accept="image/*"
							multiple
							onChange={handleImageChange}
							className="hidden"
							ref={fileInputRef}
							disabled={disabledUploadClick}
						/>
					</label>
					<Box>
						<Button
							label={'Upload'}
							variant={ButtonVariant.Secondary}
							onClick={handleUploadClick}
							containerClassName="px-6 py-2"
							disabled={disabledUploadClick}
						/>
					</Box>
				</Box>
			</Box>
		</div>
	)
}

export default InputImageMultipart
