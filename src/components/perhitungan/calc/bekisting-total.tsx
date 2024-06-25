interface CalcBekistingTotalProps {
    tabelBekPilecap: any
    tabelBekPedestal: any
    tabelBekSloof: any
    tabelBekKolom: any
    tabelBekBalok: any
    tabelBekPelat: any
}

export const calcBekistingTotal = ({
    tabelBekPilecap,
    tabelBekPedestal,
    tabelBekSloof,
    tabelBekKolom,
    tabelBekBalok,
    tabelBekPelat
}: CalcBekistingTotalProps) => {
    const volPil = tabelBekPilecap?.numVol
    const volPed = tabelBekPedestal?.numVol
    const volSlo = tabelBekSloof?.numVol
    const volKol = tabelBekKolom?.numVol
    const volBal = tabelBekBalok?.numVol
    const volPel = tabelBekPelat?.numVol

    const kyuPil = tabelBekPilecap?.numKay
    const kyuPed = tabelBekPedestal?.numKay
    const kyuSlo = tabelBekSloof?.numKay
    const kyuKol = tabelBekKolom?.numKay
    const kyuBal = tabelBekBalok?.numKay
    const kyuPel = tabelBekPelat?.numKay

    const pkuPil = tabelBekPilecap?.numPak
    const pkuPed = tabelBekPedestal?.numPak
    const pkuSlo = tabelBekSloof?.numPak
    const pkuKol = tabelBekKolom?.numPak
    const pkuBal = tabelBekBalok?.numPak
    const pkuPel = tabelBekPelat?.numPak

    const mykPil = tabelBekPilecap?.numMin
    const mykPed = tabelBekPedestal?.numMin
    const mykSlo = tabelBekSloof?.numMin
    const mykKol = tabelBekKolom?.numMin
    const mykBal = tabelBekBalok?.numMin
    const mykPel = tabelBekPelat?.numMin

    const blkPil = tabelBekPilecap?.numBal
    const blkPed = tabelBekPedestal?.numBal
    const blkSlo = tabelBekSloof?.numBal
    const blkKol = tabelBekKolom?.numBal
    const blkBal = tabelBekBalok?.numBal
    const blkPel = tabelBekPelat?.numBal

    const plyPil = tabelBekPilecap?.numPly
    const plyPed = tabelBekPedestal?.numPly
    const plySlo = tabelBekSloof?.numPly
    const plyKol = tabelBekKolom?.numPly
    const plyBal = tabelBekBalok?.numPly
    const plyPel = tabelBekPelat?.numPly

    const dolPil = tabelBekPilecap?.numDol
    const dolPed = tabelBekPedestal?.numDol
    const dolSlo = tabelBekSloof?.numDol
    const dolKol = tabelBekKolom?.numDol
    const dolBal = tabelBekBalok?.numDol
    const dolPel = tabelBekPelat?.numDol

    const volPIL = isNaN(volPil) ? 0 : volPil
    const volPED = isNaN(volPed) ? 0 : volPed
    const volSLO = isNaN(volSlo) ? 0 : volSlo
    const volKOL = isNaN(volKol) ? 0 : volKol
    const volBAL = isNaN(volBal) ? 0 : volBal
    const volPEL = isNaN(volPel) ? 0 : volPel

    const kyuPIL = isNaN(kyuPil) ? 0 : kyuPil
    const kyuPED = isNaN(kyuPed) ? 0 : kyuPed
    const kyuSLO = isNaN(kyuSlo) ? 0 : kyuSlo
    const kyuKOL = isNaN(kyuKol) ? 0 : kyuKol
    const kyuBAL = isNaN(kyuBal) ? 0 : kyuBal
    const kyuPEL = isNaN(kyuPel) ? 0 : kyuPel

    const pkuPIL = isNaN(pkuPil) ? 0 : pkuPil
    const pkuPED = isNaN(pkuPed) ? 0 : pkuPed
    const pkuSLO = isNaN(pkuSlo) ? 0 : pkuSlo
    const pkuKOL = isNaN(pkuKol) ? 0 : pkuKol
    const pkuBAL = isNaN(pkuBal) ? 0 : pkuBal
    const pkuPEL = isNaN(pkuPel) ? 0 : pkuPel

    const mykPIL = isNaN(mykPil) ? 0 : mykPil
    const mykPED = isNaN(mykPed) ? 0 : mykPed
    const mykSLO = isNaN(mykSlo) ? 0 : mykSlo
    const mykKOL = isNaN(mykKol) ? 0 : mykKol
    const mykBAL = isNaN(mykBal) ? 0 : mykBal
    const mykPEL = isNaN(mykPel) ? 0 : mykPel

    const blkPIL = isNaN(blkPil) ? 0 : blkPil
    const blkPED = isNaN(blkPed) ? 0 : blkPed
    const blkSLO = isNaN(blkSlo) ? 0 : blkSlo
    const blkKOL = isNaN(blkKol) ? 0 : blkKol
    const blkBAL = isNaN(blkBal) ? 0 : blkBal
    const blkPEL = isNaN(blkPel) ? 0 : blkPel

    const plyPIL = isNaN(plyPil) ? 0 : plyPil
    const plyPED = isNaN(plyPed) ? 0 : plyPed
    const plySLO = isNaN(plySlo) ? 0 : plySlo
    const plyKOL = isNaN(plyKol) ? 0 : plyKol
    const plyBAL = isNaN(plyBal) ? 0 : plyBal
    const plyPEL = isNaN(plyPel) ? 0 : plyPel

    const dolPIL = isNaN(dolPil) ? 0 : dolPil
    const dolPED = isNaN(dolPed) ? 0 : dolPed
    const dolSLO = isNaN(dolSlo) ? 0 : dolSlo
    const dolKOL = isNaN(dolKol) ? 0 : dolKol
    const dolBAL = isNaN(dolBal) ? 0 : dolBal
    const dolPEL = isNaN(dolPel) ? 0 : dolPel

    const totalVOL = volPIL + volPED + volSLO + volKOL + volBAL + volPEL
    const totalKYU = kyuPIL + kyuPED + kyuSLO + kyuKOL + kyuBAL + kyuPEL
    const totalPKU = pkuPIL + pkuPED + pkuSLO + pkuKOL + pkuBAL + pkuPEL
    const totalMYK = mykPIL + mykPED + mykSLO + mykKOL + mykBAL + mykPEL
    const totalBLK = blkPIL + blkPED + blkSLO + blkKOL + blkBAL + blkPEL
    const totalPLY = plyPIL + plyPED + plySLO + plyKOL + plyBAL + plyPEL
    const totalDOL = dolPIL + dolPED + dolSLO + dolKOL + dolBAL + dolPEL

    const strVol =
        totalVOL === 0 ? '-' : totalVOL.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strKyu =
        totalKYU === 0 ? '-' : totalKYU.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strPku =
        totalPKU === 0 ? '-' : totalPKU.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strMyk =
        totalMYK === 0 ? '-' : totalMYK.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strBlk =
        totalBLK === 0 ? '-' : totalBLK.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strPly =
        totalPLY === 0 ? '-' : totalPLY.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const strDol =
        totalDOL === 0 ? '-' : totalDOL.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

    return {
        strVol,
        strKyu,
        strPku,
        strMyk,
        strBlk,
        strPly,
        strDol
    }
}
