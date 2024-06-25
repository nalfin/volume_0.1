import { koefBeton } from '@/components/perhitungan/lib/koef-beton'
import { useToast } from '@/components/ui/use-toast'

interface PedestalData {
    nama: string
    p: string
    l: string
    t: string
    jml: string
    satuan: string
    koef: string
}

interface SetTabelPedestalProps {
    (data: {
        nama?: string
        volume?: string
        semen?: string
        pasir?: string
        kerikil?: string
        air?: string
        numVol?: number
        numSem?: number
        numPas?: number
        numKer?: number
        numAir?: number
    }): void
}

const useCalcBetonPedestal = (setTabelPedestal: SetTabelPedestalProps) => {
    const { toast } = useToast()

    const calcPedestal = (data: PedestalData) => {
        const { nama, p, l, t, jml, satuan, koef } = data

        // KOEF BAHAN
        let bahan: any
        if (koef) {
            bahan = koefBeton[koef]
        }

        // NILAI BAHAN
        const kSemen = bahan.semen
        const kPasir = bahan.pasir
        const kKerikil = bahan.kerikil
        const kAir = bahan.air

        if (p === '' || l === '' || t === '') {
            setTabelPedestal({
                nama: '-',
                volume: '-',
                semen: '-',
                pasir: '-',
                kerikil: '-',
                air: '-'
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

        const vol = P * L * T * JML

        const semen = (vol * kSemen) / 50
        const pasir = (vol * kPasir) / 1000
        const kerikil = (vol * kKerikil) / 1000
        const air = vol * kAir

        const bSemen = Math.ceil(semen * 1000000) / 1000000
        const bPasir = Math.ceil(pasir * 1000000) / 1000000
        const bKerikil = Math.ceil(kerikil * 1000000) / 1000000
        const bAir = Math.ceil(air * 1000000) / 1000000

        const convVol = vol.toLocaleString('id-ID', { minimumFractionDigits: 3, maximumFractionDigits: 3 })
        const convSemen = bSemen.toLocaleString('id-ID', { minimumFractionDigits: 4, maximumFractionDigits: 4 })
        const convPasir = bPasir.toLocaleString('id-ID', { minimumFractionDigits: 4, maximumFractionDigits: 4 })
        const convKerikil = bKerikil.toLocaleString('id-ID', { minimumFractionDigits: 4, maximumFractionDigits: 4 })
        const convAir = bAir.toLocaleString('id-ID', { minimumFractionDigits: 4, maximumFractionDigits: 4 })

        setTabelPedestal({
            nama: nama || '-',
            volume: convVol || '-',
            semen: convSemen || '-',
            pasir: convPasir || '-',
            kerikil: convKerikil || '-',
            air: convAir || '-',
            numVol: vol,
            numSem: bSemen,
            numPas: bPasir,
            numKer: bKerikil,
            numAir: bAir
        })
    }

    return { calcPedestal }
}

export default useCalcBetonPedestal
