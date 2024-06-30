'use client'

import InputForm from '../input-form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface InputPelatProps {
    satuan?: string
    label?: string
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
                <InputForm label="Tebal" unit={satuan} type="text" val={tgiPlt} setValue={setTgiPlt} />
            </div>
            <div className="mx-0 mt-6 lg:-mx-2">
                <Tabs defaultValue="a" className="w-full">
                    <TabsList className="w-full">
                        <TabsTrigger className="w-full" value="a">
                            Lubang Tangga 1
                        </TabsTrigger>
                        <TabsTrigger className="w-full" value="b">
                            Lubang Tangga 2
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="a">
                        <div className="space-y-4 rounded-md border border-border p-2 pb-4">
                            <InputForm
                                label="Panjang Lubang Tangga 1"
                                unit={satuan}
                                type="text"
                                val={pjgLT1}
                                setValue={setPjgLT1}
                            />
                            <InputForm
                                label="Lebar Lubang Tangga 1"
                                unit={satuan}
                                type="text"
                                val={lbrLT1}
                                setValue={setLbrLT1}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="b">
                        <div className="space-y-4 rounded-md border border-border p-2 pb-4">
                            <InputForm
                                label="Panjang Lubang Tangga 2"
                                unit={satuan}
                                type="text"
                                val={pjgLT2}
                                setValue={setPjgLT2}
                            />
                            <InputForm
                                label="Lebar Lubang Tangga 2"
                                unit={satuan}
                                type="text"
                                val={lbrLT2}
                                setValue={setLbrLT2}
                            />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {/* <div className="relative -mx-2 -mb-2 mt-6 space-y-4 rounded-md border border-border px-2 pb-4">
                <p className="absolute -mt-2 bg-background text-xs">Lubang Tangga dsb</p>
                <InputForm
                    label="Panjang Lubang Tangga 1"
                    unit={satuan}
                    type="text"
                    val={pjgLT1}
                    setValue={setPjgLT1}
                />
                <InputForm label="Lebar Lubang Tangga 1" unit={satuan} type="text" val={lbrLT1} setValue={setLbrLT1} />
                <InputForm
                    label="Panjang Lubang Tangga 2"
                    unit={satuan}
                    type="text"
                    val={pjgLT2}
                    setValue={setPjgLT2}
                />
                <InputForm label="Lebar Lubang Tangga 2" unit={satuan} type="text" val={lbrLT2} setValue={setLbrLT2} />
            </div> */}
        </>
    )
}

export default InputPelat
