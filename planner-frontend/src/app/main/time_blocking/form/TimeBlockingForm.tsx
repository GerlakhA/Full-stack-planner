'use client'

import { Field } from '@/components/Fields'
import { SingleSelect } from '@/components/task-edit/SingleSelect'
import { useCreateTimeBlock } from '@/hooks/useCreateTimeBlock'
import { useUpdateTimeBlock } from '@/hooks/useUpdateTimeBlock'
import type { TypeTimeBlockFormState } from '@/types/time-block.interface'
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'
import { COLORS } from './colors.data'

export const TimeBlockingForm = () => {
	const { register, control, watch, handleSubmit, getValues, reset } =
		useFormContext<TypeTimeBlockFormState>()

	const existId = watch('id')

	const { createTimeBlock, isPending } = useCreateTimeBlock()
	const { updateTimeBlock } = useUpdateTimeBlock(existId)

	const onSubmit: SubmitHandler<TypeTimeBlockFormState> = data => {
		const { color, id, ...rest } = data
		const dto = { ...rest, color: color || undefined }

		if (id) {
			updateTimeBlock({
				id,
				data: dto
			})
		} else {
			createTimeBlock(dto)
		}

		reset({
			color: COLORS[COLORS.length - 1],
			duration: 0,
			name: '',
			id: undefined,
			order: 1
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-3/5'>
			<Field
				{...register('name', {
					required: true
				})}
				id='name'
				label='Enter name:'
				placeholder='Enter name:'
				extra='mb-4'
			/>

			<Field
				{...register('duration', {
					required: true,
					valueAsNumber: true
				})}
				id='duration'
				label='Enter duration (min.):'
				placeholder='Enter duration (min.):'
				isNumber
				extra='mb-4'
			/>

			<div>
				<span className='inline-block mb-1.5'>Color:</span>
				<Controller
					control={control}
					name='color'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={COLORS.map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || COLORS[COLORS.length - 1]}
							isColorSelect
						/>
					)}
				/>
			</div>

			<button
				type='submit'
				disabled={isPending}
				className='mt-6 p-2 bg-purple-500 hover:bg-purple-500/60 transition rounded-md'
			>
				{existId ? 'Update' : 'Create'}
			</button>
		</form>
	)
}
