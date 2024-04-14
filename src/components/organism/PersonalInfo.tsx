import { FormInput } from "../molecules/InputForm"
import { useEffect } from "react"

export default function PersonalInfo() {

    useEffect(() => {
        const InputRequired = document.querySelectorAll('input[required]') as NodeListOf<HTMLInputElement>;
        const InputEmail = document.querySelector('input[name="email"]') as HTMLInputElement;
        InputRequired.forEach((input) => {
            const Error = document.querySelector(`.ErrorInput${input.name}`) as HTMLParagraphElement;
            input.addEventListener('invalid', () => {
                if (input.validity.valid) {
                    Error.classList.add('hidden')
                    input.style.borderColor = ""
                }
                else {
                    if (!InputEmail.validity.valid) {
                        const erroremail = document.querySelector(`.ErrorInputemail`) as HTMLInputElement;
                        erroremail.textContent = 'Looks like this is not an email';
                        erroremail.classList.remove('hidden');
                    }
                    Error.classList.remove('hidden')
                    input.style.borderColor = "red"
                }
            })

            input.addEventListener('input', () => {
                if (input.validity.valid) {
                    Error.classList.add('hidden')
                    input.style.borderColor = ""
                } else {
                    Error.classList.remove('hidden')
                    input.style.borderColor = "red"
                }
            })
        })
    }, [])

    return (
        <>
            <h3 className="font-UbuntuBold text-4xl">Personal Info</h3>
            <p className="text-[hsl(231_11%_63%)] text-xl">Please provide your name, email address, and phone number.</p>
            <div className="mt-10 flex flex-col">
                <FormInput name="name" Label="Name" placeholder="e.g. Stephen King" type="text" autocomplete="off" />
                <FormInput name="email" Label="Email Address" placeholder="e.g. stephenking@lorem.com" type="email" autocomplete="on" />
                <FormInput name="phone" Label="Phone Number" placeholder="e.g. +1 234 567 890" type="tel" autocomplete="off" />
            </div>
        </>
    )
}