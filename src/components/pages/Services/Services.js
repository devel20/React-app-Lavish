import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'


const Services = () => {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjOne} />
        </>
    )
}

export default Services
