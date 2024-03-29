import React, { useState } from 'react'
import { alpha, Grid, Stack, Typography } from '@mui/material'
import toast from 'react-hot-toast'
import { useQuery } from 'react-query'
import { CouponApi } from '../../../hooks/react-query/config/couponApi'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'
import CustomEmptyResult from '../../empty-view/CustomEmptyResult'
import { useSelector } from 'react-redux'
import noData from '../../../../public/static/nodata.png'
import { onSingleErrorResponse } from '../../ErrorResponse'
import {
    CustomPaperBigCard,
    CustomStackFullWidth,
} from '../../../styled-components/CustomStyles.style'
import CouponSvg from './couponSvg'
import { renderToStaticMarkup } from 'react-dom/server'
import CouponCard from './CouponCard'
import Skeleton from '@mui/material/Skeleton'
import * as PropTypes from 'prop-types'
import { Scrollbar } from '../../Scrollbar'
import ScrollerProvider from '../../scroller-provider'
import useMediaQuery from '@mui/material/useMediaQuery'
import Meta from '../../Meta'
import { noDataFound } from '../../../utils/LocalImages'

const CouponList = () => {
    const { t } = useTranslation()
    const theme = useTheme()
    const matches = useMediaQuery('(max-width:745px)')
<<<<<<< HEAD
    const isXSmall = useMediaQuery(theme.breakpoints.down('sm'))
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const { global } = useSelector((state) => state.globalSettings)
    let currencySymbol
    let currencySymbolDirection
    let digitAfterDecimalPoint

    if (global) {
        currencySymbol = global.currency_symbol
        currencySymbolDirection = global.currency_symbol_direction
        digitAfterDecimalPoint = global.digit_after_decimal_point
    }

    const { isLoading, data, isError, error, refetch } = useQuery(
        ['coupon-list'],
        CouponApi.couponList,
        {
            onError: onSingleErrorResponse,
        }
    )

<<<<<<< HEAD
=======
    const only = t('Only For')

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <>
            <Meta
                title={` My Coupons-${global?.business_name}`}
                description=""
                keywords=""
            />
            <CustomPaperBigCard
<<<<<<< HEAD
                padding={isXSmall ? '10px 10px' : '30px 40px'}
                border={false}

                sx={{ minHeight: !isXSmall && '558px', boxShadow: isXSmall && 'unset' }}
            >
                <CustomStackFullWidth spacing={2}>
                    {!isXSmall &&
                        <Typography fontWeight="600" fontSize="16px">
                            {t('My Coupons')}
                        </Typography>
                    }
                    <Grid
                        container
                        rowSpacing={2}
                        columnSpacing={isXSmall ? 0 : 2}
                        sx={{ paddingRight: !isXSmall && '10px' }}
                    >
                        {data?.data?.map((item) => (
                            <Grid
                                item
                                xs={12}
                                sm={matches ? 12 : 6}
                                md={6}
                                key={item.id}
                            >
                                <CouponCard coupon={item} />
                            </Grid>
                        ))}
                        {isLoading && (
                            <Grid
                                container
                                spacing={3}
                                sx={{
                                    paddingTop: '20px',
                                    paddingInlineStart: '20px',
                                }}
                            >
                                <Grid item xs={12} sm={12} md={6}>
                                    <Skeleton
                                        variant="rectangular"
                                        width="100%"
                                        height="127px"
                                        style={{ borderRadius: '5px' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Skeleton
                                        variant="rectangular"
                                        width="100%"
                                        height="127px"
                                        style={{ borderRadius: '5px' }}
                                    />
                                </Grid>
                            </Grid>
                        )}
                        {data?.data?.length === 0 && (
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                width="100%"
                            >
                                <CustomEmptyResult
                                    label="No Coupon Found"
                                    image={noDataFound}
                                    height={80}
                                    width={80}
                                />
                            </Stack>
                        )}
                    </Grid>
=======
                padding={matches ? '10px' : '25px'}
                sx={{ minHeight: '77vh' }}
            >
                <CustomStackFullWidth spacing={2}>
                    <Typography fontWeight="600" fontSize="16px">
                        {t('My Coupons')}
                    </Typography>
                    <ScrollerProvider maxHeight="60vh" padding="10px">
                        <Grid
                            container
                            spacing={3}
                            sx={{ paddingRight: '6px' }}
                        >
                            {data?.data?.map((item) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={matches ? 12 : 6}
                                    md={6}
                                    key={item.id}
                                >
                                    <CouponCard coupon={item} />
                                </Grid>
                            ))}
                            {isLoading && (
                                <Grid
                                    container
                                    spacing={3}
                                    sx={{
                                        paddingTop: '20px',
                                        paddingInlineStart: '20px',
                                    }}
                                >
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Skeleton
                                            variant="rectangular"
                                            width="100%"
                                            height="127px"
                                            style={{ borderRadius: '5px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Skeleton
                                            variant="rectangular"
                                            width="100%"
                                            height="127px"
                                            style={{ borderRadius: '5px' }}
                                        />
                                    </Grid>
                                </Grid>
                            )}
                            {data?.data?.length === 0 && (
                                <Stack
                                    justifyContent="center"
                                    alignItems="center"
                                    width="100%"
                                >
                                    <CustomEmptyResult
                                        label="No Coupon Found"
                                        image={noDataFound}
                                    />
                                </Stack>
                            )}
                        </Grid>
                    </ScrollerProvider>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </CustomStackFullWidth>
            </CustomPaperBigCard>
        </>
    )
}

export default CouponList
