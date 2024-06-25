'use client'

import InputForm from '../input-form'

interface InputPilecapProps {
    satuan?: string
    namPil: string
    pjgPil: string
    lbrPil: string
    tgiPil: string
    jmlPil: string
    setNamPil: (value: string) => void
    setPjgPil: (value: string) => void
    setLbrPil: (value: string) => void
    setTgiPil: (value: string) => void
    setJmlPil: (value: string) => void
}

const InputPilecap = ({
    satuan,
    namPil,
    pjgPil,
    lbrPil,
    tgiPil,
    jmlPil,
    setNamPil,
    setPjgPil,
    setLbrPil,
    setTgiPil,
    setJmlPil
}: InputPilecapProps) => {
    return (
        <>
            <div className="my-2 space-y-4">
                <InputForm label="Nama Item" unit={''} type="text" val={namPil} setValue={setNamPil} />
                <InputForm label="Panjang" unit={satuan} type="number" val={pjgPil} setValue={setPjgPil} />
                <InputForm label="Lebar" unit={satuan} type="number" val={lbrPil} setValue={setLbrPil} />
                <InputForm label="Tinggi" unit={satuan} type="number" val={tgiPil} setValue={setTgiPil} />
                <InputForm label="Jumlah" unit={''} type="number" val={jmlPil} setValue={setJmlPil} />
            </div>
        </>
    )
}

export default InputPilecap
