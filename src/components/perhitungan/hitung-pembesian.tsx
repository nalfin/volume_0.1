'use client'

import * as XLSX from 'xlsx'
import { Button } from '@/components/ui/button'
import { IconCalculator, IconDownload, IconRefresh } from '@irsyadadl/paranoid'
import { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import SelectItemPekerjaan from './select-item-pekerjaan'

import useStateHelpers from './lib/useStateHelpers'
import InputPedestal from './input/pekerjaan/input-pedestal'
import InputSloof from './input/pekerjaan/input-sloof'
import InputKolom from './input/pekerjaan/input-kolom'
import useTableData from './lib/useTabelHelpers'
import TabelPembesian from './tabel/tabel-pembesian'
import SelectDiameter from './input/select-diameter'
import InputForm from './input/input-form'
import useCalcPembesianPedestal from './calc/pembesian-pedestal'
import useCalcPembesianKolom from './calc/pembesian-kolom'
import useCalcPembesianSloof from './calc/pembesian-sloof'
import useCalcPembesianBalok from './calc/pembesian-balok'
import InputBalok from './input/pekerjaan/input-balok'
import InputPelat from './input/pekerjaan/input-pelat'
import useCalcPembesianPelat from './calc/pembesian-pelat'
import useCalcPembesianPilecap from './calc/pembesian-pilecap'
import InputPilecap from './input/pekerjaan/input-pilecap'
import SelectSatuan from './input/select-satuan'

const HitungPembesian = () => {
    const defaultValue = 'pilecap'
    const defaultSatuan = 'mm'
    const defaultDiam = 'S6'
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    // ----------
    // STATE
    // ----------
    const [selectedValue, setSelectedValue] = useStateHelpers<string>('selectedValue', defaultValue)
    const [selectedSatuanPil, setSelectedSatuanPil] = useStateHelpers<string>('selectedSatuanPil', defaultSatuan)
    const [selectedSatuanPed, setSelectedSatuanPed] = useStateHelpers<string>('selectedSatuanPed', defaultSatuan)
    const [selectedSatuanSlo, setSelectedSatuanSlo] = useStateHelpers<string>('selectedSatuanSlo', defaultSatuan)
    const [selectedSatuanKol, setSelectedSatuanKol] = useStateHelpers<string>('selectedSatuanKol', defaultSatuan)
    const [selectedSatuanBal, setSelectedSatuanBal] = useStateHelpers<string>('selectedSatuanBal', defaultSatuan)
    const [selectedSatuanPel, setSelectedSatuanPel] = useStateHelpers<string>('selectedSatuanPel', defaultSatuan)
    // PILECAP
    const [pemNmaPilecap, setPemNmaPilecap] = useStateHelpers<string>('pemNmaPilecap', '')
    const [pemPjgPilecap, setPemPjgPilecap] = useStateHelpers<string>('pemPjgPilecap', '')
    const [pemLbrPilecap, setPemLbrPilecap] = useStateHelpers<string>('pemLbrPilecap', '')
    const [pemTggPilecap, setPemTggPilecap] = useStateHelpers<string>('pemTggPilecap', '')
    const [pemJmlPilecap, setPemJmlPilecap] = useStateHelpers<string>('pemJmlPilecap', '')
    const [pemTebSBPilecap, setPemTebSBPilecap] = useStateHelpers<string>('pemTebSBPilecap', '')
    const [pemDiaTAYPilecap, setPemDiaTAYPilecap] = useStateHelpers<string>('pemDiaTAYPilecap', defaultDiam)
    const [pemJrkTAYPilecap, setPemJrkTAYPilecap] = useStateHelpers<string>('pemJrkTAYPilecap', '')
    const [pemDiaTAXPilecap, setPemDiaTAXPilecap] = useStateHelpers<string>('pemDiaTAXPilecap', defaultDiam)
    const [pemJrkTAXPilecap, setPemJrkTAXPilecap] = useStateHelpers<string>('pemJrkTAXPilecap', '')
    const [pemDiaTBYPilecap, setPemDiaTBYPilecap] = useStateHelpers<string>('pemDiaTBYPilecap', defaultDiam)
    const [pemJrkTBYPilecap, setPemJrkTBYPilecap] = useStateHelpers<string>('pemJrkTBYPilecap', '')
    const [pemDiaTBXPilecap, setPemDiaTBXPilecap] = useStateHelpers<string>('pemDiaTBXPilecap', defaultDiam)
    const [pemJrkTBXPilecap, setPemJrkTBXPilecap] = useStateHelpers<string>('pemJrkTBXPilecap', '')

    // PEDESTAL
    const [pemNmaPedestal, setPemNmaPedestal] = useStateHelpers<string>('pemNmaPedestal', '')
    const [pemPjgPedestal, setPemPjgPedestal] = useStateHelpers<string>('pemPjgPedestal', '')
    const [pemLbrPedestal, setPemLbrPedestal] = useStateHelpers<string>('pemLbrPedestal', '')
    const [pemTgiPedestal, setPemTgiPedestal] = useStateHelpers<string>('pemTgiPedestal', '')
    const [pemJmlPedestal, setPemJmlPedestal] = useStateHelpers<string>('pemJmlPedestal', '')
    const [pemTebSBPedestal, setPemTebSBPedestal] = useStateHelpers<string>('pemTebSBPedestal', '')
    const [pemDiaTUPedestal, setPemDiaTUPedestal] = useStateHelpers<string>('pemDiaTUPedestal', defaultDiam)
    const [pemJmlTUPedestal, setPemJmlTUPedestal] = useStateHelpers<string>('pemJmlTUPedestal', '')
    const [pemDiaTSPedestal, setPemDiaTSPedestal] = useStateHelpers<string>('pemDiaTSPedestal', defaultDiam)
    const [pemJrkSTPedestal, setPemJrkSTPedestal] = useStateHelpers<string>('pemJrkSTPedestal', '')
    const [pemJrkSLPedestal, setPemJrkSLPedestal] = useStateHelpers<string>('pemJrkSLPedestal', '')
    const [pemDiaTTPedestal, setPemDiaTTPedestal] = useStateHelpers<string>('pemDiaTTPedestal', defaultDiam)
    const [pemJmlTXPedestal, setPemJmlTXPedestal] = useStateHelpers<string>('pemJmlTXPedestal', '')
    const [pemJrkTXPedestal, setPemJrkTXPedestal] = useStateHelpers<string>('pemJrkTXPedestal', '')
    const [pemJrkLXPedestal, setPemJrkLXPedestal] = useStateHelpers<string>('pemJrkLXPedestal', '')
    const [pemJmlTYPedestal, setPemJmlTYPedestal] = useStateHelpers<string>('pemJmlTYPedestal', '')
    const [pemJrkTYPedestal, setPemJrkTYPedestal] = useStateHelpers<string>('pemJrkTYPedestal', '')
    const [pemJrkLYPedestal, setPemJrkLYPedestal] = useStateHelpers<string>('pemJrkLYPedestal', '')
    // SLOOF
    const [pemNmaSloof, setPemNmaSloof] = useStateHelpers<string>('pemNmaSloof', '')
    const [pemPjgSloof, setPemPjgSloof] = useStateHelpers<string>('pemPjgSloof', '')
    const [pemLbrSloof, setPemLbrSloof] = useStateHelpers<string>('pemLbrSloof', '')
    const [pemTgiSloof, setPemTgiSloof] = useStateHelpers<string>('pemTgiSloof', '')
    const [pemJmlSloof, setPemJmlSloof] = useStateHelpers<string>('pemJmlSloof', '')
    const [pemTebSBSloof, setPemTebSBSloof] = useStateHelpers<string>('pemTebSBSloof', '')
    const [pemDiaTASloof, setPemDiaTASloof] = useStateHelpers<string>('pemDiaTASloof', defaultDiam)
    const [pemJmlTATSloof, setPemJmlTATSloof] = useStateHelpers<string>('pemJmlTATSloof', '')
    const [pemJmlTALSloof, setPemJmlTALSloof] = useStateHelpers<string>('pemJmlTALSloof', '')
    const [pemDiaTBSloof, setPemDiaTBSloof] = useStateHelpers<string>('pemDiaTBSloof', defaultDiam)
    const [pemJmlTBTSloof, setPemJmlTBTSloof] = useStateHelpers<string>('pemJmlTBTSloof', '')
    const [pemJmlTBLSloof, setPemJmlTBLSloof] = useStateHelpers<string>('pemJmlTBLSloof', '')
    const [pemDiaTSSloof, setPemDiaTSSloof] = useStateHelpers<string>('pemDiaTSSloof', defaultDiam)
    const [pemJrkSTSloof, setPemJrkSTSloof] = useStateHelpers<string>('pemJrkSTSloof', '')
    const [pemJrkSLSloof, setPemJrkSLSloof] = useStateHelpers<string>('pemJrkSLSloof', '')
    const [pemDiaTPSloof, setPemDiaTPSloof] = useStateHelpers<string>('pemDiaTPSloof', defaultDiam)
    const [pemJmlTPSloof, setPemJmlTPSloof] = useStateHelpers<string>('pemJmlTPSloof', '')
    // KOLOM
    const [pemNmaKolom, setPemNmaKolom] = useStateHelpers<string>('pemNmaKolom', '')
    const [pemPjgKolom, setPemPjgKolom] = useStateHelpers<string>('pemPjgKolom', '')
    const [pemLbrKolom, setPemLbrKolom] = useStateHelpers<string>('pemLbrKolom', '')
    const [pemTgiKolom, setPemTgiKolom] = useStateHelpers<string>('pemTgiKolom', '')
    const [pemJmlKolom, setPemJmlKolom] = useStateHelpers<string>('pemJmlKolom', '')
    const [pemTebSBKolom, setPemTebSBKolom] = useStateHelpers<string>('pemTebSBKolom', '')
    const [pemDiaTUKolom, setPemDiaTUKolom] = useStateHelpers<string>('pemDiaTUKolom', defaultDiam)
    const [pemJmlTUKolom, setPemJmlTUKolom] = useStateHelpers<string>('pemJmlTUKolom', '')
    const [pemDiaTSKolom, setPemDiaTSKolom] = useStateHelpers<string>('pemDiaTSKolom', defaultDiam)
    const [pemJrkSTKolom, setPemJrkSTKolom] = useStateHelpers<string>('pemJrkSTKolom', '')
    const [pemJrkSLKolom, setPemJrkSLKolom] = useStateHelpers<string>('pemJrkSLKolom', '')
    const [pemDiaTTKolom, setPemDiaTTKolom] = useStateHelpers<string>('pemDiaTTKolom', defaultDiam)
    const [pemJmlTXKolom, setPemJmlTXKolom] = useStateHelpers<string>('pemJmlTXKolom', '')
    const [pemJrkTXKolom, setPemJrkTXKolom] = useStateHelpers<string>('pemJrkTXKolom', '')
    const [pemJrkLXKolom, setPemJrkLXKolom] = useStateHelpers<string>('pemJrkLXKolom', '')
    const [pemJmlTYKolom, setPemJmlTYKolom] = useStateHelpers<string>('pemJmlTYKolom', '')
    const [pemJrkTYKolom, setPemJrkTYKolom] = useStateHelpers<string>('pemJrkTYKolom', '')
    const [pemJrkLYKolom, setPemJrkLYKolom] = useStateHelpers<string>('pemJrkLYKolom', '')
    // BALOK
    const [pemNmaBalok, setPemNmaBalok] = useStateHelpers<string>('pemNmaBalok', '')
    const [pemPjgBalok, setPemPjgBalok] = useStateHelpers<string>('pemPjgBalok', '')
    const [pemLbrBalok, setPemLbrBalok] = useStateHelpers<string>('pemLbrBalok', '')
    const [pemTgiBalok, setPemTgiBalok] = useStateHelpers<string>('pemTgiBalok', '')
    const [pemJmlBalok, setPemJmlBalok] = useStateHelpers<string>('pemJmlBalok', '')
    const [pemTebSBBalok, setPemTebSBBalok] = useStateHelpers<string>('pemTebSBBalok', '')
    const [pemDiaTABalok, setPemDiaTABalok] = useStateHelpers<string>('pemDiaTABalok', defaultDiam)
    const [pemJmlTATBalok, setPemJmlTATBalok] = useStateHelpers<string>('pemJmlTATBalok', '')
    const [pemJmlTALBalok, setPemJmlTALBalok] = useStateHelpers<string>('pemJmlTALBalok', '')
    const [pemDiaTBBalok, setPemDiaTBBalok] = useStateHelpers<string>('pemDiaTBBalok', defaultDiam)
    const [pemJmlTBTBalok, setPemJmlTBTBalok] = useStateHelpers<string>('pemJmlTBTBalok', '')
    const [pemJmlTBLBalok, setPemJmlTBLBalok] = useStateHelpers<string>('pemJmlTBLBalok', '')
    const [pemDiaTSBalok, setPemDiaTSBalok] = useStateHelpers<string>('pemDiaTSBalok', defaultDiam)
    const [pemJrkSTBalok, setPemJrkSTBalok] = useStateHelpers<string>('pemJrkSTBalok', '')
    const [pemJrkSLBalok, setPemJrkSLBalok] = useStateHelpers<string>('pemJrkSLBalok', '')
    const [pemDiaTPBalok, setPemDiaTPBalok] = useStateHelpers<string>('pemDiaTPBalok', defaultDiam)
    const [pemJmlTPBalok, setPemJmlTPBalok] = useStateHelpers<string>('pemJmlTPBalok', '')
    // PELAT
    const [pemNmaPelat, setPemNmaPelat] = useStateHelpers<string>('pemNmaPelat', '')
    const [pemPjgPelat, setPemPjgPelat] = useStateHelpers<string>('pemPjgPelat', '')
    const [pemLbrPelat, setPemLbrPelat] = useStateHelpers<string>('pemLbrPelat', '')
    const [pemTblPelat, setPemTblPelat] = useStateHelpers<string>('pemTblPelat', '')
    const [pemPLT1Pelat, setPemPLT1Pelat] = useStateHelpers<string>('pemPLT1Pelat', '')
    const [pemLLT1Pelat, setPemLLT1Pelat] = useStateHelpers<string>('pemLLT1Pelat', '')
    const [pemPLT2Pelat, setPemPLT2Pelat] = useStateHelpers<string>('pemPLT2Pelat', '')
    const [pemLLT2Pelat, setPemLLT2Pelat] = useStateHelpers<string>('pemLLT2Pelat', '')
    const [pemDiaTAYPelat, setPemDiaTAYPelat] = useStateHelpers<string>('pemDiaTAYPelat', defaultDiam)
    const [pemJrkTAYPelat, setPemJrkTAYPelat] = useStateHelpers<string>('pemJrkTAYPelat', '')
    const [pemDiaTAXPelat, setPemDiaTAXPelat] = useStateHelpers<string>('pemDiaTAXPelat', defaultDiam)
    const [pemJrkTAXPelat, setPemJrkTAXPelat] = useStateHelpers<string>('pemJrkTAXPelat', '')
    const [pemDiaTBYPelat, setPemDiaTBYPelat] = useStateHelpers<string>('pemDiaTBYPelat', defaultDiam)
    const [pemJrkTBYPelat, setPemJrkTBYPelat] = useStateHelpers<string>('pemJrkTBYPelat', '')
    const [pemDiaTBXPelat, setPemDiaTBXPelat] = useStateHelpers<string>('pemDiaTBXPelat', defaultDiam)
    const [pemJrkTBXPelat, setPemJrkTBXPelat] = useStateHelpers<string>('pemJrkTBXPelat', '')

    // ----------
    // TABEL
    // ----------
    const [tabelPemPilecap, setTabelPemPilecap] = useTableData('tabelPemPilecap')
    const [tabelPemPedestal, setTabelPemPedestal] = useTableData('tabelPemPedestal')
    const [tabelPemSloof, setTabelPemSloof] = useTableData('tabelPemSloof')
    const [tabelPemKolom, setTabelPemKolom] = useTableData('tabelPemKolom')
    const [tabelPemBalok, setTabelPemBalok] = useTableData('tabelPemBalok')
    const [tabelPemPelat, setTabelPemPelat] = useTableData('tabelPemPelat')

    // ----------
    // RESET
    // ----------
    const resetDataPembesian = () => {
        setSelectedValue(defaultValue)
        // setSelectedSatuan(defaultSatuan)
        localStorage.removeItem('selectedValue')
        // localStorage.removeItem('selectedSatuan')

        // PILECAP
        setPemNmaPilecap('')
        setPemPjgPilecap('')
        setPemLbrPilecap('')
        setPemTggPilecap('')
        setPemJmlPilecap('')
        setPemTebSBPilecap('')
        setPemDiaTAYPilecap(defaultDiam)
        setPemJrkTAYPilecap('')
        setPemDiaTAXPilecap(defaultDiam)
        setPemJrkTAXPilecap('')
        setPemDiaTBYPilecap(defaultDiam)
        setPemJrkTBYPilecap('')
        setPemDiaTBXPilecap(defaultDiam)
        setPemJrkTBXPilecap('')
        localStorage.removeItem('pemNmaPilecap')
        localStorage.removeItem('pemPjgPilecap')
        localStorage.removeItem('pemLbrPilecap')
        localStorage.removeItem('pemTggPilecap')
        localStorage.removeItem('pemJmlPilecap')
        localStorage.removeItem('pemDiaTAYPilecap')
        localStorage.removeItem('pemJrkTAYPilecap')
        localStorage.removeItem('pemDiaTAXPilecap')
        localStorage.removeItem('pemJrkTAXPilecap')
        localStorage.removeItem('pemDiaTBYPilecap')
        localStorage.removeItem('pemJrkTBYPilecap')
        localStorage.removeItem('pemDiaTBXPilecap')
        localStorage.removeItem('pemJrkTBXPilecap')

        //PEDESTAL
        setPemDiaTUPedestal(defaultDiam)
        setPemDiaTSPedestal(defaultDiam)
        setPemNmaPedestal('')
        setPemPjgPedestal('')
        setPemLbrPedestal('')
        setPemTgiPedestal('')
        setPemJmlPedestal('')
        setPemTebSBPedestal('')
        setPemJmlTUPedestal('')
        setPemJrkSTPedestal('')
        setPemJrkSLPedestal('')
        setPemJmlTXPedestal('')
        setPemJrkTXPedestal('')
        setPemJrkLXPedestal('')
        setPemJmlTYPedestal('')
        setPemJrkTYPedestal('')
        setPemJrkLYPedestal('')
        localStorage.removeItem('pemDiaTUPedestal')
        localStorage.removeItem('pemDiaTSPedestal')
        localStorage.removeItem('pemNmaPedestal')
        localStorage.removeItem('pemPjgPedestal')
        localStorage.removeItem('pemLbrPedestal')
        localStorage.removeItem('pemTgiPedestal')
        localStorage.removeItem('pemJmlPedestal')
        localStorage.removeItem('pemTebSBPedestal')
        localStorage.removeItem('pemJmlTUPedestal')
        localStorage.removeItem('pemJrkSTPedestal')
        localStorage.removeItem('pemJrkSLPedestal')
        localStorage.removeItem('pemJmlTXPedestal')
        localStorage.removeItem('pemJrkTXPedestal')
        localStorage.removeItem('pemJrkLXPedestal')
        localStorage.removeItem('pemJmlTYPedestal')
        localStorage.removeItem('pemJrkTYPedestal')
        localStorage.removeItem('pemJrkLYPedestal')
        // SLOOF
        setPemNmaSloof('')
        setPemPjgSloof('')
        setPemLbrSloof('')
        setPemTgiSloof('')
        setPemJmlSloof('')
        setPemTebSBSloof('')
        setPemDiaTASloof(defaultDiam)
        setPemJmlTATSloof('')
        setPemJmlTALSloof('')
        setPemDiaTBSloof(defaultDiam)
        setPemJmlTBTSloof('')
        setPemJmlTBLSloof('')
        setPemDiaTSSloof(defaultDiam)
        setPemJrkSTSloof('')
        setPemJrkSLSloof('')
        setPemDiaTPSloof(defaultDiam)
        setPemJmlTPSloof('')
        localStorage.removeItem('pemNmaSloof')
        localStorage.removeItem('pemPjgSloof')
        localStorage.removeItem('pemLbrSloof')
        localStorage.removeItem('pemTgiSloof')
        localStorage.removeItem('pemJmlSloof')
        localStorage.removeItem('pemTebSBSloof')
        localStorage.removeItem('pemDiaTASloof')
        localStorage.removeItem('pemJmlTATSloof')
        localStorage.removeItem('pemJmlTALSloof')
        localStorage.removeItem('pemDiaTBSloof')
        localStorage.removeItem('pemJmlTBTSloof')
        localStorage.removeItem('pemJmlTBLSloof')
        localStorage.removeItem('pemDiaTSSloof')
        localStorage.removeItem('pemJrkSTSloof')
        localStorage.removeItem('pemJrkSLSloof')
        localStorage.removeItem('pemDiaTPSloof')
        localStorage.removeItem('pemJmlTPSloof')
        // KOLOM
        setPemDiaTUKolom(defaultDiam)
        setPemDiaTSKolom(defaultDiam)
        setPemNmaKolom('')
        setPemPjgKolom('')
        setPemLbrKolom('')
        setPemTgiKolom('')
        setPemJmlKolom('')
        setPemTebSBKolom('')
        setPemJmlTUKolom('')
        setPemJrkSTKolom('')
        setPemJrkSLKolom('')
        setPemJmlTXKolom('')
        setPemJrkTXKolom('')
        setPemJrkLXKolom('')
        setPemJmlTYKolom('')
        setPemJrkTYKolom('')
        setPemJrkLYKolom('')
        localStorage.removeItem('pemDiaTUKolom')
        localStorage.removeItem('pemDiaTSKolom')
        localStorage.removeItem('pemNmaKolom')
        localStorage.removeItem('pemPjgKolom')
        localStorage.removeItem('pemLbrKolom')
        localStorage.removeItem('pemTgiKolom')
        localStorage.removeItem('pemJmlKolom')
        localStorage.removeItem('pemTebSBKolom')
        localStorage.removeItem('pemJmlTUKolom')
        localStorage.removeItem('pemJrkSTKolom')
        localStorage.removeItem('pemJrkSLKolom')
        localStorage.removeItem('pemJmlTXKolom')
        localStorage.removeItem('pemJrkTXKolom')
        localStorage.removeItem('pemJrkLXKolom')
        localStorage.removeItem('pemJmlTYKolom')
        localStorage.removeItem('pemJrkTYKolom')
        localStorage.removeItem('pemJrkLYKolom')
        // BALOK
        setPemNmaBalok('')
        setPemPjgBalok('')
        setPemLbrBalok('')
        setPemTgiBalok('')
        setPemJmlBalok('')
        setPemTebSBBalok('')
        setPemDiaTABalok(defaultDiam)
        setPemJmlTATBalok('')
        setPemJmlTALBalok('')
        setPemDiaTBBalok(defaultDiam)
        setPemJmlTBTBalok('')
        setPemJmlTBLBalok('')
        setPemDiaTSBalok(defaultDiam)
        setPemJrkSTBalok('')
        setPemJrkSLBalok('')
        setPemDiaTPBalok(defaultDiam)
        setPemJmlTPBalok('')
        localStorage.removeItem('pemNmaBalok')
        localStorage.removeItem('pemPjgBalok')
        localStorage.removeItem('pemLbrBalok')
        localStorage.removeItem('pemTgiBalok')
        localStorage.removeItem('pemJmlBalok')
        localStorage.removeItem('pemTebSBBalok')
        localStorage.removeItem('pemDiaTABalok')
        localStorage.removeItem('pemJmlTATBalok')
        localStorage.removeItem('pemJmlTALBalok')
        localStorage.removeItem('pemDiaTBBalok')
        localStorage.removeItem('pemJmlTBTBalok')
        localStorage.removeItem('pemJmlTBLBalok')
        localStorage.removeItem('pemDiaTSBalok')
        localStorage.removeItem('pemJrkSTBalok')
        localStorage.removeItem('pemJrkSLBalok')
        localStorage.removeItem('pemDiaTPBalok')
        localStorage.removeItem('pemJmlTPBalok')
        // PELAT
        setPemNmaPelat('')
        setPemPjgPelat('')
        setPemLbrPelat('')
        setPemTblPelat('')
        setPemPLT1Pelat('')
        setPemPLT2Pelat('')
        setPemLLT1Pelat('')
        setPemLLT2Pelat('')
        setPemDiaTAYPelat(defaultDiam)
        setPemJrkTAYPelat('')
        setPemDiaTAXPelat(defaultDiam)
        setPemJrkTAXPelat('')
        setPemDiaTBYPelat(defaultDiam)
        setPemJrkTBYPelat('')
        setPemDiaTBXPelat(defaultDiam)
        setPemJrkTBXPelat('')
        localStorage.removeItem('pemNmaPelat')
        localStorage.removeItem('pemPjgPelat')
        localStorage.removeItem('pemLbrPelat')
        localStorage.removeItem('pemTblPelat')
        localStorage.removeItem('pemPLT1Pelat')
        localStorage.removeItem('pemPLT2Pelat')
        localStorage.removeItem('pemLLT1Pelat')
        localStorage.removeItem('pemLLT2Pelat')
        localStorage.removeItem('pemDiaTAYPelat')
        localStorage.removeItem('pemJrkTAYPelat')
        localStorage.removeItem('pemDiaTAXPelat')
        localStorage.removeItem('pemJrkTAXPelat')
        localStorage.removeItem('pemDiaTBYPelat')
        localStorage.removeItem('pemJrkTBYPelat')
        localStorage.removeItem('pemDiaTBXPelat')
        localStorage.removeItem('pemJrkTBXPelat')

        // RESET TABEL
        localStorage.removeItem('tabelPemPilecap')
        localStorage.removeItem('tabelPemPedestal')
        localStorage.removeItem('tabelPemSloof')
        localStorage.removeItem('tabelPemKolom')
        localStorage.removeItem('tabelPemBalok')
        localStorage.removeItem('tabelPemPelat')

        setTabelPemPilecap(null)
        setTabelPemPedestal(null)
        setTabelPemSloof(null)
        setTabelPemKolom(null)
        setTabelPemBalok(null)
        setTabelPemPelat(null)

        // REFRESH HALAMAN
        window.location.reload()
    }

    // ----------
    // PERHITUNGAN
    // ----------
    const { calcPilecap } = useCalcPembesianPilecap(setTabelPemPilecap)
    const { calcPedestal } = useCalcPembesianPedestal(setTabelPemPedestal)
    const { calcSloof } = useCalcPembesianSloof(setTabelPemSloof)
    const { calcKolom } = useCalcPembesianKolom(setTabelPemKolom)
    const { calcBalok } = useCalcPembesianBalok(setTabelPemBalok)
    const { calcPelat } = useCalcPembesianPelat(setTabelPemPelat)

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
                <div className="col-span-10 rounded-lg border border-border p-2 lg:col-span-3 lg:p-4">
                    {isClient && selectedValue === 'pilecap' && (
                        <>
                            <SelectSatuan
                                className="mb-2"
                                satuanChange={setSelectedSatuanPil}
                                defaultSatuan={selectedSatuanPil}
                            />

                            <InputPilecap
                                satuan={selectedSatuanPil}
                                namPil={pemNmaPilecap}
                                pjgPil={pemPjgPilecap}
                                lbrPil={pemLbrPilecap}
                                tgiPil={pemTggPilecap}
                                jmlPil={pemJmlPilecap}
                                setNamPil={setPemNmaPilecap}
                                setPjgPil={setPemPjgPilecap}
                                setLbrPil={setPemLbrPilecap}
                                setTgiPil={setPemTggPilecap}
                                setJmlPil={setPemJmlPilecap}
                            />
                            <InputForm
                                className="mt-2"
                                label="Tebal Selimut Beton"
                                unit={defaultSatuan}
                                type="number"
                                val={pemTebSBPilecap}
                                setValue={setPemTebSBPilecap}
                            />
                            <div className="mx-0 lg:-mx-2">
                                <Tabs defaultValue="a" className="mt-2 w-full">
                                    <TabsList className="flex w-full">
                                        <TabsTrigger className="w-full" value="a">
                                            Tul. Utama Atas
                                        </TabsTrigger>
                                        <TabsTrigger className="w-full" value="b">
                                            Tul. Utama Bawah
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="a">
                                        <div className="flex flex-col gap-2">
                                            <div className="rounded-md border border-border p-2 pb-4">
                                                <SelectDiameter
                                                    className="pt-0"
                                                    title="Diameter Tul. Atas Y"
                                                    defaultDiam={pemDiaTAYPilecap}
                                                    diamChange={setPemDiaTAYPilecap}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jarak Tul. Atas Y"
                                                    unit={selectedSatuanPil}
                                                    type="number"
                                                    val={pemJrkTAYPilecap}
                                                    setValue={setPemJrkTAYPilecap}
                                                />
                                            </div>
                                            <div className="rounded-md border border-border p-2 pb-4">
                                                <SelectDiameter
                                                    title="Diameter Tul. Atas X"
                                                    defaultDiam={pemDiaTAXPilecap}
                                                    diamChange={setPemDiaTAXPilecap}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jarak Tul. Atas X"
                                                    unit={selectedSatuanPil}
                                                    type="number"
                                                    val={pemJrkTAXPilecap}
                                                    setValue={setPemJrkTAXPilecap}
                                                />
                                            </div>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="b">
                                        <div className="flex flex-col gap-2">
                                            <div className="rounded-md border border-border p-2 pb-4">
                                                <SelectDiameter
                                                    className="pt-0"
                                                    title="Diameter Tul. Bawah Y"
                                                    defaultDiam={pemDiaTBYPilecap}
                                                    diamChange={setPemDiaTBYPilecap}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jarak Tul. Bawah Y"
                                                    unit={selectedSatuanPil}
                                                    type="number"
                                                    val={pemJrkTBYPilecap}
                                                    setValue={setPemJrkTBYPilecap}
                                                />
                                            </div>
                                            <div className="rounded-md border border-border p-2 pb-4">
                                                <SelectDiameter
                                                    title="Diameter Tul. Bawah X"
                                                    defaultDiam={pemDiaTBXPilecap}
                                                    diamChange={setPemDiaTBXPilecap}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jarak Tul. Bawah X"
                                                    unit={selectedSatuanPil}
                                                    type="number"
                                                    val={pemJrkTBXPilecap}
                                                    setValue={setPemJrkTBXPilecap}
                                                />
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </>
                    )}
                    {isClient && selectedValue === 'pedestal' && (
                        <>
                            <SelectSatuan
                                className="mb-2"
                                satuanChange={setSelectedSatuanPed}
                                defaultSatuan={selectedSatuanPed}
                            />
                            <InputPedestal
                                className="mt-0"
                                satuan={selectedSatuanPed}
                                namPed={pemNmaPedestal}
                                pjgPed={pemPjgPedestal}
                                lbrPed={pemLbrPedestal}
                                tgiPed={pemTgiPedestal}
                                jmlPed={pemJmlPedestal}
                                setNamPed={setPemNmaPedestal}
                                setPjgPed={setPemPjgPedestal}
                                setLbrPed={setPemLbrPedestal}
                                setTgiPed={setPemTgiPedestal}
                                setJmlPed={setPemJmlPedestal}
                            />
                            <InputForm
                                className="mt-2"
                                label="Tebal Selimut Beton"
                                unit={defaultSatuan}
                                type="number"
                                val={pemTebSBPedestal}
                                setValue={setPemTebSBPedestal}
                            />

                            <div className="mx-0 lg:-mx-2">
                                <Tabs defaultValue="a" className="mt-6 w-full">
                                    <TabsList className="w-full">
                                        <TabsTrigger className="w-full" value="a">
                                            Utama
                                        </TabsTrigger>
                                        <TabsTrigger className="w-full" value="b">
                                            Sengkang
                                        </TabsTrigger>
                                        <TabsTrigger className="w-full" value="c">
                                            Ties
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="a">
                                        <div className="rounded-md border border-border p-2 pb-3">
                                            <SelectDiameter
                                                className="pt-0"
                                                title="Diameter Tul. Utama"
                                                defaultDiam={pemDiaTUPedestal}
                                                diamChange={setPemDiaTUPedestal}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jumlah Tul. Utama"
                                                unit={''}
                                                type="number"
                                                val={pemJmlTUPedestal}
                                                setValue={setPemJmlTUPedestal}
                                            />
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="b">
                                        <div className="rounded-md border border-border p-2 pb-3">
                                            <SelectDiameter
                                                className="pt-0"
                                                title="Diameter Tul. Sengkang"
                                                defaultDiam={pemDiaTSPedestal}
                                                diamChange={setPemDiaTSPedestal}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jarak Sengkang Tumpuan"
                                                unit={selectedSatuanPed}
                                                type="number"
                                                val={pemJrkSTPedestal}
                                                setValue={setPemJrkSTPedestal}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jarak Sengkang Lapangan"
                                                unit={selectedSatuanPed}
                                                type="number"
                                                val={pemJrkSLPedestal}
                                                setValue={setPemJrkSLPedestal}
                                            />
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="c">
                                        <SelectDiameter
                                            className="px-2 pt-1"
                                            title="Diameter Tul. Ties"
                                            defaultDiam={pemDiaTTPedestal}
                                            diamChange={setPemDiaTTPedestal}
                                        />
                                        <div className="mt-3 rounded-md border border-border p-2 pb-3">
                                            <InputForm
                                                className="mb-2 mt-0"
                                                label="Jumlah Tul. Ties Y"
                                                unit={''}
                                                type="number"
                                                val={pemJmlTYPedestal}
                                                setValue={setPemJmlTYPedestal}
                                            />
                                            <InputForm
                                                label="Jarak Tumpuan Ties Y"
                                                unit={selectedSatuanPed}
                                                type="number"
                                                val={pemJrkTYPedestal}
                                                setValue={setPemJrkTYPedestal}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jarak Lapangan Ties Y"
                                                unit={selectedSatuanPed}
                                                type="number"
                                                val={pemJrkLYPedestal}
                                                setValue={setPemJrkLYPedestal}
                                            />
                                        </div>

                                        <div className="mt-2 rounded-md border border-border p-2 pb-3">
                                            <InputForm
                                                className="mb-2 mt-2"
                                                label="Jumlah Tul. Ties X"
                                                unit={''}
                                                type="number"
                                                val={pemJmlTXPedestal}
                                                setValue={setPemJmlTXPedestal}
                                            />
                                            <InputForm
                                                label="Jarak Tumpuan Ties X"
                                                unit={selectedSatuanPed}
                                                type="number"
                                                val={pemJrkTXPedestal}
                                                setValue={setPemJrkTXPedestal}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jarak Lapangan Ties X"
                                                unit={selectedSatuanPed}
                                                type="number"
                                                val={pemJrkLXPedestal}
                                                setValue={setPemJrkLXPedestal}
                                            />
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </>
                    )}
                    {isClient && selectedValue === 'sloof' && (
                        <>
                            <SelectSatuan
                                className="mb-2"
                                satuanChange={setSelectedSatuanSlo}
                                defaultSatuan={selectedSatuanSlo}
                            />
                            <InputSloof
                                className="mt-0"
                                satuan={selectedSatuanSlo}
                                namSlo={pemNmaSloof}
                                pjgSlo={pemPjgSloof}
                                lbrSlo={pemLbrSloof}
                                tgiSlo={pemTgiSloof}
                                setNamSlo={setPemNmaSloof}
                                setPjgSlo={setPemPjgSloof}
                                setLbrSlo={setPemLbrSloof}
                                setTgiSlo={setPemTgiSloof}
                            />
                            <InputForm
                                className="mt-2"
                                label="Jumlah"
                                unit={''}
                                type="number"
                                val={pemJmlSloof}
                                setValue={setPemJmlSloof}
                            />
                            <InputForm
                                className="mt-2"
                                label="Tebal Selimut Beton"
                                unit={defaultSatuan}
                                type="number"
                                val={pemTebSBSloof}
                                setValue={setPemTebSBSloof}
                            />
                            <div className="mx-0 lg:-mx-2">
                                <Tabs defaultValue="a" className="mt-6 w-full">
                                    <TabsList className="flex w-full">
                                        <TabsTrigger className="w-full" value="a">
                                            Utama
                                        </TabsTrigger>
                                        <TabsTrigger className="w-full" value="b">
                                            Sengkang
                                        </TabsTrigger>
                                        <TabsTrigger className="w-full" value="c">
                                            Pinggang
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="a">
                                        <div className="flex flex-col gap-2">
                                            <div className="rounded-md border border-border p-2 pb-4">
                                                <SelectDiameter
                                                    className="pt-0"
                                                    title="Diameter Tul. Atas"
                                                    defaultDiam={pemDiaTASloof}
                                                    diamChange={setPemDiaTASloof}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jumlah Tul. Atas Tumpuan"
                                                    unit={''}
                                                    type="number"
                                                    val={pemJmlTATSloof}
                                                    setValue={setPemJmlTATSloof}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jumlah Tul. Atas Lapangan"
                                                    unit={''}
                                                    type="number"
                                                    val={pemJmlTALSloof}
                                                    setValue={setPemJmlTALSloof}
                                                />
                                            </div>
                                            <div className="rounded-md border border-border p-2 pb-4">
                                                <SelectDiameter
                                                    title="Diameter Tul. Bawah"
                                                    defaultDiam={pemDiaTBSloof}
                                                    diamChange={setPemDiaTBSloof}
                                                />

                                                <InputForm
                                                    className="mt-2"
                                                    label="Jumlah Tul. Bawah"
                                                    unit={''}
                                                    type="number"
                                                    val={pemJmlTBTSloof}
                                                    setValue={setPemJmlTBTSloof}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jumlah Tul. Bawah Lapangan"
                                                    unit={''}
                                                    type="number"
                                                    val={pemJmlTBLSloof}
                                                    setValue={setPemJmlTBLSloof}
                                                />
                                            </div>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="b">
                                        <div className="flex flex-col rounded-md border border-border p-2 pb-4">
                                            <SelectDiameter
                                                className="pt-0"
                                                title="Diameter Tul. Sengkang"
                                                defaultDiam={pemDiaTSSloof}
                                                diamChange={setPemDiaTSSloof}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jarak Sengkang Tumpuan"
                                                unit={selectedSatuanSlo}
                                                type="number"
                                                val={pemJrkSTSloof}
                                                setValue={setPemJrkSTSloof}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jarak Sengkang Lapangan"
                                                unit={selectedSatuanSlo}
                                                type="number"
                                                val={pemJrkSLSloof}
                                                setValue={setPemJrkSLSloof}
                                            />
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="c">
                                        <div className="rounded-md border border-border p-2 pb-3">
                                            <SelectDiameter
                                                className="pt-0"
                                                title="Diameter Tul. Pinggang"
                                                defaultDiam={pemDiaTPSloof}
                                                diamChange={setPemDiaTPSloof}
                                            />
                                            <InputForm
                                                className="mb-2 mt-2"
                                                label="Jumlah Tul. Pinggang"
                                                unit={''}
                                                type="number"
                                                val={pemJmlTPSloof}
                                                setValue={setPemJmlTPSloof}
                                            />
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </>
                    )}
                    {isClient && selectedValue === 'kolom' && (
                        <>
                            <SelectSatuan
                                className="mb-2"
                                satuanChange={setSelectedSatuanKol}
                                defaultSatuan={selectedSatuanKol}
                            />
                            <InputKolom
                                className="mt-0"
                                satuan={selectedSatuanKol}
                                namKol={pemNmaKolom}
                                pjgKol={pemPjgKolom}
                                lbrKol={pemLbrKolom}
                                tgiKol={pemTgiKolom}
                                jmlKol={pemJmlKolom}
                                setNamKol={setPemNmaKolom}
                                setPjgKol={setPemPjgKolom}
                                setLbrKol={setPemLbrKolom}
                                setTgiKol={setPemTgiKolom}
                                setJmlKol={setPemJmlKolom}
                            />
                            <InputForm
                                className="mt-2"
                                label="Tebal Selimut Beton"
                                unit={defaultSatuan}
                                type="number"
                                val={pemTebSBKolom}
                                setValue={setPemTebSBKolom}
                            />

                            <div className="mx-0 lg:-mx-2">
                                <Tabs defaultValue="a" className="mt-6 w-full">
                                    <TabsList className="w-full">
                                        <TabsTrigger className="w-full" value="a">
                                            Utama
                                        </TabsTrigger>
                                        <TabsTrigger className="w-full" value="b">
                                            Sengkang
                                        </TabsTrigger>
                                        <TabsTrigger className="w-full" value="c">
                                            Ties
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="a">
                                        <div className="rounded-md border border-border p-2 pb-3">
                                            <SelectDiameter
                                                className="pt-0"
                                                title="Diameter Tul. Utama"
                                                defaultDiam={pemDiaTUKolom}
                                                diamChange={setPemDiaTUKolom}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jumlah Tul. Utama"
                                                unit={''}
                                                type="number"
                                                val={pemJmlTUKolom}
                                                setValue={setPemJmlTUKolom}
                                            />
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="b">
                                        <div className="rounded-md border border-border p-2 pb-3">
                                            <SelectDiameter
                                                className="pt-0"
                                                title="Diameter Tul. Sengkang"
                                                defaultDiam={pemDiaTSKolom}
                                                diamChange={setPemDiaTSKolom}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jarak Sengkang Tumpuan"
                                                unit={selectedSatuanKol}
                                                type="number"
                                                val={pemJrkSTKolom}
                                                setValue={setPemJrkSTKolom}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jarak Sengkang Lapangan"
                                                unit={selectedSatuanKol}
                                                type="number"
                                                val={pemJrkSLKolom}
                                                setValue={setPemJrkSLKolom}
                                            />
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="c">
                                        <SelectDiameter
                                            className="px-2 pt-1"
                                            title="Diameter Tul. Ties"
                                            defaultDiam={pemDiaTTKolom}
                                            diamChange={setPemDiaTTKolom}
                                        />
                                        <div className="mt-3 rounded-md border border-border p-2 pb-3">
                                            <InputForm
                                                className="mb-2 mt-0"
                                                label="Jumlah Tul. Ties Y"
                                                unit={''}
                                                type="number"
                                                val={pemJmlTYKolom}
                                                setValue={setPemJmlTYKolom}
                                            />
                                            <InputForm
                                                label="Jarak Tumpuan Ties Y"
                                                unit={selectedSatuanKol}
                                                type="number"
                                                val={pemJrkTYKolom}
                                                setValue={setPemJrkTYKolom}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jarak Lapangan Ties Y"
                                                unit={selectedSatuanKol}
                                                type="number"
                                                val={pemJrkLYKolom}
                                                setValue={setPemJrkLYKolom}
                                            />
                                        </div>

                                        <div className="mt-2 rounded-md border border-border p-2 pb-3">
                                            <InputForm
                                                className="mb-2 mt-2"
                                                label="Jumlah Tul. Ties X"
                                                unit={''}
                                                type="number"
                                                val={pemJmlTXKolom}
                                                setValue={setPemJmlTXKolom}
                                            />
                                            <InputForm
                                                label="Jarak Tumpuan Ties X"
                                                unit={selectedSatuanKol}
                                                type="number"
                                                val={pemJrkTXKolom}
                                                setValue={setPemJrkTXKolom}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jarak Lapangan Ties X"
                                                unit={selectedSatuanKol}
                                                type="number"
                                                val={pemJrkLXKolom}
                                                setValue={setPemJrkLXKolom}
                                            />
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </>
                    )}
                    {isClient && selectedValue === 'balok' && (
                        <>
                            <SelectSatuan
                                className="mb-2"
                                satuanChange={setSelectedSatuanBal}
                                defaultSatuan={selectedSatuanBal}
                            />
                            <InputBalok
                                className="mt-0"
                                satuan={selectedSatuanBal}
                                namBlk={pemNmaBalok}
                                pjgBlk={pemPjgBalok}
                                lbrBlk={pemLbrBalok}
                                tgiBlk={pemTgiBalok}
                                setNamBlk={setPemNmaBalok}
                                setPjgBlk={setPemPjgBalok}
                                setLbrBlk={setPemLbrBalok}
                                setTgiBlk={setPemTgiBalok}
                            />
                            <InputForm
                                className="mt-2"
                                label="Jumlah"
                                unit={''}
                                type="number"
                                val={pemJmlBalok}
                                setValue={setPemJmlBalok}
                            />
                            <InputForm
                                className="mt-2"
                                label="Tebal Selimut Beton"
                                unit={defaultSatuan}
                                type="number"
                                val={pemTebSBBalok}
                                setValue={setPemTebSBBalok}
                            />
                            <div className="mx-0 lg:-mx-2">
                                <Tabs defaultValue="a" className="mt-6 w-full">
                                    <TabsList className="flex w-full">
                                        <TabsTrigger className="w-full" value="a">
                                            Utama
                                        </TabsTrigger>
                                        <TabsTrigger className="w-full" value="b">
                                            Sengkang
                                        </TabsTrigger>
                                        <TabsTrigger className="w-full" value="c">
                                            Pinggang
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="a">
                                        <div className="flex flex-col gap-2">
                                            <div className="rounded-md border border-border p-2 pb-4">
                                                <SelectDiameter
                                                    className="pt-0"
                                                    title="Diameter Tul. Atas"
                                                    defaultDiam={pemDiaTABalok}
                                                    diamChange={setPemDiaTABalok}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jumlah Tul. Atas Tumpuan"
                                                    unit={''}
                                                    type="number"
                                                    val={pemJmlTATBalok}
                                                    setValue={setPemJmlTATBalok}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jumlah Tul. Atas Lapangan"
                                                    unit={''}
                                                    type="number"
                                                    val={pemJmlTALBalok}
                                                    setValue={setPemJmlTALBalok}
                                                />
                                            </div>
                                            <div className="rounded-md border border-border p-2 pb-4">
                                                <SelectDiameter
                                                    title="Diameter Tul. Bawah"
                                                    defaultDiam={pemDiaTBBalok}
                                                    diamChange={setPemDiaTBBalok}
                                                />

                                                <InputForm
                                                    className="mt-2"
                                                    label="Jumlah Tul. Bawah"
                                                    unit={''}
                                                    type="number"
                                                    val={pemJmlTBTBalok}
                                                    setValue={setPemJmlTBTBalok}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jumlah Tul. Bawah Lapangan"
                                                    unit={''}
                                                    type="number"
                                                    val={pemJmlTBLBalok}
                                                    setValue={setPemJmlTBLBalok}
                                                />
                                            </div>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="b">
                                        <div className="flex flex-col rounded-md border border-border p-2 pb-4">
                                            <SelectDiameter
                                                className="pt-0"
                                                title="Diameter Tul. Sengkang"
                                                defaultDiam={pemDiaTSBalok}
                                                diamChange={setPemDiaTSBalok}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jarak Sengkang Tumpuan"
                                                unit={selectedSatuanBal}
                                                type="number"
                                                val={pemJrkSTBalok}
                                                setValue={setPemJrkSTBalok}
                                            />
                                            <InputForm
                                                className="mt-2"
                                                label="Jarak Sengkang Lapangan"
                                                unit={selectedSatuanBal}
                                                type="number"
                                                val={pemJrkSLBalok}
                                                setValue={setPemJrkSLBalok}
                                            />
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="c">
                                        <div className="rounded-md border border-border p-2 pb-3">
                                            <SelectDiameter
                                                className="pt-0"
                                                title="Diameter Tul. Pinggang"
                                                defaultDiam={pemDiaTPBalok}
                                                diamChange={setPemDiaTPBalok}
                                            />
                                            <InputForm
                                                className="mb-2 mt-2"
                                                label="Jumlah Tul. Pinggang"
                                                unit={''}
                                                type="number"
                                                val={pemJmlTPBalok}
                                                setValue={setPemJmlTPBalok}
                                            />
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </>
                    )}
                    {isClient && selectedValue === 'pelat' && (
                        <>
                            <SelectSatuan
                                className="mb-2"
                                satuanChange={setSelectedSatuanPel}
                                defaultSatuan={selectedSatuanPel}
                            />
                            <InputPelat
                                satuan={selectedSatuanPel}
                                namPlt={pemNmaPelat}
                                pjgPlt={pemPjgPelat}
                                lbrPlt={pemLbrPelat}
                                tgiPlt={pemTblPelat}
                                pjgLT1={pemPLT1Pelat}
                                lbrLT1={pemLLT1Pelat}
                                pjgLT2={pemPLT2Pelat}
                                lbrLT2={pemLLT2Pelat}
                                setNamPlt={setPemNmaPelat}
                                setPjgPlt={setPemPjgPelat}
                                setLbrPlt={setPemLbrPelat}
                                setTgiPlt={setPemTblPelat}
                                setPjgLT1={setPemPLT1Pelat}
                                setLbrLT1={setPemLLT1Pelat}
                                setPjgLT2={setPemPLT2Pelat}
                                setLbrLT2={setPemLLT2Pelat}
                            />
                            <div className="mx-0 lg:-mx-2">
                                <Tabs defaultValue="a" className="mt-2 w-full">
                                    <TabsList className="flex w-full">
                                        <TabsTrigger className="w-full" value="a">
                                            Tul. Utama Atas
                                        </TabsTrigger>
                                        <TabsTrigger className="w-full" value="b">
                                            Tul. Utama Bawah
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="a">
                                        <div className="flex flex-col gap-2">
                                            <div className="rounded-md border border-border p-2 pb-4">
                                                <SelectDiameter
                                                    className="pt-0"
                                                    title="Diameter Tul. Atas Y"
                                                    defaultDiam={pemDiaTAYPelat}
                                                    diamChange={setPemDiaTAYPelat}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jarak Tul. Atas Y"
                                                    unit={selectedSatuanPel}
                                                    type="number"
                                                    val={pemJrkTAYPelat}
                                                    setValue={setPemJrkTAYPelat}
                                                />
                                            </div>
                                            <div className="rounded-md border border-border p-2 pb-4">
                                                <SelectDiameter
                                                    title="Diameter Tul. Atas X"
                                                    defaultDiam={pemDiaTAXPelat}
                                                    diamChange={setPemDiaTAXPelat}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jarak Tul. Atas X"
                                                    unit={selectedSatuanPel}
                                                    type="number"
                                                    val={pemJrkTAXPelat}
                                                    setValue={setPemJrkTAXPelat}
                                                />
                                            </div>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="b">
                                        <div className="flex flex-col gap-2">
                                            <div className="rounded-md border border-border p-2 pb-4">
                                                <SelectDiameter
                                                    className="pt-0"
                                                    title="Diameter Tul. Bawah Y"
                                                    defaultDiam={pemDiaTBYPelat}
                                                    diamChange={setPemDiaTBYPelat}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jarak Tul. Bawah Y"
                                                    unit={selectedSatuanPel}
                                                    type="number"
                                                    val={pemJrkTBYPelat}
                                                    setValue={setPemJrkTBYPelat}
                                                />
                                            </div>
                                            <div className="rounded-md border border-border p-2 pb-4">
                                                <SelectDiameter
                                                    title="Diameter Tul. Bawah X"
                                                    defaultDiam={pemDiaTBXPelat}
                                                    diamChange={setPemDiaTBXPelat}
                                                />
                                                <InputForm
                                                    className="mt-2"
                                                    label="Jarak Tul. Bawah X"
                                                    unit={selectedSatuanPel}
                                                    type="number"
                                                    val={pemJrkTBXPelat}
                                                    setValue={setPemJrkTBXPelat}
                                                />
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </>
                    )}
                </div>
                {/* TABEL */}
                <div className="col-span-10 rounded-sm border border-border p-4 lg:col-span-7">
                    <TabelPembesian
                        tabelId="tabelPembesian"
                        tabelPemPilecap={tabelPemPilecap}
                        tabelPemPedestal={tabelPemPedestal}
                        tabelPemSloof={tabelPemSloof}
                        tabelPemKolom={tabelPemKolom}
                        tabelPemBalok={tabelPemBalok}
                        tabelPemPelat={tabelPemPelat}
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
                            nama: pemNmaPilecap,
                            p: pemPjgPilecap,
                            l: pemLbrPilecap,
                            t: pemTggPilecap,
                            jml: pemJmlPilecap,
                            tSBet: pemTebSBPilecap,
                            diaTAY: pemDiaTAYPilecap,
                            jrkTAY: pemJrkTAYPilecap,
                            diaTAX: pemDiaTAXPilecap,
                            jrkTAX: pemJrkTAXPilecap,
                            diaTBY: pemDiaTBYPilecap,
                            jrkTBY: pemJrkTBYPilecap,
                            diaTBX: pemDiaTBXPilecap,
                            jrkTBX: pemJrkTBXPilecap,
                            satuan: selectedSatuanPil
                        })
                        calcPedestal({
                            nama: pemNmaPedestal,
                            p: pemPjgPedestal,
                            l: pemLbrPedestal,
                            t: pemTgiPedestal,
                            jml: pemJmlPedestal,
                            tebSBet: pemTebSBPedestal,
                            diaTUta: pemDiaTUPedestal,
                            jmlTUta: pemJmlTUPedestal,
                            diaSkng: pemDiaTSPedestal,
                            jrkSTum: pemJrkSTPedestal,
                            jrkSLap: pemJrkSLPedestal,
                            diaTies: pemDiaTTPedestal,
                            jmlTulX: pemJmlTXPedestal,
                            jrkTumX: pemJrkTXPedestal,
                            jrkLapX: pemJrkLXPedestal,
                            jmlTulY: pemJmlTYPedestal,
                            jrkTumY: pemJrkTYPedestal,
                            jrkLapY: pemJrkLYPedestal,
                            satuan: selectedSatuanPed
                        })
                        calcSloof({
                            nama: pemNmaSloof,
                            p: pemPjgSloof,
                            l: pemLbrSloof,
                            t: pemTgiSloof,
                            jml: pemJmlSloof,
                            tebSBet: pemTebSBSloof,
                            diaTAt: pemDiaTASloof,
                            jmlTAT: pemJmlTATSloof,
                            jmlTAL: pemJmlTALSloof,
                            diaTBa: pemDiaTBSloof,
                            jmlTBT: pemJmlTBTSloof,
                            jmlTBL: pemJmlTBLSloof,
                            diaSkng: pemDiaTSSloof,
                            jrkSTum: pemJrkSTSloof,
                            jrkSLap: pemJrkSLSloof,
                            diaTPi: pemDiaTPSloof,
                            jmlTPi: pemJmlTPSloof,
                            satuan: selectedSatuanSlo
                        })
                        calcKolom({
                            nama: pemNmaKolom,
                            p: pemPjgKolom,
                            l: pemLbrKolom,
                            t: pemTgiKolom,
                            jml: pemJmlKolom,
                            tebSBet: pemTebSBKolom,
                            diaTUta: pemDiaTUKolom,
                            jmlTUta: pemJmlTUKolom,
                            diaSkng: pemDiaTSKolom,
                            jrkSTum: pemJrkSTKolom,
                            jrkSLap: pemJrkSLKolom,
                            diaTies: pemDiaTTKolom,
                            jmlTulX: pemJmlTXKolom,
                            jrkTumX: pemJrkTXKolom,
                            jrkLapX: pemJrkLXKolom,
                            jmlTulY: pemJmlTYKolom,
                            jrkTumY: pemJrkTYKolom,
                            jrkLapY: pemJrkLYKolom,
                            satuan: selectedSatuanKol
                        })
                        calcBalok({
                            nama: pemNmaBalok,
                            p: pemPjgBalok,
                            l: pemLbrBalok,
                            t: pemTgiBalok,
                            jml: pemJmlBalok,
                            tebSBet: pemTebSBBalok,
                            diaTAt: pemDiaTABalok,
                            jmlTAT: pemJmlTATBalok,
                            jmlTAL: pemJmlTALBalok,
                            diaTBa: pemDiaTBBalok,
                            jmlTBT: pemJmlTBTBalok,
                            jmlTBL: pemJmlTBLBalok,
                            diaSkng: pemDiaTSBalok,
                            jrkSTum: pemJrkSTBalok,
                            jrkSLap: pemJrkSLBalok,
                            diaTPi: pemDiaTPBalok,
                            jmlTPi: pemJmlTPBalok,
                            satuan: selectedSatuanBal
                        })
                        calcPelat({
                            nama: pemNmaPelat,
                            p: pemPjgPelat,
                            l: pemLbrPelat,
                            tbl: pemTblPelat,
                            pLuT1: pemPLT1Pelat,
                            lLuT1: pemLLT1Pelat,
                            pLuT2: pemPLT2Pelat,
                            lLuT2: pemLLT2Pelat,
                            diaTAY: pemDiaTAYPelat,
                            jrkTAY: pemJrkTAYPelat,
                            diaTAX: pemDiaTAXPelat,
                            jrkTAX: pemJrkTAXPelat,
                            diaTBY: pemDiaTBYPelat,
                            jrkTBY: pemJrkTBYPelat,
                            diaTBX: pemDiaTAXPelat,
                            jrkTBX: pemJrkTAXPelat,
                            satuan: selectedSatuanPel
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
                    onClick={resetDataPembesian}
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
                    onClick={() => exportToExcel('tabelPembesian', 'Pekerjaan Pembesian')}
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

export default HitungPembesian
