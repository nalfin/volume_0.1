'use client'

import { useTheme } from 'next-themes'
import CardMau from '../card-mau'
import Container from '../container'

const cardMau = [
    {
        imgSrcLight: '/assets/images/card-mau-01-light.png',
        imgSrcDark: '/assets/images/card-mau-01-dark.png',
        title: 'Volume Bekisting',
        description:
            'Begisting merupakan cetakan beton agar membentuk beton sesuai yang diinginkan',
        link: '/bekisting',
        buttonText: 'Hitung Volume'
    },
    {
        imgSrcLight: '/assets/images/card-mau-02-light.png',
        imgSrcDark: '/assets/images/card-mau-02-dark.png',
        title: 'Volume Pembesian',
        description:
            'Pembesian merupakan proses pemasangan tulangan besi pada kotruksi beton',
        link: '/pembesian',
        buttonText: 'Hitung Volume'
    },
    {
        imgSrcLight: '/assets/images/card-mau-03-light.png',
        imgSrcDark: '/assets/images/card-mau-03-dark.png',
        title: 'Volume Beton',
        description:
            'Beton merupakan bahan komposit kontruksi yang terbuat dari campuran agregat kasar, agregat halus, semen dan air',
        link: '/beton',
        buttonText: 'Hitung Volume'
    }
]

const HomeMau = () => {
    const { theme } = useTheme()
    const isDarkMode = theme === 'dark'
    return (
        <Container className="space-y-12 py-20 lg:py-[120px]">
            <h2 className="text-center">
                Mau Menghitung
                <br />
                Volume Pekerjaan apa hari ini?
            </h2>
            <div className="flex flex-col gap-[30px] lg:flex-row">
                <CardMau
                    imgSrc={
                        isDarkMode
                            ? cardMau[0].imgSrcLight
                            : cardMau[0].imgSrcDark
                    }
                    title={cardMau[0].title}
                    description={cardMau[0].description}
                    link={cardMau[0].link}
                    buttonText={cardMau[0].buttonText}
                />
                <CardMau
                    imgSrc={
                        isDarkMode
                            ? cardMau[1].imgSrcLight
                            : cardMau[1].imgSrcDark
                    }
                    title={cardMau[1].title}
                    description={cardMau[1].description}
                    link={cardMau[1].link}
                    buttonText={cardMau[1].buttonText}
                />
                <CardMau
                    imgSrc={
                        isDarkMode
                            ? cardMau[2].imgSrcLight
                            : cardMau[2].imgSrcDark
                    }
                    title={cardMau[2].title}
                    description={cardMau[2].description}
                    link={cardMau[2].link}
                    buttonText={cardMau[2].buttonText}
                />
            </div>
        </Container>
    )
}

export default HomeMau
