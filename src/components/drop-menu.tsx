'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { IconChevronDown } from '@irsyadadl/paranoid'
import Link from 'next/link'

const DropMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-2 text-white">
                Perhitungan
                <IconChevronDown className="size-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-1 space-y-2 border-zinc-500 bg-indigo-950 p-2 text-white dark:border-zinc-500 dark:bg-zinc-800">
                <DropdownMenuItem className="dark:hover:bg-zinc-700">
                    <Link href="/bekisting">Bekisting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="dark:hover:bg-zinc-700">
                    <Link href="/beton">Beton</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="dark:hover:bg-zinc-700">
                    <Link href="/pembesian">Pembesian</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropMenu
