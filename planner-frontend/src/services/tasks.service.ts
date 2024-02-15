import { axiosWithAuth } from '@/api/interceptors'
import { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

const BASE_URL = '/user/tasks'

export const TasksService = {
	async getTasks() {
		const response = await axiosWithAuth.get<ITaskResponse[]>(BASE_URL)
		return response
	},

	async createTask(data: TypeTaskFormState) {
		const response = await axiosWithAuth.post(BASE_URL, data)
		return response
	},

	async updateTask(id: string, data: TypeTaskFormState) {
		const response = await axiosWithAuth.put(`${BASE_URL}/${id}`, data)
		return response
	},

	async deleteTask(id: string) {
		const response = await axiosWithAuth.delete(`${BASE_URL}/${id}`)
		return response
	}
}
