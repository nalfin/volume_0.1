import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface SelectDiameterProps {
    diamChange: (value: string) => void
    defaultDiam: string
    title: string
    className?: string
}

const SelectDiameter = ({ diamChange, defaultDiam, title, className }: SelectDiameterProps) => {
    return (
        <div className={cn('flex w-full items-center gap-3 pt-2 text-sm font-normal', className)}>
            <p className="min-w-[160px] lg:min-w-[200px]">{title}</p>
            <div className="flex w-full items-center gap-2">
                <p>:</p>
                <Select onValueChange={diamChange} defaultValue={defaultDiam}>
                    <SelectTrigger className="h-8 w-full rounded-none border-x-0 border-b border-t-0 border-border px-0 focus:ring-0">
                        <SelectValue placeholder="Pilih Satuan" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="S6">S 6</SelectItem>
                        <SelectItem value="S8">S 8</SelectItem>
                        <SelectItem value="S10">S 10</SelectItem>
                        <SelectItem value="S13">S 13</SelectItem>
                        <SelectItem value="S16">S 16</SelectItem>
                        <SelectItem value="S19">S 19</SelectItem>
                        <SelectItem value="S22">S 22</SelectItem>
                        <SelectItem value="S25">S 25</SelectItem>
                        <SelectItem value="S29">S 29</SelectItem>
                        <SelectItem value="S32">S 32</SelectItem>
                        <SelectItem value="S36">S 36</SelectItem>
                        <SelectItem value="S40">S 40</SelectItem>
                        <SelectItem value="S50">S 50</SelectItem>
                        <SelectItem value="S54">S 54</SelectItem>
                        <SelectItem value="S57">S 57</SelectItem>
                    </SelectContent>
                </Select>
                <p>mm</p>
            </div>
        </div>
    )
}

export default SelectDiameter
