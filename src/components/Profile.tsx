import { useState } from "react";

function Banner(){
    const [isActive, setisActive] = useState('about');

    return(
        <>
            <div>
                <img src="/img/profile.jpeg" alt="profile picture" className="w-[200px] h-[200px] rounded-full"  />
                <div className="pt-4">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Hi, I'm Huai Siam</h1>
                    <p className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Frontend Web Developer from Myanmar</p>
                </div>

                <ul className="mt-16 w-max profile-sidebar">
                    <li>
                        <a className={`group flex items-center py-3 sidebar-item ${isActive == 'about' && 'active'}`} href="#about" onClick={() => setisActive('about')}>
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                        </a>
                    </li>
                    <li>
                        <a className={`group flex items-center py-3 sidebar-item ${isActive == 'experience' && 'active'}`} href="#experience" onClick={() => setisActive('experience')}>
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">experience</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex pt-16">
                <a href="https://github.com/HuaiSiam" target="_blank" className="mr-3">
                    <img src="/img/github.svg" alt="github" className="w-6 h-6 filter-white" />
                </a>
                <a href="mailto:cinghuaiisiiam@gmail.com" target="_blank" className="mr-3">
                    <img src="/img/carbon_email.svg" alt="email" className="w-6 h-6 filter-white" />
                </a>
                <a href="https://wa.me/0940031173" target="_blank">
                    <img src="/img/whatsapp.svg" alt="whatsapp" className="w-6 h-6 filter-white" />
                </a>
            </div>
        </>
    )
}

export default Banner;
