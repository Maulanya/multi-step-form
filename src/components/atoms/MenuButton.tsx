import clsx from "clsx"

interface MenuButtonProto {
    step: number,
    children: string,
    number: number
}
export const MenuButton = ({ step, children, number }: MenuButtonProto) => {
    return (
        <button className="flex">
            <div className={clsx('text-white border-solid border-2 border-white w-10 h-10 rounded-full font-UbuntuMedium text-[16px] grid place-content-center', {
                'bg-[hsl(206_94%_87%)] !text-black border-none': number === step
            })}>{step}</div>
            <div className="ml-3">
                <p className="font-UbuntuRegular text-[13px] text-[hsl(231_11%_63%)] text-left">STEP {step}</p>
                <h2 className="font-UbuntuMedium text-base text-white">{children}</h2>
            </div>
        </button>
    )
}