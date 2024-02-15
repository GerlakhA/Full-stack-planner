import { axiosWithAuth } from '@/api/interceptors'
import {
	IPomodoroSessionResponse,
	TypePomodoroRoundState,
	TypePomodoroSessionState
} from '@/types/pomodoro.interface'

const BASE_URL = '/user/timer'

export const PomodoroService = {
	async getTodaySession() {
		const response = await axiosWithAuth.get<IPomodoroSessionResponse>(
			`${BASE_URL}/today`
		)

		return response
	},

	async createSession() {
		const response = await axiosWithAuth.post<IPomodoroSessionResponse>(
			BASE_URL
		)
		return response
	},

	async updateSession(id: string, data: TypePomodoroSessionState) {
		const response = await axiosWithAuth.put<IPomodoroSessionResponse>(
			`${BASE_URL}/${id}`,
			data
		)
		return response
	},

	async deleteSession(id: string) {
		const response = await axiosWithAuth.delete<IPomodoroSessionResponse>(
			`${BASE_URL}/${id}`
		)
		return response
	},

	async updateRound(id: string, data: TypePomodoroRoundState) {
		const response = await axiosWithAuth.put<IPomodoroSessionResponse>(
			`${BASE_URL}/round/${id}`,
			data
		)
		return response
	}
}
