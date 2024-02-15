import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { TasksService } from '@/services/tasks.service'
import { ITaskResponse } from '@/types/task.types'

export function useTasks() {
	const { data } = useQuery({
		queryKey: ['tasks'],
		queryFn: () => TasksService.getTasks()
	})

	const [items, setItems] = useState<ITaskResponse[] | undefined>(data?.data)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems }
}
