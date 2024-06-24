import { koefKebBahan } from '@/components/perhitungan/lib/koefKebBahan'
import { useToast } from '@/components/ui/use-toast'

interface PelatData {
    nama: string
    p: string
    l: string
    t: string
    pLuTa1: string
    lLuTa1: string
    pLuTa2: string
    lLuTa2: string
    satuan: string
    koef: string
}

interface SetTabelPelatProps {
    (data: { nama?: string; volume?: string; semen?: string; pasir?: string; kerikil?: string; air?: string }): void
}

const useCalcBetonPelat = (setTabelPelat: SetTabelPelatProps) => {
    const { toast } = useToast()

    const calcPelat = (data: PelatData) => {
        const { nama, p, l, t, pLuTa1, lLuTa1, pLuTa2, lLuTa2, satuan, koef } = data

        // KOEF BAHAN
        let bahan: any
        if (koef) {
            bahan = koefKebBahan[koef]
        }

        // NILAI BAHAN
        const kSemen = bahan.semen
        const kPasir = bahan.pasir
        const kKerikil = bahan.kerikil
        const kAir = bahan.air

        if (p === '' || l === '' || t === '') {
            setTabelPelat({
                nama: '-',
                volume: 'NaN',
                semen: 'NaN',
                pasir: 'NaN',
                kerikil: 'NaN',
                air: 'NaN'
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

        const PLuTA1 = parseFloat(pLuTa1)
        const LLuTA1 = parseFloat(lLuTa1)
        const PLuTA2 = parseFloat(pLuTa2)
        const LLuTA2 = parseFloat(lLuTa2)

        // ((p x l) - (lubang tangga)) x t
        const luasPelat = P * L
        const luasTA1 = PLuTA1 * LLuTA1
        const luasTA2 = PLuTA2 * LLuTA2
        const luasLuTA = luasTA1 + luasTA2

        const vol = (luasPelat - luasLuTA) * T

        const semen = (vol * kSemen) / 50
        const pasir = (vol * kPasir) / 1000
        const kerikil = (vol * kKerikil) / 1000
        const air = vol * kAir

        const bSemen = Math.ceil(semen * 1000000) / 1000000
        const bPasir = Math.ceil(pasir * 1000000) / 1000000
        const bKerikil = Math.ceil(kerikil * 1000000) / 1000000
        const bAir = Math.ceil(air * 1000000) / 1000000

        const convVol = vol.toFixed(2).replace('.', ',')
        const convSemen = bSemen.toFixed(2).replace('.', ',')
        const convPasir = bPasir.toFixed(2).replace('.', ',')
        const convKerikil = bKerikil.toFixed(2).replace('.', ',')
        const convAir = bAir.toFixed(2).replace('.', ',')

        setTabelPelat({
            nama: nama || '-',
            volume: convVol || '-',
            semen: convSemen || '-',
            pasir: convPasir || '-',
            kerikil: convKerikil || '-',
            air: convAir || '-'
        })
    }

    return { calcPelat }
}

export default useCalcBetonPelat
