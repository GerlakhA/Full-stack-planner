'use client'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Loader } from 'lucide-react'
import { SwitcherTaskView } from './SwitcherTaskView'
import { KanbanView } from './kanban-view/KanbanView'
import { ListView } from './listView/ListView'

export type TypeView = 'list' | 'kanban'

export const TasksView = () => {
	const [type, setType, isLoading] = useLocalStorage<TypeView>({
		key: 'view-type',
		defaultValue: 'list'
	})

	if (isLoading) return <Loader />

	return (
		<div>
			<SwitcherTaskView setType={setType} type={type} />
			{type === 'list' ? <ListView /> : <KanbanView />}
		</div>
	)
}
