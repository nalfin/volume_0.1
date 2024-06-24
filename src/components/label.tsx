interface LabelProps {
    text?: string
}

const LabelSection = ({ text }: LabelProps) => {
    return (
        <div className="flex w-[182px] justify-center rounded-full bg-blue-400 px-8 py-3 text-base font-medium text-base-light">
            {text}
        </div>
    )
}

export default LabelSection
