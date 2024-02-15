import { TimeBlockService } from '@/services/time-block.service'
import type { TypeTimeBlockFormState } from '@/types/time-block.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useCreateTimeBlock() {
	const queryClient = useQueryClient()

	const { mutate: createTimeBlock, isPending } = useMutation({
		mutationKey: ['create time-block'],
		mutationFn: (data: TypeTimeBlockFormState) =>
			TimeBlockService.createTimeBlock(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['time-blocks']
			})
		}
	})

	return {
		createTimeBlock,
		isPending
	}
}
