import React from 'react'
import { Box } from '@mui/material'
import { Logo } from '../styled-components/CustomStyles.style'
import { useRouter } from 'next/router'

const CustomLogo = ({ logoImg, atlText, height, width }) => {
    const router = useRouter()
    let zoneid = undefined
    if (typeof window !== 'undefined') {
        zoneid = JSON.parse(localStorage.getItem('zoneid'))
    }
<<<<<<< HEAD
    let currentLocation = undefined
    if (typeof window !== 'undefined') {
        currentLocation = JSON.parse(localStorage.getItem('currentLatLng'))
        //hostname = window.location.hostnam
    }
    const handleClick = () => {
        const shouldRedirectToHome = zoneid && currentLocation?.lat && currentLocation?.lng;
        const newPath = shouldRedirectToHome ? '/home' : '/';

        router.push(newPath, undefined, { shallow: true }).then(() => {
            window.scrollTo(0, 0);
        });
    };
=======
    const handleClick = () => {
        if (router.pathname === '/') {
            if (zoneid) {
                router.push('/home', undefined, { shallow: true }).then()
                window.scrollTo(0, 0)
            } else {
                router.push('/', undefined, { shallow: true }).then()
                window.scrollTo(0, 0)
            }
        } else {
            router.push('/home', undefined, { shallow: true }).then()
            window.scrollTo(0, 0)
        }
    }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <Logo height={height} width={width} onClick={handleClick}>
            <img src={logoImg} alt={atlText} />
        </Logo>
    )
}
export default CustomLogo
