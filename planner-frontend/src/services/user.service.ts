import { axiosWithAuth } from '@/api/interceptors'
import { IUser, TypeUserForm } from '@/types/auth.interface'

export interface IProfileResponse {
	user: IUser
	statistics: {
		label: string
		value: string
	}[]
}

const BASE_URL = '/user/profile'
export const UserService = {
	async getProfile() {
		const response = await axiosWithAuth.get<IProfileResponse>(BASE_URL)
		return response.data
	},
	async update(data: TypeUserForm) {
		const response = await axiosWithAuth.put<IProfileResponse>(BASE_URL, data)
		return response.data
	}
}
