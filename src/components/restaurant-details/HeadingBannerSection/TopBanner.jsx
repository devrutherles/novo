<<<<<<< HEAD
import { Box, Grid, NoSsr } from "@mui/material";
=======
import { Box, Grid } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import RestaurantLeftDetails from '../RestaurantLeftDetails'
import RestaurantRightDetails from '../RestaurantRightDetails'
import { useGetScreenPosition } from '../../../hooks/custom-hooks/useGetScreenPosition'
import { useQuery } from 'react-query'
import { CouponApi } from '../../../hooks/react-query/config/couponApi'
import { onErrorResponse } from '../../ErrorResponse'
import Slider from 'react-slick'
import { Stack } from '@mui/system'
import RestaurantCoupon from '../RestaurantCoupon'
import { RestaurantCouponStack } from '../restaurant-details.style'
import { settings } from '../CouponSettings'
<<<<<<< HEAD
import RestaurantAnnouncementMessege from '../RestaurantAnnouncementMessege'
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const StyledImageBox = styled(Box)(({ theme, height, objectfit }) => ({
    height: height,
    width: '100%',
    borderRadius: '0.125rem',
    position: 'relative',
<<<<<<< HEAD
    paddingTop: "24px",
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: objectfit ? objectfit : 'contained',
    },
}))
const TopBanner = ({ details }) => {
    const { global } = useSelector((state) => state.globalSettings)
    const { userData } = useSelector((state) => state.user)
    let currencySymbol
    let currencySymbolDirection
    let digitAfterDecimalPoint

    if (global) {
        currencySymbol = global.currency_symbol
        currencySymbolDirection = global.currency_symbol_direction
        digitAfterDecimalPoint = global.digit_after_decimal_point
    }
    const restaurantCoverUrl = global?.base_urls?.restaurant_cover_photo_url
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
    const isXSmall = useMediaQuery(theme.breakpoints.down('sm'))
<<<<<<< HEAD
=======
    const freeDelivery = details?.free_delivery
    const restaurantDiscount = details.discount
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const scrollPosition = useGetScreenPosition()
    const { data } = useQuery(
        'restaurant-coupon',
        () => CouponApi.restaurantCoupon(userData?.id, details?.id),
        {
            onError: onErrorResponse,
        }
    )

    return (
        <>
<<<<<<< HEAD
          <NoSsr>
              <Grid
                  container
                  sx={{
                      position: 'sticky',
                      top: '20px',
                      zIndex: 999,
                      flexDirection: isSmall && 'column-reverse',
                      [theme.breakpoints.down('sm')]: {
                          top: '10px',
                      },
                  }}
              >
                  {isXSmall && scrollPosition === 0 && (
                      <Grid item xs={12}>
                          <>
                              {data?.data.length > 0 && (
                                  <RestaurantCouponStack isSmall={isSmall}>
                                      {
                                          <Slider {...settings}>
                                              {data?.data?.map((coupon) => {
                                                  return (
                                                      <Stack key={coupon?.id}>
                                                          <RestaurantCoupon
                                                              coupon={coupon}
                                                          />
                                                      </Stack>
                                                  )
                                              })}
                                          </Slider>
                                      }
                                  </RestaurantCouponStack>
                              )}
                          </>
                      </Grid>
                  )}
                  <Grid item container xs={12} sm={12} md={4.7}>
                      <RestaurantLeftDetails
                          details={details}
                          restaurantCoverUrl={restaurantCoverUrl}
                          currencySymbol={currencySymbol}
                          currencySymbolDirection={currencySymbolDirection}
                          digitAfterDecimalPoint={digitAfterDecimalPoint}
                          scrollPosition={scrollPosition}
                      />
                  </Grid>
                  {isSmall ? (
                      <>
                          {scrollPosition === 0 && (
                              <Grid item xs={12} sm={12} md={7.3}>
                                  <RestaurantRightDetails
                                      details={details}
                                      restaurantCoverUrl={restaurantCoverUrl}
                                      data={data}
                                  />
                              </Grid>
                          )}
                      </>
                  ) : (
                      <Grid item xs={12} sm={12} md={7.3}>
                          <RestaurantRightDetails
                              details={details}
                              data={data}
                              restaurantCoverUrl={restaurantCoverUrl}
                          />
                      </Grid>
                  )}
              </Grid>
          </NoSsr>
            {details?.announcement === 1 && details?.announcement_message &&
                <RestaurantAnnouncementMessege storeAnnouncement={details?.announcement_message} />}
=======
            <Grid
                container
                sx={{
                    position: 'sticky',
                    top: '-39px',
                    zIndex: 999,
                    flexDirection: isSmall && 'column-reverse',
                    [theme.breakpoints.down('sm')]: {
                        top: '10px',
                    },
                }}
            >
                {isXSmall && scrollPosition === 0 && (
                    <Grid item xs={12}>
                        <>
                            {data?.data.length > 0 && (
                                <RestaurantCouponStack isSmall={isSmall}>
                                    {
                                        <Slider {...settings}>
                                            {data?.data?.map((coupon) => {
                                                return (
                                                    <Stack key={coupon?.id}>
                                                        <RestaurantCoupon
                                                            coupon={coupon}
                                                        />
                                                    </Stack>
                                                )
                                            })}
                                        </Slider>
                                    }
                                </RestaurantCouponStack>
                            )}
                        </>
                    </Grid>
                )}
                <Grid item container xs={12} sm={12} md={4.7}>
                    <RestaurantLeftDetails
                        details={details}
                        restaurantCoverUrl={restaurantCoverUrl}
                        currencySymbol={currencySymbol}
                        currencySymbolDirection={currencySymbolDirection}
                        digitAfterDecimalPoint={digitAfterDecimalPoint}
                        scrollPosition={scrollPosition}
                    />
                </Grid>
                {isSmall ? (
                    <>
                        {scrollPosition === 0 && (
                            <Grid item xs={12} sm={12} md={7.3}>
                                <RestaurantRightDetails
                                    details={details}
                                    restaurantCoverUrl={restaurantCoverUrl}
                                    data={data}
                                />
                            </Grid>
                        )}
                    </>
                ) : (
                    <Grid item xs={12} sm={12} md={7.3}>
                        <RestaurantRightDetails
                            details={details}
                            data={data}
                            restaurantCoverUrl={restaurantCoverUrl}
                        />
                    </Grid>
                )}
            </Grid>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </>
    )
}

export default TopBanner
