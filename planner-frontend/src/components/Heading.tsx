interface IHeading {
	title: string
}

export const Heading = ({ title }: IHeading) => {
	return (
		<div>
			<h1 className='text-2xl font-semibold text-white'>{title}</h1>
			<div className='my-3 h-0.5 bg-border w-full' />
		</div>
	)
}
