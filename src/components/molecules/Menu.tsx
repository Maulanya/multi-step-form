import { MenuButton } from "../atoms/MenuButton"

export const Menu = ({ number }: any) => {
    return (
        <nav className="absolute top-0 my-10 mx-10 grid gap-7">
            <MenuButton step={1} number={number}>YOUR INFO</MenuButton>
            <MenuButton step={2} number={number}>SELECT PLAN</MenuButton>
            <MenuButton step={3} number={number}>ADD-ONS</MenuButton>
            <MenuButton step={4} number={number}>SUMMARY</MenuButton>
        </nav>
    )
}