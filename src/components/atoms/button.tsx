interface ButtonProps {
    ClassName?: string,
    children: string,
    type: "submit" | "button" | "reset"
    Action?(): void
}

export const Button = ({ ClassName, children, type, Action }: ButtonProps) => {
    return (
        <button onClick={Action} type={type} className={`${ClassName} bg-[hsl(213_96%_18%)] text-white py-2 px-5 rounded-md font-UbuntuRegular text-[16px]`}>{children}</button>
    )
}