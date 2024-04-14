import { Input } from "../atoms/input"

interface FormInputProps {
    Label: string,
    type: string,
    autocomplete: string,
    placeholder: string,
    name: string
}

export const FormInput = ({ Label, name, type, autocomplete, placeholder }: FormInputProps) => {
    return (
        <>
            <div className="mt-3 mb-2 flex justify-between">
                <label htmlFor={Label}>{Label}</label>
                <p className={`font-UbuntuBold text-[13px] text-red-600 hidden ErrorInput${name}`}>This field is required</p>
            </div>
            <Input type={type} name={name} id={Label} placeholder={placeholder} autocomplete={autocomplete} />
        </>
    )
}