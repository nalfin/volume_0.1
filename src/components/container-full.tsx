import { cn } from '@/lib/utils'

interface containerFullProps {
    children: React.ReactNode
    className?: string
}

const ContainerFull = ({ children, className }: containerFullProps) => {
    return <div className={cn('w-full', className)}>{children}</div>
}

export default ContainerFull
