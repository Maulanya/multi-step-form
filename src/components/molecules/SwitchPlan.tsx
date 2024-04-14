import { SwitchButton } from "../atoms/Switch"
export const SwitchPlan = () => {
    return (
        <div className="w-full h-max py-5 rounded-md mt-10 flex items-center justify-center gap-7 font-UbuntuMedium bg-[hsl(217_100%_97%)]">
            <h3>Monthly</h3>
            <SwitchButton />
            <h3>Yearly</h3>
        </div>
    )
}