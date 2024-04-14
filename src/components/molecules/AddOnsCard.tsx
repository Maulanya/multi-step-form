import { useEffect, useState } from "react"
import clsx from "clsx"
import { useContext } from "react"
import { Context } from "../../Context"

interface AddOnsCardProps {
    price: string,
    children: string,
    description: string
}

export const AddOnsCard = ({ price, children, description }: AddOnsCardProps) => {
    const [Active, setActive] = useState<boolean>(false)
    const [Checked, setChecked] = useState<boolean>(false)
    const ActiveCard = useContext(Context)

    const CheckedFunction = () => {
        setActive(!Active)
        setChecked(!Checked)
    }

    useEffect(() => {
        if (Active) {
            ActiveCard.Card.push({ children, price });

        } else {
            ActiveCard.Card = ActiveCard.Card.filter((card: any) => card.children !== children);
        }
    }, [Active])

    return <div className={clsx(' flex items-center justify-between w-full h-20 border-solid border-2 border-[hsl(229_24%_87%)] rounded-md py-5 px-7', {
        '!border-[hsl(243_100%_62%)]': Active
    })}>
        <div className="flex items-center">
            <input type="checkbox" checked={Checked} onChange={CheckedFunction} className="mr-7 accent-[hsl(243_100%_62%)] w-5 h-5" />
            <div>
                <label htmlFor="" className="flex items-center text-[hsl(213_96%_18%)] text-lg font-UbuntuMedium">
                    {children}
                </label>
                <p className="text-base text-[hsl(231_11%_63%)] font-UbuntuRegular">{description}</p>
            </div>
        </div>
        <p className="text-[hsl(243_100%_62%)] font-UbuntuRegular">{price}</p>
    </div >
}