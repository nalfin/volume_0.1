'use client'
import { cn } from '@/lib/utils'
import InputModifikasi from './input-mod'
import { useEffect, useState } from 'react'

interface InputFormProps {
    label?: string
    unit?: string
    val?: string
    type?: string
    className?: string
    className2?: string
    className3?: string
    setValue?: (value: string) => void
}

const InputForm = ({ label, unit, val, type, className, setValue, className2, className3 }: InputFormProps) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className={cn('flex w-full items-center gap-3 text-sm font-normal', className)}>
            <p className={cn('min-w-[160px] lg:min-w-[200px]', className2)}>{label}</p>
            <div className={cn('flex items-center gap-2', className3)}>
                <p>:</p>
                <InputModifikasi val={val} type={type} setValue={setValue} />
                {isClient && <p>{unit}</p>}
            </div>
        </div>
    )
}

export default InputForm
