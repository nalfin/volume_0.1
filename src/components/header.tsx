'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContainerFull from './container-full'
import Container from './container'

import NavMenu from './nav-menu'
import ToggleMode from './mode-toggle'
import MobileMenu from './mobile-menu'

const Header = () => {
    const [showBorder, setShowBorder] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Set showBorder true jika scrollY lebih dari 80px
            setShowBorder(window.scrollY > 80)
        }

        // Menambahkan event listener pada scroll
        window.addEventListener('scroll', handleScroll)

        // Cleanup function untuk menghapus event listener
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <ContainerFull
            className={`sticky top-0 z-20 ${showBorder ? 'border-b border-zinc-500 dark:border-border' : ''} bg-header`}
        >
            <Container>
                {/* Desktop nav */}
                <nav className="bg-header hidden h-20 items-center justify-between lg:flex">
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
                    <div className="flex gap-10">
                        <NavMenu />
                        <ToggleMode />
                    </div>
                </nav>
                {/* Mobile nav */}
                <nav className="bg-header flex h-20 items-center justify-between lg:hidden">
                    <MobileMenu />

                    <Link href="/">
                        <Image
                            className="h-full w-full object-cover"
                            src="/assets/images/logo-brand-mobile.png"
                            alt="logo-brand"
                            width={34}
                            height={32}
                        />
                    </Link>
                    <ToggleMode />
                </nav>
            </Container>
        </ContainerFull>
    )
}

export default Header
