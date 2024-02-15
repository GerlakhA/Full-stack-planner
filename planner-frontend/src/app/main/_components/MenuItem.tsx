import { IMenuItem } from '@/types/menu.interface'
import Link from 'next/link'

export const MenuItem = ({ item }: { item: IMenuItem }) => {
	return (
		<div className='pt-2'>
			<Link
				href={item.link}
				className='flex gap-2.5 items-center py-1.5 mt-2 px-layout transition-colors hover:bg-white/10 rounded-lg'
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
