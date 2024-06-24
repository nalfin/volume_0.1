'use client'

import InputForm from '../input-form'

interface InputBalokProps {
    namaItem: string
    setNamaItem: (value: string) => void
    satuan?: string
    pBalok: string
    setBalok: (value: string) => void
    lBalok: string
    setLBalok: (value: string) => void
    tBalok: string
    setTBalok: (value: string) => void
}

const InputBalok = ({
    namaItem,
    setNamaItem,
    satuan,
    pBalok,
    setBalok,
    lBalok,
    setLBalok,
    tBalok,
    setTBalok
}: InputBalokProps) => {
    return (
        <>
            <div className="my-2 space-y-4">
                <InputForm label="Nama Item" unit={satuan} type="text" val={namaItem} setValue={setNamaItem} />
                <InputForm label="Panjang" unit={satuan} type="number" val={pBalok} setValue={setBalok} />
                <InputForm label="Lebar" unit={satuan} type="number" val={lBalok} setValue={setLBalok} />
                <InputForm label="Tinggi" unit={satuan} type="number" val={tBalok} setValue={setTBalok} />
            </div>
        </>
    )
}

export default InputBalok
