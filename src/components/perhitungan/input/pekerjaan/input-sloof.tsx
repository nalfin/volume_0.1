'use client'

import { cn } from '@/lib/utils'
import InputForm from '../input-form'

interface InputSloofProps {
    className?: string
    satuan?: string
    namSlo: string
    pjgSlo: string
    lbrSlo: string
    tgiSlo: string
    setNamSlo: (value: string) => void
    setPjgSlo: (value: string) => void
    setLbrSlo: (value: string) => void
    setTgiSlo: (value: string) => void
}

const InputSloof = ({
    className,
    satuan,
    namSlo,
    pjgSlo,
    lbrSlo,
    tgiSlo,
    setNamSlo,
    setPjgSlo,
    setLbrSlo,
    setTgiSlo
}: InputSloofProps) => {
    return (
        <>
            <div className={cn('my-2 space-y-4', className)}>
                <InputForm label="Nama Item" unit={''} type="text" val={namSlo} setValue={setNamSlo} />
                <InputForm label="Panjang" unit={satuan} type="number" val={pjgSlo} setValue={setPjgSlo} />
                <InputForm label="Lebar" unit={satuan} type="number" val={lbrSlo} setValue={setLbrSlo} />
                <InputForm label="Tinggi" unit={satuan} type="number" val={tgiSlo} setValue={setTgiSlo} />
            </div>
        </>
    )
}

export default InputSloof
