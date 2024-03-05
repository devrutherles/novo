import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { CustomTypography } from '../custom-tables/Tables.style'
<<<<<<< HEAD
import CircularLoader from "../loader/CircularLoader";

const AddOrderToCart = (props) => {
    const { product, t, addToCard, orderNow,addToCartLoading } = props
=======

const AddOrderToCart = (props) => {
    const { product, t, addToCard, orderNow } = props
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <>
            {!product?.available_date_starts ? (
                <Button
                    // disabled={quantity <= 0}
                    onClick={() => addToCard?.()}
                    variant="contained"
                    fullWidth
                    sx={{
                        borderRadius: '4px',
                    }}
                >
<<<<<<< HEAD

                    {addToCartLoading ? <CircularLoader size="1.4rem"/>: <CustomTypography
                      sx={{
                          color: (theme) => theme.palette.whiteContainer.main,
                      }}
                    >
                        {t('Add to cart')}
                    </CustomTypography>}

=======
                    <CustomTypography
                        sx={{
                            color: (theme) => theme.palette.whiteContainer.main,
                        }}
                    >
                        {t('Add to cart')}
                    </CustomTypography>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </Button>
            ) : (
                <Button
                    // disabled={quantity <= 0}
                    onClick={() => orderNow?.()}
                    variant="contained"
                    fullWidth
                >
<<<<<<< HEAD
                    {addToCartLoading ? <CircularLoader size="1.4rem"/>: <CustomTypography
                      sx={{
                          color: (theme) => theme.palette.whiteContainer.main,
                      }}
                    >
                        {t('Order Now')}
                    </CustomTypography>}

=======
                    <CustomTypography
                        sx={{
                            color: (theme) => theme.palette.whiteContainer.main,
                        }}
                    >
                        {t('Order Now')}
                    </CustomTypography>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </Button>
            )}
        </>
    )
}
export default AddOrderToCart
