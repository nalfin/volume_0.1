import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

interface CardMauProps {
    imgSrc?: string
    classCard?: string
    title?: string
    description?: string
    link?: string
    buttonText?: string
}

const CardMau = ({
    imgSrc,
    classCard,
    title,
    description,
    link,
    buttonText
}: CardMauProps) => {
    return (
        <div className="flex w-full flex-col items-center gap-10 rounded-2xl border border-border bg-card p-10 dark:bg-card/40">
            <div className={cn('h-[120px]', classCard)}>
                <Image
                    className="h-full w-full"
                    src={imgSrc || ''}
                    alt="Card 1"
                    width={100}
                    height={100}
                />
            </div>
            <div className="h-[153px] space-y-4 text-center">
                <h3 className="text-[24px] font-bold leading-[150%] tracking-[0%]">
                    {title}
                </h3>
                <p className="text-[18px] font-normal leading-[150%] tracking-[0%]">
                    {description}
                </p>
            </div>
            <Link className="flex w-full" href={link || ''}>
                <button className="w-full rounded-md bg-blue-500 py-3 text-[18px] font-medium text-white hover:bg-blue-600">
                    {buttonText}
                </button>
            </Link>
        </div>
    )
}

export default CardMau
