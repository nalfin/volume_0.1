'use client'

import * as XLSX from 'xlsx'
import { Button } from '@/components/ui/button'
import { IconCalculator, IconDownload, IconRefresh } from '@irsyadadl/paranoid'
import { useEffect, useState } from 'react'

import SelectItemPekerjaan from './select-item-pekerjaan'
import SelectSatuan from './input/select-satuan'
import SelectKoefisienBeton from './input/select-koef-beton'

import useStateHelpers from './lib/useStateHelpers'
import InputPelat from './input/pekerjaan/input-pelat'
import TabelBeton from './tabel/tabel-beton'
import InputPilecap from './input/pekerjaan/input-pilecap'
import InputPedestal from './input/pekerjaan/input-pedestal'
import InputSloof from './input/pekerjaan/input-sloof'
import InputKolom from './input/pekerjaan/input-kolom'
import InputBalok from './input/pekerjaan/input-balok'
import useTableData from './lib/useTabelHelpers'
import useCalcBetonPilecap from './calc/beton-pilecap'
import useCalcBetonPedestal from './calc/beton-pedestal'
import useCalcBetonSloof from './calc/beton-sloof'
import useCalcBetonKolom from './calc/beton-kolom'
import useCalcBetonBalok from './calc/beton-balok'
import useCalcBetonPelat from './calc/beton-pelat'

