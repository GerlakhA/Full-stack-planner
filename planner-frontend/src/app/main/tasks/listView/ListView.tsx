'use client'

import { useTasksDnd } from '@/hooks/useTaskDnd'
import { useTasks } from '@/hooks/useTasks'
import { DragDropContext } from '@hello-pangea/dnd'
import { COLUMNS } from '../columns.data'
import { ListRowParent } from './ListRowParent'
import styles from './ListView.module.scss'

export const ListView = () => {
	const { setItems, items } = useTasks()
	const { onDragEnd } = useTasksDnd()
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={styles.header}>
					<div>Task name</div>
					<div>Due Date</div>
					<div>Priority</div>
					<div></div>
				</div>
				<div className={styles.parentsWrapper}>
					{COLUMNS.map(item => (
						<ListRowParent
							items={items}
							label={item.label}
							value={item.value}
							setItems={setItems}
							key={item.value}
						/>
					))}
				</div>
			</div>
		</DragDropContext>
	)
}
