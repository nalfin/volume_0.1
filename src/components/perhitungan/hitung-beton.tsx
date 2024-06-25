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
    const [betNmaPilecap, setBetNmaPilecap] = useStateHelpers<string>('betNmaPilecap', '')
    const [betPjgPilecap, setBetPjgPilecap] = useStateHelpers<string>('betPjgPilecap', '')
    const [betLbrPilecap, setBetLbrPilecap] = useStateHelpers<string>('betLbrPilecap', '')
    const [betTgiPilecap, setBetTgiPilecap] = useStateHelpers<string>('betTgiPilecap', '')
    const [betJmlPilecap, setBetJmlPilecap] = useStateHelpers<string>('betJmlPilecap', '')
    // PEDESTAL
    const [betNmaPedestal, setBetNmaPedestal] = useStateHelpers<string>('betNmaPedestal', '')
    const [betPjgPedestal, setBetPjgPedestal] = useStateHelpers<string>('betPjgPedestal', '')
    const [betLbrPedestal, setBetLbrPedestal] = useStateHelpers<string>('betLbrPedestal', '')
    const [betTgiPedestal, setBetTgiPedestal] = useStateHelpers<string>('betTgiPedestal', '')
    const [betJmlPedestal, setBetJmlPedestal] = useStateHelpers<string>('betJmlPedestal', '')
    //SLOOF
    const [betNmaSloof, setBetNmaSloof] = useStateHelpers<string>('betNmaSloof', '')
    const [betPjgSloof, setBetPjgSloof] = useStateHelpers<string>('betPjgSloof', '')
    const [betLbrSloof, setBetLbrSloof] = useStateHelpers<string>('betLbrSloof', '')
    const [betTgiSloof, setBetTgiSloof] = useStateHelpers<string>('betTgiSloof', '')
    // KOLOM
    const [betNmaKolom, setBetNmaKolom] = useStateHelpers<string>('betNmaKolom', '')
    const [betPjgKolom, setBetPjgKolom] = useStateHelpers<string>('betPjgKolom', '')
    const [betLbrKolom, setBetLbrKolom] = useStateHelpers<string>('betLbrKolom', '')
    const [betTgiKolom, setBetTgiKolom] = useStateHelpers<string>('betTgiKolom', '')
    const [betJmlKolom, setBetJmlKolom] = useStateHelpers<string>('betJmlKolom', '')
    // BALOK
    const [betNmaBalok, setBetNmaBalok] = useStateHelpers<string>('betNmaBalok', '')
    const [betPjgBalok, setBetPjgBalok] = useStateHelpers<string>('betPjgBalok', '')
    const [betLbrBalok, setBetLbrBalok] = useStateHelpers<string>('betLbrBalok', '')
    const [betTgiBalok, setBetTgiBalok] = useStateHelpers<string>('betTgiBalok', '')
    // PELAT
    const [betNmaPelat, setBetNmaPelat] = useStateHelpers<string>('betNmaPelat', '')
    const [betPjgPelat, setBetPjgPelat] = useStateHelpers<string>('betPjgPelat', '')
    const [betLbrPelat, setBetLbrPelat] = useStateHelpers<string>('betLbrPelat', '')
    const [betTgiPelat, setBetTgiPelat] = useStateHelpers<string>('betTgiPelat', '')
    const [betPjgLT1, setBetPjgLT1] = useStateHelpers<string>('betPjgLT1', '')
    const [betLbrLT1, setBetLbrLT1] = useStateHelpers<string>('betLbrLT1', '')
    const [betPjgLT2, setBetPjgLT2] = useStateHelpers<string>('betPjgLT2', '')
    const [betLbrLT2, setBetLbrLT2] = useStateHelpers<string>('betLbrLT2', '')

    // ----------
    // TABEL
    // ----------
    const [tabelBetPilecap, setTabelBetPilecap] = useTableData('tabelBetPilecap')
    const [tabelBetPedestal, setTabelBetPedestal] = useTableData('tabelBetPedestal')
    const [tabelBetSloof, setTabelBetSloof] = useTableData('tabelBetSloof')
    const [tabelBetKolom, setTabelBetKolom] = useTableData('tabelBetKolom')
    const [tabelBetBalok, setTabelBetBalok] = useTableData('tabelBetBalok')
    const [tabelBetPelat, setTabelBetPelat] = useTableData('tabelBetPelat')

    // ----------
    // RESET
    // ----------
    const resetDataBeton = () => {
        setSelectedValue(defaultValue)
        setSelectedSatuan(defaultSatuan)
        setSelectedKoef(defaultKoef)

        // PILECAP
        setBetNmaPilecap('')
        setBetPjgPilecap('')
        setBetLbrPilecap('')
        setBetTgiPilecap('')
        setBetJmlPilecap('')
        // PEDESTAL
        setBetNmaPedestal('')
        setBetPjgPedestal('')
        setBetLbrPedestal('')
        setBetTgiPedestal('')
        setBetJmlPedestal('')
        // SLOOF
        setBetNmaSloof('')
        setBetPjgSloof('')
        setBetLbrSloof('')
        setBetTgiSloof('')
        // KOLOM
        setBetNmaKolom('')
        setBetPjgKolom('')
        setBetLbrKolom('')
        setBetTgiKolom('')
        setBetJmlKolom('')
        // BALOK
        setBetNmaBalok('')
        setBetPjgBalok('')
        setBetLbrBalok('')
        setBetTgiBalok('')
        // PELAT
        setBetNmaPelat('')
        setBetPjgPelat('')
        setBetLbrPelat('')
        setBetTgiPelat('')
        setBetPjgLT1('')
        setBetLbrLT1('')
        setBetPjgLT2('')
        setBetLbrLT2('')

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
        localStorage.removeItem('tabelBetPilecap')
        localStorage.removeItem('tabelBetPedestal')
        localStorage.removeItem('tabelBetSloof')
        localStorage.removeItem('tabelBetKolom')
        localStorage.removeItem('tabelBetBalok')
        localStorage.removeItem('tabelBetPelat')

        setTabelBetPilecap(null)
        setTabelBetPedestal(null)
        setTabelBetSloof(null)
        setTabelBetKolom(null)
        setTabelBetBalok(null)
        setTabelBetPelat(null)

        // REFRESH HALAMAN
        window.location.reload()
    }

    // ----------
    // PERHITUNGAN
    // ----------
    const { calcPilecap } = useCalcBetonPilecap(setTabelBetPilecap)
    const { calcPedestal } = useCalcBetonPedestal(setTabelBetPedestal)
    const { calcSloof } = useCalcBetonSloof(setTabelBetSloof)
    const { calcKolom } = useCalcBetonKolom(setTabelBetKolom)
    const { calcBalok } = useCalcBetonBalok(setTabelBetBalok)
    const { calcPelat } = useCalcBetonPelat(setTabelBetPelat)

    // ----------
    // EXPORT EXCEL
    // ----------
    const exportToExcel = (tableId: string, fileName: string) => {
        const table = document.getElementById(tableId)
        const workbook = XLSX.utils.table_to_book(table, {
            raw: true // Mengambil data sebagai raw strings
        })

        // Mengubah format sel yang mengandung angka
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        for (let cell in worksheet) {
            if (cell.startsWith('!')) continue // Lewati header dan metadata
            if (typeof worksheet[cell].v === 'number') {
                worksheet[cell].z = '#,##0.00' // Format angka dengan pemisah ribuan dan dua desimal
                worksheet[cell].t = 'n' // Pastikan tipe sel adalah 'number'
                worksheet[cell].v = parseFloat(worksheet[cell].v.toFixed(2)) // Format angka dengan dua desimal
            }
        }

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
                            namPil={betNmaPilecap}
                            pjgPil={betPjgPilecap}
                            lbrPil={betLbrPilecap}
                            tgiPil={betTgiPilecap}
                            jmlPil={betJmlPilecap}
                            setNamPil={setBetNmaPilecap}
                            setPjgPil={setBetPjgPilecap}
                            setLbrPil={setBetLbrPilecap}
                            setTgiPil={setBetTgiPilecap}
                            setJmlPil={setBetJmlPilecap}
                        />
                    )}
                    {isClient && selectedValue === 'pedestal' && (
                        <InputPedestal
                            satuan={selectedSatuan}
                            namPed={betNmaPedestal}
                            pjgPed={betPjgPedestal}
                            lbrPed={betLbrPedestal}
                            tgiPed={betTgiPedestal}
                            jmlPed={betJmlPedestal}
                            setNamPed={setBetNmaPedestal}
                            setPjgPed={setBetPjgPedestal}
                            setLbrPed={setBetLbrPedestal}
                            setTgiPed={setBetTgiPedestal}
                            setJmlPed={setBetJmlPedestal}
                        />
                    )}
                    {isClient && selectedValue === 'sloof' && (
                        <InputSloof
                            satuan={selectedSatuan}
                            namSlo={betNmaSloof}
                            pjgSlo={betPjgSloof}
                            lbrSlo={betLbrSloof}
                            tgiSlo={betTgiSloof}
                            setNamSlo={setBetNmaSloof}
                            setPjgSlo={setBetPjgSloof}
                            setLbrSlo={setBetLbrSloof}
                            setTgiSlo={setBetTgiSloof}
                        />
                    )}
                    {isClient && selectedValue === 'kolom' && (
                        <InputKolom
                            satuan={selectedSatuan}
                            namKol={betNmaKolom}
                            pjgKol={betPjgKolom}
                            lbrKol={betLbrKolom}
                            tgiKol={betTgiKolom}
                            jmlKol={betJmlKolom}
                            setNamKol={setBetNmaKolom}
                            setPjgKol={setBetPjgKolom}
                            setLbrKol={setBetLbrKolom}
                            setTgiKol={setBetTgiKolom}
                            setJmlKol={setBetJmlKolom}
                        />
                    )}
                    {isClient && selectedValue === 'balok' && (
                        <InputBalok
                            satuan={selectedSatuan}
                            namBlk={betNmaBalok}
                            pjgBlk={betPjgBalok}
                            lbrBlk={betLbrBalok}
                            tgiBlk={betTgiBalok}
                            setNamBlk={setBetNmaBalok}
                            setPjgBlk={setBetPjgBalok}
                            setLbrBlk={setBetLbrBalok}
                            setTgiBlk={setBetTgiBalok}
                        />
                    )}
                    {isClient && selectedValue === 'pelat' && (
                        <InputPelat
                            satuan={selectedSatuan}
                            namPlt={betNmaPelat}
                            pjgPlt={betPjgPelat}
                            lbrPlt={betLbrPelat}
                            tgiPlt={betTgiPelat}
                            pjgLT1={betPjgLT1}
                            lbrLT1={betLbrLT1}
                            pjgLT2={betPjgLT2}
                            lbrLT2={betLbrLT2}
                            setNamPlt={setBetNmaPelat}
                            setPjgPlt={setBetPjgPelat}
                            setLbrPlt={setBetLbrPelat}
                            setTgiPlt={setBetTgiPelat}
                            setPjgLT1={setBetPjgLT1}
                            setLbrLT1={setBetLbrLT1}
                            setPjgLT2={setBetPjgLT2}
                            setLbrLT2={setBetLbrLT2}
                        />
                    )}
                </div>
                {/* TABEL */}
                <div className="col-span-10 rounded-sm border border-border p-4 lg:col-span-7">
                    <TabelBeton
                        tabelId="tabelBeton"
                        tabelBetPilecap={tabelBetPilecap}
                        tabelBetPedestal={tabelBetPedestal}
                        tabelBetSloof={tabelBetSloof}
                        tabelBetKolom={tabelBetKolom}
                        tabelBetBalok={tabelBetBalok}
                        tabelBetPelat={tabelBetPelat}
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
                            nama: betNmaPilecap,
                            p: betPjgPilecap,
                            l: betLbrPilecap,
                            t: betTgiPilecap,
                            jml: betJmlPilecap,
                            satuan: selectedSatuan,
                            koef: selectedKoef
                        })
                        calcPedestal({
                            nama: betNmaPedestal,
                            p: betPjgPedestal,
                            l: betLbrPedestal,
                            t: betTgiPedestal,
                            jml: betJmlPedestal,
                            satuan: selectedSatuan,
                            koef: selectedKoef
                        })
                        calcSloof({
                            nama: betNmaSloof,
                            p: betPjgSloof,
                            l: betLbrSloof,
                            t: betTgiSloof,
                            satuan: selectedSatuan,
                            koef: selectedKoef
                        })
                        calcKolom({
                            nama: betNmaKolom,
                            p: betPjgKolom,
                            l: betLbrKolom,
                            t: betTgiKolom,
                            jml: betJmlKolom,
                            satuan: selectedSatuan,
                            koef: selectedKoef
                        })
                        calcBalok({
                            nama: betNmaBalok,
                            p: betPjgBalok,
                            l: betLbrBalok,
                            t: betTgiBalok,
                            satuan: selectedSatuan,
                            koef: selectedKoef
                        })
                        calcPelat({
                            nama: betNmaPelat,
                            p: betPjgPelat,
                            l: betLbrPelat,
                            t: betTgiPelat,
                            pLuTa1: betPjgLT1,
                            lLuTa1: betLbrLT1,
                            pLuTa2: betPjgLT2,
                            lLuTa2: betLbrLT2,
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
                <Button variant="link" className="button__anim bg-red-700 hover:no-underline" onClick={resetDataBeton}>
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
