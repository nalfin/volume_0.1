interface diameterPembesianProps {
    [key: string]: {
        diam: number
        luasPen: number
        berNom: number
    }
}

export const diameterPembesian: diameterPembesianProps = {
    S6: { diam: 6, luasPen: 28, berNom: 0.222 },
    S8: { diam: 8, luasPen: 50, berNom: 0.395 },
    S10: { diam: 10, luasPen: 79, berNom: 0.617 },
    S13: { diam: 13, luasPen: 133, berNom: 0.617 },
    S16: { diam: 16, luasPen: 201, berNom: 1.578 },
    S19: { diam: 19, luasPen: 284, berNom: 2.226 },
    S22: { diam: 22, luasPen: 380, berNom: 2.984 },
    S25: { diam: 25, luasPen: 491, berNom: 3.853 },
    S29: { diam: 29, luasPen: 661, berNom: 5.185 },
    S32: { diam: 32, luasPen: 804, berNom: 6.313 },
    S36: { diam: 36, luasPen: 1018, berNom: 7.99 },
    S40: { diam: 40, luasPen: 1257, berNom: 9.865 },
    S50: { diam: 50, luasPen: 1964, berNom: 15.413 },
    S54: { diam: 54, luasPen: 2290, berNom: 17.978 },
    S57: { diam: 57, luasPen: 2552, berNom: 20.031 }
}
