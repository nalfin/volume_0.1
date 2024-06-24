import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { calcBetonTotal } from '../calc/beton-total'

interface TabelBetonProps {
    // tabelPilecap: {
    //     nama?: string
    //     volume?: string
    //     semen?: string
    //     pasir?: string
    //     kerikil?: string
    //     air?: string
    // } | null
    // tabelPedestal: {
    //     nama?: string
    //     volume?: string
    //     semen?: string
    //     pasir?: string
    //     kerikil?: string
    //     air?: string
    // } | null
    // tabelSloof: {
    //     nama?: string
    //     volume?: string
    //     semen?: string
    //     pasir?: string
    //     kerikil?: string
    //     air?: string
    // } | null
    // tabelKolom: {
    //     nama?: string
    //     volume?: string
    //     semen?: string
    //     pasir?: string
    //     kerikil?: string
    //     air?: string
    // } | null
    // tabelBalok: {
    //     nama?: string
    //     volume?: string
    //     semen?: string
    //     pasir?: string
    //     kerikil?: string
    //     air?: string
    // } | null
    tabelPilecap?: any
    tabelPedestal?: any
    tabelSloof?: any
    tabelKolom?: any
    tabelBalok?: any
    tabelPelat?: any
    tabelId: string
}

const TabelBeton = ({
    tabelPilecap,
    tabelPedestal,
    tabelSloof,
    tabelKolom,
    tabelBalok,
    tabelPelat,
    tabelId
}: TabelBetonProps) => {
    const { strVol, strSem, strPas, strKer, strAir } = calcBetonTotal({
        tabelPilecap,
        tabelPedestal,
        tabelSloof,
        tabelKolom,
        tabelBalok,
        tabelPelat
    })
    return (
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
                        Volume (m3)
                    </TableHead>
                    <TableHead colSpan={4} className="h-16 border text-center">
                        Kebutuhan Bahan Material
                    </TableHead>
                </TableRow>

                <TableRow>
                    <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Semen (zak)</TableHead>
                    <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Pasir (m3)</TableHead>
                    <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Kerikil (m3)</TableHead>
                    <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Air (lt)</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Pilecap</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPilecap?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPilecap?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPilecap?.semen}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPilecap?.pasir}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPilecap?.kerikil}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPilecap?.air}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                        Kolom Pedestal
                    </TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPedestal?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPedestal?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPedestal?.semen}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPedestal?.pasir}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPedestal?.kerikil}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPedestal?.air}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Sloof</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelSloof?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelSloof?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelSloof?.semen}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelSloof?.pasir}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelSloof?.kerikil}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelSloof?.air}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Kolom</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelKolom?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelKolom?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelKolom?.semen}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelKolom?.pasir}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelKolom?.kerikil}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelKolom?.air}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Balok</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBalok?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBalok?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBalok?.semen}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBalok?.pasir}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBalok?.kerikil}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBalok?.air}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Pelat</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPelat?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPelat?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPelat?.semen}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPelat?.pasir}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPelat?.kerikil}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelPelat?.air}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell
                        colSpan={2}
                        className="h-11 border-x border-b pl-4 text-center text-sm font-bold tracking-widest"
                    >
                        TOTAL
                    </TableCell>
                    <TableCell className="border-x border-b text-center font-bold">
                        {strVol === '0,00' ? '' : strVol}
                    </TableCell>
                    <TableCell className="border-x border-b text-center font-bold">
                        {strSem === '0,00' ? '' : strSem}
                    </TableCell>
                    <TableCell className="border-x border-b text-center font-bold">
                        {strPas === '0,00' ? '' : strPas}
                    </TableCell>
                    <TableCell className="border-x border-b text-center font-bold">
                        {strKer === '0,00' ? '' : strKer}
                    </TableCell>
                    <TableCell className="border-x border-b text-center font-bold">
                        {strAir === '0,00' ? '' : strAir}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default TabelBeton
