import React from 'react'
import { Link } from "react-scroll"
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id ="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className='mid'>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non et a totam ipsum dolor expedita sint vero ex aperiam alias, eligendi, eveniet eius veniam atque cupiditate fuga, corrupti voluptas quasi laudantium beatae itaque. Dolorum placeat quia, quidem minus molestias voluptates maxime nisi veniam aliquam dolorem? Qui, harum? Labore, fugiat similique.
                </p>
                <Link to={"/"}>
                    Explore Menu <span>
                        <HiOutlineArrowNarrowRight/>
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About