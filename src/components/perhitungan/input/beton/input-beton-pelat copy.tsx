'use client'

import InputForm from '../input-form'

interface InputBetonPelatProps {
    namaItem: string
    setNamaItem: (value: string) => void
    satuan?: string
    pPelat: string
    setPelat: (value: string) => void
    lPelat: string
    setLPelat: (value: string) => void
    tPelat: string
    setTPelat: (value: string) => void
}

const InputBetonPelat = ({
    namaItem,
    setNamaItem,
    satuan,
    pPelat,
    setPelat,
    lPelat,
    setLPelat,
    tPelat,
    setTPelat
}: InputBetonPelatProps) => {
    return (
        <>
            <div className="my-2 space-y-2">
                <InputForm label="Nama Item" unit={satuan} type="text" val={namaItem} setValue={setNamaItem} />
                <InputForm label="Panjang" unit={satuan} type="text" val={pPelat} setValue={setPelat} />
                <InputForm label="Lebar" unit={satuan} type="text" val={lPelat} setValue={setLPelat} />
                <InputForm label="Tinggi" unit={satuan} type="text" val={tPelat} setValue={setTPelat} />
            </div>
            <div className="border border-border p-2">
                <InputForm label="Nama Item" unit={satuan} type="text" val={namaItem} setValue={setNamaItem} />
            </div>
        </>
    )
}

export default InputBetonPelat
