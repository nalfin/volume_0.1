interface CalcBetonTotalProps {
    tabelBetPilecap: any
    tabelBetPedestal: any
    tabelBetSloof: any
    tabelBetKolom: any
    tabelBetBalok: any
    tabelBetPelat: any
}

export const calcBetonTotal = ({
    tabelBetPilecap,
    tabelBetPedestal,
    tabelBetSloof,
    tabelBetKolom,
    tabelBetBalok,
    tabelBetPelat
}: CalcBetonTotalProps) => {
    const volPil = tabelBetPilecap?.numVol
    const volPed = tabelBetPedestal?.numVol
    const volSlo = tabelBetSloof?.numVol
    const volKol = tabelBetKolom?.numVol
    const volBal = tabelBetBalok?.numVol
    const volPel = tabelBetPelat?.numVol

    const semPil = tabelBetPilecap?.numSem
    const semPed = tabelBetPedestal?.numSem
    const semSlo = tabelBetSloof?.numSem
    const semKol = tabelBetKolom?.numSem
    const semBal = tabelBetBalok?.numSem
    const semPel = tabelBetPelat?.numSem

    const pasPil = tabelBetPilecap?.numPas
    const pasPed = tabelBetPedestal?.numPas
    const pasSlo = tabelBetSloof?.numPas
    const pasKol = tabelBetKolom?.numPas
    const pasBal = tabelBetBalok?.numPas
    const pasPel = tabelBetPelat?.numPas

    const kerPil = tabelBetPilecap?.numKer
    const kerPed = tabelBetPedestal?.numKer
    const kerSlo = tabelBetSloof?.numKer
    const kerKol = tabelBetKolom?.numKer
    const kerBal = tabelBetBalok?.numKer
    const kerPel = tabelBetPelat?.numKer

    const airPil = tabelBetPilecap?.numAir
    const airPed = tabelBetPedestal?.numAir
    const airSlo = tabelBetSloof?.numAir
    const airKol = tabelBetKolom?.numAir
    const airBal = tabelBetBalok?.numAir
    const airPel = tabelBetPelat?.numAir

    const volPIL = isNaN(volPil) ? 0 : volPil
    const volPED = isNaN(volPed) ? 0 : volPed
    const volSLO = isNaN(volSlo) ? 0 : volSlo
    const volKOL = isNaN(volKol) ? 0 : volKol
    const volBAL = isNaN(volBal) ? 0 : volBal
    const volPEL = isNaN(volPel) ? 0 : volPel

    const semPIL = isNaN(semPil) ? 0 : semPil
    const semPED = isNaN(semPed) ? 0 : semPed
    const semSLO = isNaN(semSlo) ? 0 : semSlo
    const semKOL = isNaN(semKol) ? 0 : semKol
    const semBAL = isNaN(semBal) ? 0 : semBal
    const semPEL = isNaN(semPel) ? 0 : semPel

    const pasPIL = isNaN(pasPil) ? 0 : pasPil
    const pasPED = isNaN(pasPed) ? 0 : pasPed
    const pasSLO = isNaN(pasSlo) ? 0 : pasSlo
    const pasKOL = isNaN(pasKol) ? 0 : pasKol
    const pasBAL = isNaN(pasBal) ? 0 : pasBal
    const pasPEL = isNaN(pasPel) ? 0 : pasPel

    const kerPIL = isNaN(kerPil) ? 0 : kerPil
    const kerPED = isNaN(kerPed) ? 0 : kerPed
    const kerSLO = isNaN(kerSlo) ? 0 : kerSlo
    const kerKOL = isNaN(kerKol) ? 0 : kerKol
    const kerBAL = isNaN(kerBal) ? 0 : kerBal
    const kerPEL = isNaN(kerPel) ? 0 : kerPel

    const airPIL = isNaN(airPil) ? 0 : airPil
    const airPED = isNaN(airPed) ? 0 : airPed
    const airSLO = isNaN(airSlo) ? 0 : airSlo
    const airKOL = isNaN(airKol) ? 0 : airKol
    const airBAL = isNaN(airBal) ? 0 : airBal
    const airPEL = isNaN(airPel) ? 0 : airPel

    const totalVol = volPIL + volPED + volSLO + volKOL + volBAL + volPEL
    const totalSem = semPIL + semPED + semSLO + semKOL + semBAL + semPEL
    const totalPas = pasPIL + pasPED + pasSLO + pasKOL + pasBAL + pasPEL
    const totalKer = kerPIL + kerPED + kerSLO + kerKOL + kerBAL + kerPEL
    const totalAir = airPIL + airPED + airSLO + airKOL + airBAL + airPEL

    const strVol =
        totalVol === 0 ? '-' : totalVol.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strSem =
        totalSem === 0 ? '-' : totalSem.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 4 })
    const strPas =
        totalPas === 0 ? '-' : totalPas.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 4 })
    const strKer =
        totalKer === 0 ? '-' : totalKer.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 4 })
    const strAir =
        totalAir === 0 ? '-' : totalAir.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 4 })

    return {
        strVol,
        strSem,
        strPas,
        strKer,
        strAir
    }
}
