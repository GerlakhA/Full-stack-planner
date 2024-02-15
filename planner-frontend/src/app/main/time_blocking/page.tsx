import { Heading } from '@/components/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'
import { TimeBlocking } from './TimeBlocking'

export const metadata: Metadata = {
	title: 'Time blocking',
	...NO_INDEX_PAGE
}

const TimeBlockingPage = () => {
	return (
		<div>
			<Heading title='Time Blocking' />
			<TimeBlocking />
		</div>
	)
}

export default TimeBlockingPage
