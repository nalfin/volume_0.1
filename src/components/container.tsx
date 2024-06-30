import { cn } from '@/lib/utils'

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return <div className={cn('mx-auto w-full px-4 lg:max-w-[1440px] lg:px-[40px]', className)}>{children}</div>
}

export default Container
