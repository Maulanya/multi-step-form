import { useCallback, useRef } from "react"
import { Context } from "../../Context"
import { useContext } from "react"

export const SwitchButton = () => {
    const setSwitch = useContext(Context)
    const Switch = useRef<any>(null)
    const onChange = useCallback(() => {
        if (Switch.current) {
            if (Switch.current.checked) {
                setSwitch.setSwitch(true)
            } else {
                setSwitch.setSwitch(false)
            }
        }
    }, [setSwitch])


    return (
        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={setSwitch.Switch} ref={Switch} onChange={onChange} />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
        </label>
    )
}