'use client'

import * as XLSX from 'xlsx'
import { Button } from '@/components/ui/button'
import { IconCalculator, IconDownload, IconRefresh } from '@irsyadadl/paranoid'
import { useEffect, useState } from 'react'

import SelectItemPekerjaan from './select-item-pekerjaan'
import SelectSatuan from './input/select-satuan'
import useStateHelpers from './lib/useStateHelpers'
import TabelBekisting from './tabel/tabel-bekisting'

import InputPilecap from './input/pekerjaan/input-pilecap'
import useTableData from './lib/useTabelHelpers'
import InputPedestal from './input/pekerjaan/input-pedestal'
import InputSloof from './input/pekerjaan/input-sloof'
import InputKolom from './input/pekerjaan/input-kolom'
import InputBalok from './input/pekerjaan/input-balok'
import InputPelat from './input/pekerjaan/input-pelat'

import useCalcBekistingPilecap from './calc/bekisting-pilecap'
import useCalcBekistingPedestal from './calc/bekisting-pedestal'
import useCalcBekistingSloof from './calc/bekisting-sloof'
import useCalcBekistingKolom from './calc/bekisting-kolom'
import useCalcBekistingBalok from './calc/bekisting-balok'
import useCalcBekistingPelat from './calc/bekisting-pelat'

