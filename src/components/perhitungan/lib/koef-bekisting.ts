interface koefBekistingProps {
    [key: string]: {
        kayu: number
        paku: number
        minyak: number
        balok?: number
        plywood?: number
        dolken?: number
    }
}
export const koefBekisting: koefBekistingProps = {
    pilecap: {
        kayu: 0.04,
        paku: 0.3,
        minyak: 0.1
    },
    pedestal: {
        kayu: 0.04,
        paku: 0.4,
        minyak: 0.2,
        balok: 0.015,
        plywood: 0.35,
        dolken: 2
    },
    sloof: {
        kayu: 0.045,
        paku: 0.3,
        minyak: 0.1
    },
    kolom: {
        kayu: 0.04,
        paku: 0.4,
        minyak: 0.2,
        balok: 0.015,
        plywood: 0.35,
        dolken: 2
    },
    balok: {
        kayu: 0.04,
        paku: 0.4,
        minyak: 0.2,
        balok: 0.18,
        plywood: 0.35,
        dolken: 2
    },
    pelat: {
        kayu: 0.04,
        paku: 0.4,
        minyak: 0.2,
        balok: 0.015,
        plywood: 0.35,
        dolken: 6
    }
}
