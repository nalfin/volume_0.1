'use client'

import InputForm from '../input-form'

interface InputPelatProps {
    namaItem: string
    setNamaItem: (value: string) => void
    satuan?: string
    pPelat: string
    setPelat: (value: string) => void
    tPelat: string
    setTPelat: (value: string) => void
    lPelat: string
    setLPelat: (value: string) => void
    pLubTangga1: string
    setPLubTangga1: (value: string) => void
    lLubTangga1: string
    setLLubTangga1: (value: string) => void
    pLubTangga2: string
    setPLubTangga2: (value: string) => void
    lLubTangga2: string
    setLLubTangga2: (value: string) => void
}

const InputPelat = ({
    namaItem,
    setNamaItem,
    satuan,
    pPelat,
    setPelat,
    tPelat,
    setTPelat,
    lPelat,
    setLPelat,
    pLubTangga1,
    setPLubTangga1,
    lLubTangga1,
    setLLubTangga1,
    pLubTangga2,
    setPLubTangga2,
    lLubTangga2,
    setLLubTangga2
}: InputPelatProps) => {
    return (
        <>
            <div className="my-2 space-y-4">
                <InputForm label="Nama Item" unit={satuan} type="text" val={namaItem} setValue={setNamaItem} />
                <InputForm label="Panjang" unit={satuan} type="text" val={pPelat} setValue={setPelat} />
                <InputForm label="Lebar" unit={satuan} type="text" val={lPelat} setValue={setLPelat} />
                <InputForm label="Tinggi" unit={satuan} type="text" val={tPelat} setValue={setTPelat} />
            </div>
            <div className="relative -mx-2 -mb-2 mt-6 space-y-4 rounded-md border border-border px-2 pb-4">
                <p className="absolute -mt-3 bg-background text-xs">Lubang Tangga dsb</p>
                <InputForm label="Panjang" unit={satuan} type="text" val={pLubTangga1} setValue={setPLubTangga1} />
                <InputForm label="Lebar" unit={satuan} type="text" val={lLubTangga1} setValue={setLLubTangga1} />
                <InputForm label="Panjang" unit={satuan} type="text" val={pLubTangga2} setValue={setPLubTangga2} />
                <InputForm label="Lebar" unit={satuan} type="text" val={lLubTangga2} setValue={setLLubTangga2} />
            </div>
        </>
    )
}

export default InputPelat
