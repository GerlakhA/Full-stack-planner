import { Heading } from '@/components/Heading'
import { TasksView } from './TasksView'

const TasksPage = () => {
	return (
		<div>
			<Heading title='Tasks' />
			<TasksView />
		</div>
	)
}

export default TasksPage
