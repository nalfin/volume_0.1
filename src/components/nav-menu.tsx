import Link from 'next/link'
import ButtonNav from './button-nav'
import DropMenu from './drop-menu'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from './ui/accordion'
import { Button } from './ui/button'

const NavMenu = () => {
    return (
        <>
            <div className="hidden gap-10 lg:flex">
                <DropMenu />
                <ButtonNav text="Tentang Kami" to="/#tentang-kami" />
                <ButtonNav text="Hubungi Kami" to="/#hubungi-kami" />
            </div>
            <div className="lg:hidden">
                <div className="flex flex-col gap-4">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1" className="border-none">
                            <AccordionTrigger className="text-[18px] font-normal hover:no-underline">
                                Perhitungan
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    <Link href="/bekisting">
                                        <Button
                                            variant="link"
                                            className="text-base-light flex h-10 w-full justify-start px-4 text-[18px] font-normal hover:no-underline"
                                        >
                                            Bekisting
                                        </Button>
                                    </Link>
                                    <Link href="/beton">
                                        <Button
                                            variant="link"
                                            className="text-base-light flex h-10 w-full justify-start px-4 text-[18px] font-normal hover:no-underline"
                                        >
                                            Beton
                                        </Button>
                                    </Link>
                                    <Link href="/pembesian">
                                        <Button
                                            variant="link"
                                            className="text-base-light flex h-10 w-full justify-start px-4 text-[18px] font-normal hover:no-underline"
                                        >
                                            Pembesian
                                        </Button>
                                    </Link>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Link href="/#tentang-kami">
                        <Button
                            variant="link"
                            className="text-base-light flex h-[68px] w-full justify-start px-0 text-[18px] font-normal hover:no-underline"
                        >
                            Tentang Kami
                        </Button>
                    </Link>
                    <Link href="/#hubungi-kami">
                        <Button
                            variant="link"
                            className="text-base-light flex h-[68px] w-full justify-start px-0 text-[18px] font-normal hover:no-underline"
                        >
                            Hubungi Kami
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavMenu
