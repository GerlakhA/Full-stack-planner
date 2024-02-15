'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { authService } from '@/services/auth.service'

export function LogoutButton() {
	const router = useRouter()
	const client = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			client.invalidateQueries()
			router.push('/auth')
		}
	})

	return (
		<div>
			<button
				className='opacity-20 hover:opacity-100 transition-opacity duration-300'
				onClick={() => mutate()}
			>
				<LogOut size={30} />
			</button>
		</div>
	)
}
