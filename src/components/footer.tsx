import Link from 'next/link'
import ContainerFull from './container-full'
import Image from 'next/image'
import NavMenu from './nav-menu'

const Footer = () => {
    return (
        <ContainerFull className="bg-header">
            <footer className="mx-auto w-full space-y-16 px-4 py-20 lg:max-w-[1440px] lg:px-[60px]">
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-0">
                    <Link href="/">
                        <div className="h-[32px] w-[170px]">
                            <Image
                                className="h-full w-full"
                                src="/assets/svg/logo-brand.svg"
                                alt="logo-brand"
                                width={170}
                                height={32}
                                priority
                            />
                        </div>
                    </Link>
                    <NavMenu />
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                    <span className="h-[1px] w-full bg-border" />
                    <p className="font-inter text-base-light text-center text-[14px] font-light">
                        © 2024 Volume.co All rights reserved.
                    </p>
                </div>
            </footer>
        </ContainerFull>
    )
}

export default Footer
