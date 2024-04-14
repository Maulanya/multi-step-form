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
    plan: string
    onClick?: () => void
    ActivePlan: string
}

export const PlanCard = (props: PlanCardProps) => {
    const SwitchPlan = useContext(Context)
    return (
        <div onClick={props.onClick}
            className={`cursor-pointer py-5 px-5 w-[180px] grid gap-10 border-solid border-[2px] rounded-md ${props.ActivePlan === props.plan ? "border-[hsl(243_100%_62%)]" : "!border-[hsl(229_24%_87%)]"}`} 
            >
            <img src={props.plan === 'Arcade' ? Arcade : props.plan === 'Advanced' ? Advanced : Pro} alt="" />
            <div>
                <PlanTitle>{props.plan}</PlanTitle>
                <PlanPrice price={props.plan === 'Arcade' ? SwitchPlan.Switch ? '$90/yr' : '$9/mo' : props.plan === 'Advanced' ? SwitchPlan.Switch ? '$120/yr' : '$12/mo' : SwitchPlan.Switch ? '$150/yr' : '$15/mo'} />
                {
                    SwitchPlan.Switch && <p className="text-[hsl(213_96%_18%)] text-sm font-UbuntuMedium mt-2">2 months free</p>
                }
            </div>
        </div >
    )
}