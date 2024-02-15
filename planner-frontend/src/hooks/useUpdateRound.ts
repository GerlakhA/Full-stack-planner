import { PomodoroService } from '@/services/pomodoro.service'
import { TypePomodoroRoundState } from '@/types/pomodoro.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateRound = () => {
	const queryClient = useQueryClient()

	const { mutate: updateRound, isPending } = useMutation({
		mutationKey: ['updaet round'],
		mutationFn: ({ id, data }: { id: string; data: TypePomodoroRoundState }) =>
			PomodoroService.updateRound(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get today session'] })
		}
	})
	return { updateRound, isPending }
}
