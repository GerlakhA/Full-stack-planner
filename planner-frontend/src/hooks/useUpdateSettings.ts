import { UserService } from '@/services/user.service'
import { TypeUserForm } from '@/types/auth.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useUpdateSettings = () => {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data: TypeUserForm) => UserService.update(data),
		onSuccess() {
			toast.success('Successfully update profile!')
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		}
	})

	return { mutate, isPending }
}
