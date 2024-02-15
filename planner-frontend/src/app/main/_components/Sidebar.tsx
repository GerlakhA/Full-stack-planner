import { COLORS } from '@/constants/color.constants'
import { GanttChartIcon } from 'lucide-react'
import Link from 'next/link'
import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MenuItem as MENU } from './sidebar.data'

export const Sidebar = () => {
	return (
		<aside className='text-white h-full flex flex-col justifty-between border-r border-r-border'>
			<div>
				<Link
					href={'/'}
					draggable={false}
					className='flex items-center gap-2.5 p-layout border-b border-b-border'
				>
					<GanttChartIcon color={COLORS.primary} size={38} />
					<span className='text-2xl font-bold relative'>Planner</span>
				</Link>
				<div className='p-3 relative'>
					{MENU.map(item => (
						<MenuItem key={item.link} item={item} />
					))}
				</div>
			</div>
			<div className='flex justify-center gap-5 my-60'>
				<p>Logout:</p>
				<LogoutButton />
			</div>
		</aside>
	)
}
