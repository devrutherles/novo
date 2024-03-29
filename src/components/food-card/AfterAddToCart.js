import React from 'react'
import FoodCardIncrementAndDecrement from './FoodCardIncrementAndDecrement'
import { IconButton } from '@mui/material'
import { Stack } from '@mui/system'

const AfterAddToCart = ({
    incrOpen,
    isInCart,
    getQuantity,
    product,
    setIncrOpen,
    handleClickQuantityButton,
    position,
<<<<<<< HEAD
    addToCartLoading
}) => {
    const handleHover = () => { }
=======
}) => {
    const handleHover = () => {}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    return (
        <Stack>
            {incrOpen && isInCart && (
                <FoodCardIncrementAndDecrement
                    getQuantity={getQuantity}
                    product={product}
                    setIncrOpen={setIncrOpen}
                    incrOpen={incrOpen}
                    isInCart={isInCart}
                    position={position}
                />
            )}
            {isInCart && !incrOpen && (
                <IconButton
                    onClick={(e) => handleClickQuantityButton(e)}
                    sx={{
                        background: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.whiteContainer.main,
                        fontSize: '14px',
                        fontWeight: '700',
<<<<<<< HEAD
                        width: '36px',
                        height: '36px',
=======
                        width: '30px',
                        height: '30px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        borderRadius: '5px',

                        '&:hover': {
                            background: (theme) => theme.palette.primary.dark,
                            color: (theme) => theme.palette.neutral[100],
                        },
                    }}
                >
                    {getQuantity(product?.id)}
                </IconButton>
            )}
        </Stack>
    )
}

export default AfterAddToCart
