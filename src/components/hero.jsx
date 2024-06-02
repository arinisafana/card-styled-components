import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';
import HeroPic from '../assets/hero-img.png'

const hero = () => {
    return (
        <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
            <div className='lg:w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-5 text-slate-300'>I'm</p>
                <h1 className='text-6xl'>Arini Safana Arba</h1>
                <hr/>
                <p className='mt-10 text-xl text-slate-300 font-sans'>
                    I have a background in web development, having worked as both a front-end and back-end developer for several years. My skills include HTML, CSS, JavaScript, ReactJS, and NodeJS.
                </p>
            </div>
            <div className='w-1/3 items-center lg:w-fit'>
                <img src={HeroPic} alt="" width={250} height={250} className='rounded-full w-full border-8 border-white' />
            </div>
            <div className='w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-4'>About Me</p>
                <p className='text-slate-300'>Let's build quality in programing with our services.</p>
                <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
                    Show more...
                </button>
                <div className='flex mt-5 space-x-4 cursor-pointer'>
                    <BsFacebook size={40} className='border-4 hover:bg-indigo-800 rounded-full'/>
                    <BsTwitter size={40} className='border-4 hover:bg-indigo-800 rounded-full'/>
                    <BsInstagram size={40} className='border-4 hover:bg-indigo-800 rounded-full'/>
                </div>
            </div>
        </section>
    )
}

export default hero