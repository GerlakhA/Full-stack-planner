import { TimeBlockService } from '@/services/time-block.service'
import { TypeTimeBlockFormState } from '@/types/time-block.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateTimeBlock = (key?: string) => {
	const queryClient = useQueryClient()

	const { mutate: updateTimeBlock } = useMutation({
		mutationKey: ['update time-block', key],
		mutationFn: ({ id, data }: { id: string; data: TypeTimeBlockFormState }) =>
			TimeBlockService.updateTimeBlock(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['time-blocks'] })
		}
	})

	return { updateTimeBlock }
}
