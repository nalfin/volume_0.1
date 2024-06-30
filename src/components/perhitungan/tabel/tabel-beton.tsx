import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { calcBetonTotal } from '../calc/beton-total'

interface TabelBetonProps {
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

    const NAMPIL = tabelBetPilecap?.nama
    const NAMPED = tabelBetPedestal?.nama
    const NAMSLO = tabelBetSloof?.nama
    const NAMKOL = tabelBetKolom?.nama
    const NAMBAL = tabelBetBalok?.nama
    const NAMPEL = tabelBetPelat?.nama

    const VOLPIL = tabelBetPilecap?.volume
    const VOLPED = tabelBetPedestal?.volume
    const VOLSLO = tabelBetSloof?.volume
    const VOLKOL = tabelBetKolom?.volume
    const VOLBAL = tabelBetBalok?.volume
    const VOLPEL = tabelBetPelat?.volume

    const SEMPIL = tabelBetPilecap?.semen
    const SEMPED = tabelBetPedestal?.semen
    const SEMSLO = tabelBetSloof?.semen
    const SEMKOL = tabelBetKolom?.semen
    const SEMBAL = tabelBetBalok?.semen
    const SEMPEL = tabelBetPelat?.semen

    const PASPIL = tabelBetPilecap?.pasir
    const PASPED = tabelBetPedestal?.pasir
    const PASSLO = tabelBetSloof?.pasir
    const PASKOL = tabelBetKolom?.pasir
    const PASBAL = tabelBetBalok?.pasir
    const PASPEL = tabelBetPelat?.pasir

    const KERPIL = tabelBetPilecap?.kerikil
    const KERPED = tabelBetPedestal?.kerikil
    const KERKOL = tabelBetKolom?.kerikil
    const KERSLO = tabelBetSloof?.kerikil
    const KERBAL = tabelBetBalok?.kerikil
    const KERPEL = tabelBetPelat?.kerikil

    const AIRPIL = tabelBetPilecap?.air
    const AIRPED = tabelBetPedestal?.air
    const AIRKOL = tabelBetKolom?.air
    const AIRSLO = tabelBetSloof?.air
    const AIRBAL = tabelBetBalok?.air
    const AIRPEL = tabelBetPelat?.air

    return (
        <>
            <h5 className="mb-4 text-center lg:mb-0 lg:h-10">
                Hasil Perhitungan Volume dan Kebutuhan Material Pekerjaan Beton
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
                            Volume (m3)
                        </TableHead>
                        <TableHead colSpan={4} className="h-16 border text-center">
                            Kebutuhan Bahan Material
                        </TableHead>
                    </TableRow>

                    <TableRow>
                        <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">
                            Semen (zak)
                        </TableHead>
                        <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">
                            Pasir (m3)
                        </TableHead>
                        <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">
                            Kerikil (m3)
                        </TableHead>
                        <TableHead className="min-w-[120px] border p-2 text-center leading-[150%]">Air (lt)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                            Pilecap
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{NAMPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{SEMPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{PASPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{KERPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{AIRPIL}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                            Kolom Pedestal
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{NAMPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{SEMPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{PASPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{KERPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{AIRPED}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                            Sloof
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{NAMSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{SEMSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{PASSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{KERSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{AIRSLO}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                            Kolom
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{NAMKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{SEMKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{PASKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{KERKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{AIRKOL}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                            Balok
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{NAMBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{SEMBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{PASBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{KERBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{AIRBAL}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="h-0 border-x border-b pl-4 text-left text-sm font-medium">
                            Pelat
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{NAMPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{SEMPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{PASPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{KERPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{AIRPEL}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            colSpan={2}
                            className="h-20 border-x border-b pl-4 text-center text-sm font-bold tracking-widest"
                        >
                            TOTAL
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {VOLPIL || VOLPED || VOLSLO || VOLKOL || VOLBAL || VOLPEL === '-' ? strVol : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {SEMPIL || SEMPED || SEMSLO || SEMKOL || SEMBAL || SEMPEL === '-' ? strSem : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {PASPIL || PASPED || PASSLO || PASKOL || PASBAL || PASPEL === '-' ? strPas : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {KERPIL || KERPED || KERSLO || KERKOL || KERBAL || KERPEL === '-' ? strKer : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {AIRPIL || AIRPED || AIRSLO || AIRKOL || AIRBAL || AIRPEL === '-' ? strAir : ''}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default TabelBeton
