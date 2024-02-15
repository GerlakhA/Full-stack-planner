import { Loader as LoaderIcon } from 'lucide-react'

export const Loader = () => {
	return (
		<div className='flex justify-center items-center'>
			<LoaderIcon className='h-5 w-5 animate-spin text-white' />
		</div>
	)
}
