import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { calcBekistingTotal } from '../calc/bekisting-total'

interface TabelBekistingProps {
    tabelBekPilecap?: any
    tabelBekPedestal?: any
    tabelBekSloof?: any
    tabelBekKolom?: any
    tabelBekBalok?: any
    tabelBekPelat?: any
    tabelId: string
}

const TabelBekisting = ({
    tabelBekPilecap,
    tabelBekPedestal,
    tabelBekSloof,
    tabelBekKolom,
    tabelBekBalok,
    tabelBekPelat,
    tabelId
}: TabelBekistingProps) => {
    const { strVol, strKyu, strPku, strMyk, strBlk, strPly, strDol } = calcBekistingTotal({
        tabelBekPilecap,
        tabelBekPedestal,
        tabelBekSloof,
        tabelBekKolom,
        tabelBekBalok,
        tabelBekPelat
    })

    const NAMAPIL = tabelBekPilecap?.nama
    const NAMAPED = tabelBekPedestal?.nama
    const NAMASLO = tabelBekSloof?.nama
    const NAMAKOL = tabelBekKolom?.nama
    const NAMABAL = tabelBekBalok?.nama
    const NAMAPEL = tabelBekPelat?.nama

    const VOLUPIL = tabelBekPilecap?.volume
    const VOLUPED = tabelBekPedestal?.volume
    const VOLUSLO = tabelBekSloof?.volume
    const VOLUKOL = tabelBekKolom?.volume
    const VOLUBAL = tabelBekBalok?.volume
    const VOLUPEL = tabelBekPelat?.volume

    const KAYUPIL = tabelBekPilecap?.kayu
    const KAYUPED = tabelBekPedestal?.kayu
    const KAYUSLO = tabelBekSloof?.kayu
    const KAYUKOL = tabelBekKolom?.kayu
    const KAYUBAL = tabelBekBalok?.kayu
    const KAYUPEL = tabelBekPelat?.kayu

    const PAKUPIL = tabelBekPilecap?.paku
    const PAKUPED = tabelBekPedestal?.paku
    const PAKUSLO = tabelBekSloof?.paku
    const PAKUKOL = tabelBekKolom?.paku
    const PAKUBAL = tabelBekBalok?.paku
    const PAKUPEL = tabelBekPelat?.paku

    const MIYKPIL = tabelBekPilecap?.minyak
    const MIYKPED = tabelBekPedestal?.minyak
    const MIYKSLO = tabelBekSloof?.minyak
    const MIYKKOL = tabelBekKolom?.minyak
    const MIYKBAL = tabelBekBalok?.minyak
    const MIYKPEL = tabelBekPelat?.minyak

    const BALKPIL = tabelBekPilecap?.balok
    const BALKPED = tabelBekPedestal?.balok
    const BALKSLO = tabelBekSloof?.balok
    const BALKKOL = tabelBekKolom?.balok
    const BALKBAL = tabelBekBalok?.balok
    const BALKPEL = tabelBekPelat?.balok

    const PLYWPIL = tabelBekPilecap?.plywood
    const PLYWPED = tabelBekPedestal?.plywood
    const PLYWSLO = tabelBekSloof?.plywood
    const PLYWKOL = tabelBekKolom?.plywood
    const PLYWBAL = tabelBekBalok?.plywood
    const PLYWPEL = tabelBekPelat?.plywood

    const DOLKPIL = tabelBekPilecap?.dolken
    const DOLKPED = tabelBekPedestal?.dolken
    const DOLKSLO = tabelBekSloof?.dolken
    const DOLKKOL = tabelBekKolom?.dolken
    const DOLKBAL = tabelBekBalok?.dolken
    const DOLKPEL = tabelBekPelat?.dolken
    return (
        <>
            <h5 className="mb-4 text-center lg:mb-0 lg:h-10">
                Hasil Perhitungan Volume dan Kebutuhan Material Pekerjaan Bekisting
            </h5>
            <Table id={tabelId}>
                <TableHeader>
                    <TableRow>
                        <TableHead rowSpan={2} className="min-w-[200px] border bg-background pl-4 text-left">
                            Item Pekerjaan
                        </TableHead>
                        <TableHead rowSpan={2} className="min-w-[120px] border bg-background text-center">
                            Nama Item
                        </TableHead>
                        <TableHead rowSpan={2} className="min-w-[120px] border text-center leading-[150%]">
                            Volume (m2)
                        </TableHead>
                        <TableHead colSpan={7} className="h-16 border text-center">
                            Kebutuhan Bahan Material
                        </TableHead>
                    </TableRow>

                    <TableRow>
                        <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Kayu (m3)</TableHead>
                        <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Paku (kg)</TableHead>
                        <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">
                            Minyak (lt)
                        </TableHead>
                        <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">
                            Balok (m3)
                        </TableHead>
                        <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">
                            Plywood (lbr)
                        </TableHead>
                        <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">
                            Dolken (btg)
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                            Pilecap
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{NAMAPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLUPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{KAYUPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{PAKUPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{MIYKPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{BALKPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{PLYWPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{DOLKPIL}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                            Kolom Pedestal
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{NAMAPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLUPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{KAYUPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{PAKUPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{MIYKPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{BALKPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{PLYWPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{DOLKPED}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                            Sloof
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{NAMASLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLUSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{KAYUSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{PAKUSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{MIYKSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{BALKSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{PLYWSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{DOLKSLO}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                            Kolom
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{NAMAKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLUKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{KAYUKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{PAKUKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{MIYKKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{BALKKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{PLYWKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{DOLKKOL}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                            Balok
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{NAMABAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLUBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{KAYUBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{PAKUBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{MIYKBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{BALKBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{PLYWBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{DOLKBAL}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                            Pelat
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{NAMAPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLUPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{KAYUPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{PAKUPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{MIYKPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{BALKPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{PLYWPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{DOLKPEL}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            colSpan={2}
                            className="h-20 border-x border-b pl-4 text-center text-sm font-bold tracking-widest"
                        >
                            TOTAL
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {VOLUPIL || VOLUPED || VOLUSLO || VOLUKOL || VOLUBAL || VOLUPEL === '-' ? strVol : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {KAYUPIL || KAYUPED || KAYUSLO || KAYUKOL || KAYUBAL || KAYUPEL === '-' ? strKyu : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {/* {strPku === '0,00' ? '' : strPku} */}
                            {PAKUPIL || PAKUPED || PAKUSLO || PAKUKOL || PAKUBAL || PAKUPEL === '-' ? strPku : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {MIYKPIL || MIYKPED || MIYKSLO || MIYKKOL || MIYKBAL || MIYKPEL === '-' ? strMyk : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {BALKPIL || BALKPED || BALKSLO || BALKKOL || BALKBAL || BALKPEL === '-' ? strBlk : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {PLYWPIL || PLYWPED || PLYWSLO || PLYWKOL || PLYWBAL || PLYWPEL === '-' ? strPly : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {DOLKPIL || DOLKPED || DOLKSLO || DOLKKOL || DOLKBAL || DOLKPEL === '-' ? strDol : ''}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default TabelBekisting
