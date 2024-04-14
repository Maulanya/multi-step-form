import { useState } from "react"
import { PlanCard } from "../molecules/PlanCard"
import { SwitchPlan } from "../molecules/SwitchPlan"
import { useContext } from "react"
import { Context } from "../../Context"
export const SelectPlan = () => {
    const Plan = useContext(Context)
    const [ActivePlan, setActivePlan] = useState<string>('')

    const selectedPlan = (params: string) => {
        if (params === ActivePlan) {
            return setActivePlan("")
        }
        setActivePlan(params)
    }

    return (
        <>
            <h3 className="font-UbuntuBold text-4xl">Select your plan</h3>
            <p className="text-[hsl(231_11%_63%)] text-xl">You have the option of monthly or yearly billing.</p>
            <div className="mt-10 flex gap-5">
                <PlanCard plan="Arcade" onClick={() => selectedPlan("Arcade")} ActivePlan={ActivePlan}/>
                <PlanCard plan="Adcaned" onClick={() => selectedPlan("Adcaned")} ActivePlan={ActivePlan}/>
                <PlanCard plan="Pro" onClick={() => selectedPlan("Pro")} ActivePlan={ActivePlan}/>
            </div>
            <SwitchPlan />
        </>
    )
}