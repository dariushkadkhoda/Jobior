
const MainNav = () => {
    const  list =["jobs","companies","Create Cv"];
    return (
        <nav className='flex justify-center items-center pb-16'>
            <ul className='flex space-x-16'>
            {list.map((item,index)=><li key={index}><a className='text-NShades-350 text-xl cursor-pointer'>{item}</a></li>
            )}
            </ul>
        </nav>
    )
}

export default MainNav
