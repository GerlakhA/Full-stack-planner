import type { IPomodoroRoundResponse } from '@/types/pomodoro.interface'
import type { ITimerState } from '@/types/timer.types'
import { useLoadSettings } from './useLoadSettings'
import { useUpdateRound } from './useUpdateRound'

type TypeUseTimerActions = ITimerState & {
	rounds: IPomodoroRoundResponse[] | undefined
}

export function useTimerActions({
	activeRound,
	setIsRunning,
	secondsLeft,
	rounds,
	setActiveRound
}: TypeUseTimerActions) {
	const { workInterval } = useLoadSettings()
	const { isPending, updateRound } = useUpdateRound()

	const pauseHandler = () => {
		setIsRunning(false)
		if (!activeRound?.id) return

		updateRound({
			id: activeRound?.id,
			data: {
				totalSeconds: secondsLeft,
				isCompleted: Math.floor(secondsLeft / 60) >= workInterval
			}
		})
	}

	const playHandler = () => {
		setIsRunning(true)
	}

	const nextRoundHandler = () => {
		if (!activeRound?.id) return

		updateRound({
			id: activeRound?.id,
			data: {
				totalSeconds: workInterval * 60,
				isCompleted: true
			}
		})
	}

	const prevRoundHandler = () => {
		// ES2023
		const lastCompletedRound = rounds?.findLast(round => round.isCompleted)
		if (!lastCompletedRound?.id) return

		updateRound({
			id: lastCompletedRound?.id,
			data: {
				isCompleted: false,
				totalSeconds: workInterval * 60
			}
		})

		setActiveRound(lastCompletedRound)
	}

	return {
		isPending,
		pauseHandler,
		playHandler,
		nextRoundHandler,
		prevRoundHandler
	}
}
