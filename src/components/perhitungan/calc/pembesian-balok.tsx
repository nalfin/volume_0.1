import { useToast } from '@/components/ui/use-toast'
import { diameterPembesian } from '../lib/diam-pembesian'

interface BalokData {
    nama: string
    p: string
    l: string
    t: string
    jml: string
    satuan: string
    tebSBet: string

    diaTAt: string
    jmlTAT: string
    jmlTAL: string
    diaTBa: string
    jmlTBT: string
    jmlTBL: string

    diaSkng: string
    jrkSTum: string
    jrkSLap: string

    diaTPi: string
    jmlTPi: string
}

interface SetTabelBalokProps {
    (data: {
        nama?: string
        volume?: string
        tulTUta?: string
        tulTUtX?: string
        tulTUtY?: string
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
        numTUtX?: number
        numTUtY?: number
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

const useCalcPembesianBalok = (setTabelBalok: SetTabelBalokProps) => {
    const { toast } = useToast()

    const calcBalok = (data: BalokData) => {
        const {
            nama,
            p,
            l,
            t,
            jml,
            satuan,
            tebSBet,

            diaTAt,
            jmlTAT,
            jmlTAL,
            diaTBa,
            jmlTBT,
            jmlTBL,

            diaSkng,
            jrkSTum,
            jrkSLap,

            diaTPi,
            jmlTPi
        } = data

        // DIAMETER TUL ATAS
        let diaTAtas: any
        if (diaTAt) {
            diaTAtas = diameterPembesian[diaTAt]
        }
        // DIAMETER TUL BAWAH
        let diaTBawah: any
        if (diaTBa) {
            diaTBawah = diameterPembesian[diaTBa]
        }
        // DIAMETER TUL SENGKANG
        let diaTSengkang: any
        if (diaSkng) {
            diaTSengkang = diameterPembesian[diaSkng]
        }
        // DIAMETER TUL TIES
        let diaTPinggang: any
        if (diaTPi) {
            diaTPinggang = diameterPembesian[diaTPi]
        }

        // NILAI DIAMETER
        const diaTA = diaTAtas.diam
        const diaTB = diaTBawah.diam
        const diaTS = diaTSengkang.diam
        const diaTP = diaTPinggang.diam

        if (p === '' || l === '' || t === '') {
            setTabelBalok({
                nama: '-',
                volume: '-',
                tulTUta: '-',
                tulTUtX: '-',
                tulTUtY: '-',
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

        let P: number = 0
        let L: number = 0
        let T: number = 0
        let jST: number = 0
        let jSL: number = 0

        switch (satuan) {
            case 'm':
                P = parseFloat(p) * 1000
                L = parseFloat(l) * 1000
                T = parseFloat(t) * 1000
                jST = parseFloat(jrkSTum) * 1000
                jSL = parseFloat(jrkSLap) * 1000
                break
            case 'cm':
                P = parseFloat(p) * 10
                L = parseFloat(l) * 10
                T = parseFloat(t) * 10
                jST = parseFloat(jrkSTum) * 10
                jSL = parseFloat(jrkSLap) * 10
                break
            case 'mm':
                P = parseFloat(p)
                L = parseFloat(l)
                T = parseFloat(t)
                jST = parseFloat(jrkSTum)
                jSL = parseFloat(jrkSLap)
                break
        }

        // convet to number
        // const P = parseFloat(p)
        // const L = parseFloat(l)
        // const T = parseFloat(t)
        const JML = parseFloat(jml)
        const tSB = parseFloat(tebSBet)
        const dTA = diaTA
        const nTAT = parseFloat(jmlTAT)
        const nTAL = parseFloat(jmlTAL)
        const dTB = diaTB
        const nTBT = parseFloat(jmlTBT)
        const nTBL = parseFloat(jmlTBL)
        const dTS = diaTS
        // const jST = parseFloat(jrkSTum)
        // const jSL = parseFloat(jrkSLap)
        const dTP = diaTP
        const nTP = parseFloat(jmlTPi)

        // DIMENSION
        const luPB = L * T
        const kePB = 2 * (L + T)

        // TULANGAN ATAS TUMPUAN
        const berTATum = ((0.25 * (22 / 7) * dTA ** 2) / 1000000) * 7850
        const pjgTumAt = P / 4
        const lapTATum = (45 * dTA) / 2
        const totBeTAT = ((pjgTumAt + lapTATum) / 1000) * berTATum * nTAT

        // TULANGAN ATAS LAPANGAN
        const berTALap = ((0.25 * (22 / 7) * dTA ** 2) / 1000000) * 7850
        const pjgLapAt = P / 2
        const totBeTAL = (pjgLapAt / 1000) * berTALap * nTAL

        // TULANGAN BAWAH TUMPUAN
        const berTBTum = ((0.25 * (22 / 7) * dTB ** 2) / 1000000) * 7850
        const pjgTumBa = P / 4
        const totBeTBT = (pjgTumBa / 1000) * berTBTum * nTBT

        // TULANGAN BAWAH LAPANGAN
        const berTBLap = ((0.25 * (22 / 7) * dTB ** 2) / 1000000) * 7850
        const pjgLapBa = P / 2
        const lapTBLap = 45 * dTB
        const totBeTBL = (pjgLapBa / 1000 + lapTBLap / 1000) * berTBLap * nTBL

        // SENGKANG TUMPUAN
        const pjGelSTum = kePB - 8 * tSB + 2 * 8 * dTS
        const berSTum = ((0.25 * (22 / 7) * dTS ** 2) / 1000000) * 7850
        const pjgTTum = P / 4
        const nSenTum = Math.ceil(pjgTTum / jST)
        const totBerST = ((nSenTum * pjGelSTum) / 1000) * berSTum

        // SENGKANG LAPANGAN
        const pjGelSLap = kePB - 8 * tSB + 2 * 8 * dTS
        const berSLap = ((0.25 * (22 / 7) * dTS ** 2) / 1000000) * 7850
        const pjgTLap = P / 2
        const nSenLap = Math.ceil(pjgTLap / jSL)
        const totBerSL = ((nSenLap * pjGelSLap) / 1000) * berSLap

        //PINGGANG
        const pjgTPi = P
        const berTPi = ((0.25 * (22 / 7) * dTP ** 2) / 1000000) * 7850
        const totBerTPi = ((pjgTPi * nTP) / 1000) * berTPi

        const vol = totBerTPi + totBerSL + 2 * totBerST + totBeTBL + 2 * totBeTBT + totBeTAL + 2 * totBeTAT
        const volBeton = (luPB * P) / 10 ** 9
        const totVBeton = volBeton * JML
        const kaw = totVBeton * 0.5

        const formatVOL = vol.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTUT = totBerTU.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTAT1 = totBeTAT.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTAL1 = totBeTAL.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTAT2 = totBeTAT.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTBT1 = totBeTBT.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTBL1 = totBeTBL.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTBT2 = totBeTBT.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTST1 = totBerST.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTSL1 = totBerSL.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTST2 = totBerST.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTPIN = totBerTPi.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTYT1 = totBerTYTum.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTYL1 = totBerTYLap.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTYT2 = totBerTYTum.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTXT1 = totBerTXTum.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTXL1 = totBerTXLap.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const formatTXT2 = totBerTXTum.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatKAWA = kaw.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        setTabelBalok({
            nama: nama || '-',
            volume: formatVOL || '-',
            tulTUta: '-',
            tulTUtY: '-',
            tulTUtX: '-',
            tulTAT1: formatTAT1 || '-',
            tulTAL1: formatTAL1 || '-',
            tulTAT2: formatTAT2 || '-',
            tulTBT1: formatTBT1 || '-',
            tulTBL1: formatTBL1 || '-',
            tulTBT2: formatTBT2 || '-',
            tulTST1: formatTST1 || '-',
            tulTSL1: formatTSL1 || '-',
            tulTST2: formatTST2 || '-',
            tulTPgg: formatTPIN || '-',
            tulTTY1: '-',
            tulTLY1: '-',
            tulTTY2: '-',
            tulTTX1: '-',
            tulTLX1: '-',
            tulTTX2: '-',
            kawat: formatKAWA || '-',

            numVolu: vol,
            // numTUta: totBerTU,
            numTAT1: totBeTAT,
            numTAL1: totBeTAL,
            numTAT2: totBeTAT,
            numTBT1: totBeTBT,
            numTBL1: totBeTBL,
            numTBT2: totBeTBT,
            numTST1: totBerST,
            numTSL1: totBerSL,
            numTST2: totBerST,

            numTTY1: 0,
            numTLY1: 0,
            numTTY2: 0,
            numTTX1: 0,
            numTLX1: 0,
            numTTX2: 0,
            numTPgg: totBerTPi,
            numkawa: kaw
        })
    }

    return { calcBalok }
}

export default useCalcPembesianBalok
