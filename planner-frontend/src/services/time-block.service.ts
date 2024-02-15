import { axiosWithAuth } from '@/api/interceptors'
import {
	ITimeBlockResponse,
	TypeTimeBlockFormState
} from '@/types/time-block.interface'

const BASE_URL = '/user/time-blocks'

export const TimeBlockService = {
	async getTimeBlocks() {
		const response = await axiosWithAuth.get<ITimeBlockResponse[]>(BASE_URL)
		return response
	},

	async createTimeBlock(data: TypeTimeBlockFormState) {
		const response = await axiosWithAuth.post(BASE_URL, data)
		return response
	},

	async updateOrderTimeBlock(ids: string[]) {
		const response = await axiosWithAuth.put(`${BASE_URL}/update-order`, {
			ids
		})
		return response
	},

	async updateTimeBlock(id: string, data: TypeTimeBlockFormState) {
		const response = await axiosWithAuth.put(`${BASE_URL}/${id}`, data)
		return response
	},

	async deleteTimeBlock(id: string) {
		const response = await axiosWithAuth.delete(`${BASE_URL}/${id}`)
		return response
	}
}
