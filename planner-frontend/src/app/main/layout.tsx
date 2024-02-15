import { Header } from './_components/Header'
import { Sidebar } from './_components/Sidebar'

export default function MainLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr] shrink-0'>
			<Sidebar />
			<main className='p-big-layout relative overflow-x-hidden max-h-screen'>
				<Header />
				{children}
			</main>
		</div>
	)
}
