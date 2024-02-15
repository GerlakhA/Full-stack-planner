import { TasksService } from '@/services/tasks.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useDeleteTask = () => {
	const queryClient = useQueryClient()
	const { mutate: deleteTask, isPending } = useMutation({
		mutationKey: ['delete task'],
		mutationFn: (id: string) => TasksService.deleteTask(id),
		onSuccess() {
			toast.success('Successfully delete task')
			queryClient.invalidateQueries({ queryKey: ['tasks'] })
		}
	})

	return { deleteTask, isPending }
}
