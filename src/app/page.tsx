import HomeContact from '@/components/sections/home-contact'
import HomeHero from '@/components/sections/home-hero'
import HomeMau from '@/components/sections/home-mau'
import HomeTentang from '@/components/sections/home-tentang'

export default function Home() {
    return (
        <>
            <HomeHero />
            <HomeMau />
            <HomeTentang />
            <HomeContact />
        </>
    )
}
