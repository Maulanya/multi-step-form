import { AddOnsCard } from "../molecules/AddOnsCard"
import { useContext } from "react"
import { Context } from "../../Context"

export const AddOns = () => {
    const IsYearly = useContext(Context);
    return <>
        <h3 className="font-UbuntuBold text-4xl">Pick add-ons</h3>
        <p className="text-[hsl(231_11%_63%)] text-xl">Add-ons help enhance your gaming experience.</p>
        <div className="mt-10 grid gap-5">
            <AddOnsCard price={IsYearly.Switch ? '+$10/yr' : '$1/mo'} description="Access to multiplayer games">Online service</AddOnsCard>
            <AddOnsCard price={IsYearly.Switch ? '+$20/yr' : '$2/mo'} description="Extra 1TB of cloud save">Larger storage</AddOnsCard>
            <AddOnsCard price={IsYearly.Switch ? '+$20/yr' : '$2/mo'} description="Custom theme on your profile">Customizable Profile</AddOnsCard>
        </div>
    </>
}