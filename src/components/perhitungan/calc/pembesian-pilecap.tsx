import { useToast } from '@/components/ui/use-toast'
import { diameterPembesian } from '../lib/diam-pembesian'

interface PilecapData {
    nama: string
    p: string
    l: string
    t: string
    jml: string
    tSBet: string
    diaTAY: string
    jrkTAY: string
    diaTAX: string
    jrkTAX: string
    diaTBY: string
    jrkTBY: string
    diaTBX: string
    jrkTBX: string
    satuan: string
}

interface SetTabelPilecapProps {
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

const useCalcPembesianPilecap = (setTabelPilecap: SetTabelPilecapProps) => {
    const { toast } = useToast()

    const calcPilecap = (data: PilecapData) => {
        const {
            nama,
            p,
            l,
            t,
            jml,
            tSBet,
            diaTAY,
            jrkTAY,
            diaTAX,
            jrkTAX,
            diaTBY,
            jrkTBY,
            diaTBX,
            jrkTBX,
            satuan
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

        if (p === '' || l === '' || t === '') {
            setTabelPilecap({
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
        let T: number = 0
        let jTAY: number = 0
        let jTAX: number = 0
        let jTBY: number = 0
        let jTBX: number = 0

        switch (satuan) {
            case 'm':
                P = parseFloat(p) * 1000
                L = parseFloat(l) * 1000
                T = parseFloat(t) * 1000
                jTAY = parseFloat(jrkTAY) * 1000
                jTAX = parseFloat(jrkTAX) * 1000
                jTBY = parseFloat(jrkTBY) * 1000
                jTBX = parseFloat(jrkTBX) * 1000
                break
            case 'cm':
                P = parseFloat(p) * 10
                L = parseFloat(l) * 10
                T = parseFloat(t) * 10
                jTAY = parseFloat(jrkTAY) * 10
                jTAX = parseFloat(jrkTAX) * 10
                jTBY = parseFloat(jrkTBY) * 10
                jTBX = parseFloat(jrkTBX) * 10
                break
            case 'mm':
                P = parseFloat(p)
                L = parseFloat(l)
                T = parseFloat(t)
                jTAY = parseFloat(jrkTAY)
                jTAX = parseFloat(jrkTAX)
                jTBY = parseFloat(jrkTBY)
                jTBX = parseFloat(jrkTBX)
                break
        }

        // convet to number
        // const P = p ? parseFloat(p) : 0
        // const L = l ? parseFloat(l) : 0
        // const T = t ? parseFloat(t) : 0
        const JML = parseFloat(jml)
        const tSB = parseFloat(tSBet)

        const dTAY = diamTAY
        // const jTAY = jrkTAY ? parseFloat(jrkTAY) : 0
        const dTAX = diamTAX
        // const jTAX = jrkTAX ? parseFloat(jrkTAX) : 0

        const dTBY = diamTBY
        // const jTBY = jrkTBY ? parseFloat(jrkTBY) : 0
        const dTBX = diamTBX
        // const jTBX = jrkTBX ? parseFloat(jrkTBX) : 0

        // -----------------------------
        // TULANGAN BAWAH ARAH Y
        // -----------------------------
        const pjgTBY = P - tSB * 2
        const pjgTekTBY = T - tSB * 2
        const kaitTBY = 6 * dTBY * 2
        const nTBY = Math.ceil(pjgTBY / jTBY)
        const berTBY = ((0.25 * (22 / 7) * dTBY ** 2) / 1000000) * 7850
        const pjgGelTBY = pjgTBY + pjgTekTBY * 2 + kaitTBY
        const berGelTBY = pjgGelTBY * berTBY
        const totBerTBY = (nTBY * berGelTBY) / 1000

        // -----------------------------
        // TULANGAN BAWAH ARAH X
        // -----------------------------
        const pjgTBX = P - tSB * 2
        const pjgTekTBX = T - tSB * 2
        const kaitTBX = 6 * dTBX * 2
        const nTBX = Math.ceil(pjgTBX / jTBX)
        const berTBX = ((0.25 * (22 / 7) * dTBX ** 2) / 1000000) * 7850
        const pjgGelTBX = pjgTBX + pjgTekTBX * 2 + kaitTBX
        const berGelTBX = pjgGelTBX * berTBX
        const totBerTBX = (nTBX * berGelTBX) / 1000

        // -----------------------------
        // TULANGAN ATAS ARAH Y
        // -----------------------------
        const pjgTAY = P - tSB * 2
        const pjgTekTAY = T - tSB * 2
        const kaitTAY = 6 * dTAY * 2
        const nTAY = Math.ceil(pjgTAY / jTAY)
        const berTAY = ((0.25 * (22 / 7) * dTAY ** 2) / 1000000) * 7850
        const pjgGelTAY = pjgTAY + pjgTekTAY * 2 + kaitTAY
        const berGelTAY = pjgGelTAY * berTAY
        const totBerTAY = (nTAY * berGelTAY) / 1000

        // -----------------------------
        // TULANGAN ATAS ARAH X
        // -----------------------------
        const pjgTAX = P - tSB * 2
        const pjgTekTAX = T - tSB * 2
        const kaitTAX = 6 * dTAX * 2
        const nTAX = Math.ceil(pjgTAX / jTAX)
        const berTAX = ((0.25 * (22 / 7) * dTAX ** 2) / 1000000) * 7850
        const pjgGelTAX = pjgTAY + pjgTekTAY * 2 + kaitTAY
        const berGelTAX = pjgGelTAX * berTAX
        const totBerTAX = (nTAX * berGelTAX) / 1000

        const berTotbesiBot = totBerTBX + totBerTBY
        const beeTotbesiTop = totBerTAX + totBerTAY

        const berTotB1Pil = berTotbesiBot + beeTotbesiTop

        const vol = berTotB1Pil * JML

        const Pm = P / 1000
        const Lm = L / 1000
        const Tm = T / 1000

        const volBeton = Pm * Lm * Tm
        const totVolBet = volBeton * JML
        // const kaw = totVolBet * 0.5
        const kaw = vol * (1.5 / 100)

        const formatVOL = vol.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        // const formatTUT = totBerTU.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const formatTAY = totBerTAY.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatTAX = totBerTAX.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatTBY = totBerTBY.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        const formatTBX = totBerTBX.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
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
        const formatKAWA = kaw.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })

        setTabelPilecap({
            nama: nama || '-',
            volume: formatVOL || '-',
            // tulTUta: '-',

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
            numTAtY: totBerTAY,
            numTAtX: totBerTAX,
            numTBaY: totBerTBY,
            numTBaX: totBerTBX,
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

    return { calcPilecap }
}

export default useCalcPembesianPilecap
