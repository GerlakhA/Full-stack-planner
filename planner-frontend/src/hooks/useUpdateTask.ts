import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TasksService } from '@/services/tasks.service'
import { TypeTaskFormState } from '@/types/task.types'

export function useUpdateTask(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTask } = useMutation({
		mutationKey: ['update task', key],
		mutationFn: ({ id, data }: { id: string; data: TypeTaskFormState }) =>
			TasksService.updateTask(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
		}
	})

	return { updateTask }
}
