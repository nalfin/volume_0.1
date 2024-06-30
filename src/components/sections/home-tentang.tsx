import Image from 'next/image'
import CardTentang from '../card-tentang'
import Container from '../container'
import ContainerFull from '../container-full'
import LabelSection from '../label'

const cardTentang = [
    {
        imgSrc: '/assets/images/card-tentang-01.png',
        title: 'FLEKSIBEL',
        description: 'Menghitung volume pekerjaan dimanapun dan kapanpun'
    },
    {
        imgSrc: '/assets/images/card-tentang-02.png',
        title: 'CEPAT',
        description: 'Menyingkat waktu saatperhitungan volume pekerjaan'
    },
    {
        imgSrc: '/assets/images/card-tentang-03.png',
        title: 'TEPAT',
        description: 'Perhitungan volume sesuai SNI terbaru dan dihitung menggunakan sistem'
    }
]

const HomeTentang = () => {
    return (
        <ContainerFull className="bg-header">
            <Container>
                <div id="tentang-kami" className="flex flex-col gap-10 py-20 lg:py-[120px]">
                    <div className="flex flex-col items-center gap-8 text-base-light">
                        <div className="flex flex-col items-center gap-6">
                            <LabelSection text="Tentang Kami" />
                            <h2 className="text-center">
                                Siapakah
                                <br />
                                Volume.co itu?
                            </h2>
                        </div>
                        <div className="w-full lg:w-[1200px]">
                            <p className="text-center text-[18px] leading-[150%]">
                                Kalkulator volume pekerjaan bangunan yang dibuat oleh tim. untuk
                                menghitung kebutuhan bahan dan volume bangunan. yang telah membantu
                                banyak orang untuk merencanakan proyek dengan aplikasi berbasis web
                                untuk kebutuhan bahan material dan volume item pekerjaan. yang dapat
                                dikerjakan dimana saja dan kapan saja.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px] lg:flex-row">
                        <CardTentang
                            imgSrc={cardTentang[0].imgSrc}
                            title={cardTentang[0].title}
                            description={cardTentang[0].description}
                        />
                        <CardTentang
                            imgSrc={cardTentang[1].imgSrc}
                            title={cardTentang[1].title}
                            description={cardTentang[1].description}
                        />
                        <CardTentang
                            imgSrc={cardTentang[2].imgSrc}
                            title={cardTentang[2].title}
                            description={cardTentang[2].description}
                        />
                    </div>
                </div>
            </Container>
        </ContainerFull>
    )
}

export default HomeTentang
