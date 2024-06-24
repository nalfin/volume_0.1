import Link from 'next/link'

interface btnFooterNavProps {
    text?: string
    to?: string
}

const ButtonNav = ({ text, to }: btnFooterNavProps) => {
    return (
        <Link href={to || ''}>
            <button className="animation__button_underline relative inline cursor-pointer py-2 text-center text-white">
                {text}
            </button>
        </Link>
    )
}

export default ButtonNav
