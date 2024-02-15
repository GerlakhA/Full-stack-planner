import { Heading } from '@/components/Heading'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'
import { Pomodoro } from './Pomodoro'

export const metadata: Metadata = {
	title: 'Timer',
	...NO_INDEX_PAGE
}

const TimerPage = () => {
	return (
		<div>
			<Heading title='Timer' />
			<div className='flex justify-center'>
				<Pomodoro />
			</div>
		</div>
	)
}

export default TimerPage
