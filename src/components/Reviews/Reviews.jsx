import React from 'react'
import ReviewsCard from '../Layouts/ReviewsCard'
import img1 from '../../assets/img/pic1.png'
import img2 from '../../assets/img/pic2.png'
import img3 from '../../assets/img/pic3.png'
const Reviews = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5'>
            <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>Customer's Review</h1>
            <div className='flex flex-col md:flex-row gap-5 mt-5'>
                <ReviewsCard img={img1} name="Sara"/>
                <ReviewsCard img={img2} name="Jack"/>
                <ReviewsCard img={img3} name="Amanda"/>
            </div>
        </div>
    )
}

export default Reviews