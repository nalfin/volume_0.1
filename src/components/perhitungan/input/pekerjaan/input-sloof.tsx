'use client'

import InputForm from '../input-form'

interface InputSloofProps {
    namaItem: string
    setNamaItem: (value: string) => void
    satuan?: string
    pSloof: string
    setSloof: (value: string) => void
    lSloof: string
    setLSloof: (value: string) => void
    tSloof: string
    setTSloof: (value: string) => void
}

const InputSloof = ({
    namaItem,
    setNamaItem,
    satuan,
    pSloof,
    setSloof,
    lSloof,
    setLSloof,
    tSloof,
    setTSloof
}: InputSloofProps) => {
    return (
        <>
            <div className="my-2 space-y-4">
                <InputForm label="Nama Item" unit={satuan} type="text" val={namaItem} setValue={setNamaItem} />
                <InputForm label="Panjang" unit={satuan} type="number" val={pSloof} setValue={setSloof} />
                <InputForm label="Lebar" unit={satuan} type="number" val={lSloof} setValue={setLSloof} />
                <InputForm label="Tinggi" unit={satuan} type="number" val={tSloof} setValue={setTSloof} />
            </div>
        </>
    )
}

export default InputSloof
