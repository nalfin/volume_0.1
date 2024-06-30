'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { calcPembesianTotal } from '../calc/pembesian-total'

interface TabelPembesianProps {
    tabelPemPilecap?: any
    tabelPemPedestal?: any
    tabelPemSloof?: any
    tabelPemKolom?: any
    tabelPemBalok?: any
    tabelPemPelat?: any
    tabelId: string
}

const TabelPembesian = ({
    tabelPemPilecap,
    tabelPemPedestal,
    tabelPemSloof,
    tabelPemKolom,
    tabelPemBalok,
    tabelPemPelat,
    tabelId
}: TabelPembesianProps) => {
    const {
        strVOL,
        strTUT,
        strTAT1,
        strTAL1,
        strTAT2,
        strTBT1,
        strTBL1,
        strTBT2,
        strTST1,
        strTSL1,
        strTST2,
        strTPI,
        strTTY1,
        strTLY1,
        strTTY2,
        strTTX1,
        strTLX1,
        strTTX2,
        strKAW
    } = calcPembesianTotal({
        tabelPemPilecap,
        tabelPemPedestal,
        tabelPemSloof,
        tabelPemKolom,
        tabelPemBalok,
        tabelPemPelat
    })

    const NAMAPIL = tabelPemPilecap?.nama
    const NAMAPED = tabelPemPedestal?.nama
    const NAMASLO = tabelPemSloof?.nama
    const NAMAKOL = tabelPemKolom?.nama
    const NAMABAL = tabelPemBalok?.nama
    const NAMAPEL = tabelPemPelat?.nama

    const VOLUPIL = tabelPemPilecap?.volume
    const VOLUPED = tabelPemPedestal?.volume
    const VOLUSLO = tabelPemSloof?.volume
    const VOLUKOL = tabelPemKolom?.volume
    const VOLUBAL = tabelPemBalok?.volume
    const VOLUPEL = tabelPemPelat?.volume

    const TAYPIL = tabelPemPilecap?.tulTAtY
    const TAXPIL = tabelPemPilecap?.tulTAtX
    const TBYPIL = tabelPemPilecap?.tulTBaY
    const TBXPIL = tabelPemPilecap?.tulTBaX
    const TUTPED = tabelPemPedestal?.tulTUta
    const TUYSLO = tabelPemSloof?.tulTUtY
    const TUXSLO = tabelPemSloof?.tulTUtX
    const TUTKOL = tabelPemKolom?.tulTUta
    const TUYBAL = tabelPemBalok?.tulTUtY
    const TUXBAL = tabelPemBalok?.tulTUtX
    const TAYPEL = tabelPemPelat?.tulTAtY
    const TAXPEL = tabelPemPelat?.tulTAtX
    const TBYPEL = tabelPemPelat?.tulTBaY
    const TBXPEL = tabelPemPelat?.tulTBaX

    const TAT1PIL = tabelPemPilecap?.tulTAT1
    const TAT1PED = tabelPemPedestal?.tulTAT1
    const TAT1SLO = tabelPemSloof?.tulTAT1
    const TAT1KOL = tabelPemKolom?.tulTAT1
    const TAT1BAL = tabelPemBalok?.tulTAT1
    const TAT1PEL = tabelPemPelat?.tulTAT1

    const TAL1PIL = tabelPemPilecap?.tulTAL1
    const TAL1PED = tabelPemPedestal?.tulTAL1
    const TAL1SLO = tabelPemSloof?.tulTAL1
    const TAL1KOL = tabelPemKolom?.tulTAL1
    const TAL1BAL = tabelPemBalok?.tulTAL1
    const TAL1PEL = tabelPemPelat?.tulTAL1

    const TAT2PIL = tabelPemPilecap?.tulTAT2
    const TAT2PED = tabelPemPedestal?.tulTAT2
    const TAT2SLO = tabelPemSloof?.tulTAT2
    const TAT2KOL = tabelPemKolom?.tulTAT2
    const TAT2BAL = tabelPemBalok?.tulTAT2
    const TAT2PEL = tabelPemPelat?.tulTAT2

    const TBT1PIL = tabelPemPilecap?.tulTBT1
    const TBT1PED = tabelPemPedestal?.tulTBT1
    const TBT1SLO = tabelPemSloof?.tulTBT1
    const TBT1KOL = tabelPemKolom?.tulTBT1
    const TBT1BAL = tabelPemBalok?.tulTBT1
    const TBT1PEL = tabelPemPelat?.tulTBT1

    const TBL1PIL = tabelPemPilecap?.tulTBL1
    const TBL1PED = tabelPemPedestal?.tulTBL1
    const TBL1SLO = tabelPemSloof?.tulTBL1
    const TBL1KOL = tabelPemKolom?.tulTBL1
    const TBL1BAL = tabelPemBalok?.tulTBL1
    const TBL1PEL = tabelPemPelat?.tulTBL1

    const TBT2PIL = tabelPemPilecap?.tulTBT2
    const TBT2PED = tabelPemPedestal?.tulTBT2
    const TBT2SLO = tabelPemSloof?.tulTBT2
    const TBT2KOL = tabelPemKolom?.tulTBT2
    const TBT2BAL = tabelPemBalok?.tulTBT2
    const TBT2PEL = tabelPemPelat?.tulTBT2

    const TST1PIL = tabelPemPilecap?.tulTST1
    const TST1PED = tabelPemPedestal?.tulTST1
    const TST1SLO = tabelPemSloof?.tulTST1
    const TST1KOL = tabelPemKolom?.tulTST1
    const TST1BAL = tabelPemBalok?.tulTST1
    const TST1PEL = tabelPemPelat?.tulTST1

    const TSL1PIL = tabelPemPilecap?.tulTSL1
    const TSL1PED = tabelPemPedestal?.tulTSL1
    const TSL1SLO = tabelPemSloof?.tulTSL1
    const TSL1KOL = tabelPemKolom?.tulTSL1
    const TSL1BAL = tabelPemBalok?.tulTSL1
    const TSL1PEL = tabelPemPelat?.tulTSL1

    const TST2PIL = tabelPemPilecap?.tulTST2
    const TST2PED = tabelPemPedestal?.tulTST2
    const TST2SLO = tabelPemSloof?.tulTST2
    const TST2KOL = tabelPemKolom?.tulTST2
    const TST2BAL = tabelPemBalok?.tulTST2
    const TST2PEL = tabelPemPelat?.tulTST2

    const TPINPIL = tabelPemPilecap?.tulTPgg
    const TPINPED = tabelPemPedestal?.tulTPgg
    const TPINSLO = tabelPemSloof?.tulTPgg
    const TPINKOL = tabelPemKolom?.tulTPgg
    const TPINBAL = tabelPemBalok?.tulTPgg
    const TPINPEL = tabelPemPelat?.tulTPgg

    const TTY1PIL = tabelPemPilecap?.tulTTY1
    const TTY1PED = tabelPemPedestal?.tulTTY1
    const TTY1SLO = tabelPemSloof?.tulTTY1
    const TTY1KOL = tabelPemKolom?.tulTTY1
    const TTY1BAL = tabelPemBalok?.tulTTY1
    const TTY1PEL = tabelPemPelat?.tulTTY1

    const TLY1PIL = tabelPemPilecap?.tulTLY1
    const TLY1PED = tabelPemPedestal?.tulTLY1
    const TLY1SLO = tabelPemSloof?.tulTLY1
    const TLY1KOL = tabelPemKolom?.tulTLY1
    const TLY1BAL = tabelPemBalok?.tulTLY1
    const TLY1PEL = tabelPemPelat?.tulTLY1

    const TTY2PIL = tabelPemPilecap?.tulTTY2
    const TTY2PED = tabelPemPedestal?.tulTTY2
    const TTY2SLO = tabelPemSloof?.tulTTY2
    const TTY2KOL = tabelPemKolom?.tulTTY2
    const TTY2BAL = tabelPemBalok?.tulTTY2
    const TTY2PEL = tabelPemPelat?.tulTTY2

    const TTX1PIL = tabelPemPilecap?.tulTTX1
    const TTX1PED = tabelPemPedestal?.tulTTX1
    const TTX1SLO = tabelPemSloof?.tulTTX1
    const TTX1KOL = tabelPemKolom?.tulTTX1
    const TTX1BAL = tabelPemBalok?.tulTTX1
    const TTX1PEL = tabelPemPelat?.tulTTX1

    const TLX1PIL = tabelPemPilecap?.tulTLX1
    const TLX1PED = tabelPemPedestal?.tulTLX1
    const TLX1SLO = tabelPemSloof?.tulTLX1
    const TLX1KOL = tabelPemKolom?.tulTLX1
    const TLX1BAL = tabelPemBalok?.tulTLX1
    const TLX1PEL = tabelPemPelat?.tulTLX1

    const TTX2PIL = tabelPemPilecap?.tulTTX2
    const TTX2PED = tabelPemPedestal?.tulTTX2
    const TTX2SLO = tabelPemSloof?.tulTTX2
    const TTX2KOL = tabelPemKolom?.tulTTX2
    const TTX2BAL = tabelPemBalok?.tulTTX2
    const TTX2PEL = tabelPemPelat?.tulTTX2

    const KAWPIL = tabelPemPilecap?.kawat
    const KAWPED = tabelPemPedestal?.kawat
    const KAWSLO = tabelPemSloof?.kawat
    const KAWKOL = tabelPemKolom?.kawat
    const KAWBAL = tabelPemBalok?.kawat
    const KAWPEL = tabelPemPelat?.kawat

    return (
        <>
            <h5 className="mb-4 text-center lg:mb-0 lg:h-10">
                Hasil Perhitungan Volume dan Kebutuhan Material Pekerjaan Pembesian
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

                        <TableHead rowSpan={2} className="min-w-[100px] border text-center leading-[150%]">
                            Volume (kg)
                        </TableHead>
                        <TableHead colSpan={8} className="border text-center">
                            Tulangan Utama
                        </TableHead>
                        <TableHead colSpan={3} className="border text-center">
                            Tulangan Sengkang
                        </TableHead>
                        <TableHead rowSpan={2} className="border text-center">
                            Tulangan Pinggang
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead colSpan={6} className="border text-center">
                            Tulangan Ties
                        </TableHead>
                        <TableHead rowSpan={2} className="min-w-[100px] border text-center">
                            Kawat
                            <br />
                            (kg)
                        </TableHead>
                    </TableRow>

                    <TableRow>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Tul. Utama Y<br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Tul. Utama X<br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Tul. Atas Tumpuan
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Tul. Atas Lapangan
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Tul. Atas Tumpuan
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Tul. Bawah Tumpuan
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Tul. Bawah Lapangan
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Tul. Bawah Tumpuan
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Sengkang Tumpuan
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Sengkang Lapangan
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Sengkang Tumpuan
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Ties Tumpuan Y
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Ties Lapangan Y
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Ties Tumpuan Y
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Ties Tumpuan X
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Ties Lapangan X
                            <br />
                            (kg)
                        </TableHead>
                        <TableHead className="min-w-[100px] border p-2 text-center leading-[150%]">
                            Ties Tumpuan X
                            <br />
                            (kg)
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* pilecap */}
                    <TableRow>
                        <TableCell
                            rowSpan={2}
                            className="h-[90px] border-x border-b pl-4 text-left text-sm font-medium"
                        >
                            Pilecap
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {NAMAPIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {VOLUPIL}
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{TAYPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TAXPIL}</TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TAT1PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TAL1PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TAT2PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TBT1PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TBL1PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TBT2PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TST1PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TSL1PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TST2PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TPINPIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TTY1PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TLY1PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TTY2PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TTX1PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TLX1PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TTX2PIL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {KAWPIL}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-x border-b text-center text-sm font-medium">{TBYPIL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBXPIL}</TableCell>
                    </TableRow>
                    {/* pedestal */}
                    <TableRow>
                        <TableCell className="border-x border-b pl-4 text-left text-sm font-medium">Pedestal</TableCell>
                        <TableCell className="border-x border-b text-center">{NAMAPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLUPED}</TableCell>
                        <TableCell colSpan={2} className="border-x border-b text-center">
                            {TUTPED}
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{TAT1PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TAL1PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TAT2PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBT1PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBL1PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBT2PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TST1PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TSL1PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TST2PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TPINPED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTY1PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TLY1PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTY2PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTX1PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TLX1PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTX2PED}</TableCell>
                        <TableCell className="border-x border-b text-center">{KAWPED}</TableCell>
                    </TableRow>
                    {/* Sloof */}
                    <TableRow>
                        <TableCell className="border-x border-b pl-4 text-left text-sm font-medium">Sloof</TableCell>
                        <TableCell className="border-x border-b text-center">{NAMASLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLUSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TUYSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TUXSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TAT1SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TAL1SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TAT2SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBT1SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBL1SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBT2SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TST1SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TSL1SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TST2SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TPINSLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTY1SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TLY1SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTY2SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTX1SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TLX1SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTX2SLO}</TableCell>
                        <TableCell className="border-x border-b text-center">{KAWSLO}</TableCell>
                    </TableRow>
                    {/* Kolom */}
                    <TableRow>
                        <TableCell className="border-x border-b pl-4 text-left text-sm font-medium">Kolom</TableCell>
                        <TableCell className="border-x border-b text-center">{NAMAKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLUKOL}</TableCell>
                        <TableCell colSpan={2} className="border-x border-b text-center">
                            {TUTKOL}
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{TAT1KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TAL1KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TAT2KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBT1KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBL1KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBT2KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TST1KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TSL1KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TST2KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TPINKOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTY1KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TLY1KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTY2KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTX1KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TLX1KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTX2KOL}</TableCell>
                        <TableCell className="border-x border-b text-center">{KAWKOL}</TableCell>
                    </TableRow>
                    {/* Balok */}
                    <TableRow>
                        <TableCell className="border-x border-b pl-4 text-left text-sm font-medium">Balok</TableCell>
                        <TableCell className="border-x border-b text-center">{NAMABAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{VOLUBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TUYBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TUXBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TAT1BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TAL1BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TAT2BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBT1BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBL1BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TBT2BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TST1BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TSL1BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TST2BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TPINBAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTY1BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TLY1BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTY2BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTX1BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TLX1BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TTX2BAL}</TableCell>
                        <TableCell className="border-x border-b text-center">{KAWBAL}</TableCell>
                    </TableRow>
                    {/* Pelat */}
                    <TableRow>
                        <TableCell
                            rowSpan={2}
                            className="h-[90px] border-x border-b pl-4 text-left text-sm font-medium"
                        >
                            Pelat
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {NAMAPEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {VOLUPEL}
                        </TableCell>
                        <TableCell className="border-x border-b text-center">{TAYPEL}</TableCell>
                        <TableCell className="border-x border-b text-center">{TAXPEL}</TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TAT1PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TAL1PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TAT2PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TBT1PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TBL1PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TBT2PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TST1PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TSL1PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TST2PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TPINPEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TTY1PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TLY1PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TTY2PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TTX1PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TLX1PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {TTX2PEL}
                        </TableCell>
                        <TableCell rowSpan={2} className="border-x border-b text-center">
                            {KAWPEL}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-x border-b p-3 pl-4 text-center text-sm font-medium">
                            {TBYPEL}
                        </TableCell>
                        <TableCell className="border-x border-b p-3 text-center">{TBXPEL}</TableCell>
                    </TableRow>
                    {/* Total */}
                    <TableRow>
                        <TableCell
                            colSpan={2}
                            className="h-20 border-x border-b pl-4 text-center text-sm font-bold tracking-widest"
                        >
                            TOTAL
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {VOLUPIL || VOLUPED || VOLUSLO || VOLUKOL || VOLUBAL || VOLUPEL === '-' ? strVOL : ''}
                        </TableCell>
                        <TableCell colSpan={2} className="border-x border-b text-center font-bold">
                            {TAYPIL ||
                            TAXPIL ||
                            TBYPIL ||
                            TBXPIL ||
                            TUTPED ||
                            TUYSLO ||
                            TUXSLO ||
                            TUTKOL ||
                            TUYBAL ||
                            TUXBAL ||
                            TAYPEL ||
                            TAXPEL ||
                            TBYPEL ||
                            TBXPEL === '-'
                                ? strTUT
                                : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TAT1PIL || TAT1PED || TAT1SLO || TAT1KOL || TAT1BAL || TAT1PEL === '-' ? strTAT1 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TAL1PIL || TAL1PED || TAL1SLO || TAL1KOL || TAL1BAL || TAL1PEL === '-' ? strTAL1 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TAT2PIL || TAT2PED || TAT2SLO || TAT2KOL || TAT2BAL || TAT2PEL === '-' ? strTAT2 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TBT1PIL || TBT1PED || TBT1SLO || TBT1KOL || TBT1BAL || TBT1PEL === '-' ? strTBT1 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TBL1PIL || TBL1PED || TBL1SLO || TBL1KOL || TBL1BAL || TBL1PEL === '-' ? strTBL1 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TBT2PIL || TBT2PED || TBT2SLO || TBT2KOL || TBT2BAL || TBT2PEL === '-' ? strTBT2 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TST1PIL || TST1PED || TST1SLO || TST1KOL || TST1BAL || TST1PEL === '-' ? strTST1 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TSL1PIL || TSL1PED || TSL1SLO || TSL1KOL || TSL1BAL || TSL1PEL === '-' ? strTSL1 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TST2PIL || TST2PED || TST2SLO || TST2KOL || TST2BAL || TST2PEL === '-' ? strTST2 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TPINPIL || TPINPED || TPINSLO || TPINKOL || TPINBAL || TPINPEL === '-' ? strTPI : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TTY1PIL || TTY1PED || TTY1SLO || TTY1KOL || TTY1BAL || TTY1PEL === '-' ? strTTY1 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TLY1PIL || TLY1PED || TLY1SLO || TLY1KOL || TLY1BAL || TLY1PEL === '-' ? strTLY1 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TTY2PIL || TTY2PED || TTY2SLO || TTY2KOL || TTY2BAL || TTY2PEL === '-' ? strTTY2 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TTX1PIL || TTX1PED || TTX1SLO || TTX1KOL || TTX1BAL || TTX1PEL === '-' ? strTTX1 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TLX1PIL || TLX1PED || TLX1SLO || TLX1KOL || TLX1BAL || TLX1PEL === '-' ? strTLX1 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {TTX2PIL || TTX2PED || TTX2SLO || TTX2KOL || TTX2BAL || TTX2PEL === '-' ? strTTX2 : ''}
                        </TableCell>
                        <TableCell className="border-x border-b text-center font-bold">
                            {KAWPIL || KAWPED || KAWSLO || KAWKOL || KAWBAL || KAWPEL === '-' ? strKAW : ''}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default TabelPembesian
