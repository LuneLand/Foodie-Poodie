import React from 'react'
import Button from '../Layouts/Button'

const Home = () => {
    return (
        <div className='min-h-screen flex flex-row justify-between items-center lg:px-32
        px-5 bg-[url("./assets/img/banner_11zon.png")] bg-cover bg-no-repeat'>
            <div className='w-full lg:w-1/3 space-y-5'>
            <h1 className='text-backgroundColor font-semibold text-6xl'>Order Your Favorite Food Here</h1>
            <p className='text-backgroundColor'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Id temporibus illum tempora quo aliquid expedita ipsa maiores  doloribus nesciunt?</p>
                <div className='lg:pl-54'>
                    <Button title='Order Now'/>
                </div>
            </div>
        </div>
    )
}

export default Home