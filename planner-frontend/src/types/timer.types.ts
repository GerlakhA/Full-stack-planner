import type { Dispatch, SetStateAction } from 'react'
import type { IPomodoroRoundResponse } from './pomodoro.interface'

export interface ITimerState {
	secondsLeft: number
	isRunning: boolean
	activeRound: IPomodoroRoundResponse | undefined
	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
	setActiveRound: Dispatch<SetStateAction<IPomodoroRoundResponse | undefined>>
}
