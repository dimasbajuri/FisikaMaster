import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";

const menu = [
    { id: 1, name: "Paket Kelas dan Pembayaran", href: "#", dropdown: true, dropdownItems: ["Kelas 1", "Kelas 2", "Kelas 3"] },
    { id: 2, name: "Dukungan", href: "#", dropdown: true, dropdownItems: ["Hubungi Kami", "FAQ", "Bantuan"] },
    { id: 3, name: "Tentang Kami", href: "#", dropdown: false },
    { id: 4, name: "Mulai Belajar", href: "#", dropdown: false },
    { id: 5, name: "Daftar", href: "#", dropdown: false },
]


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [navScroll, setNavScroll] = useState(false);

    useEffect(() => {
        function NavScrolled() {
            const navDiv = document.getElementById('navDiv');
            const fixedNavDiv = navDiv.offsetTop;

            if (window.scrollY > fixedNavDiv) {
                setNavScroll(true);
            } else {
                setNavScroll(false);
            }
        }

        window.addEventListener('scroll', NavScrolled);

        return () => {
            window.removeEventListener('scroll', NavScrolled);
        };
    }, [])
    
    return (
        <div id="navDiv" className={`z-50 fixed w-full inset-x-0 top-0 py-3 ${navScroll ? 'bg-blue-700 bg-opacity-70 backdrop-blur-sm shadow-md' : ''} ${nav ? `bg-opacity-100` : ``}`} >
            <div className="container px-5 mx-auto flex justify-between items-center">
                <div>
                    <a href="">
                        <h1 className="text-5xl text-white font-bold max-sm:text-3xl">FisikaMaster</h1>
                    </a>
                </div>
                <div className="flex items-center">
                    {nav ?
                        <FontAwesomeIcon icon="fa-solid fa-xmark" className="text-white text-3xl lg:hidden" onClick={() => setNav(!nav)} />
                        :
                        <FontAwesomeIcon icon="fa-solid fa-bars" className="text-white text-3xl lg:hidden" onClick={() => setNav(!nav)} />
                    }
                    <nav className={`${nav ? ` flex` : ` hidden`} bg-blue-700 absolute top-full flex-col inset-x-0 text-right gap-y-3 p-5 shadow-lg lg:flex lg:flex-row lg:top-0 lg:static lg:shadow-none lg:bg-transparent lg:p-0 lg:gap-x-5`}>
                        {menu.map((item, index) => {
                            return (
                                <>
                                    <div className={`flex justify-between items-center`}>
                                        <a key={index} href={item.href} className={`text-white text-left font-jost font-bold text-xl lg:font-normal lg:hover:font-semibold lg:transition-all lg:duration-150
                                        ${item.id === 4 ? 'bg-teal-400 w-full p-2 rounded-md' : ''}`}>
                                            {item.name}
                                            {item.id === 5 &&
                                                <FontAwesomeIcon icon="fa-regular fa-user" className="text-white text-lg mx-2" />
                                            }
                                        </a>
                                        {item.dropdown &&
                                            <FontAwesomeIcon icon="fa-solid fa-caret-down" className="text-white text-lg lg:hidden" />
                                        }

                                    </div>
                                </>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar