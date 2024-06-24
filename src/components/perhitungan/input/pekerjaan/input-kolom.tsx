'use client'

import InputForm from '../input-form'

interface InputKolomProps {
    namaItem: string
    setNamaItem: (value: string) => void
    satuan?: string
    pKolom: string
    setKolom: (value: string) => void
    lKolom: string
    setLKolom: (value: string) => void
    tKolom: string
    setTKolom: (value: string) => void
    jmlKolom: string
    setJmlKolom: (value: string) => void
}

const InputKolom = ({
    namaItem,
    setNamaItem,
    satuan,
    pKolom,
    setKolom,
    lKolom,
    setLKolom,
    tKolom,
    setTKolom,
    jmlKolom,
    setJmlKolom
}: InputKolomProps) => {
    return (
        <>
            <div className="my-2 space-y-4">
                <InputForm label="Nama Item" unit={satuan} type="text" val={namaItem} setValue={setNamaItem} />
                <InputForm label="Panjang" unit={satuan} type="number" val={pKolom} setValue={setKolom} />
                <InputForm label="Lebar" unit={satuan} type="number" val={lKolom} setValue={setLKolom} />
                <InputForm label="Tinggi" unit={satuan} type="number" val={tKolom} setValue={setTKolom} />
                <InputForm label="Jumlah" unit={''} type="number" val={jmlKolom} setValue={setJmlKolom} />
            </div>
        </>
    )
}

export default InputKolom
