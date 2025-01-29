import React from 'react'

export interface CardProps {
	children: React.ReactNode
	className?: string
	onClick?: () => void
}

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
	return (
		<div onClick={onClick} className={`rounded-lg bg-white p-4 ${className}`}>
			{children}
		</div>
	)
}

export default Card
