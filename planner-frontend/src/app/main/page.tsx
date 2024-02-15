import { Heading } from '@/components/Heading'
import { Statistics } from '@/components/Statistics'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

const MainPage = () => {
	return (
		<div className='text-white'>
			<Heading title='Statistics' />
			<Statistics />
		</div>
	)
}

export default MainPage
