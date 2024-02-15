import cn from 'clsx'
import { forwardRef } from 'react'
interface IInput {
	isNumber?: boolean
	state?: 'error' | 'success'
	extra?: string
	id?: string
	label?: string
	disabled?: boolean
	placeholder?: string
	type?: string
	className?: string
}

export const Field = forwardRef<HTMLInputElement, IInput>(
	(
		{
			isNumber,
			extra,
			state,
			id,
			label,
			disabled,
			placeholder,
			type,
			className,
			...rest
		},
		ref
	) => {
		return (
			<div className={`${extra}`}>
				<label
					htmlFor={id}
					className='text-sm text-white/60 dark:text-white ml-1.5 font-medium'
				>
					{label}
				</label>
				<input
					ref={ref}
					disabled={disabled}
					placeholder={placeholder}
					type={type}
					id={id}
					className={cn(
						`mt-2 flew w-full items-center justify-center rounded-lg border border-border bg-white/0 p-3 text-base outline-none placeholder:text-white/30 placeholer:font-normal duration-500 transition-colors focus:border-primary`,
						disabled
							? '!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255, 255, 255, 0.15)]'
							: state === 'error'
							? 'border-red-500 text-red-500 placeholder:text-red-500 dark:!text-red-400 dark:!border-red-400 dark:placeholder:!text-red-400'
							: state === 'success'
							? 'border-green-500 text-green-500 placeholder:text-green-500 dark:!text-green-400 dark:!border-green-400 dark:placeholder:!text-green-400'
							: '',
						className
					)}
					onKeyDown={event => {
						if (
							isNumber &&
							!/[0-9]/.test(event.key) &&
							event.key !== 'Backspace' &&
							event.key !== 'Tab' &&
							event.key !== 'Enter' &&
							event.key !== 'ArrowLeft' &&
							event.key !== 'ArrowRight'
						) {
							event.preventDefault()
						}
					}}
					{...rest}
				/>
			</div>
		)
	}
)

Field.displayName = 'field'
