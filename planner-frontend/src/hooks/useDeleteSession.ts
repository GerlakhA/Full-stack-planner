import { useMutation, useQueryClient } from '@tanstack/react-query'

import { PomodoroService } from '@/services/pomodoro.service'

export function useDeleteSession(onDeleteSuccess: () => void) {
	const queryClient = useQueryClient()

	const { mutate: deleteSession, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete session'],
		mutationFn: (id: string) => PomodoroService.deleteSession(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get today session']
			})
			onDeleteSuccess()
		}
	})

	return { deleteSession, isDeletePending }
}
