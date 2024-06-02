
const nav = () => {
    return (
        <>
        <div className="p-10 space-x-4">
            <div className="ssm:hidden md:flex items-center justify-end">
                <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
                <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
                <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Testimonials</a>
            </div>

            <div className="ssm:block md:hidden">
                <ul>
                    <li><a href="#" className="text-white text-xl mb-2 cursor-pointer">Skills</a></li>
                    <li><a href="#" className="text-white text-xl mb-2 cursor-pointer">Projects</a></li>
                    <li><a href="#" className="text-white text-xl mb-2 cursor-pointer">Testimonials</a></li>
                </ul>
            </div>
        </div>
        </>
        
    )
}

export default nav