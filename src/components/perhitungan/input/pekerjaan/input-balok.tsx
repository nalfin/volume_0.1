'use client'

import { cn } from '@/lib/utils'
import InputForm from '../input-form'

interface InputBalokProps {
    className?: string
    satuan?: string
    namBlk: string
    pjgBlk: string
    lbrBlk: string
    tgiBlk: string
    setNamBlk: (value: string) => void
    setPjgBlk: (value: string) => void
    setLbrBlk: (value: string) => void
    setTgiBlk: (value: string) => void
}

const InputBalok = ({
    className,
    satuan,
    namBlk,
    pjgBlk,
    lbrBlk,
    tgiBlk,
    setNamBlk,
    setPjgBlk,
    setLbrBlk,
    setTgiBlk
}: InputBalokProps) => {
    return (
        <>
            <div className={cn('my-2 space-y-4', className)}>
                <InputForm label="Nama Item" unit={''} type="text" val={namBlk} setValue={setNamBlk} />
                <InputForm label="Panjang" unit={satuan} type="number" val={pjgBlk} setValue={setPjgBlk} />
                <InputForm label="Lebar" unit={satuan} type="number" val={lbrBlk} setValue={setLbrBlk} />
                <InputForm label="Tinggi" unit={satuan} type="number" val={tgiBlk} setValue={setTgiBlk} />
            </div>
        </>
    )
}

export default InputBalok
