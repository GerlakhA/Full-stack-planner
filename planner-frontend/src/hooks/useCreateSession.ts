import { PomodoroService } from '@/services/pomodoro.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateSession = () => {
	const queryClient = useQueryClient()

	const { mutate: createSession, isPending } = useMutation({
		mutationKey: ['create new session'],
		mutationFn: () => PomodoroService.createSession(),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get today session'] })
		}
	})
	return { createSession, isPending }
}
