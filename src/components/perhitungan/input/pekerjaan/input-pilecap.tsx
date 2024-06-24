'use client'

import InputForm from '../input-form'

interface InputPilecapProps {
    namaItem: string
    setNamaItem: (value: string) => void
    satuan?: string
    pPilecap: string
    setPilecap: (value: string) => void
    lPilecap: string
    setLPilecap: (value: string) => void
    tPilecap: string
    setTPilecap: (value: string) => void
    jmlPilecap: string
    setJmlPilecap: (value: string) => void
}

const InputPilecap = ({
    namaItem,
    setNamaItem,
    satuan,
    pPilecap,
    setPilecap,
    lPilecap,
    setLPilecap,
    tPilecap,
    setTPilecap,
    jmlPilecap,
    setJmlPilecap
}: InputPilecapProps) => {
    return (
        <>
            <div className="my-2 space-y-4">
                <InputForm label="Nama Item" unit={satuan} type="text" val={namaItem} setValue={setNamaItem} />
                <InputForm label="Panjang" unit={satuan} type="number" val={pPilecap} setValue={setPilecap} />
                <InputForm label="Lebar" unit={satuan} type="number" val={lPilecap} setValue={setLPilecap} />
                <InputForm label="Tinggi" unit={satuan} type="number" val={tPilecap} setValue={setTPilecap} />
                <InputForm label="Jumlah" unit={''} type="number" val={jmlPilecap} setValue={setJmlPilecap} />
            </div>
        </>
    )
}

export default InputPilecap
