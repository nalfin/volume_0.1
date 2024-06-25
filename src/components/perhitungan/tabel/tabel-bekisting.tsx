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
                    <TableHead colSpan={7} className="h-16 border text-center">
                        Kebutuhan Bahan Material
                    </TableHead>
                </TableRow>

                <TableRow>
                    <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Kayu (m3)</TableHead>
                    <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Paku (kg)</TableHead>
                    <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Minyak (lt)</TableHead>
                    <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Balok (m3)</TableHead>
                    <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Plywood (lbr)</TableHead>
                    <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Dolken (btg)</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Pilecap</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPilecap?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPilecap?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPilecap?.kayu}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPilecap?.paku}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPilecap?.minyak}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPilecap?.balok}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPilecap?.plywood}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPilecap?.dolken}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                        Kolom Pedestal
                    </TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPedestal?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPedestal?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPedestal?.kayu}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPedestal?.paku}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPedestal?.minyak}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPedestal?.balok}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPedestal?.plywood}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPedestal?.dolken}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Sloof</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekSloof?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekSloof?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekSloof?.kayu}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekSloof?.paku}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekSloof?.minyak}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekSloof?.balok}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekSloof?.plywood}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekSloof?.dolken}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Kolom</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekKolom?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekKolom?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekKolom?.kayu}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekKolom?.paku}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekKolom?.minyak}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekKolom?.balok}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekKolom?.plywood}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekKolom?.dolken}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Balok</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekBalok?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekBalok?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekBalok?.kayu}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekBalok?.paku}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekBalok?.minyak}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekBalok?.balok}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekBalok?.plywood}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekBalok?.dolken}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">Pelat</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPelat?.nama}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPelat?.volume}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPelat?.kayu}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPelat?.paku}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPelat?.minyak}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPelat?.balok}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPelat?.plywood}</TableCell>
                    <TableCell className="border-x border-b text-center">{tabelBekPelat?.dolken}</TableCell>
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
                        {strKyu === '0,00' ? '' : strKyu}
                    </TableCell>
                    <TableCell className="border-x border-b text-center font-bold">
                        {strPku === '0,00' ? '' : strPku}
                    </TableCell>
                    <TableCell className="border-x border-b text-center font-bold">
                        {strMyk === '0,00' ? '' : strMyk}
                    </TableCell>
                    <TableCell className="border-x border-b text-center font-bold">
                        {strBlk === '0,00' ? '' : strBlk}
                    </TableCell>
                    <TableCell className="border-x border-b text-center font-bold">
                        {strPly === '0,00' ? '' : strPly}
                    </TableCell>
                    <TableCell className="border-x border-b text-center font-bold">
                        {strDol === '0,00' ? '' : strDol}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default TabelBekisting
