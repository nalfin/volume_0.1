'use client'

import InputForm from '../input-form'

interface InputPedestalProps {
    namaItem: string
    setNamaItem: (value: string) => void
    satuan?: string
    pPedestal: string
    setPedestal: (value: string) => void
    lPedestal: string
    setLPedestal: (value: string) => void
    tPedestal: string
    setTPedestal: (value: string) => void
    jmlPedestal: string
    setJmlPedestal: (value: string) => void
}

const InputPedestal = ({
    namaItem,
    setNamaItem,
    satuan,
    pPedestal,
    setPedestal,
    lPedestal,
    setLPedestal,
    tPedestal,
    setTPedestal,
    jmlPedestal,
    setJmlPedestal
}: InputPedestalProps) => {
    return (
        <>
            <div className="my-2 space-y-4">
                <InputForm label="Nama Item" unit={satuan} type="text" val={namaItem} setValue={setNamaItem} />
                <InputForm label="Panjang" unit={satuan} type="number" val={pPedestal} setValue={setPedestal} />
                <InputForm label="Lebar" unit={satuan} type="number" val={lPedestal} setValue={setLPedestal} />
                <InputForm label="Tinggi" unit={satuan} type="number" val={tPedestal} setValue={setTPedestal} />
                <InputForm label="Jumlah" unit={''} type="number" val={jmlPedestal} setValue={setJmlPedestal} />
            </div>
        </>
    )
}

export default InputPedestal
