import { IBase } from './root.interface'

export enum EnumTaskPriority {
	high = 'high',
	medium = 'medium',
	low = 'low'
}

export interface ITaskResponse extends IBase {
	name: string
	priority?: EnumTaskPriority
	isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>
