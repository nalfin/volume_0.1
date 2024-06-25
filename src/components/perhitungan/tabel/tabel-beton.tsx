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
    tabelBetPilecap?: any
    tabelBetPedestal?: any
    tabelBetSloof?: any
    tabelBetKolom?: any
    tabelBetBalok?: any
    tabelBetPelat?: any
    tabelId: string
}

const TabelBeton = ({
    tabelBetPilecap,
    tabelBetPedestal,
    tabelBetSloof,
    tabelBetKolom,
    tabelBetBalok,
    tabelBetPelat,
    tabelId
}: TabelBetonProps) => {
    const { strVol, strSem, strPas, strKer, strAir } = calcBetonTotal({
        tabelBetPilecap,
        tabelBetPedestal,
        tabelBetSloof,
        tabelBetKolom,
        tabelBetBalok,
        tabelBetPelat
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
                    <TableCell className="border-x border-b text-center">{tabelBetPilecap?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPilecap?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPilecap?.semen}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPilecap?.pasir}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPilecap?.kerikil}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPilecap?.air}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                        Kolom Pedestal
                    </TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPedestal?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPedestal?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPedestal?.semen}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPedestal?.pasir}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPedestal?.kerikil}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPedestal?.air}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Sloof</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetSloof?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetSloof?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetSloof?.semen}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetSloof?.pasir}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetSloof?.kerikil}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetSloof?.air}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Kolom</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetKolom?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetKolom?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetKolom?.semen}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetKolom?.pasir}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetKolom?.kerikil}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetKolom?.air}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Balok</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetBalok?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetBalok?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetBalok?.semen}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetBalok?.pasir}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetBalok?.kerikil}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetBalok?.air}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Pelat</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPelat?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPelat?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPelat?.semen}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPelat?.pasir}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPelat?.kerikil}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBetPelat?.air}</TableCell>
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
