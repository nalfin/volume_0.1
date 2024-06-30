import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

interface CardTentangProps {
    imgSrc?: string
    classCard?: string
    title?: string
    description?: string
    link?: string
    buttonText?: string
}

const CardTentang = ({ imgSrc, classCard, title, description }: CardTentangProps) => {
    return (
        <div className="flex w-full flex-col items-center gap-10 rounded-2xl border border-border bg-header/40 p-10 text-base-light dark:bg-zinc-800/40">
            <div className={cn('h-[150px] w-[200px]', classCard)}>
                <Image
                    className="pointer-events-none h-full w-full"
                    src={imgSrc || ''}
                    alt="Card 1"
                    width={200}
                    height={150}
                />
            </div>
            <div className="space-y-4 text-center">
                <h3 className="text-[24px] font-bold leading-[150%] tracking-[0%]">{title}</h3>
                <p className="text-[18px] font-normal leading-[150%] tracking-[0%]">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default CardTentang
