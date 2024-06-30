import { useToast } from '@/components/ui/use-toast'
import { diameterPembesian } from '../lib/diam-pembesian'

interface PelatData {
    satuan: string
    nama: string
    p: string
    l: string
    tbl: string
    pLuT1: string
    lLuT1: string
    pLuT2: string
    lLuT2: string
    diaTAY: string
    jrkTAY: string
    diaTAX: string
    jrkTAX: string
    diaTBY: string
    jrkTBY: string
    diaTBX: string
    jrkTBX: string
}

interface SetTabelPelatProps {
    (data: {
        nama?: string
        volume?: string
        tulTUta?: string

        tulTAtY?: string
        tulTAtX?: string
        tulTBaY?: string
        tulTBaX?: string

        tulTAT1?: string
        tulTAL1?: string
        tulTAT2?: string
        tulTBT1?: string
        tulTBL1?: string
        tulTBT2?: string
        tulTST1?: string
        tulTSL1?: string
        tulTST2?: string
        tulTPgg?: string
        tulTTY1?: string
        tulTLY1?: string
        tulTTY2?: string
        tulTTX1?: string
        tulTLX1?: string
        tulTTX2?: string
        kawat?: string

        numVolu?: number
        numTUta?: number
        numTAtY?: number
        numTAtX?: number
        numTBaY?: number
        numTBaX?: number
        numTAT1?: number
        numTAL1?: number
        numTAT2?: number
        numTBT1?: number
        numTBL1?: number
        numTBT2?: number
        numTST1?: number
        numTSL1?: number
        numTST2?: number
        numTPgg?: number
        numTTY1?: number
        numTLY1?: number
        numTTY2?: number
        numTTX1?: number
        numTLX1?: number
        numTTX2?: number
        numkawa?: number
    }): void
}

