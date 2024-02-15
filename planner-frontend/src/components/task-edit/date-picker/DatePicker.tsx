'use client'

import { useOutside } from '@/hooks/useOutside'
import cn from 'clsx'
import dayjs from 'dayjs'
import LocalizeFormat from 'dayjs/plugin/localizedFormat'
import { X } from 'lucide-react'
import { useState } from 'react'
import { DayPicker, type SelectSingleEventHandler } from 'react-day-picker'
import { formatCaption } from './DatePickerCaption'

dayjs.extend(LocalizeFormat)

interface IDatePicker {
	onChange: (value: string) => void
	value: string
	position?: 'left' | 'right'
}

export const DatePicker = ({ onChange, value, position }: IDatePicker) => {
	const [selected, setSelected] = useState<Date>()
	const { isShow, setIsShow, ref } = useOutside(false)

	const handleDateSelect: SelectSingleEventHandler = date => {
		const ISOdate = date?.toISOString()

		setSelected(date)
		if (ISOdate) {
			onChange(ISOdate)
			setIsShow(false)
		} else {
			onChange('')
		}
	}
	return (
		<div ref={ref} className='relative'>
			<button onClick={() => setIsShow(!isShow)}>
				{value ? dayjs(value).format('LL') : 'Click for select'}
			</button>
			{value && (
				<button
					onClick={() => onChange('')}
					className='absolute -top-2 -right-4 opacity-30 hover:opacity-100 transition-opacity'
				>
					<X size={14} />
				</button>
			)}
			{isShow && (
				<div
					className={cn(
						'absolute p-2.5 slide bg-color-sidebar z-10 shadow rounded-lg',
						position === 'left' ? '-left-4' : '-right-4'
					)}
				>
					<DayPicker
						fromYear={2024}
						toYear={2054}
						initialFocus={isShow}
						mode='single'
						defaultMonth={selected}
						selected={selected}
						onSelect={handleDateSelect}
						weekStartsOn={1}
						formatters={{ formatCaption }}
						className='bg-neutral-800 rounded-md'
					/>
				</div>
			)}
		</div>
	)
}
