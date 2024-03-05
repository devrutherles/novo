import React from 'react'
import PropTypes from 'prop-types'
import { Grid, useMediaQuery } from '@mui/material'
import RestaurantBoxCard from '../restaurant-details/RestaurantBoxCard'
import CustomShimmerRestaurant from '../CustomShimmer/CustomShimmerRestaurant'
import CustomePagination from '../pagination/Pagination'
import FoodCard from '../food-card/FoodCard'

const RestaurantsData = ({
    resData,
    page_limit = 10,
    offset,
    setOffset,
    global,
}) => {
    const matchesToMd = useMediaQuery('(min-width:740px)')
    const matchesToSmall = useMediaQuery('(min-width:400px)')

    return (
        <>
            {resData?.data?.restaurants?.map((res) => (
<<<<<<< HEAD
                <Grid key={res?.id} item md={3} sm={matchesToMd ? 3 : 2} xs={12}>
=======
                <Grid key={res?.id} item md={3} sm={matchesToMd ? 3 : 2} xs={6}>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    <RestaurantBoxCard
                        image={res?.cover_photo}
                        name={res?.name}
                        rating={res?.avg_rating}
                        restaurantImageUrl={
                            global?.base_urls?.restaurant_cover_photo_url
                        }
                        id={res?.id}
                        active={res?.active}
                        open={res?.open}
                        delivery_time={res?.delivery_time}
<<<<<<< HEAD
                        rating_count={res?.rating_count}
                        freeDelivery={
                            res?.free_delivery
                        }
                        coupons={res?.coupons}
                        //cuisines={restaurant?.cuisine}
                        cuisines={res?.cuisine}
                        restaurantDiscount={res?.discount}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    />
                </Grid>
            ))}
            {resData?.data?.restaurants?.length > page_limit ? (
                <Grid item xs={12} sm={12} md={12} align="center">
                    <CustomePagination
                        total_size={resData?.data?.restaurants?.length}
                        page_limit={page_limit}
                        offset={offset}
                        setOffset={setOffset}
                    />
                </Grid>
            ) : (
                ''
            )}
        </>
    )
}

RestaurantsData.propTypes = {}

export default RestaurantsData
