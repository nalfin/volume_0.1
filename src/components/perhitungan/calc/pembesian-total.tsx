interface CalcPembesianTotalProps {
    tabelPemPilecap: any
    tabelPemPedestal: any
    tabelPemSloof: any
    tabelPemKolom: any
    tabelPemBalok: any
    tabelPemPelat: any
}

export const calcPembesianTotal = ({
    tabelPemPilecap,
    tabelPemPedestal,
    tabelPemSloof,
    tabelPemKolom,
    tabelPemBalok,
    tabelPemPelat
}: CalcPembesianTotalProps) => {
    const volPil = tabelPemPilecap?.numVolu
    const volPed = tabelPemPedestal?.numVolu
    const volSlo = tabelPemSloof?.numVolu
    const volKol = tabelPemKolom?.numVolu
    const volBal = tabelPemBalok?.numVolu
    const volPel = tabelPemPelat?.numVolu

    const tulTAYPil = tabelPemPilecap?.numTAtY
    const tulTAXPil = tabelPemPilecap?.numTAtX
    const tulTBYPil = tabelPemPilecap?.numTBaY
    const tulTBXPil = tabelPemPilecap?.numTBaX
    const tulUtPed = tabelPemPedestal?.numTUta
    const tulUYSlo = tabelPemPilecap?.numTUtY
    const tulUXSlo = tabelPemPilecap?.numTUtX
    const tulUtKol = tabelPemKolom?.numTUta
    const tulUYBal = tabelPemPilecap?.numTUtY
    const tulUXBal = tabelPemPilecap?.numTUtX
    const tulTAYPel = tabelPemPelat?.numTAtY
    const tulTAXPel = tabelPemPelat?.numTAtX
    const tulTBYPel = tabelPemPelat?.numTBaY
    const tulTBXPel = tabelPemPelat?.numTBaX

    const tulAT1Pil = tabelPemPilecap?.numTAT1
    const tulAT1Ped = tabelPemPedestal?.numTAT1
    const tulAT1Slo = tabelPemSloof?.numTAT1
    const tulAT1Kol = tabelPemKolom?.numTAT1
    const tulAT1Bal = tabelPemBalok?.numTAT1
    const tulAT1Pel = tabelPemPelat?.numTAT1

    const tulAL1Pil = tabelPemPilecap?.numTAL1
    const tulAL1Ped = tabelPemPedestal?.numTAL1
    const tulAL1Slo = tabelPemSloof?.numTAL1
    const tulAL1Kol = tabelPemKolom?.numTAL1
    const tulAL1Bal = tabelPemBalok?.numTAL1
    const tulAL1Pel = tabelPemPelat?.numTAL1

    const tulAT2Pil = tabelPemPilecap?.numTAT2
    const tulAT2Ped = tabelPemPedestal?.numTAT2
    const tulAT2Slo = tabelPemSloof?.numTAT2
    const tulAT2Kol = tabelPemKolom?.numTAT2
    const tulAT2Bal = tabelPemBalok?.numTAT2
    const tulAT2Pel = tabelPemPelat?.numTAT2

    const tulBT1Pil = tabelPemPilecap?.numTBT1
    const tulBT1Ped = tabelPemPedestal?.numTBT1
    const tulBT1Slo = tabelPemSloof?.numTBT1
    const tulBT1Kol = tabelPemKolom?.numTBT1
    const tulBT1Bal = tabelPemBalok?.numTBT1
    const tulBT1Pel = tabelPemPelat?.numTBT1

    const tulBL1Pil = tabelPemPilecap?.numTBL1
    const tulBL1Ped = tabelPemPedestal?.numTBL1
    const tulBL1Slo = tabelPemSloof?.numTBL1
    const tulBL1Kol = tabelPemKolom?.numTBL1
    const tulBL1Bal = tabelPemBalok?.numTBL1
    const tulBL1Pel = tabelPemPelat?.numTBL1

    const tulBT2Pil = tabelPemPilecap?.numTBT2
    const tulBT2Ped = tabelPemPedestal?.numTBT2
    const tulBT2Slo = tabelPemSloof?.numTBT2
    const tulBT2Kol = tabelPemKolom?.numTBT2
    const tulBT2Bal = tabelPemBalok?.numTBT2
    const tulBT2Pel = tabelPemPelat?.numTBT2

    const tulST1Pil = tabelPemPilecap?.numTST1
    const tulST1Ped = tabelPemPedestal?.numTST1
    const tulST1Slo = tabelPemSloof?.numTST1
    const tulST1Kol = tabelPemKolom?.numTST1
    const tulST1Bal = tabelPemBalok?.numTST1
    const tulST1Pel = tabelPemPelat?.numTST1

    const tulSL1Pil = tabelPemPilecap?.numTSL1
    const tulSL1Ped = tabelPemPedestal?.numTSL1
    const tulSL1Slo = tabelPemSloof?.numTSL1
    const tulSL1Kol = tabelPemKolom?.numTSL1
    const tulSL1Bal = tabelPemBalok?.numTSL1
    const tulSL1Pel = tabelPemPelat?.numTSL1

    const tulST2Pil = tabelPemPilecap?.numTST2
    const tulST2Ped = tabelPemPedestal?.numTST2
    const tulST2Slo = tabelPemSloof?.numTST2
    const tulST2Kol = tabelPemKolom?.numTST2
    const tulST2Bal = tabelPemBalok?.numTST2
    const tulST2Pel = tabelPemPelat?.numTST2

    const tulPiPil = tabelPemPilecap?.numTPgg
    const tulPiPed = tabelPemPedestal?.numTPgg
    const tulPiSlo = tabelPemSloof?.numTPgg
    const tulPiKol = tabelPemKolom?.numTPgg
    const tulPiBal = tabelPemBalok?.numTPgg
    const tulPiPel = tabelPemPelat?.numTPgg

    const tulTTY1Pil = tabelPemPilecap?.numTTY1
    const tulTTY1Ped = tabelPemPedestal?.numTTY1
    const tulTTY1Slo = tabelPemSloof?.numTTY1
    const tulTTY1Kol = tabelPemKolom?.numTTY1
    const tulTTY1Bal = tabelPemBalok?.numTTY1
    const tulTTY1Pel = tabelPemPelat?.numTTY1

    const tulTLY1Pil = tabelPemPilecap?.numTLY1
    const tulTLY1Ped = tabelPemPedestal?.numTLY1
    const tulTLY1Slo = tabelPemSloof?.numTLY1
    const tulTLY1Kol = tabelPemKolom?.numTLY1
    const tulTLY1Bal = tabelPemBalok?.numTLY1
    const tulTLY1Pel = tabelPemPelat?.numTLY1

    const tulTTY2Pil = tabelPemPilecap?.numTTY2
    const tulTTY2Ped = tabelPemPedestal?.numTTY2
    const tulTTY2Slo = tabelPemSloof?.numTTY2
    const tulTTY2Kol = tabelPemKolom?.numTTY2
    const tulTTY2Bal = tabelPemBalok?.numTTY2
    const tulTTY2Pel = tabelPemPelat?.numTTY2

    const tulTTX1Pil = tabelPemPilecap?.numTTX1
    const tulTTX1Ped = tabelPemPedestal?.numTTX1
    const tulTTX1Slo = tabelPemSloof?.numTTX1
    const tulTTX1Kol = tabelPemKolom?.numTTX1
    const tulTTX1Bal = tabelPemBalok?.numTTX1
    const tulTTX1Pel = tabelPemPelat?.numTTX1

    const tulTLX1Pil = tabelPemPilecap?.numTLX1
    const tulTLX1Ped = tabelPemPedestal?.numTLX1
    const tulTLX1Slo = tabelPemSloof?.numTLX1
    const tulTLX1Kol = tabelPemKolom?.numTLX1
    const tulTLX1Bal = tabelPemBalok?.numTLX1
    const tulTLX1Pel = tabelPemPelat?.numTLX1

    const tulTTX2Pil = tabelPemPilecap?.numTTX2
    const tulTTX2Ped = tabelPemPedestal?.numTTX2
    const tulTTX2Slo = tabelPemSloof?.numTTX2
    const tulTTX2Kol = tabelPemKolom?.numTTX2
    const tulTTX2Bal = tabelPemBalok?.numTTX2
    const tulTTX2Pel = tabelPemPelat?.numTTX2

    const tulKaPil = tabelPemPilecap?.numkawa
    const tulKaPed = tabelPemPedestal?.numkawa
    const tulKaSlo = tabelPemSloof?.numkawa
    const tulKaKol = tabelPemKolom?.numkawa
    const tulKaBal = tabelPemBalok?.numkawa
    const tulKaPel = tabelPemPelat?.numkawa

    const volPIL = isNaN(volPil) ? 0 : volPil
    const volPED = isNaN(volPed) ? 0 : volPed
    const volSLO = isNaN(volSlo) ? 0 : volSlo
    const volKOL = isNaN(volKol) ? 0 : volKol
    const volBAL = isNaN(volBal) ? 0 : volBal
    const volPEL = isNaN(volPel) ? 0 : volPel

    const tulTAYPIL = isNaN(tulTAYPil) ? 0 : tulTAYPil
    const tulTAXPIL = isNaN(tulTAXPil) ? 0 : tulTAXPil
    const tulTBYPIL = isNaN(tulTBYPil) ? 0 : tulTBYPil
    const tulTBXPIL = isNaN(tulTBXPil) ? 0 : tulTBXPil
    const tulUTPED = isNaN(tulUtPed) ? 0 : tulUtPed
    const tulUYSLO = isNaN(tulUYSlo) ? 0 : tulUYSlo
    const tulUXSLO = isNaN(tulUXSlo) ? 0 : tulUXSlo
    const tulUTKOL = isNaN(tulUtKol) ? 0 : tulUtKol
    const tulUYBAL = isNaN(tulUYBal) ? 0 : tulUYBal
    const tulUXBAL = isNaN(tulUXBal) ? 0 : tulUXBal
    const tulTAYPEL = isNaN(tulTAYPel) ? 0 : tulTAYPel
    const tulTAXPEL = isNaN(tulTAXPel) ? 0 : tulTAXPel
    const tulTBYPEL = isNaN(tulTBYPel) ? 0 : tulTBYPel
    const tulTBXPEL = isNaN(tulTBXPel) ? 0 : tulTBXPel

    const tulAT1PIL = isNaN(tulAT1Pil) ? 0 : tulAT1Pil
    const tulAT1PED = isNaN(tulAT1Ped) ? 0 : tulAT1Ped
    const tulAT1SLO = isNaN(tulAT1Slo) ? 0 : tulAT1Slo
    const tulAT1KOL = isNaN(tulAT1Kol) ? 0 : tulAT1Kol
    const tulAT1BAL = isNaN(tulAT1Bal) ? 0 : tulAT1Bal
    const tulAT1PEL = isNaN(tulAT1Pel) ? 0 : tulAT1Pel

    const tulAL1PIL = isNaN(tulAL1Pil) ? 0 : tulAL1Pil
    const tulAL1PED = isNaN(tulAL1Ped) ? 0 : tulAL1Ped
    const tulAL1SLO = isNaN(tulAL1Slo) ? 0 : tulAL1Slo
    const tulAL1KOL = isNaN(tulAL1Kol) ? 0 : tulAL1Kol
    const tulAL1BAL = isNaN(tulAL1Bal) ? 0 : tulAL1Bal
    const tulAL1PEL = isNaN(tulAL1Pel) ? 0 : tulAL1Pel

    const tulAT2PIL = isNaN(tulAT2Pil) ? 0 : tulAT2Pil
    const tulAT2PED = isNaN(tulAT2Ped) ? 0 : tulAT2Ped
    const tulAT2SLO = isNaN(tulAT2Slo) ? 0 : tulAT2Slo
    const tulAT2KOL = isNaN(tulAT2Kol) ? 0 : tulAT2Kol
    const tulAT2BAL = isNaN(tulAT2Bal) ? 0 : tulAT2Bal
    const tulAT2PEL = isNaN(tulAT2Pel) ? 0 : tulAT2Pel

    const tulBT1PIL = isNaN(tulBT1Pil) ? 0 : tulBT1Pil
    const tulBT1PED = isNaN(tulBT1Ped) ? 0 : tulBT1Ped
    const tulBT1SLO = isNaN(tulBT1Slo) ? 0 : tulBT1Slo
    const tulBT1KOL = isNaN(tulBT1Kol) ? 0 : tulBT1Kol
    const tulBT1BAL = isNaN(tulBT1Bal) ? 0 : tulBT1Bal
    const tulBT1PEL = isNaN(tulBT1Pel) ? 0 : tulBT1Pel

    const tulBL1PIL = isNaN(tulBL1Pil) ? 0 : tulBL1Pil
    const tulBL1PED = isNaN(tulBL1Ped) ? 0 : tulBL1Ped
    const tulBL1SLO = isNaN(tulBL1Slo) ? 0 : tulBL1Slo
    const tulBL1KOL = isNaN(tulBL1Kol) ? 0 : tulBL1Kol
    const tulBL1BAL = isNaN(tulBL1Bal) ? 0 : tulBL1Bal
    const tulBL1PEL = isNaN(tulBL1Pel) ? 0 : tulBL1Pel

    const tulBT2PIL = isNaN(tulBT2Pil) ? 0 : tulBT2Pil
    const tulBT2PED = isNaN(tulBT2Ped) ? 0 : tulBT2Ped
    const tulBT2SLO = isNaN(tulBT2Slo) ? 0 : tulBT2Slo
    const tulBT2KOL = isNaN(tulBT2Kol) ? 0 : tulBT2Kol
    const tulBT2BAL = isNaN(tulBT2Bal) ? 0 : tulBT2Bal
    const tulBT2PEL = isNaN(tulBT2Pel) ? 0 : tulBT2Pel

    const tulST1PIL = isNaN(tulST1Pil) ? 0 : tulST1Pil
    const tulST1PED = isNaN(tulST1Ped) ? 0 : tulST1Ped
    const tulST1SLO = isNaN(tulST1Slo) ? 0 : tulST1Slo
    const tulST1KOL = isNaN(tulST1Kol) ? 0 : tulST1Kol
    const tulST1BAL = isNaN(tulST1Bal) ? 0 : tulST1Bal
    const tulST1PEL = isNaN(tulST1Pel) ? 0 : tulST1Pel

    const tulSL1PIL = isNaN(tulSL1Pil) ? 0 : tulSL1Pil
    const tulSL1PED = isNaN(tulSL1Ped) ? 0 : tulSL1Ped
    const tulSL1SLO = isNaN(tulSL1Slo) ? 0 : tulSL1Slo
    const tulSL1KOL = isNaN(tulSL1Kol) ? 0 : tulSL1Kol
    const tulSL1BAL = isNaN(tulSL1Bal) ? 0 : tulSL1Bal
    const tulSL1PEL = isNaN(tulSL1Pel) ? 0 : tulSL1Pel

    const tulST2PIL = isNaN(tulST2Pil) ? 0 : tulST2Pil
    const tulST2PED = isNaN(tulST2Ped) ? 0 : tulST2Ped
    const tulST2SLO = isNaN(tulST2Slo) ? 0 : tulST2Slo
    const tulST2KOL = isNaN(tulST2Kol) ? 0 : tulST2Kol
    const tulST2BAL = isNaN(tulST2Bal) ? 0 : tulST2Bal
    const tulST2PEL = isNaN(tulST2Pel) ? 0 : tulST2Pel

    const tulPIPIL = isNaN(tulPiPil) ? 0 : tulPiPil
    const tulPIPED = isNaN(tulPiPed) ? 0 : tulPiPed
    const tulPISLO = isNaN(tulPiSlo) ? 0 : tulPiSlo
    const tulPIKOL = isNaN(tulPiKol) ? 0 : tulPiKol
    const tulPIBAL = isNaN(tulPiBal) ? 0 : tulPiBal
    const tulPIPEL = isNaN(tulPiPel) ? 0 : tulPiPel

    const tulTTY1PIL = isNaN(tulTTY1Pil) ? 0 : tulTTY1Pil
    const tulTTY1PED = isNaN(tulTTY1Ped) ? 0 : tulTTY1Ped
    const tulTTY1SLO = isNaN(tulTTY1Slo) ? 0 : tulTTY1Slo
    const tulTTY1KOL = isNaN(tulTTY1Kol) ? 0 : tulTTY1Kol
    const tulTTY1BAL = isNaN(tulTTY1Bal) ? 0 : tulTTY1Bal
    const tulTTY1PEL = isNaN(tulTTY1Pel) ? 0 : tulTTY1Pel

    const tulTLY1PIL = isNaN(tulTLY1Pil) ? 0 : tulTLY1Pil
    const tulTLY1PED = isNaN(tulTLY1Ped) ? 0 : tulTLY1Ped
    const tulTLY1SLO = isNaN(tulTLY1Slo) ? 0 : tulTLY1Slo
    const tulTLY1KOL = isNaN(tulTLY1Kol) ? 0 : tulTLY1Kol
    const tulTLY1BAL = isNaN(tulTLY1Bal) ? 0 : tulTLY1Bal
    const tulTLY1PEL = isNaN(tulTLY1Pel) ? 0 : tulTLY1Pel

    const tulTTY2PIL = isNaN(tulTTY2Pil) ? 0 : tulTTY2Pil
    const tulTTY2PED = isNaN(tulTTY2Ped) ? 0 : tulTTY2Ped
    const tulTTY2SLO = isNaN(tulTTY2Slo) ? 0 : tulTTY2Slo
    const tulTTY2KOL = isNaN(tulTTY2Kol) ? 0 : tulTTY2Kol
    const tulTTY2BAL = isNaN(tulTTY2Bal) ? 0 : tulTTY2Bal
    const tulTTY2PEL = isNaN(tulTTY2Pel) ? 0 : tulTTY2Pel

    const tulTTX1PIL = isNaN(tulTTX1Pil) ? 0 : tulTTX1Pil
    const tulTTX1PED = isNaN(tulTTX1Ped) ? 0 : tulTTX1Ped
    const tulTTX1SLO = isNaN(tulTTX1Slo) ? 0 : tulTTX1Slo
    const tulTTX1KOL = isNaN(tulTTX1Kol) ? 0 : tulTTX1Kol
    const tulTTX1BAL = isNaN(tulTTX1Bal) ? 0 : tulTTX1Bal
    const tulTTX1PEL = isNaN(tulTTX1Pel) ? 0 : tulTTX1Pel

    const tulTLX1PIL = isNaN(tulTLX1Pil) ? 0 : tulTLX1Pil
    const tulTLX1PED = isNaN(tulTLX1Ped) ? 0 : tulTLX1Ped
    const tulTLX1SLO = isNaN(tulTLX1Slo) ? 0 : tulTLX1Slo
    const tulTLX1KOL = isNaN(tulTLX1Kol) ? 0 : tulTLX1Kol
    const tulTLX1BAL = isNaN(tulTLX1Bal) ? 0 : tulTLX1Bal
    const tulTLX1PEL = isNaN(tulTLX1Pel) ? 0 : tulTLX1Pel

    const tulTTX2PIL = isNaN(tulTTX2Pil) ? 0 : tulTTX2Pil
    const tulTTX2PED = isNaN(tulTTX2Ped) ? 0 : tulTTX2Ped
    const tulTTX2SLO = isNaN(tulTTX2Slo) ? 0 : tulTTX2Slo
    const tulTTX2KOL = isNaN(tulTTX2Kol) ? 0 : tulTTX2Kol
    const tulTTX2BAL = isNaN(tulTTX2Bal) ? 0 : tulTTX2Bal
    const tulTTX2PEL = isNaN(tulTTX2Pel) ? 0 : tulTTX2Pel

    const tulKAPIL = isNaN(tulKaPil) ? 0 : tulKaPil
    const tulKAPED = isNaN(tulKaPed) ? 0 : tulKaPed
    const tulKASLO = isNaN(tulKaSlo) ? 0 : tulKaSlo
    const tulKAKOL = isNaN(tulKaKol) ? 0 : tulKaKol
    const tulKABAL = isNaN(tulKaBal) ? 0 : tulKaBal
    const tulKAPEL = isNaN(tulKaPel) ? 0 : tulKaPel

    const tulTAPIL = tulTAYPIL + tulTAXPIL
    const tulTBPIL = tulTBYPIL + tulTBXPIL
    const tulTAPEL = tulTAYPEL + tulTAXPEL
    const tulTBPEL = tulTBYPEL + tulTBXPEL

    const totalVOL = volPIL + volPED + volSLO + volKOL + volBAL + volPEL
    const totalTUT =
        tulTAPIL + tulTBPIL + tulUTPED + tulUYSLO + tulUXSLO + tulUTKOL + tulUYBAL + tulUXBAL + tulTAPEL + tulTBPEL
    const totalTAT1 = tulAT1PIL + tulAT1PED + tulAT1SLO + tulAT1KOL + tulAT1BAL + tulAT1PEL
    const totalTAL1 = tulAL1PIL + tulAL1PED + tulAL1SLO + tulAL1KOL + tulAL1BAL + tulAL1PEL
    const totalTAT2 = tulAT2PIL + tulAT2PED + tulAT2SLO + tulAT2KOL + tulAT2BAL + tulAT2PEL
    const totalTBT1 = tulBT1PIL + tulBT1PED + tulBT1SLO + tulBT1KOL + tulBT1BAL + tulBT1PEL
    const totalTBL1 = tulBL1PIL + tulBL1PED + tulBL1SLO + tulBL1KOL + tulBL1BAL + tulBL1PEL
    const totalTBT2 = tulBT2PIL + tulBT2PED + tulBT2SLO + tulBT2KOL + tulBT2BAL + tulBT2PEL
    const totalTST1 = tulST1PIL + tulST1PED + tulST1SLO + tulST1KOL + tulST1BAL + tulST1PEL
    const totalTSL1 = tulSL1PIL + tulSL1PED + tulSL1SLO + tulSL1KOL + tulSL1BAL + tulSL1PEL
    const totalTST2 = tulST2PIL + tulST2PED + tulST2SLO + tulST2KOL + tulST2BAL + tulST2PEL
    const totalTPI = tulPIPIL + tulPIPED + tulPISLO + tulPIKOL + tulPIBAL + tulPIPEL
    const totalTTY1 = tulTTY1PIL + tulTTY1PED + tulTTY1SLO + tulTTY1KOL + tulTTY1BAL + tulTTY1PEL
    const totalTLY1 = tulTLY1PIL + tulTLY1PED + tulTLY1SLO + tulTLY1KOL + tulTLY1BAL + tulTLY1PEL
    const totalTTY2 = tulTTY2PIL + tulTTY2PED + tulTTY2SLO + tulTTY2KOL + tulTTY2BAL + tulTTY2PEL
    const totalTTX1 = tulTTX1PIL + tulTTX1PED + tulTTX1SLO + tulTTX1KOL + tulTTX1BAL + tulTTX1PEL
    const totalTLX1 = tulTLX1PIL + tulTLX1PED + tulTLX1SLO + tulTLX1KOL + tulTLX1BAL + tulTLX1PEL
    const totalTTX2 = tulTTX2PIL + tulTTX2PED + tulTTX2SLO + tulTTX2KOL + tulTTX2BAL + tulTTX2PEL
    const totalKAW = tulKAPIL + tulKAPED + tulKASLO + tulKAKOL + tulKABAL + tulKAPEL

    const strVOL =
        totalVOL === 0 ? '-' : totalVOL.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTUT =
        totalTUT === 0 ? '-' : totalTUT.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTAT1 =
        totalTAT1 === 0
            ? '-'
            : totalTAT1.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTAL1 =
        totalTAL1 === 0
            ? '-'
            : totalTAL1.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTAT2 =
        totalTAT2 === 0
            ? '-'
            : totalTAT2.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTBT1 =
        totalTBT1 === 0
            ? '-'
            : totalTBT1.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTBL1 =
        totalTBL1 === 0
            ? '-'
            : totalTBL1.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTBT2 =
        totalTBT2 === 0
            ? '-'
            : totalTBT2.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTST1 =
        totalTST1 === 0
            ? '-'
            : totalTST1.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTSL1 =
        totalTSL1 === 0
            ? '-'
            : totalTSL1.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTST2 =
        totalTST2 === 0
            ? '-'
            : totalTST2.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTPI =
        totalTPI === 0 ? '-' : totalTPI.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTTY1 =
        totalTTY1 === 0
            ? '-'
            : totalTTY1.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTLY1 =
        totalTLY1 === 0
            ? '-'
            : totalTLY1.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTTY2 =
        totalTTY2 === 0
            ? '-'
            : totalTTY2.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTTX1 =
        totalTTX1 === 0
            ? '-'
            : totalTTX1.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTLX1 =
        totalTLX1 === 0
            ? '-'
            : totalTLX1.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strTTX2 =
        totalTTX2 === 0
            ? '-'
            : totalTTX2.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strKAW =
        totalKAW === 0 ? '-' : totalKAW.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    return {
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
    }
}
