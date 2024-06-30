'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

const ToggleMode = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <Button variant="link" size="icon" disabled={true} />
    }

    const isDarkMode = theme === 'dark'

    const toggleTheme = () => {
        setTheme(isDarkMode ? 'light' : 'dark')
    }

    const iconProps = {
        width: '24',
        height: '24',
        viewBox: '0 0 32 32',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    }

    const moonPathProps = {
        fillRule: 'evenodd' as 'evenodd',
        clipRule: 'evenodd' as 'evenodd',
        d: 'M16 4.66666C12.9942 4.66666 10.1115 5.8607 7.98611 7.98611C5.8607 10.1115 4.66666 12.9942 4.66666 16C4.66666 19.0058 5.8607 21.8885 7.98611 24.0139C10.1115 26.1393 12.9942 27.3333 16 27.3333V4.66666ZM2.66666 16C2.66666 8.63599 8.63599 2.66666 16 2.66666C16.3644 2.66666 16.7244 2.68088 17.08 2.70932C23.9387 3.25999 29.3333 8.99999 29.3333 16C29.3333 23 23.9387 28.74 17.08 29.2907C16.7244 29.3191 16.3644 29.3333 16 29.3333C8.63599 29.3333 2.66666 23.364 2.66666 16Z',
        fill: '#f9fafb'
    }

    const sunPathProps = {
        fillRule: 'evenodd' as 'evenodd',
        clipRule: 'evenodd' as 'evenodd',
        d: 'M16 27.3333C19.0058 27.3333 21.8885 26.1393 24.0139 24.0139C26.1393 21.8885 27.3333 19.0058 27.3333 16C27.3333 12.9942 26.1393 10.1115 24.0139 7.98611C21.8885 5.8607 19.0058 4.66666 16 4.66666V27.3333ZM29.3333 16C29.3333 23.364 23.364 29.3333 16 29.3333C15.6355 29.3333 15.2755 29.3191 14.92 29.2907C8.06132 28.74 2.66666 23 2.66666 16C2.66666 8.99999 8.06132 3.25999 14.92 2.70932C15.2755 2.68088 15.6355 2.66666 16 2.66666C23.364 2.66666 29.3333 8.63599 29.3333 16Z',
        fill: '#f9fafb'
    }

    return (
        <Button variant="link" size="icon" onClick={toggleTheme}>
            {isDarkMode ? (
                <svg {...iconProps}>
                    <path {...moonPathProps} />
                </svg>
            ) : (
                <svg {...iconProps}>
                    <path {...sunPathProps} />
                </svg>
            )}
        </Button>
    )
}

export default ToggleMode
