'use client'

import InputForm from '../input-form'

interface InputPelatProps {
    satuan?: string
    namPlt: string
    pjgPlt: string
    lbrPlt: string
    tgiPlt: string
    pjgLT1: string
    lbrLT1: string
    pjgLT2: string
    lbrLT2: string
    setNamPlt: (value: string) => void
    setPjgPlt: (value: string) => void
    setLbrPlt: (value: string) => void
    setTgiPlt: (value: string) => void
    setPjgLT1: (value: string) => void
    setLbrLT1: (value: string) => void
    setPjgLT2: (value: string) => void
    setLbrLT2: (value: string) => void
}

const InputPelat = ({
    satuan,
    namPlt,
    pjgPlt,
    lbrPlt,
    tgiPlt,
    pjgLT1,
    lbrLT1,
    pjgLT2,
    lbrLT2,
    setNamPlt,
    setPjgPlt,
    setLbrPlt,
    setTgiPlt,
    setPjgLT1,
    setLbrLT1,
    setPjgLT2,
    setLbrLT2
}: InputPelatProps) => {
    return (
        <>
            <div className="my-2 space-y-4">
                <InputForm label="Nama Item" unit={''} type="text" val={namPlt} setValue={setNamPlt} />
                <InputForm label="Panjang" unit={satuan} type="text" val={pjgPlt} setValue={setPjgPlt} />
                <InputForm label="Lebar" unit={satuan} type="text" val={lbrPlt} setValue={setLbrPlt} />
                <InputForm label="Tinggi" unit={satuan} type="text" val={tgiPlt} setValue={setTgiPlt} />
            </div>
            <div className="relative -mx-2 -mb-2 mt-6 space-y-4 rounded-md border border-border px-2 pb-4">
                <p className="absolute -mt-3 bg-background text-xs">Lubang Tangga dsb</p>
                <InputForm label="Panjang" unit={satuan} type="text" val={pjgLT1} setValue={setPjgLT1} />
                <InputForm label="Lebar" unit={satuan} type="text" val={lbrLT1} setValue={setLbrLT1} />
                <InputForm label="Panjang" unit={satuan} type="text" val={pjgLT2} setValue={setPjgLT2} />
                <InputForm label="Lebar" unit={satuan} type="text" val={lbrLT2} setValue={setLbrLT2} />
            </div>
        </>
    )
}

export default InputPelat
