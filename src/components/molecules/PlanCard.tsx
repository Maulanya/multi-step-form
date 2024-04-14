import { PlanPrice } from "../atoms/PlanPrice"
import { PlanTitle } from "../atoms/PlanTitle"
import Arcade from '../../assets/images/icon-arcade.svg'
import Advanced from '../../assets/images/icon-advanced.svg'
import Pro from '../../assets/images/icon-pro.svg'
import { useCallback, useEffect, useState } from "react"
import clsx from "clsx"
import { Context } from "../../Context"
import { useContext } from "react"


interface PlanCardProps {
    children: string,
    ActivePlan: boolean,
    setActivePlan?: Function
}

export const PlanCard = ({ children, ActivePlan, setActivePlan }: PlanCardProps) => {
    const [Active, setActive] = useState<boolean>(false)
    const SwitchPlan = useContext(Context)
    // useEffect(() => {
    //     if (Active) {
    //         SwitchPlan.Plan.push(children);
    //         // setActivePlan(SwitchPlan.Plan[0])
    //         if (SwitchPlan.Plan.length > 1) {
    //             SwitchPlan.Plan.shift()
    //         }
    //         console.log(SwitchPlan.Plan[0] === children, children);
    //     } else {
    //         console.log(SwitchPlan.Plan[0]);
    //     }
    // }, [Active])

    const HandleActive = useCallback(() => {
        setActive(true)
        SwitchPlan.Plan.push(children);
        // setActivePlan(SwitchPlan.Plan[0])
        if (SwitchPlan.Plan.length > 1) {
            SwitchPlan.Plan.shift()
        }
        console.log(SwitchPlan.Plan[0] === children, children);
    }, [Active])

    return (
        <div onClick={HandleActive} className={
            clsx('cursor-pointer py-5 px-5 w-[180px] grid gap-10 border-solid border-[2px] border-[hsl(229_24%_87%)] rounded-md', {
                '!border-[hsl(243_100%_62%)]': Active
            })
        } >
            <img src={children === 'Arcade' ? Arcade : children === 'Advanced' ? Advanced : Pro} alt="" />
            <div>
                <PlanTitle>{children}</PlanTitle>
                <PlanPrice price={children === 'Arcade' ? SwitchPlan.Switch ? '$90/yr' : '$9/mo' : children === 'Advanced' ? SwitchPlan.Switch ? '$120/yr' : '$12/mo' : SwitchPlan.Switch ? '$150/yr' : '$15/mo'} />
                {
                    SwitchPlan.Switch && <p className="text-[hsl(213_96%_18%)] text-sm font-UbuntuMedium mt-2">2 months free</p>
                }
            </div>
        </div >
    )
}