const useCalcPembesianPelat = (setTabelPelat: SetTabelPelatProps) => {
    const { toast } = useToast()

    const calcPelat = (data: PelatData) => {
        const {
            satuan,
            nama,
            p,
            l,
            tbl,
            pLuT1,
            lLuT1,
            pLuT2,
            lLuT2,
            diaTAY,
            jrkTAY,
            diaTAX,
            jrkTAX,
            diaTBY,
            jrkTBY,
            diaTBX,
            jrkTBX
        } = data

        // DIAMETER TUL ATAS Y
        let diaTAtY: any
        if (diaTAY) {
            diaTAtY = diameterPembesian[diaTAY]
        }
        // DIAMETER TUL ATAS Y
        let diaTAtX: any
        if (diaTAX) {
            diaTAtX = diameterPembesian[diaTAX]
        }
        // DIAMETER TUL BAWAH Y
        let diaTBaY: any
        if (diaTBY) {
            diaTBaY = diameterPembesian[diaTBY]
        }
        // DIAMETER TUL BAWAH Y
        let diaTBaX: any
        if (diaTBX) {
            diaTBaX = diameterPembesian[diaTBX]
        }

        // NILAI DIAMETER
        const diamTAY = diaTAtY.diam
        const diamTAX = diaTAtX.diam
        const diamTBY = diaTBaY.diam
        const diamTBX = diaTBaX.diam

        if (p === '' || l === '' || tbl === '') {
            setTabelPelat({
                nama: '-',
                volume: '-',
                tulTUta: '-',
                tulTAtY: '-',
                tulTAtX: '-',
                tulTBaY: '-',
                tulTBaX: '-',
                tulTAT1: '-',
                tulTAL1: '-',
                tulTAT2: '-',
                tulTBT1: '-',
                tulTBL1: '-',
                tulTBT2: '-',
                tulTST1: '-',
                tulTSL1: '-',
                tulTST2: '-',
                tulTPgg: '-',
                tulTTY1: '-',
                tulTLY1: '-',
                tulTTY2: '-',
                tulTTX1: '-',
                tulTLX1: '-',
                tulTTX2: '-',
                kawat: '-'
            })
            toast({
                title: `Nilai tidak boleh kosong!`,
                variant: 'destructive'
            })
            return
        }

        // convert Satuan
        let P: number = 0
        let L: number = 0
        let TBL: number = 0
        let jTAY: number = 0
        let jTAX: number = 0
        let jTBY: number = 0
        let jTBX: number = 0
        let PLT1: number = 0
        let LLT1: number = 0
        let PLT2: number = 0
        let LLT2: number = 0

        switch (satuan) {
            case 'm':
                P = parseFloat(p) * 1000
                L = parseFloat(l) * 1000
                TBL = parseFloat(tbl) * 1000
                jTAY = parseFloat(jrkTAY) * 1000
                jTAX = parseFloat(jrkTAX) * 1000
                jTBY = parseFloat(jrkTBY) * 1000
                jTBX = parseFloat(jrkTBX) * 1000
                PLT1 = parseFloat(pLuT1) * 1000
                LLT1 = parseFloat(lLuT1) * 1000
                PLT2 = parseFloat(pLuT2) * 1000
                LLT2 = parseFloat(lLuT2) * 1000
                break
            case 'cm':
                P = parseFloat(p) * 10
                L = parseFloat(l) * 10
                TBL = parseFloat(tbl) * 10
                jTAY = parseFloat(jrkTAY) * 10
                jTAX = parseFloat(jrkTAX) * 10
                jTBY = parseFloat(jrkTBY) * 10
                jTBX = parseFloat(jrkTBX) * 10
                PLT1 = parseFloat(pLuT1) * 10
                LLT1 = parseFloat(lLuT1) * 10
                PLT2 = parseFloat(pLuT2) * 10
                LLT2 = parseFloat(lLuT2) * 10
                break
            case 'mm':
                P = parseFloat(p)
                L = parseFloat(l)
                TBL = parseFloat(tbl)
                jTAY = parseFloat(jrkTAY)
                jTAX = parseFloat(jrkTAX)
                jTBY = parseFloat(jrkTBY)
                jTBX = parseFloat(jrkTBX)
                PLT1 = parseFloat(pLuT1)
                LLT1 = parseFloat(lLuT1)
                PLT2 = parseFloat(pLuT2)
                LLT2 = parseFloat(lLuT2)
                break
        }

        // convet to number
        // const P = parseFloat(p)
        // const L = parseFloat(l)
        // const TBL = parseFloat(tbl)

        // const PLT1 = parseFloat(pLuT1)
        // const LLT1 = parseFloat(lLuT1)
        // const PLT2 = parseFloat(pLuT2)
        // const LLT2 = parseFloat(lLuT2)

        const dTAY = diamTAY
        const dTAX = diamTAX
        const dTBY = diamTBY
        const dTBX = diamTBX

        // const jTAY = parseFloat(jrkTAY)
        // const jTAX = parseFloat(jrkTAX)
        // const jTBY = parseFloat(jrkTBY)
        // const jTBX = parseFloat(jrkTBX)

        const C5 = P
        const D5 = C5 / 2
        const E5 = L
        const F5 = E5 / 2
        const G5 = TBL
        const H5 = dTBY
        const J5 = jTBY
        const N5 = dTBX
        const P5 = jTBX
        const T5 = dTAY
        const V5 = jTAY
        const Z5 = dTAX
        const AB5 = jTAX

        const C6 = PLT1
        const D6 = C6 / 2
        const E6 = LLT1
        const F6 = E6 / 2
        const G6 = TBL
        const H6 = dTBY
        const J6 = jTBY
        const N6 = dTBX
        const P6 = jTBX
        const T6 = dTAY
        const V6 = jTAY
        const Z6 = dTAX
        const AB6 = jTAX

        const C7 = PLT2
        const D7 = C7 / 2
        const E7 = LLT2
        const F7 = E7 / 2
        const G7 = TBL
        const H7 = dTBY
        const J7 = jTBY
        const N7 = dTBX
        const P7 = jTBX
        const T7 = dTAY
        const V7 = jTAY
        const Z7 = dTAX
        const AB7 = jTAX

        // -----------------------------
        // PELAT TOTAL
        // -----------------------------
        //Supper Bottom
        const I5 = ((0.25 * 3.14 * H5 ** 2) / 1000000) * 7850
        const K5 = (C5 * E5) / 10 ** 6
        const L5 = (1 / (J5 / 1000)) * I5
        const M5 = L5 * K5
        //bottom
        const O5 = ((0.25 * 3.14 * N5 ** 2) / 1000000) * 7850
        const Q5 = (C5 * E5) / 10 ** 6
        const R5 = (1 / (P5 / 1000)) * O5
        const S5 = R5 * Q5
        //Super Top
        const U5 = ((0.25 * 3.14 * T5 ** 2) / 1000000) * 7850
        const W5 = Q5 - (D5 * F5) / 10 ** 6
        const X5 = (1 / (V5 / 1000)) * U5
        const Y5 = X5 * W5
        // top
        const AA5 = ((0.25 * 3.14 * Z5 ** 2) / 1000000) * 7850
        const AC5 = Q5 - (D5 * F5) / 10 ** 6
        const AD5 = (1 / (AB5 / 1000)) * AA5
        const AE5 = AD5 * AC5

        const VolPelat = M5 + S5 + Y5 + AE5

        // -----------------------------
        // LUBANG TANGGA 1
        // -----------------------------
        //Supper Bottom
        const I6 = ((0.25 * 3.14 * H6 ** 2) / 1000000) * 7850
        const K6 = (C6 * E6) / 10 ** 6
        const L6 = (1 / (J6 / 1000)) * I6
        const M6 = L6 * K6
        //bottom
        const O6 = ((0.25 * 3.14 * N6 ** 2) / 1000000) * 7850
        const Q6 = (C6 * E6) / 10 ** 6
        const R6 = (1 / (P6 / 1000)) * O6
        const S6 = R6 * Q6
        //Super Top
        const U6 = ((0.25 * 3.14 * T6 ** 2) / 1000000) * 7850
        const W6 = Q6 - (D6 * F6) / 10 ** 6
        const X6 = (1 / (V6 / 1000)) * U6
        const Y6 = X6 * W6
        // top
        const AA6 = ((0.25 * 3.14 * Z6 ** 2) / 1000000) * 7850
        const AC6 = Q6 - (D6 * F6) / 10 ** 6
        const AD6 = (1 / (AB6 / 1000)) * AA6
        const AE6 = AD6 * AC6

        const VolLuTa1 = M6 + S6 + Y6 + AE6

        // -----------------------------
        // LUBANG TANGGA 2
        // -----------------------------
        //Supper Bottom
        const I7 = ((0.25 * 3.14 * H7 ** 2) / 1000000) * 7850
        const K7 = (C7 * E7) / 10 ** 6
        const L7 = (1 / (J7 / 1000)) * I7
        const M7 = L7 * K7
        //bottom
        const O7 = ((0.25 * 3.14 * N7 ** 2) / 1000000) * 7850
        const Q7 = (C7 * E7) / 10 ** 6
        const R7 = (1 / (P7 / 1000)) * O7
        const S7 = R7 * Q7
        //Super Top
        const U7 = ((0.25 * 3.14 * T7 ** 2) / 1000000) * 7850
        const W7 = Q7 - (D7 * F7) / 10 ** 6
        const X7 = (1 / (V7 / 1000)) * U7
        const Y7 = X7 * W7
        // top
        const AA7 = ((0.25 * 3.14 * Z7 ** 2) / 1000000) * 7850
        const AC7 = Q7 - (D7 * F7) / 10 ** 6
        const AD7 = (1 / (AB7 / 1000)) * AA7
        const AE7 = AD7 * AC7

        const VolLuTa2 = M7 + S7 + Y7 + AE7

        const volL1 = VolPelat - VolLuTa1
        const volL2 = VolPelat - VolLuTa2

        const superBot1 = M5 - M6
        const superBot2 = M5 - M7
        const superBot = superBot1 + superBot2

        const bot1 = S5 - S6
        const bot2 = S5 - S7
        const bottom = bot1 + bot2

        const superTop1 = Y5 - Y6
        const superTop2 = Y5 - Y7
        const superTop = superTop1 + superTop2

        const top1 = AE5 - AE6
        const top2 = AE5 - AE7
        const top = top1 + top2

        const vol = volL1 + volL2
        const volBetonPelat = (C5 * E5 * G5) / 10 ** 9
        const volBetonLT1 = (C6 * E6 * G6) / 10 ** 9
        const volBetonLT2 = (C7 * E7 * G7) / 10 ** 9

        const volBL1 = volBetonPelat - volBetonLT1
        const volBL2 = volBetonPelat - volBetonLT2
        const volBeton = volBL1 + volBL2
        const kaw = volBeton * 0.5

        const formatVOL = vol.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTUT = totBerTU.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTAY = superTop.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTAX = top.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTBY = superBot.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTBX = bottom.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTAT1 = totBeTAT.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTAL1 = totBeTAL.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTAT2 = totBeTAT.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTBT1 = totBeTBT.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTBL1 = totBeTBL.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTBT2 = totBeTBT.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTST1 = totBerST.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTSL1 = totBerSL.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTST2 = totBerST.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTPIN = totBerTPi.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTYT1 = totBerTYTum.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTYL1 = totBerTYLap.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTYT2 = totBerTYTum.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTXT1 = totBerTXTum.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTXL1 = totBerTXLap.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTXT2 = totBerTXTum.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatKAWA = kaw.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        setTabelPelat({
            nama: nama || '-',
            volume: formatVOL || '-',
            tulTUta: '-',

            tulTAtY: formatTAY || '-',
            tulTAtX: formatTAX || '-',
            tulTBaY: formatTBY || '-',
            tulTBaX: formatTBX || '-',

            tulTAT1: '-',
            tulTAL1: '-',
            tulTAT2: '-',
            tulTBT1: '-',
            tulTBL1: '-',
            tulTBT2: '-',
            tulTST1: '-',
            tulTSL1: '-',
            tulTST2: '-',
            tulTPgg: '-',
            tulTTY1: '-',
            tulTLY1: '-',
            tulTTY2: '-',
            tulTTX1: '-',
            tulTLX1: '-',
            tulTTX2: '-',
            kawat: formatKAWA || '-',

            numVolu: vol,
            numTUta: 0,
            numTAtY: superTop,
            numTAtX: top,
            numTBaY: superBot,
            numTBaX: bottom,
            numTAT1: 0,
            numTAL1: 0,
            numTAT2: 0,
            numTBT1: 0,
            numTBL1: 0,
            numTBT2: 0,
            numTST1: 0,
            numTSL1: 0,
            numTST2: 0,
            numTPgg: 0,
            numTTY1: 0,
            numTLY1: 0,
            numTTY2: 0,
            numTTX1: 0,
            numTLX1: 0,
            numTTX2: 0,
            numkawa: kaw
        })
    }

    return { calcPelat }
}

export default useCalcPembesianPelat
