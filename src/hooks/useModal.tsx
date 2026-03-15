import { useState } from 'react'

export default function UseModal() {
	const [isOpen, setIsOpen] = useState(false)

	const onOpen = () => setIsOpen(true)
	const onOpenChange = (isOpen: boolean) => setIsOpen(isOpen)

	return { isOpen, onOpen, onOpenChange }
}
