'use client'

import { useProfile } from '@/hooks/useProfile'
import { Loader } from './Loader'

export const Statistics = () => {
	const { data, isLoading } = useProfile()

	return isLoading ? (
		<Loader />
	) : (
		<div className='grid grid-cols-2 lg:grid-cols-4 gap-12 mt-7'>
			{data?.statistics.length ? (
				data.statistics.map(item => (
					<div
						key={item.label}
						className='bg-colors-border/5 shadow shadow-white rounded p-layout text-center hover:-translate-y-3 transition-transform duration-500'
					>
						<div className='text-xl'>{item.label}</div>
						<div className='text-3xl'>{item.value}</div>
					</div>
				))
			) : (
				<div>Statistics not loadaded!</div>
			)}
		</div>
	)
}