const HitungBeton = () => {
    const defaultValue = 'pilecap'
    const defaultSatuan = 'm'
    const defaultKoef = 'K100'
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    // ----------
    // STATE
    // ----------
    const [selectedValue, setSelectedValue] = useStateHelpers<string>('selectedValue', defaultValue)
    const [selectedSatuan, setSelectedSatuan] = useStateHelpers<string>('selectedSatuan', defaultSatuan)
    const [selectedKoef, setSelectedKoef] = useStateHelpers<string>('selectedKoef', defaultKoef)
    // PILECAP
    const [namaPilecap, setNamaPilecap] = useStateHelpers<string>('namaPilecap', '')
    const [pPilecap, setPilecap] = useStateHelpers<string>('pPilecap', '')
    const [lPilecap, setLPilecap] = useStateHelpers<string>('lPilecap', '')
    const [tPilecap, setTPilecap] = useStateHelpers<string>('tPilecap', '')
    const [jmlPilecap, setJmlPilecap] = useStateHelpers<string>('jmlPilecap', '')
    // PEDESTAL
    const [namaPedestal, setNamaPedestal] = useStateHelpers<string>('namaPedestal', '')
    const [pPedestal, setPedestal] = useStateHelpers<string>('pPedestal', '')
    const [lPedestal, setLPedestal] = useStateHelpers<string>('lPedestal', '')
    const [tPedestal, setTPedestal] = useStateHelpers<string>('tPedestal', '')
    const [jmlPedestal, setJmlPedestal] = useStateHelpers<string>('jmlPedestal', '')
    //SLOOF
    const [namaSloof, setNamaSloof] = useStateHelpers<string>('namaSloof', '')
    const [pSloof, setSloof] = useStateHelpers<string>('pSloof', '')
    const [lSloof, setLSloof] = useStateHelpers<string>('lSloof', '')
    const [tSloof, setTSloof] = useStateHelpers<string>('tSloof', '')
    // KOLOM
    const [namaKolom, setNamaKolom] = useStateHelpers<string>('namaKolom', '')
    const [pKolom, setKolom] = useStateHelpers<string>('pKolom', '')
    const [lKolom, setLKolom] = useStateHelpers<string>('lKolom', '')
    const [tKolom, setTKolom] = useStateHelpers<string>('tKolom', '')
    const [jmlKolom, setJmlKolom] = useStateHelpers<string>('jmlKolom', '')
    // BALOK
    const [namaBalok, setNamaBalok] = useStateHelpers<string>('namaBalok', '')
    const [pBalok, setBalok] = useStateHelpers<string>('pBalok', '')
    const [lBalok, setLBalok] = useStateHelpers<string>('lBalok', '')
    const [tBalok, setTBalok] = useStateHelpers<string>('tBalok', '')
    // PELAT
    const [namaPelat, setNamaPelat] = useStateHelpers<string>('namaPelat', '')
    const [pPelat, setPelat] = useStateHelpers<string>('pPelat', '')
    const [lPelat, setLPelat] = useStateHelpers<string>('lPelat', '')
    const [tPelat, setTPelat] = useStateHelpers<string>('tPelat', '')
    const [pLubTangga1, setPLubTangga1] = useStateHelpers<string>('pLubTangga1', '')
    const [lLubTangga1, setLLubTangga1] = useStateHelpers<string>('lLubTangga1', '')
    const [pLubTangga2, setPLubTangga2] = useStateHelpers<string>('pLubTangga2', '')
    const [lLubTangga2, setLLubTangga2] = useStateHelpers<string>('lLubTangga2', '')

    // ----------
    // TABEL
    // ----------
    const [tabelPilecap, setTabelPilecap] = useTableData('tabelPilecap')
    const [tabelPedestal, setTabelPedestal] = useTableData('tabelPedestal')
    const [tabelSloof, setTabelSloof] = useTableData('tabelSloof')
    const [tabelKolom, setTabelKolom] = useTableData('tabelKolom')
    const [tabelBalok, setTabelBalok] = useTableData('tabelBalok')
    const [tabelPelat, setTabelPelat] = useTableData('tabelPelat')

    console.log(tabelPilecap)
    // ----------
    // RESET
    // ----------
    const handleReset = () => {
        setSelectedValue(defaultValue)
        setSelectedSatuan(defaultSatuan)
        setSelectedKoef(defaultKoef)

        // PILECAP
        setNamaPilecap('')
        setPilecap('')
        setLPilecap('')
        setTPilecap('')
        setJmlPilecap('')
        // PEDESTAL
        setNamaPedestal('')
        setPedestal('')
        setLPedestal('')
        setTPedestal('')
        setJmlPedestal('')
        // SLOOF
        setNamaSloof('')
        setSloof('')
        setLSloof('')
        setTSloof('')
        // KOLOM
        setNamaKolom('')
        setKolom('')
        setLKolom('')
        setTKolom('')
        setJmlKolom('')
        // BALOK
        setNamaBalok('')
        setBalok('')
        setLBalok('')
        setTBalok('')
        // PELAT
        setNamaPelat('')
        setPelat('')
        setLPelat('')
        setTPelat('')
        setPLubTangga1('')
        setLLubTangga1('')
        setPLubTangga2('')
        setLLubTangga2('')

        localStorage.removeItem('selectedValue')
        localStorage.removeItem('selectedSatuan')
        localStorage.removeItem('selectedKoef')

        // PILECAP
        localStorage.removeItem('namaPilecap')
        localStorage.removeItem('pPilecap')
        localStorage.removeItem('lPilecap')
        localStorage.removeItem('tPilecap')
        localStorage.removeItem('jmlPilecap')
        //PEDESTAL
        localStorage.removeItem('namaPedestal')
        localStorage.removeItem('pPedestal')
        localStorage.removeItem('lPedestal')
        localStorage.removeItem('tPedestal')
        localStorage.removeItem('jmlPedestal')
        // SLOOF
        localStorage.removeItem('namaSloof')
        localStorage.removeItem('pSloof')
        localStorage.removeItem('lSloof')
        localStorage.removeItem('tSloof')
        // KOLOM
        localStorage.removeItem('namaKolom')
        localStorage.removeItem('pKolom')
        localStorage.removeItem('lKolom')
        localStorage.removeItem('tKolom')
        localStorage.removeItem('jmlKolom')
        // BALOK
        localStorage.removeItem('namaBalok')
        localStorage.removeItem('pBalok')
        localStorage.removeItem('lBalok')
        localStorage.removeItem('tBalok')
        // PELAT
        localStorage.removeItem('namaPelat')
        localStorage.removeItem('pPelat')
        localStorage.removeItem('lPelat')
        localStorage.removeItem('tPelat')
        localStorage.removeItem('pLubTangga1')
        localStorage.removeItem('lLubTangga1')
        localStorage.removeItem('pLubTangga2')
        localStorage.removeItem('lLubTangga2')

        // RESET TABEL
        localStorage.removeItem('tabelPilecap')
        localStorage.removeItem('tabelPedestal')
        localStorage.removeItem('tabelSloof')
        localStorage.removeItem('tabelKolom')
        localStorage.removeItem('tabelBalok')
        localStorage.removeItem('tabelPelat')

        setTabelPilecap(null)

        // REFRESH HALAMAN
        window.location.reload()
    }

    // ----------
    // PERHITUNGAN
    // ----------
    const { calcPilecap } = useCalcBetonPilecap(setTabelPilecap)
    const { calcPedestal } = useCalcBetonPedestal(setTabelPedestal)
    const { calcSloof } = useCalcBetonSloof(setTabelSloof)
    const { calcKolom } = useCalcBetonKolom(setTabelKolom)
    const { calcBalok } = useCalcBetonBalok(setTabelBalok)
    const { calcPelat } = useCalcBetonPelat(setTabelPelat)

    // ----------
    // EXPORT EXCEL
    // ----------
    const exportToExcel = (tableId: string, fileName: string) => {
        const table = document.getElementById(tableId)
        const workbook = XLSX.utils.table_to_book(table)
        XLSX.writeFile(workbook, `${fileName}.xlsx`)
    }

    return (
        <div className="relative">
            <SelectItemPekerjaan handleSelectChange={setSelectedValue} defaultValue={selectedValue} />
            <div className="mt-4 grid grid-cols-10 gap-2 rounded-md border border-border p-2 lg:gap-4 lg:p-4">
                {/* INPUT */}
                <div className="col-span-10 rounded-lg border border-border p-4 lg:col-span-3">
                    <SelectSatuan satuanChange={setSelectedSatuan} defaultSatuan={selectedSatuan} />
                    <SelectKoefisienBeton koefChange={setSelectedKoef} defaultKoef={selectedKoef} />
                    {isClient && selectedValue === 'pilecap' && (
                        <InputPilecap
                            satuan={selectedSatuan}
                            namaItem={namaPilecap}
                            setNamaItem={setNamaPilecap}
                            pPilecap={pPilecap}
                            setPilecap={setPilecap}
                            lPilecap={lPilecap}
                            setLPilecap={setLPilecap}
                            tPilecap={tPilecap}
                            setTPilecap={setTPilecap}
                            jmlPilecap={jmlPilecap}
                            setJmlPilecap={setJmlPilecap}
                        />
                    )}
                    {isClient && selectedValue === 'pedestal' && (
                        <InputPedestal
                            satuan={selectedSatuan}
                            namaItem={namaPedestal}
                            setNamaItem={setNamaPedestal}
                            pPedestal={pPedestal}
                            setPedestal={setPedestal}
                            lPedestal={lPedestal}
                            setLPedestal={setLPedestal}
                            tPedestal={tPedestal}
                            setTPedestal={setTPedestal}
                            jmlPedestal={jmlPedestal}
                            setJmlPedestal={setJmlPedestal}
                        />
                    )}
                    {isClient && selectedValue === 'sloof' && (
                        <InputSloof
                            satuan={selectedSatuan}
                            namaItem={namaSloof}
                            setNamaItem={setNamaSloof}
                            pSloof={pSloof}
                            setSloof={setSloof}
                            lSloof={lSloof}
                            setLSloof={setLSloof}
                            tSloof={tSloof}
                            setTSloof={setTSloof}
                        />
                    )}
                    {isClient && selectedValue === 'kolom' && (
                        <InputKolom
                            satuan={selectedSatuan}
                            namaItem={namaKolom}
                            setNamaItem={setNamaKolom}
                            pKolom={pKolom}
                            setKolom={setKolom}
                            lKolom={lKolom}
                            setLKolom={setLKolom}
                            tKolom={tKolom}
                            setTKolom={setTKolom}
                            jmlKolom={jmlKolom}
                            setJmlKolom={setJmlKolom}
                        />
                    )}
                    {isClient && selectedValue === 'balok' && (
                        <InputBalok
                            satuan={selectedSatuan}
                            namaItem={namaBalok}
                            setNamaItem={setNamaBalok}
                            pBalok={pBalok}
                            setBalok={setBalok}
                            lBalok={lBalok}
                            setLBalok={setLBalok}
                            tBalok={tBalok}
                            setTBalok={setTBalok}
                        />
                    )}
                    {isClient && selectedValue === 'pelat' && (
                        <InputPelat
                            satuan={selectedSatuan}
                            namaItem={namaPelat}
                            setNamaItem={setNamaPelat}
                            pPelat={pPelat}
                            setPelat={setPelat}
                            lPelat={lPelat}
                            setLPelat={setLPelat}
                            tPelat={tPelat}
                            setTPelat={setTPelat}
                            pLubTangga1={pLubTangga1}
                            setPLubTangga1={setPLubTangga1}
                            lLubTangga1={lLubTangga1}
                            setLLubTangga1={setLLubTangga1}
                            pLubTangga2={pLubTangga2}
                            setPLubTangga2={setPLubTangga2}
                            lLubTangga2={lLubTangga2}
                            setLLubTangga2={setLLubTangga2}
                        />
                    )}
                </div>
                {/* TABEL */}
                <div className="col-span-10 rounded-sm border border-border p-4 lg:col-span-7">
                    <TabelBeton
                        tabelId="tabelBeton"
                        tabelPilecap={tabelPilecap}
                        tabelPedestal={tabelPedestal}
                        tabelSloof={tabelSloof}
                        tabelKolom={tabelKolom}
                        tabelBalok={tabelBalok}
                        tabelPelat={tabelPelat}
                    />
                </div>
            </div>
            {/* BUTTON */}
            <div className="mt-4 flex flex-col gap-4 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:flex-row">
                <Button
                    variant="link"
                    className="button__anim bg-indigo-700 hover:no-underline"
                    onClick={() => {
                        calcPilecap({
                            nama: namaPilecap,
                            p: pPilecap,
                            l: lPilecap,
                            t: tPilecap,
                            jml: jmlPilecap,
                            satuan: selectedSatuan,
                            koef: selectedKoef
                        })
                        calcPedestal({
                            nama: namaPedestal,
                            p: pPedestal,
                            l: lPedestal,
                            t: tPedestal,
                            jml: jmlPedestal,
                            satuan: selectedSatuan,
                            koef: selectedKoef
                        })
                        calcSloof({
                            nama: namaSloof,
                            p: pSloof,
                            l: lSloof,
                            t: tSloof,
                            satuan: selectedSatuan,
                            koef: selectedKoef
                        })
                        calcKolom({
                            nama: namaKolom,
                            p: pKolom,
                            l: lKolom,
                            t: tKolom,
                            jml: jmlKolom,
                            satuan: selectedSatuan,
                            koef: selectedKoef
                        })
                        calcBalok({
                            nama: namaBalok,
                            p: pBalok,
                            l: lBalok,
                            t: tBalok,
                            satuan: selectedSatuan,
                            koef: selectedKoef
                        })
                        calcPelat({
                            nama: namaPelat,
                            p: pPelat,
                            l: lPelat,
                            t: tPelat,
                            pLuTa1: pLubTangga1,
                            lLuTa1: lLubTangga1,
                            pLuTa2: pLubTangga2,
                            lLuTa2: lLubTangga2,
                            satuan: selectedSatuan,
                            koef: selectedKoef
                        })
                    }}
                >
                    <IconCalculator className="mr-1 size-4" />
                    <div className="overflow-hidden">
                        <div className="button__texts">
                            <div className="absolute">Hitung Volume</div>
                            <div className="block translate-y-[150%]">Hitung Volume</div>
                        </div>
                    </div>
                </Button>
                <Button variant="link" className="button__anim bg-red-700 hover:no-underline" onClick={handleReset}>
                    <IconRefresh className="mr-1 size-4" />
                    <div className="overflow-hidden">
                        <div className="button__texts">
                            <div className="absolute">Reset All Data</div>
                            <div className="block translate-y-[150%]">Reset All Data</div>
                        </div>
                    </div>
                </Button>
                <Button
                    variant="link"
                    className="button__anim bg-indigo-700 hover:no-underline"
                    onClick={() => exportToExcel('tabelBeton', 'Pekerjaan Beton')}
                >
                    <IconDownload className="mr-1 size-4" />
                    <div className="overflow-hidden">
                        <div className="button__texts">
                            <div className="absolute">Export to Excel</div>
                            <div className="block translate-y-[150%]">Export to Excel</div>
                        </div>
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default HitungBeton
