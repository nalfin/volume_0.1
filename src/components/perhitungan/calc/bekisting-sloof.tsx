import { useToast } from '@/components/ui/use-toast'
import { koefBekisting } from '../lib/koef-bekisting'

interface SloofData {
    nama: string
    p: string
    l: string
    t: string
    satuan: string
}

interface SetTabelSloofProps {
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

const useCalcBekistingSloof = (setTabelSloof: SetTabelSloofProps) => {
    const { toast } = useToast()

    const calcSloof = (data: SloofData) => {
        const { nama, p, l, t, satuan } = data

        // KOEF BAHAN
        let bahan: any
        bahan = koefBekisting.sloof

        // NILAI BAHAN
        const kKayu = bahan.kayu
        const kPaku = bahan.paku
        const kMinyak = bahan.minyak

        if (p === '' || l === '' || t === '') {
            setTabelSloof({
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

        switch (satuan) {
            case 'm':
                P = parseFloat(p)
                L = parseFloat(l)
                T = parseFloat(t)
                break
            case 'cm':
                P = parseFloat(p) / 100
                L = parseFloat(l) / 100
                T = parseFloat(t) / 100
                break
            case 'mm':
                P = parseFloat(p) / 1000
                L = parseFloat(l) / 1000
                T = parseFloat(t) / 1000
                break
        }

        const vol = (2 * T + L) * P

        const kayu = vol * kKayu
        const paku = vol * kPaku
        const minyak = vol * kMinyak

        const bKayu = Math.ceil(kayu * 1000000) / 1000000
        const bPaku = Math.ceil(paku * 1000000) / 1000000
        const bMinyak = Math.ceil(minyak * 1000000) / 1000000

        const convVol = vol.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const convKayu = bKayu.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const convPaku = bPaku.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        const convMinyak = bMinyak.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        setTabelSloof({
            nama: nama || '-',
            volume: convVol || '-',
            kayu: convKayu || '-',
            paku: convPaku || '-',
            minyak: convMinyak || '-',
            balok: '-',
            plywood: '-',
            dolken: '-',
            numVol: vol,
            numKay: bKayu,
            numPak: bPaku,
            numMin: bMinyak
        })
    }

    return { calcSloof }
}

export default useCalcBekistingSloof
