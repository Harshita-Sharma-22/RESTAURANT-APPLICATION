import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { data } from "../restApi.json"

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=> {
            if(window.scrollY > 50) setIsSticky(true)
            else setIsSticky(false)    
        }
        window.addEventListener("scroll", handleScroll)
        return ()=> window.removeEventListener("scroll", handleScroll)
    },[])
  return (
    <nav className={isSticky ? "sticky" : ""}>
        <div className="logo">Harshita</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
            <div className="links">
                {
                    data[0].navbarLinks.map(element => {
                        return(
                            <Link 
                                to={element.link} 
                                key={element.id} 
                                spy={true} 
                                smooth={true} 
                                duration={500}
                                onClick={() => setShow(false)}
                            >
                                { element.title }
                            </Link>
                        )
                    })}
            </div>
            <div className='menuWrapper'>
                <button className="menuBtn">OUR MENU</button>
            </div>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
            <GiHamburgerMenu/> 
        </div>
    </nav>
  )
}

export default Navbar