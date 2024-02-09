'use client'

import cat from '@/public/cat.gif'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Loading = () => {
	const [showLongLoading, setShowLongLoading] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLongLoading(true)
		}, 5555)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div className='flex flex-col text-[28px] animate-pulse duration-700 justify-center items-center h-screen gap-1'>
			<Image src={cat} alt='cat' width={555} height={555} />
			<p>Идет загрузка...</p>
			{showLongLoading && <div>Что-то очень долгая загрузка.....</div>}
		</div>
	)
}

export default Loading
