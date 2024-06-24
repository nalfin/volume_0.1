interface CalcBetonTotalProps {
    tabelPilecap: any
    tabelPedestal: any
    tabelSloof: any
    tabelKolom: any
    tabelBalok: any
    tabelPelat: any
}

export const calcBetonTotal = ({
    tabelPilecap,
    tabelPedestal,
    tabelSloof,
    tabelKolom,
    tabelBalok,
    tabelPelat
}: CalcBetonTotalProps) => {
    const volPilecap = parseFloat(parseFloat(tabelPilecap?.volume?.replace(',', '.') || '0').toFixed(2))
    const volPedestal = parseFloat(parseFloat(tabelPedestal?.volume?.replace(',', '.') || '0').toFixed(2))
    const volSloof = parseFloat(parseFloat(tabelSloof?.volume?.replace(',', '.') || '0').toFixed(2))
    const volKolom = parseFloat(parseFloat(tabelKolom?.volume?.replace(',', '.') || '0').toFixed(2))
    const volBalok = parseFloat(parseFloat(tabelBalok?.volume?.replace(',', '.') || '0').toFixed(2))
    const volPelat = parseFloat(parseFloat(tabelPelat?.volume?.replace(',', '.') || '0').toFixed(2))

    const semPilecap = parseFloat(parseFloat(tabelPilecap?.semen?.replace(',', '.') || '0').toFixed(2))
    const semPedestal = parseFloat(parseFloat(tabelPedestal?.semen?.replace(',', '.') || '0').toFixed(2))
    const semSloof = parseFloat(parseFloat(tabelSloof?.semen?.replace(',', '.') || '0').toFixed(2))
    const semKolom = parseFloat(parseFloat(tabelKolom?.semen?.replace(',', '.') || '0').toFixed(2))
    const semBalok = parseFloat(parseFloat(tabelBalok?.semen?.replace(',', '.') || '0').toFixed(2))
    const semPelat = parseFloat(parseFloat(tabelPelat?.semen?.replace(',', '.') || '0').toFixed(2))

    const pasPilecap = parseFloat(parseFloat(tabelPilecap?.pasir?.replace(',', '.') || '0').toFixed(2))
    const pasPedestal = parseFloat(parseFloat(tabelPedestal?.pasir?.replace(',', '.') || '0').toFixed(2))
    const pasSloof = parseFloat(parseFloat(tabelSloof?.pasir?.replace(',', '.') || '0').toFixed(2))
    const pasKolom = parseFloat(parseFloat(tabelKolom?.pasir?.replace(',', '.') || '0').toFixed(2))
    const pasBalok = parseFloat(parseFloat(tabelBalok?.pasir?.replace(',', '.') || '0').toFixed(2))
    const pasPelat = parseFloat(parseFloat(tabelPelat?.pasir?.replace(',', '.') || '0').toFixed(2))

    const kerPilecap = parseFloat(parseFloat(tabelPilecap?.kerikil?.replace(',', '.') || '0').toFixed(2))
    const kerPedestal = parseFloat(parseFloat(tabelPedestal?.kerikil?.replace(',', '.') || '0').toFixed(2))
    const kerSloof = parseFloat(parseFloat(tabelSloof?.kerikil?.replace(',', '.') || '0').toFixed(2))
    const kerKolom = parseFloat(parseFloat(tabelKolom?.kerikil?.replace(',', '.') || '0').toFixed(2))
    const kerBalok = parseFloat(parseFloat(tabelBalok?.kerikil?.replace(',', '.') || '0').toFixed(2))
    const kerPelat = parseFloat(parseFloat(tabelPelat?.kerikil?.replace(',', '.') || '0').toFixed(2))

    const airPilecap = parseFloat(parseFloat(tabelPilecap?.air?.replace(',', '.') || '0').toFixed(2))
    const airPedestal = parseFloat(parseFloat(tabelPedestal?.air?.replace(',', '.') || '0').toFixed(2))
    const airSloof = parseFloat(parseFloat(tabelSloof?.air?.replace(',', '.') || '0').toFixed(2))
    const airKolom = parseFloat(parseFloat(tabelKolom?.air?.replace(',', '.') || '0').toFixed(2))
    const airBalok = parseFloat(parseFloat(tabelBalok?.air?.replace(',', '.') || '0').toFixed(2))
    const airPelat = parseFloat(parseFloat(tabelPelat?.air?.replace(',', '.') || '0').toFixed(2))

    const totalVol = volPilecap + volPedestal + volSloof + volKolom + volBalok + volPelat
    const totalSem = semPilecap + semPedestal + semSloof + semKolom + semBalok + semPelat
    const totalPas = pasPilecap + pasPedestal + pasSloof + pasKolom + pasBalok + pasPelat
    const totalKer = kerPilecap + kerPedestal + kerSloof + kerKolom + kerBalok + kerPelat
    const totalAir = airPilecap + airPedestal + airSloof + airKolom + airBalok + airPelat

    const strVol = totalVol.toFixed(2).replace('.', ',')
    const strSem = totalSem.toFixed(2).replace('.', ',')
    const strPas = totalPas.toFixed(2).replace('.', ',')
    const strKer = totalKer.toFixed(2).replace('.', ',')
    const strAir = totalAir.toFixed(2).replace('.', ',')

    return {
        strVol,
        strSem,
        strPas,
        strKer,
        strAir
    }
}
