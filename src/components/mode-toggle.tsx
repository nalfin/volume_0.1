'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { IconCircleHalf } from '@irsyadadl/paranoid'

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

    return (
        <Button variant="link" size="icon" onClick={toggleTheme}>
            {isDarkMode ? (
                <IconCircleHalf className="size-6 rotate-180 text-white" />
            ) : (
                <IconCircleHalf className="size-6 text-white" />
            )}
        </Button>
    )
}

export default ToggleMode
