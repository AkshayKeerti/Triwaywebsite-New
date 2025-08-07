import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'header'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  className?: string
  icon?: React.ComponentType<{ className?: string }>
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  [key: string]: any
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  children, 
  className = '',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  ...props 
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl hover:from-primary-600 hover:to-primary-700',
    secondary: 'bg-transparent text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-lg',
    outline: 'bg-white text-primary-500 border-2 border-white hover:bg-gray-100',
    ghost: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-500',
    header: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base', 
    lg: 'px-8 py-4 text-lg'
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`.trim()
  
  const renderContent = () => (
    <>
      {Icon && iconPosition === 'left' && <Icon className="mr-2 h-5 w-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2 h-5 w-5" />}
    </>
  )
  
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {renderContent()}
      </Link>
    )
  }
  
  return (
    <button className={classes} {...props}>
      {renderContent()}
    </button>
  )
}

export default Button 