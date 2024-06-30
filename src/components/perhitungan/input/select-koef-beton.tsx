import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SelectKoefisienBetonProps {
    koefChange: (value: string) => void
    defaultKoef: string
}

const SelectKoefisienBeton = ({ koefChange, defaultKoef }: SelectKoefisienBetonProps) => {
    return (
        <div className="flex w-full items-center gap-3 pt-2 text-sm font-normal">
            <p className="min-w-[160px] lg:min-w-[200px]"> Koefisien Bahan</p>
            <div className="flex w-full items-center gap-2">
                <p>:</p>
                <Select onValueChange={koefChange} defaultValue={defaultKoef}>
                    <SelectTrigger className="h-8 w-full rounded-none border-x-0 border-b border-t-0 border-border px-0 focus:ring-0">
                        <SelectValue placeholder="Pilih Satuan" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="K100">K 100</SelectItem>
                        <SelectItem value="K125">K 125</SelectItem>
                        <SelectItem value="K100s3">K 100 (Slump : 3-6 cm)</SelectItem>
                        <SelectItem value="K175">K 175</SelectItem>
                        <SelectItem value="K200">K 200</SelectItem>
                        <SelectItem value="K225">K 225</SelectItem>
                        <SelectItem value="K250">K 250</SelectItem>
                        <SelectItem value="K275">K 275</SelectItem>
                        <SelectItem value="K300">K 300</SelectItem>
                        <SelectItem value="K325">K 325</SelectItem>
                        <SelectItem value="K350">K 350</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default SelectKoefisienBeton
