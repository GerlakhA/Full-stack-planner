'use client'

import { Field } from '@/components/Fields'
import { useInitialData } from '@/hooks/useInitialData'
import { useUpdateSettings } from '@/hooks/useUpdateSettings'
import { TypeUserForm } from '@/types/auth.interface'
import { SubmitHandler, useForm } from 'react-hook-form'

export function Settings() {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	useInitialData(reset)

	const { isPending, mutate } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: password || undefined
		})
	}

	return (
		<div className='flex justify-center'>
			<form className='w-2/4' onSubmit={handleSubmit(onSubmit)}>
				<div className='grid grid-cols-2 gap-10'>
					<div>
						<Field
							id='email'
							label='Email: '
							placeholder='Enter email: '
							type='email'
							{...register('email', {
								required: 'Email is required!'
							})}
							className='mb-4 text-muted'
						/>

						<Field
							id='name'
							label='Name: '
							placeholder='Enter name: '
							{...register('name')}
							className='mb-4 text-muted'
						/>

						<Field
							id='password'
							label='Password: '
							placeholder='Enter password: '
							type='password'
							{...register('password')}
							className='mb-10 text-muted'
						/>
					</div>

					<div>
						<Field
							id='workInterval'
							label='Work interval (min.): '
							placeholder='Enter work interval (min.): '
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
							className='mb-4 text-muted'
						/>

						<Field
							id='breakInterval'
							label='Break interval (min.): '
							placeholder='Enter break interval (min.): '
							isNumber
							{...register('breakInterval', {
								valueAsNumber: true
							})}
							className='mb-4 text-muted'
						/>

						<Field
							id='intervalsCount'
							label='Intervals count (max 10): '
							placeholder='Enter intervals count (max 10): '
							isNumber
							{...register('intervalsCount', {
								valueAsNumber: true
							})}
							className='mb-6 text-muted'
						/>
					</div>
				</div>
				<button
					type='submit'
					disabled={isPending}
					className='w-full bg-purple-500 p-2 rounded-md hover:bg-purple-500/60 transition'
				>
					Save
				</button>
			</form>
		</div>
	)
}
