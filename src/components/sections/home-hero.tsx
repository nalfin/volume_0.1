import Image from 'next/image'
import Container from '../container'
import ContainerFull from '../container-full'

const HomeHero = () => {
    return (
        <ContainerFull>
            <section className="mx-auto flex flex-col items-center gap-8 lg:max-w-[1440px] lg:gap-16">
                <Container>
                    <div className="mt-[40px] w-full lg:relative lg:mt-[60px]">
                        <h1 className="w-full">
                            HITUNG VOLUME PEKERJAAN DENGAN VOLUME.CO
                        </h1>
                        <p className="font-inter traking-[0%] mt-[10px] w-full text-[20px] font-light leading-[150%] lg:absolute lg:bottom-6 lg:right-0 lg:mt-0 lg:w-[500px]">
                            Volume. co hadir untuk mempermudah perhitungan
                            volume pekerjaan dengan cepat dan tepat.
                        </p>
                    </div>
                </Container>
                <div className="pointer-events-none h-[600px] w-full px-4 lg:w-[1360px] lg:px-0">
                    <Image
                        className="hidden h-full w-full object-cover lg:block"
                        src="/assets/images/bg-hero.png"
                        alt="bg-hero"
                        width={1920}
                        height={1080}
                        priority
                    />
                    <Image
                        className="top-0 h-full w-full object-cover lg:hidden"
                        src="/assets/images/bg-hero-mobile.png"
                        alt="bg-hero"
                        width={1920}
                        height={1080}
                        priority
                    />
                </div>
            </section>
        </ContainerFull>
    )
}

export default HomeHero
