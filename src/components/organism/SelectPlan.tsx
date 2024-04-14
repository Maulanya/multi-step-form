import { useState } from "react"
import { PlanCard } from "../molecules/PlanCard"
import { SwitchPlan } from "../molecules/SwitchPlan"
import { useContext } from "react"
import { Context } from "../../Context"
export const SelectPlan = () => {
    const Plan = useContext(Context)
    // const [ActivePlan, setActivePlan] = useState<string>('')
    return (
        <>
            <h3 className="font-UbuntuBold text-4xl">Select your plan</h3>
            <p className="text-[hsl(231_11%_63%)] text-xl">You have the option of monthly or yearly billing.</p>
            <div className="mt-10 flex gap-5">
                <PlanCard ActivePlan={'Arcade' === Plan.Plan[0]}>Arcade</PlanCard>
                <PlanCard ActivePlan={"Advanced" === Plan.Plan[0]}>Advanced</PlanCard>
                <PlanCard ActivePlan={'Pro' === Plan.Plan[0]}>Pro</PlanCard>
            </div>
            <SwitchPlan />
        </>
    )
}