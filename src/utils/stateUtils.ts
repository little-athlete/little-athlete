export type FuncSetContent<I> = <T>(field: keyof I, value: T) => void

export const onChangeArrayItem = <T, K extends Extract<keyof T, string | number>>(
	data: T | undefined,
	setData: FuncSetContent<T>,
	field: K,
	newValue: T[K] extends Array<infer U> ? U : never,
	index?: number
) => {
	if (!data) {
		return
	}

	if (!Array.isArray(data[field])) {
		throw new Error(`Invalid array item: ${String(field)}`)
	}

	const updatedArray = [...(data?.[field] as Array<T[K] extends Array<infer U> ? U : never>)]

	if (index !== undefined) {
		updatedArray[index] = newValue // Update existing item
	} else {
		updatedArray.push(newValue) // Add new item if index is not provided
	}

	setData(field, updatedArray)
}

export const onDeleteArrayItem = <T, K extends Extract<keyof T, string | number>>(
	data: T | undefined,
	setData: FuncSetContent<T>,
	field: K,
	index: number
) => {
	if (!data) {
		return
	}

	if (!Array.isArray(data[field])) {
		throw new Error(`Invalid array item: ${String(field)}`)
	}

	const updatedArray = data[field].filter((_, i) => i !== index) || []
	setData(field, updatedArray)
}
