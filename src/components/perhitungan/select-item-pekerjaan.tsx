import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SelectItemPekerjaanProps {
    handleSelectChange: (value: string) => void
    defaultValue: string
}

const SelectItemPekerjaan = ({ handleSelectChange, defaultValue }: SelectItemPekerjaanProps) => {
    return (
        <div className="relative w-full lg:w-[390px]">
            <p className="absolute -mt-[8px] ml-3 bg-background text-xs">Pilih Item Pekerjaan</p>
            <Select onValueChange={handleSelectChange} defaultValue={defaultValue}>
                <SelectTrigger className="w-full border border-border">
                    <SelectValue placeholder="Pilih Perhitungan" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="pilecap">Pilecap</SelectItem>
                    <SelectItem value="pedestal">Kolom Pedestal</SelectItem>
                    <SelectItem value="sloof">Sloof</SelectItem>
                    <SelectItem value="kolom">Kolom</SelectItem>
                    <SelectItem value="balok">Balok</SelectItem>
                    <SelectItem value="pelat">Pelat</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectItemPekerjaan
