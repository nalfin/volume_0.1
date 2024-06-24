import { Input } from '@/components/ui/input'

interface InputModifikasiProps {
    val?: string
    type?: string
    setValue?: (value: string) => void
}

const InputModifikasi = ({ setValue, val, type }: InputModifikasiProps) => {
    return (
        <Input
            type={type}
            className="border-b-1 h-8 rounded-none border-x-0 border-t-0 border-border px-0 py-0 text-sm focus-visible:ring-0"
            value={val}
            onChange={(e) => setValue?.(e.target.value)}
            required
        />
    )
}

export default InputModifikasi
