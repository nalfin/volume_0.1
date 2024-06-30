'use client'

import { cn } from '@/lib/utils'
import InputForm from '../input-form'

interface InputPedestalProps {
    className?: string
    satuan?: string
    namPed: string
    pjgPed: string
    lbrPed: string
    tgiPed: string
    jmlPed: string
    setNamPed: (value: string) => void
    setPjgPed: (value: string) => void
    setLbrPed: (value: string) => void
    setTgiPed: (value: string) => void
    setJmlPed: (value: string) => void
}

const InputPedestal = ({
    className,
    satuan,
    namPed,
    pjgPed,
    lbrPed,
    tgiPed,
    jmlPed,
    setNamPed,
    setPjgPed,
    setLbrPed,
    setTgiPed,
    setJmlPed
}: InputPedestalProps) => {
    return (
        <>
            <div className={cn('mt-2 space-y-2', className)}>
                <InputForm label="Nama Item" unit={''} type="text" val={namPed} setValue={setNamPed} />
                <InputForm label="Panjang" unit={satuan} type="number" val={pjgPed} setValue={setPjgPed} />
                <InputForm label="Lebar" unit={satuan} type="number" val={lbrPed} setValue={setLbrPed} />
                <InputForm label="Tinggi" unit={satuan} type="number" val={tgiPed} setValue={setTgiPed} />
                <InputForm label="Jumlah" unit={''} type="number" val={jmlPed} setValue={setJmlPed} />
            </div>
        </>
    )
}

export default InputPedestal
