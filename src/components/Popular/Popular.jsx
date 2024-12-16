import React from 'react'
import PopularCard from '../Layouts/PopularCard'
import img1 from '../../assets/img/img1_11zon_11zon_11zon.png'
import img2 from '../../assets/img/img2_11zon_11zon_11zon.png'
import img3 from '../../assets/img/img3_11zon_11zon_11zon.png'
import img4 from '../../assets/img/img4_11zon_11zon_11zon.png'
import img5 from '../../assets/img/img5_11zon_11zon_11zon.png'
import img6 from '../../assets/img/img6_11zon_11zon_11zon.png'
import img7 from '../../assets/img/img7_11zon_11zon_11zon.png'
import img8 from '../../assets/img/img8_11zon_11zon_11zon.png'

const Popular = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
            <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>
                Popular
            </h1>
            <div className='flex flex-wrap gap-8 justify-center'>
                <PopularCard img={img1} title="Royal Burger" price="$10.55"/>
                <PopularCard img={img2} title="Double Burger" price="$14.00"/>
                <PopularCard img={img3} title="Brocoli Salad" price="$11.55"/>
                <PopularCard img={img4} title="Chicken Salad" price="$8.95"/>
                <PopularCard img={img5} title="Pasta El Fongole" price="$9.00"/>
                <PopularCard img={img6} title="Pasta Pomodoro" price="$9.55"/>
                <PopularCard img={img7} title="Pepperoni Pizza" price="$6.00"/>
                <PopularCard img={img8} title="Margherita Pizza" price="$7.55"/>
            </div>
        </div>
    )
}

export default Popular         