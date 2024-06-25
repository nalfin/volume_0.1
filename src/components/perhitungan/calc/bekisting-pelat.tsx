import { useToast } from '@/components/ui/use-toast'
import { koefBekisting } from '../lib/koef-bekisting'

interface PelatData {
    nama: string
    p: string
    l: string
    t: string
    pLT1: string
    lLT1: string
    pLT2: string
    lLT2: string
    satuan: string
}

interface SetTabelPelatProps {
    (data: {
        nama?: string
        volume?: string
        kayu?: string
        paku?: string
        minyak?: string
        balok?: string
        plywood?: string
        dolken?: string
        numVol?: number
        numKay?: number
        numPak?: number
        numMin?: number
        numBal?: number
        numPly?: number
        numDol?: number
    }): void
}

const useCalcBekistingPelat = (setTabelPelat: SetTabelPelatProps) => {
    const { toast } = useToast()

    const calcPelat = (data: PelatData) => {
        const { nama, p, l, t, pLT1, lLT1, pLT2, lLT2, satuan } = data

        // KOEF BAHAN
        let bahan: any
        bahan = koefBekisting.pelat

        // NILAI BAHAN
        const kKayu = bahan.kayu
        const kPaku = bahan.paku
        const kMinyak = bahan.minyak
        const kBalok = bahan.balok
        const kPlywood = bahan.plywood
        const kDolken = bahan.dolken

        if (p === '' || l === '' || t === '') {
            setTabelPelat({
                nama: '-',
                volume: '-',
                kayu: '-',
                paku: '-',
                minyak: '-',
                balok: '-',
                plywood: '-',
                dolken: '-'
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
        let P1: number = 0
        let L1: number = 0
        let P2: number = 0
        let L2: number = 0

        switch (satuan) {
            case 'm':
                P = parseFloat(p)
                L = parseFloat(l)
                T = parseFloat(t)
                P1 = parseFloat(pLT1)
                L1 = parseFloat(lLT1)
                P2 = parseFloat(pLT2)
                L2 = parseFloat(lLT2)
                break
            case 'cm':
                P = parseFloat(p) / 100
                L = parseFloat(l) / 100
                T = parseFloat(t) / 100
                P1 = parseFloat(pLT1) / 100
                L1 = parseFloat(lLT1) / 100
                P2 = parseFloat(pLT2) / 100
                L2 = parseFloat(lLT2) / 100
                break
            case 'mm':
                P = parseFloat(p) / 1000
                L = parseFloat(l) / 1000
                T = parseFloat(t) / 1000
                P1 = parseFloat(pLT1) / 1000
                L1 = parseFloat(lLT1) / 1000
                P2 = parseFloat(pLT2) / 1000
                L2 = parseFloat(lLT2) / 1000
                break
        }

        const luasP = P * L
        const luasLT1 = P1 * L1
        const luasLT2 = P2 * L2
        const luasTotLT = luasLT1 + luasLT2
        const luasPelat = luasP - luasTotLT

        const kel1 = 2 * P
        const kel2 = 2 * L
        const kelPelat = kel1 + kel2

        const kelXT = kelPelat * T

        const vol = luasPelat + kelXT

        const kayu = vol * kKayu
        const paku = vol * kPaku
        const minyak = vol * kMinyak
        const balok = vol * kBalok
        const plywood = vol * kPlywood
        const dolken = vol * kDolken

        const bKayu = Math.ceil(kayu * 1000000) / 1000000
        const bPaku = Math.ceil(paku * 1000000) / 1000000
        const bMinyak = Math.ceil(minyak * 1000000) / 1000000
        const bBalok = Math.ceil(balok * 1000000) / 1000000
        const bPlywood = Math.ceil(plywood * 1000000) / 1000000
        const bDolken = Math.ceil(dolken * 1000000) / 1000000

        const convVol = vol.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const convKayu = bKayu.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const convPaku = bPaku.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const convMinyak = bMinyak.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const convBalok = bBalok.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const convPlywood = bPlywood.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const convDolken = bDolken.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        setTabelPelat({
            nama: nama || '-',
            volume: convVol || '-',
            kayu: convKayu || '-',
            paku: convPaku || '-',
            minyak: convMinyak || '-',
            balok: convBalok || '-',
            plywood: convPlywood || '-',
            dolken: convDolken || '-',
            numVol: vol,
            numKay: bKayu,
            numPak: bPaku,
            numMin: bMinyak,
            numBal: bBalok,
            numPly: bPlywood,
            numDol: bDolken
        })
    }

    return { calcPelat }
}

export default useCalcBekistingPelat
