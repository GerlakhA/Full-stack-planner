'use client'

import { Loader } from '@/components/Loader'
import { useProfile } from '@/hooks/useProfile'

export const Profile = () => {
	const { data, isLoading } = useProfile()
	return (
		<div className='absolute top-5 right-big-layout'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='flex items-center relative'>
					<div className='text-right mr-3'>
						<p className='text-white text-md font-bold'>{data?.user.name}</p>
						<p className='text-white text-sm opacity-40'>{data?.user.email}</p>
					</div>
					{/* <UserAvatar /> */}
				</div>
			)}
		</div>
	)
}
