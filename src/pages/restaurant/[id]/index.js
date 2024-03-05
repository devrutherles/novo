import React, { useEffect } from 'react'
import RestaurantDetails from '../../../components/restaurant-details/RestaurantDetails'
import Meta from '../../../components/Meta'
import MainApi from '../../../api/MainApi'
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { CustomHeader } from '../../../api/Headers'
import { setGlobalSettings } from '../../../redux/slices/global'
=======
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { CustomHeader } from '../../../api/Headers'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const index = ({ restaurantData, configData }) => {
    const { global } = useSelector((state) => state.globalSettings)
    const restaurantCoverUrl = global?.base_urls?.restaurant_cover_photo_url
    const restaurantCoverPhoto = `${restaurantCoverUrl}/${restaurantData?.cover_photo}`
<<<<<<< HEAD
    const router = useRouter();
    const dispatch = useDispatch();

=======
    const router = useRouter()
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const { restaurant_zone_id } = router.query
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : ''
    let zoneId = undefined
    if (typeof window !== 'undefined') {
        zoneId = localStorage.getItem('zoneid')

        //hostname = window.location.hostnam
    }
<<<<<<< HEAD
    useEffect(() => {
        dispatch(setGlobalSettings(configData))
    }, [])

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    useEffect(() => {
        if (!zoneId) {
            localStorage.setItem(
                'zoneid',
                JSON.stringify([Number(restaurant_zone_id)])
            )
        }
    }, [restaurant_zone_id])

    return (
        <>
            <Meta
<<<<<<< HEAD
                title={`${restaurantData?.meta_title ?? restaurantData.name
                    } - ${configData?.business_name}`}
=======
                title={`${
                    restaurantData?.meta_title ?? restaurantData.name
                } - ${configData?.business_name}`}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                ogImage={`${configData?.base_urls?.restaurant_image_url}/${restaurantData?.meta_image}`}
                description={restaurantData?.meta_description}
            />
            <RestaurantDetails restaurantData={restaurantData} />
        </>
    )
}

export default index
export const getServerSideProps = async (context) => {
    const id = context.query.id
    const { req } = context
    const language = req.cookies.languageSetting
    const data = await MainApi.get(`/api/v1/restaurants/details/${id}`)
    const configRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/config`,
        {
            method: 'GET',
            headers: {
                'X-software-id': 33571750,
                'X-server': 'server',
                'X-localization': language,
                origin: process.env.NEXT_CLIENT_HOST_URL,
            },
        }
    )
    const config = await configRes.json()
    return {
        props: {
            restaurantData: data.data,
            configData: config,
        },
    }
}
