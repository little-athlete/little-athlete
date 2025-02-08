import { ILandingPage } from '@/db/firestore/interfaces/landing'

export type FuncSetContent = <ValueType>(field: keyof ILandingPage, value: ValueType) => void

export interface LandingContentProps {
	contentData?: ILandingPage
	setContentData: FuncSetContent
}

// utils func

export const onChangeArray = <ValueType,>(
	data: Array<ValueType> | undefined,
	setData: FuncSetContent,
	field: keyof ILandingPage,
	newValue: ValueType,
	index?: number
) => {
	const idx = index !== undefined ? index : data?.length || 0
	const arr = data ? data : []
	const oldArr = [...arr]
	oldArr[idx] = newValue

	const newArr = oldArr.filter(Boolean)
	setData(field, newArr)
}
