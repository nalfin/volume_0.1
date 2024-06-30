import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface SelectSatuanProps {
    defaultSatuan: string
    className?: string
    satuanChange: (value: string) => void
}

const SelectSatuan = ({ satuanChange, defaultSatuan, className }: SelectSatuanProps) => {
    return (
        <div className={cn('relative w-full', className)}>
            <p className="absolute -mt-[8px] ml-3 bg-background text-xs">Pilih Satuan Perhitungan</p>
            <Select onValueChange={satuanChange} defaultValue={defaultSatuan}>
                <SelectTrigger className="h-11 w-full border border-border focus:ring-0">
                    <SelectValue placeholder="Pilih Satuan" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="m">Meter</SelectItem>
                    <SelectItem value="cm">Centimeter</SelectItem>
                    <SelectItem value="mm">Milimeter</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectSatuan
