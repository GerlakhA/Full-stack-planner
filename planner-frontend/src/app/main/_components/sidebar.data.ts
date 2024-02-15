import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import type { IMenuItem } from '@/types/menu.interface'
import {
	CalendarRange,
	KanbanSquare,
	LayoutDashboard,
	Settings,
	Timer
} from 'lucide-react'

export const MenuItem: IMenuItem[] = [
	{
		link: DASHBOARD_PAGES.HOME,
		name: 'Dashboard',
		icon: LayoutDashboard
	},
	{
		link: DASHBOARD_PAGES.TASKS,
		name: 'Task',
		icon: KanbanSquare
	},
	{
		link: DASHBOARD_PAGES.TIMER,
		name: 'Timer',
		icon: Timer
	},
	{
		link: DASHBOARD_PAGES.TIME_BLOCKING,
		name: 'Time blocking',
		icon: CalendarRange
	},
	{
		link: DASHBOARD_PAGES.SETTINGS,
		name: 'Settings',
		icon: Settings
	}
]
