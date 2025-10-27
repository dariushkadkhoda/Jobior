import { LoginCurve, MessageQuestion } from 'iconsax-reactjs'

const TopBar = () => {
    return (
        <div className='flex justify-between items-center pt-6 pb-4'>
            {/* Left: Logo */}
            <div>
                <a className='text-Primary-50 font-semibold text-3xl cursor-pointer'>Jobior</a>
            </div>
            {/* Right: Navigation Menu */}
            <div className='space-x-4 flex justify-center items-center'>
                <a className='cursor-pointer'><MessageQuestion size="32" color="#000" variant="Broken" /></a>
                <span className='text-NShades-150'> | </span>
                <a className='cursor-pointer text-[#333434] font-semibold text-lg'>Employers</a>
                <span className='text-NShades-150'> | </span>
                <a className='cursor-pointer bg-SShades-700 text-white rounded-[64px] py-2.5 px-6 font-semibold text-lg flex text-center'>
                    <LoginCurve className='mr-2' size="32" color="#fff" variant="Broken" />
                    sing up</a>
            </div>
        </div>
    )
}

export default TopBar
