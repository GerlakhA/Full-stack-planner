import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { PomodoroService } from '@/services/pomodoro.service'
import type { ITimerState } from '@/types/timer.types'
import { useLoadSettings } from './useLoadSettings'

export function useTodaySession({
	setActiveRound,
	setSecondsLeft
}: ITimerState) {
	const { workInterval } = useLoadSettings()

	const {
		data: sessionsResponse,
		isLoading,
		isSuccess
	} = useQuery({
		queryKey: ['get today session'],
		queryFn: () => PomodoroService.getTodaySession()
	})

	const rounds = sessionsResponse?.data.rounds

	useEffect(() => {
		if (isSuccess && rounds) {
			const activeRound = rounds.find(round => !round.isCompleted)
			setActiveRound(activeRound)

			if (activeRound && activeRound?.totalSeconds !== 0) {
				setSecondsLeft(activeRound.totalSeconds)
			}
		}
	}, [isSuccess, rounds])

	return { sessionsResponse, isLoading, workInterval }
}
