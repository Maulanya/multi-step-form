import { Context } from '../../Context';
import PersonalInfo from '../organism/PersonalInfo';
import { SelectPlan } from '../organism/SelectPlan';
import { useState } from 'react';
import Image from '../../assets/images/bg-sidebar-desktop.svg'
import { Menu } from '../molecules/Menu';
import { Button } from '../atoms/button';
import { AddOns } from '../organism/AddOns';
import { Summary } from '../organism/Summary';

function AppPage() {
    const [number, setnumber] = useState<number>(1)
    const [Switch, setSwitch] = useState<boolean>(false);
    const submited = (e: any) => {
        e.preventDefault()
        setnumber(number + 1)
    }
    return (
        <section className='flex justify-center items-center bg-[hsl(229_24%_87%)] h-svh'>
            <div className='bg-white rounded-md flex p-5 w-[70%]'>
                <div className='relative'>
                    <img src={Image} alt="" />
                    <Menu number={number} />
                </div>
                <form onSubmit={submited} noValidate className='ml-20 mt-10 relative w-[55%]'>
                    <Context.Provider value={{ Switch, setSwitch, Card: [], Plan: [] }}>
                        {
                            number === 1 ?
                                <PersonalInfo /> :
                                number === 2 ?
                                    <SelectPlan /> :
                                    number === 3 ?
                                        <AddOns /> : <Summary />
                        }
                    </Context.Provider>

                    <div className='absolute right-0 bottom-5 flex justify-between w-full'>
                        {
                            number > 1 && <Button Action={() => setnumber(number - 1)} type='button' ClassName='!text-[hsl(231_11%_63%)] bg-transparent'>Go Back</Button>
                        }
                        <Button type="submit">Next Step</Button>
                    </div>

                </form>

            </div>
        </section>
    );
}

export default AppPage;
