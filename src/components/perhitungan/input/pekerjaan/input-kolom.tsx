'use client'

import InputForm from '../input-form'

interface InputKolomProps {
    satuan?: string
    namKol: string
    pjgKol: string
    lbrKol: string
    tgiKol: string
    jmlKol: string
    setNamKol: (value: string) => void
    setPjgKol: (value: string) => void
    setLbrKol: (value: string) => void
    setTgiKol: (value: string) => void
    setJmlKol: (value: string) => void
}

const InputKolom = ({
    satuan,
    namKol,
    pjgKol,
    lbrKol,
    tgiKol,
    jmlKol,
    setNamKol,
    setPjgKol,
    setLbrKol,
    setTgiKol,
    setJmlKol
}: InputKolomProps) => {
    return (
        <>
            <div className="my-2 space-y-4">
                <InputForm label="Nama Item" unit={''} type="text" val={namKol} setValue={setNamKol} />
                <InputForm label="Panjang" unit={satuan} type="number" val={pjgKol} setValue={setPjgKol} />
                <InputForm label="Lebar" unit={satuan} type="number" val={lbrKol} setValue={setLbrKol} />
                <InputForm label="Tinggi" unit={satuan} type="number" val={tgiKol} setValue={setTgiKol} />
                <InputForm label="Jumlah" unit={''} type="number" val={jmlKol} setValue={setJmlKol} />
            </div>
        </>
    )
}

export default InputKolom
