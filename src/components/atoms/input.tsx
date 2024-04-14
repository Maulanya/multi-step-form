interface InputProps {
    ClassName?: string;
    type: string;
    placeholder: string;
    autocomplete: string;
    id: string;
    name: string
}

export const Input = ({ type, placeholder, autocomplete, id, name }: InputProps) => {

    return (
        <input type={type} id={id} name={name} placeholder={placeholder} autoComplete={autocomplete} className='p-2 rounded-md border-solid border-[1px] border-black focus:border-[hsl(228_100%_84%)] outline-none' required />
    )
}