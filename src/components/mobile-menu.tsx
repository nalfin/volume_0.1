'use client'

import { IconBarsThree2 } from '@irsyadadl/paranoid'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from './ui/sheet'
import Link from 'next/link'
import { Button } from './ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from './ui/accordion'

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <IconBarsThree2 className="text-base-light size-6" />
            </SheetTrigger>
            <SheetContent
                className="text-base-light bg-header border-none py-10"
                side="left"
            >
                <div className="flex flex-col gap-4">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1" className="border-none">
                            <AccordionTrigger className="text-[24px] font-normal hover:no-underline">
                                Perhitungan
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    <Link href="/bekisting">
                                        <Button
                                            variant="link"
                                            className="text-base-light flex h-10 w-full justify-start px-4 text-[24px] font-normal hover:no-underline"
                                        >
                                            Bekisting
                                        </Button>
                                    </Link>
                                    <Link href="/beton">
                                        <Button
                                            variant="link"
                                            className="text-base-light flex h-10 w-full justify-start px-4 text-[24px] font-normal hover:no-underline"
                                        >
                                            Beton
                                        </Button>
                                    </Link>
                                    <Link href="/pembesian">
                                        <Button
                                            variant="link"
                                            className="text-base-light flex h-10 w-full justify-start px-4 text-[24px] font-normal hover:no-underline"
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
                            className="text-base-light flex h-[68px] w-full justify-start px-0 text-[24px] font-normal hover:no-underline"
                        >
                            Tentang Kami
                        </Button>
                    </Link>
                    <Link href="/#hubungi-kami">
                        <Button
                            variant="link"
                            className="text-base-light flex h-[68px] w-full justify-start px-0 text-[24px] font-normal hover:no-underline"
                        >
                            Hubungi Kami
                        </Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu
