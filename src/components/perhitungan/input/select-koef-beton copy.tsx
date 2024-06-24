import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'

interface SelectKoefisienBetonProps {
    selectKoefChange: (value: string) => void
    defaultKoef: string
}

const SelectKoefisienBeton = ({
    selectKoefChange,
    defaultKoef
}: SelectKoefisienBetonProps) => {
    return (
        <div className="relative w-full">
            {/* <p className="absolute -mt-[8px] ml-3 bg-background text-xs">
                Koefisen Bahan
            </p> */}
            <Select onValueChange={selectKoefChange} defaultValue={defaultKoef}>
                <SelectTrigger className="h-11 w-full border border-border focus:ring-0">
                    <SelectValue placeholder="Pilih Satuan" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="K100">K 100</SelectItem>
                    <SelectItem value="K125">K 125</SelectItem>
                    <SelectItem value="K100s3">
                        K 100 (Slump : 3-6 cm)
                    </SelectItem>
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
    )
}

export default SelectKoefisienBeton