const HitungBekisting = () => {
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
    // PILECAP
    const [bekNmaPilecap, setBekNmaPilecap] = useStateHelpers<string>('bekNmaPilecap', '')
    const [bekPjgPilecap, setBekPjgPilecap] = useStateHelpers<string>('bekPjgPilecap', '')
    const [bekLbrPilecap, setBekLbrPilecap] = useStateHelpers<string>('bekLbrPilecap', '')
    const [bekTgiPilecap, setBekTgiPilecap] = useStateHelpers<string>('bekTgiPilecap', '')
    const [bekJmlPilecap, setBekJmlPilecap] = useStateHelpers<string>('bekJmlPilecap', '')
    // PEDESTAL
    const [bekNmaPedestal, setBekNmaPedestal] = useStateHelpers<string>('bekNmaPedestal', '')
    const [bekPjgPedestal, setBekPjgPedestal] = useStateHelpers<string>('bekPjgPedestal', '')
    const [bekLbrPedestal, setBekLbrPedestal] = useStateHelpers<string>('bekLbrPedestal', '')
    const [bekTgiPedestal, setBekTgiPedestal] = useStateHelpers<string>('bekTgiPedestal', '')
    const [bekJmlPedestal, setBekJmlPedestal] = useStateHelpers<string>('bekJmlPedestal', '')
    //SLOOF
    const [bekNmaSloof, setBekNmaSloof] = useStateHelpers<string>('bekNmaSloof', '')
    const [bekPjgSloof, setBekPjgSloof] = useStateHelpers<string>('bekPjgSloof', '')
    const [bekLbrSloof, setBekLbrSloof] = useStateHelpers<string>('bekLbrSloof', '')
    const [bekTgiSloof, setBekTgiSloof] = useStateHelpers<string>('bekTgiSloof', '')
    // KOLOM
    const [bekNmaKolom, setBekNmaKolom] = useStateHelpers<string>('bekNmaKolom', '')
    const [bekPjgKolom, setBekPjgKolom] = useStateHelpers<string>('bekPjgKolom', '')
    const [bekLbrKolom, setBekLbrKolom] = useStateHelpers<string>('bekLbrKolom', '')
    const [bekTgiKolom, setBekTgiKolom] = useStateHelpers<string>('bekTgiKolom', '')
    const [bekJmlKolom, setBekJmlKolom] = useStateHelpers<string>('bekJmlKolom', '')
    // BALOK
    const [bekNmaBalok, setBekNmaBalok] = useStateHelpers<string>('bekNmaBalok', '')
    const [bekPjgBalok, setBekPjgBalok] = useStateHelpers<string>('bekPjgBalok', '')
    const [bekLbrBalok, setBekLbrBalok] = useStateHelpers<string>('bekLbrBalok', '')
    const [bekTgiBalok, setBekTgiBalok] = useStateHelpers<string>('bekTgiBalok', '')
    // PELAT
    const [bekNmaPelat, setBekNmaPelat] = useStateHelpers<string>('bekNmaPelat', '')
    const [bekPjgPelat, setBekPjgPelat] = useStateHelpers<string>('bekPjgPelat', '')
    const [bekLbrPelat, setBekLbrPelat] = useStateHelpers<string>('bekLbrPelat', '')
    const [bekTgiPelat, setBekTgiPelat] = useStateHelpers<string>('bekTgiPelat', '')
    const [bekPjgLT1, setBekPjgLT1] = useStateHelpers<string>('bekPjgLT1', '')
    const [bekLbrLT1, setBekLbrLT1] = useStateHelpers<string>('bekLbrLT1', '')
    const [bekPjgLT2, setBekPjgLT2] = useStateHelpers<string>('bekPjgLT2', '')
    const [bekLbrLT2, setBekLbrLT2] = useStateHelpers<string>('bekLbrLT2', '')

    // ----------
    // TABEL
    // ----------
    const [tabelBekPilecap, setTabelBekPilecap] = useTableData('tabelBekPilecap')
    const [tabelBekPedestal, setTabelBekPedestal] = useTableData('tabelBekPedestal')
    const [tabelBekSloof, setTabelBekSloof] = useTableData('tabelBekSloof')
    const [tabelBekKolom, setTabelBekKolom] = useTableData('tabelBekKolom')
    const [tabelBekBalok, setTabelBekBalok] = useTableData('tabelBekBalok')
    const [tabelBekPelat, setTabelBekPelat] = useTableData('tabelBekPelat')

    // ----------
    // RESET
    // ----------
    const resetDataBekisting = () => {
        setSelectedValue(defaultValue)
        setSelectedSatuan(defaultSatuan)

        // PILECAP
        setBekNmaPilecap('')
        setBekPjgPilecap('')
        setBekLbrPilecap('')
        setBekTgiPilecap('')
        setBekJmlPilecap('')
        // PEDESTAL
        setBekNmaPedestal('')
        setBekPjgPedestal('')
        setBekLbrPedestal('')
        setBekTgiPedestal('')
        setBekJmlPedestal('')
        // SLOOF
        setBekNmaSloof('')
        setBekPjgSloof('')
        setBekLbrSloof('')
        setBekTgiSloof('')
        // KOLOM
        setBekNmaKolom('')
        setBekPjgKolom('')
        setBekLbrKolom('')
        setBekTgiKolom('')
        setBekJmlKolom('')
        // BALOK
        setBekNmaBalok('')
        setBekPjgBalok('')
        setBekLbrBalok('')
        setBekTgiBalok('')
        // PELAT
        setBekNmaPelat('')
        setBekPjgPelat('')
        setBekLbrPelat('')
        setBekTgiPelat('')
        setBekPjgLT1('')
        setBekLbrLT1('')
        setBekPjgLT2('')
        setBekLbrLT2('')

        localStorage.removeItem('selectedValue')
        localStorage.removeItem('selectedSatuan')
        localStorage.removeItem('selectedKoef')

        // PILECAP
        localStorage.removeItem('bekNmaPilecap')
        localStorage.removeItem('bekPjgPilecap')
        localStorage.removeItem('bekLbrPilecap')
        localStorage.removeItem('bekTgiPilecap')
        localStorage.removeItem('bekJmlPilecap')
        //PEDESTAL
        localStorage.removeItem('bekNmaPedestal')
        localStorage.removeItem('bekPjgPedestal')
        localStorage.removeItem('bekLbrPedestal')
        localStorage.removeItem('bekTgiPedestal')
        localStorage.removeItem('bekJmlPedestal')
        // SLOOF
        localStorage.removeItem('bekNmaSloof')
        localStorage.removeItem('bekPjgSloof')
        localStorage.removeItem('bekLbrSloof')
        localStorage.removeItem('bekTgiSloof')
        // KOLOM
        localStorage.removeItem('bekNmaKolom')
        localStorage.removeItem('bekPjgKolom')
        localStorage.removeItem('bekLbrKolom')
        localStorage.removeItem('bekTgiKolom')
        localStorage.removeItem('bekJmlKolom')
        // BALOK
        localStorage.removeItem('namaBalok')
        localStorage.removeItem('bekPjgBalok')
        localStorage.removeItem('bekLbrBalok')
        localStorage.removeItem('bekTgiBalok')
        // PELAT
        localStorage.removeItem('bekNmaPelat')
        localStorage.removeItem('bekPjgPelat')
        localStorage.removeItem('bekLbrPelat')
        localStorage.removeItem('bekTgiPelat')
        localStorage.removeItem('bekPLT1')
        localStorage.removeItem('bekLLT1')
        localStorage.removeItem('bekPLT2')
        localStorage.removeItem('bekLLT2')

        // RESET TABEL
        localStorage.removeItem('tabelBekPilecap')
        localStorage.removeItem('tabelBekPedestal')
        localStorage.removeItem('tabelBekSloof')
        localStorage.removeItem('tabelBekKolom')
        localStorage.removeItem('tabelBekBalok')
        localStorage.removeItem('tabelBekPelat')

        setTabelBekPilecap(null)
        setTabelBekPedestal(null)
        setTabelBekSloof(null)
        setTabelBekKolom(null)
        setTabelBekBalok(null)
        setTabelBekPelat(null)

        // REFRESH HALAMAN
        window.location.reload()
    }

    // ----------
    // PERHITUNGAN
    // ----------
    const { calcPilecap } = useCalcBekistingPilecap(setTabelBekPilecap)
    const { calcPedestal } = useCalcBekistingPedestal(setTabelBekPedestal)
    const { calcSloof } = useCalcBekistingSloof(setTabelBekSloof)
    const { calcKolom } = useCalcBekistingKolom(setTabelBekKolom)
    const { calcBalok } = useCalcBekistingBalok(setTabelBekBalok)
    const { calcPelat } = useCalcBekistingPelat(setTabelBekPelat)

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
                    <div className="mt-2">
                        {isClient && selectedValue === 'pilecap' && (
                            <InputPilecap
                                satuan={selectedSatuan}
                                namPil={bekNmaPilecap}
                                pjgPil={bekPjgPilecap}
                                lbrPil={bekLbrPilecap}
                                tgiPil={bekTgiPilecap}
                                jmlPil={bekJmlPilecap}
                                setPjgPil={setBekPjgPilecap}
                                setLbrPil={setBekLbrPilecap}
                                setTgiPil={setBekTgiPilecap}
                                setJmlPil={setBekJmlPilecap}
                                setNamPil={setBekNmaPilecap}
                            />
                        )}
                        {isClient && selectedValue === 'pedestal' && (
                            <InputPedestal
                                satuan={selectedSatuan}
                                namPed={bekNmaPedestal}
                                pjgPed={bekPjgPedestal}
                                lbrPed={bekLbrPedestal}
                                tgiPed={bekTgiPedestal}
                                jmlPed={bekJmlPedestal}
                                setNamPed={setBekNmaPedestal}
                                setPjgPed={setBekPjgPedestal}
                                setLbrPed={setBekLbrPedestal}
                                setTgiPed={setBekTgiPedestal}
                                setJmlPed={setBekJmlPedestal}
                            />
                        )}
                        {isClient && selectedValue === 'sloof' && (
                            <InputSloof
                                satuan={selectedSatuan}
                                namSlo={bekNmaSloof}
                                pjgSlo={bekPjgSloof}
                                lbrSlo={bekLbrSloof}
                                tgiSlo={bekTgiSloof}
                                setNamSlo={setBekNmaSloof}
                                setPjgSlo={setBekPjgSloof}
                                setLbrSlo={setBekLbrSloof}
                                setTgiSlo={setBekTgiSloof}
                            />
                        )}
                        {isClient && selectedValue === 'kolom' && (
                            <InputKolom
                                satuan={selectedSatuan}
                                namKol={bekNmaKolom}
                                pjgKol={bekPjgKolom}
                                lbrKol={bekLbrKolom}
                                tgiKol={bekTgiKolom}
                                jmlKol={bekJmlKolom}
                                setNamKol={setBekNmaKolom}
                                setPjgKol={setBekPjgKolom}
                                setLbrKol={setBekLbrKolom}
                                setTgiKol={setBekTgiKolom}
                                setJmlKol={setBekJmlKolom}
                            />
                        )}
                        {isClient && selectedValue === 'balok' && (
                            <InputBalok
                                satuan={selectedSatuan}
                                namBlk={bekNmaBalok}
                                pjgBlk={bekPjgBalok}
                                lbrBlk={bekLbrBalok}
                                tgiBlk={bekTgiBalok}
                                setNamBlk={setBekNmaBalok}
                                setPjgBlk={setBekPjgBalok}
                                setLbrBlk={setBekLbrBalok}
                                setTgiBlk={setBekTgiBalok}
                            />
                        )}
                        {isClient && selectedValue === 'pelat' && (
                            <InputPelat
                                satuan={selectedSatuan}
                                namPlt={bekNmaPelat}
                                pjgPlt={bekPjgPelat}
                                lbrPlt={bekLbrPelat}
                                tgiPlt={bekTgiPelat}
                                pjgLT1={bekPjgLT1}
                                lbrLT1={bekLbrLT1}
                                pjgLT2={bekPjgLT2}
                                lbrLT2={bekLbrLT2}
                                setNamPlt={setBekNmaPelat}
                                setPjgPlt={setBekPjgPelat}
                                setLbrPlt={setBekLbrPelat}
                                setTgiPlt={setBekTgiPelat}
                                setPjgLT1={setBekPjgLT1}
                                setLbrLT1={setBekLbrLT1}
                                setPjgLT2={setBekPjgLT2}
                                setLbrLT2={setBekLbrLT2}
                            />
                        )}
                    </div>
                </div>
                {/* TABEL */}
                <div className="col-span-10 rounded-sm border border-border p-4 lg:col-span-7">
                    <TabelBekisting
                        tabelId="tabelBekisting"
                        tabelBekPilecap={tabelBekPilecap}
                        tabelBekPedestal={tabelBekPedestal}
                        tabelBekSloof={tabelBekSloof}
                        tabelBekKolom={tabelBekKolom}
                        tabelBekBalok={tabelBekBalok}
                        tabelBekPelat={tabelBekPelat}
                    />
                </div>
            </div>
            {/* BUTTON */}
            <div className="mt-4 flex flex-col gap-4 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:flex-row">
                <Button
                    variant="link"
                    className="button__anim bg-indigo-700 text-white hover:no-underline"
                    onClick={() => {
                        calcPilecap({
                            satuan: selectedSatuan,
                            nama: bekNmaPilecap,
                            p: bekPjgPilecap,
                            l: bekLbrPilecap,
                            t: bekTgiPilecap,
                            jml: bekJmlPilecap
                        })
                        calcPedestal({
                            satuan: selectedSatuan,
                            nama: bekNmaPedestal,
                            p: bekPjgPedestal,
                            l: bekLbrPedestal,
                            t: bekTgiPedestal,
                            jml: bekJmlPedestal
                        })
                        calcSloof({
                            satuan: selectedSatuan,
                            nama: bekNmaSloof,
                            p: bekPjgSloof,
                            l: bekLbrSloof,
                            t: bekTgiSloof
                        })
                        calcKolom({
                            satuan: selectedSatuan,
                            nama: bekNmaKolom,
                            p: bekPjgKolom,
                            l: bekLbrKolom,
                            t: bekTgiKolom,
                            jml: bekJmlKolom
                        })
                        calcBalok({
                            satuan: selectedSatuan,
                            nama: bekNmaBalok,
                            p: bekPjgBalok,
                            l: bekLbrBalok,
                            t: bekTgiBalok
                        })
                        calcPelat({
                            satuan: selectedSatuan,
                            nama: bekNmaPelat,
                            p: bekPjgPelat,
                            l: bekLbrPelat,
                            t: bekTgiPelat,
                            pLT1: bekPjgLT1,
                            lLT1: bekLbrLT1,
                            pLT2: bekPjgLT2,
                            lLT2: bekLbrLT2
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
                <Button
                    variant="link"
                    className="button__anim bg-red-700 text-white hover:no-underline"
                    onClick={resetDataBekisting}
                >
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
                    className="button__anim bg-indigo-700 text-white hover:no-underline"
                    onClick={() => exportToExcel('tabelBekisting', 'Pekerjaan Bekisting')}
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

export default HitungBekisting
