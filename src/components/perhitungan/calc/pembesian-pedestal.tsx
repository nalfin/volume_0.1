import { useToast } from '@/components/ui/use-toast'
import { diameterPembesian } from '../lib/diam-pembesian'

interface PedestalData {
    nama: string
    p: string
    l: string
    t: string
    jml: string
    satuan: string
    tebSBet: string

    diaTUta: string
    jmlTUta: string

    diaSkng: string
    jrkSTum: string
    jrkSLap: string

    diaTies: string
    jmlTulX: string
    jrkTumX: string
    jrkLapX: string
    jmlTulY: string
    jrkTumY: string
    jrkLapY: string
}

interface SetTabelPedestalProps {
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

const useCalcPembesianPedestal = (setTabelPedestal: SetTabelPedestalProps) => {
    const { toast } = useToast()

    const calcPedestal = (data: PedestalData) => {
        const {
            nama,
            p,
            l,
            t,
            jml,
            satuan,
            tebSBet,

            diaTUta,
            jmlTUta,

            diaSkng,
            jrkSTum,
            jrkSLap,

            diaTies,
            jmlTulX,
            jrkTumX,
            jrkLapX,
            jmlTulY,
            jrkTumY,
            jrkLapY
        } = data

        // DIAMETER TUL UTAMA
        let diaTU: any
        if (diaTUta) {
            diaTU = diameterPembesian[diaTUta]
        }
        // DIAMETER TUL SENGKANG
        let diaTS: any
        if (diaSkng) {
            diaTS = diameterPembesian[diaSkng]
        }
        // DIAMETER TUL TIES
        let diaTT: any
        if (diaTies) {
            diaTT = diameterPembesian[diaTies]
        }

        // NILAI DIAMETER
        const diaTulU = diaTU.diam
        const diaTulS = diaTS.diam
        const diaTulT = diaTT.diam

        if (p === '' || l === '' || t === '') {
            setTabelPedestal({
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
        let jTY: number = 0
        let jLY: number = 0
        let jTX: number = 0
        let jLX: number = 0

        switch (satuan) {
            case 'm':
                P = parseFloat(p) * 1000
                L = parseFloat(l) * 1000
                T = parseFloat(t) * 1000
                jST = parseFloat(jrkSTum) * 1000
                jSL = parseFloat(jrkSLap) * 1000
                jTY = parseFloat(jrkTumY) * 1000
                jLY = parseFloat(jrkLapY) * 1000
                jTX = parseFloat(jrkTumX) * 1000
                jLX = parseFloat(jrkLapX) * 1000
                break
            case 'cm':
                P = parseFloat(p) * 10
                L = parseFloat(l) * 10
                T = parseFloat(t) * 10
                jST = parseFloat(jrkSTum) * 10
                jSL = parseFloat(jrkSLap) * 10
                jTY = parseFloat(jrkTumY) * 10
                jLY = parseFloat(jrkLapY) * 10
                jTX = parseFloat(jrkTumX) * 10
                jLX = parseFloat(jrkLapX) * 10
                break
            case 'mm':
                P = parseFloat(p)
                L = parseFloat(l)
                T = parseFloat(t)
                jST = parseFloat(jrkSTum)
                jSL = parseFloat(jrkSLap)
                jTY = parseFloat(jrkTumY)
                jLY = parseFloat(jrkLapY)
                jTX = parseFloat(jrkTumX)
                jLX = parseFloat(jrkLapX)
                break
        }

        // convet to number
        // const P = p ? parseFloat(p) : 0
        // const L = l ? parseFloat(l) : 0
        // const T = t ? parseFloat(t) : 0
        const JML = parseFloat(jml)
        const tSB = parseFloat(tebSBet)
        const dTU = diaTulU
        const nTU = parseFloat(jmlTUta)
        const dTS = diaTulS
        const dTT = diaTulT
        const nTY = parseFloat(jmlTulY)
        const nTX = parseFloat(jmlTulX)
        // const jST = jrkSTum ? parseFloat(jrkSTum) : 0
        // const jSL = jrkSLap ? parseFloat(jrkSLap) : 0
        // const jTY = jrkTumY ? parseFloat(jrkTumY) : 0
        // const jLY = jrkLapY ? parseFloat(jrkLapY) : 0
        // const jTX = jrkTumX ? parseFloat(jrkTumX) : 0
        // const jLX = jrkLapX ? parseFloat(jrkLapX) : 0

        // DIMENSION
        const luPK = P * L
        const kePK = 2 * (P + L)
        const pTum = T / 4
        const pLap = T / 2

        // TULANGAN UTAMA
        const lappingTU = 45 * dTU
        const beratTU = ((0.25 * (22 / 7) * dTU ** 2) / 1000000) * 7850
        const totBerTU = ((T * nTU + lappingTU * nTU) / 1000) * beratTU

        // SENGKANG TUMPUAN
        const pSTum = kePK - 8 * tSB + 8 * dTS * 2
        const nSTum = Math.ceil(pTum / jST) * 2
        const beratSTum = ((0.25 * (22 / 7) * dTS ** 2) / 1000000) * 7850
        const totBerSTum = (pSTum / 1000) * nSTum * beratSTum

        // SENGKANG LAPANGAN
        const pSLap = kePK - 8 * tSB + 8 * dTS * 2
        const nSLap = Math.ceil(pLap / jSL)
        const beratSLap = ((0.25 * (22 / 7) * dTS ** 2) / 1000000) * 7850
        const totBerSLap = (pSLap / 1000) * nSLap * beratSLap

        //TIES Y TUMPUAN
        const pTYTum = P - 2 * tSB + 2 * 8 * dTT
        const nTYTum = Math.ceil(pTum / jTY) * 2 * nTY
        const beratTYTum = ((0.25 * (22 / 7) * dTT ** 2) / 1000000) * 7850
        const totBerTYTum = (pTYTum / 1000) * nTYTum * beratTYTum

        //TIES Y LAPANGAN
        const pTYLap = P - 2 * tSB + 2 * 8 * dTT
        const nTYLap = Math.ceil(pLap / jLY) * nTY
        const beratTYLap = ((0.25 * (22 / 7) * dTT ** 2) / 1000000) * 7850
        const totBerTYLap = (pTYLap / 1000) * nTYLap * beratTYLap

        //TIES X TUMPUAN
        const pTXTum = P - 2 * tSB + 2 * 8 * dTT
        const nTXTum = Math.ceil(pTum / jTX) * 2 * nTX
        const beratTXTum = ((0.25 * (22 / 7) * dTT ** 2) / 1000000) * 7850
        const totBerTXTum = (pTXTum / 1000) * nTXTum * beratTXTum

        //TIES X LAPANGAN
        const pTXLap = P - 2 * tSB + 2 * 8 * dTT
        const nTXLap = Math.ceil(pLap / jLX) * nTX
        const beratTXLap = ((0.25 * (22 / 7) * dTT ** 2) / 1000000) * 7850
        const totBerTXLap = (pTXLap / 1000) * nTXLap * beratTXLap

        const TTY1 = totBerTYTum || 0
        const TLY1 = totBerTYLap || 0
        const TTX1 = totBerTXTum || 0
        const TLX1 = totBerTXLap || 0

        const volTies = TLX1 + TTX1 + TLY1 + TTY1
        const vol = volTies + totBerSLap + totBerSTum + totBerTU

        const volBeton = (luPK * T) / 10 ** 9
        const totVBeton = volBeton * JML
        // const kaw = totVBeton * 0.5
        const kaw = vol * (1.5 / 100)

        const formatVOL = vol.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatTUT = totBerTU.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatTST1 = totBerSTum.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatTSL1 = totBerSLap.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatTST2 = totBerSTum.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })

        const formatTYT01 = totBerTYTum.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatTYL01 = totBerTYLap.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatTYT02 = totBerTYTum.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatTXT01 = totBerTXTum.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatTXL01 = totBerTXLap.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatTXT02 = totBerTXTum.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatKAWA = kaw.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })

        const formatTYT1 = formatTYT01 === 'NaN' ? '-' : formatTYT01
        const formatTYL1 = formatTYL01 === 'NaN' ? '-' : formatTYL01
        const formatTYT2 = formatTYT02 === 'NaN' ? '-' : formatTYT02
        const formatTXT1 = formatTXT01 === 'NaN' ? '-' : formatTXT01
        const formatTXL1 = formatTXL01 === 'NaN' ? '-' : formatTXL01
        const formatTXT2 = formatTXT02 === 'NaN' ? '-' : formatTXT02

        setTabelPedestal({
            nama: nama || '-',
            volume: formatVOL || '-',
            tulTUta: formatTUT || '-',
            tulTAT1: '-',
            tulTAL1: '-',
            tulTAT2: '-',
            tulTBT1: '-',
            tulTBL1: '-',
            tulTBT2: '-',
            tulTST1: formatTST1 || '-',
            tulTSL1: formatTSL1 || '-',
            tulTST2: formatTST2 || '-',
            tulTPgg: '-',
            tulTTY1: formatTYT1 || '-',
            tulTLY1: formatTYL1 || '-',
            tulTTY2: formatTYT2 || '-',
            tulTTX1: formatTXT1 || '-',
            tulTLX1: formatTXL1 || '-',
            tulTTX2: formatTXT2 || '-',
            kawat: formatKAWA || '-',

            numVolu: vol,
            numTUta: totBerTU,
            numTAT1: 0,
            numTAL1: 0,
            numTAT2: 0,
            numTBT1: 0,
            numTBL1: 0,
            numTBT2: 0,
            numTST1: totBerSTum,
            numTSL1: totBerSLap,
            numTST2: totBerSTum,
            numTTY1: totBerTYTum,
            numTLY1: totBerTYLap,
            numTTY2: totBerTYTum,
            numTTX1: totBerTXTum,
            numTLX1: totBerTXLap,
            numTTX2: totBerTXTum,
            numkawa: kaw
        })
    }

    return { calcPedestal }
}

export default useCalcPembesianPedestal
