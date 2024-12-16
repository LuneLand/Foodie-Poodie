import React from 'react'
import img from '../../assets/img/about.png'
import Button from '../Layouts/Button'
const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
            <img className='lg:w-10/12 rounded' src={img} alt="img" />
            <div className='space-y-4 lg:pt-14 ml-6'>
                <h1 className='font-semibold text-4xl text-center md:text-start'>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Qui molestias iure blanditiis sit a sequi tenetur rerum at omnis amet.</p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat iure
                        veniam eveniet magni, similique recusandae nobis explicabo expedita facere 
                        quod repellendus quibusdam? Ratione tempora qui, magni ipsam repudiandae nostrum.
                    </p>
                    <div className='flex justify-center lg:justify-start'>
                        <Button title="Learn More"/>
                    </div>
            </div>
        </div>
    )
}

export default About