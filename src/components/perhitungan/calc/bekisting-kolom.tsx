import { useToast } from '@/components/ui/use-toast'
import { koefBekisting } from '../lib/koef-bekisting'

interface KolomData {
    nama: string
    p: string
    l: string
    t: string
    jml: string
    satuan: string
}

interface SetTabelKolomProps {
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

const useCalcBekistingKolom = (setTabelKolom: SetTabelKolomProps) => {
    const { toast } = useToast()

    const calcKolom = (data: KolomData) => {
        const { nama, p, l, t, jml, satuan } = data

        // KOEF BAHAN
        let bahan: any
        bahan = koefBekisting.kolom

        // NILAI BAHAN
        const kKayu = bahan.kayu
        const kPaku = bahan.paku
        const kMinyak = bahan.minyak
        const kBalok = bahan.balok
        const kPlywood = bahan.plywood
        const kDolken = bahan.dolken

        if (p === '' || l === '' || t === '') {
            setTabelKolom({
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
        let JML: number = 0

        switch (satuan) {
            case 'm':
                P = parseFloat(p)
                L = parseFloat(l)
                T = parseFloat(t)
                JML = parseFloat(jml)
                break
            case 'cm':
                P = parseFloat(p) / 100
                L = parseFloat(l) / 100
                T = parseFloat(t) / 100
                JML = parseFloat(jml)
                break
            case 'mm':
                P = parseFloat(p) / 1000
                L = parseFloat(l) / 1000
                T = parseFloat(t) / 1000
                JML = parseFloat(jml)
                break
        }

        const vol = (P + L) * 2 * T * JML

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

        setTabelKolom({
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

    return { calcKolom }
}

export default useCalcBekistingKolom
