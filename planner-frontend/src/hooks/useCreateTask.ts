import { TasksService } from '@/services/tasks.service'
import { TypeTaskFormState } from '@/types/task.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateTask = () => {
	const queryClient = useQueryClient()
	const { mutate: createTask } = useMutation({
		mutationKey: ['create task'],
		mutationFn: (data: TypeTaskFormState) => TasksService.createTask(data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['tasks'] })
		}
	})

	return { createTask }
}
