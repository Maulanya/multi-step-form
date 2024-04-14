import { InvoiceTitle } from "../atoms/InvoiceTitle"
import { InvoicePrice } from "../atoms/InvoicePrice"

export const Invoice = () => {
    return (
        <div className="bg-[hsl(217_100%_97%)] w-full h-max mt-10 rounded-md py-5 px-8">
            <div className="flex items-center justify-between">
                <InvoiceTitle />
                <InvoicePrice />
            </div>
            <div className="border-[.5px] w-full h-[1px] bg-gray-500 rounded-md mt-7" />
        </div>
    )
}