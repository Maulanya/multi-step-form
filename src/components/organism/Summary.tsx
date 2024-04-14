import { Invoice } from "../molecules/Invoice"

export const Summary = () => {
    return (
        <>
            <h3 className="font-UbuntuBold text-4xl">Finishing up</h3>
            <p className="text-[hsl(231_11%_63%)] text-xl">Double-check everything looks OK before confirming.</p>
            <Invoice />
        </>
    )
}