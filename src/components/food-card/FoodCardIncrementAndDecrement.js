import React from 'react'
import { CustomCardButton } from './FoodCard.style'
import { Stack } from '@mui/system'
import { alpha, Grow, IconButton, Typography, Fade } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { useTheme } from '@emotion/react'
import { useDispatch } from 'react-redux'
import {
    decrementProductQty,
    incrementProductQty,
    removeProduct,
} from '../../redux/slices/cart'
import useMediaQuery from '@mui/material/useMediaQuery'
import toast from 'react-hot-toast'
import { t } from 'i18next'
<<<<<<< HEAD
import { calculateItemBasePrice, getConvertDiscount, handleIncrementedTotal } from "../../utils/customFunctions";
import { getItemDataForAddToCart } from "../floating-cart/helperFunction";
import { onErrorResponse } from "../ErrorResponse";
import useCartItemUpdate from "../../hooks/react-query/add-cart/useCartItemUpdate";
import { getSelectedAddons } from "../navbar/second-navbar/SecondNavbar";
import { getGuestId } from "../checkout-page/functions/getGuestUserId";
import useDeleteCartItem from "../../hooks/react-query/add-cart/useDeleteCartItem";
import CircularLoader from "../loader/CircularLoader";
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const FoodCardIncrementAndDecrement = ({
    getQuantity,
    product,
    setIncrOpen,
    incrOpen,
    isInCart,
<<<<<<< HEAD
=======
    position,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}) => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
    const dispatch = useDispatch()
<<<<<<< HEAD
  const { mutate: updateMutate,isLoading:updatedLoading } = useCartItemUpdate();
  const { mutate:itemRemove,isLoading:removeIsLoading } = useDeleteCartItem();
    const guestId =getGuestId()
  const handleHover = () => {}

  const cartUpdateHandleSuccess = (res) => {
    if (res) {
      res?.forEach((item) => {
        if (isInCart?.cartItemId === item?.id) {
          const product = {
            ...item?.item,
            cartItemId: item?.id,
            totalPrice: item?.price,
            quantity: item?.quantity,
            variations: item?.item?.variations,
            selectedAddons: getSelectedAddons(item?.item?.addons),
            itemBasePrice:  getConvertDiscount(
              item?.item?.discount,
              item?.item?.discount_type,
              calculateItemBasePrice(item, item?.item?.variations),
              item?.item?.restaurant_discount
            ),
          };

          dispatch(incrementProductQty(product)) // Dispatch the single product
        }
      });
    }
  };
    const handleIncrement = (e) => {
        e.stopPropagation()
      const updateQuantity=isInCart?.quantity+1
      const totalPrice = handleIncrementedTotal(
        isInCart?.itemBasePrice,
        updateQuantity,
        isInCart?.discount,
        isInCart?.discount_type
      )
      const itemObject=getItemDataForAddToCart(isInCart,updateQuantity,totalPrice,guestId)
=======
    const handleHover = () => {}
    console.log('dddd', getQuantity(product?.id))
    const handleIncrement = (e) => {
        e.stopPropagation()
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        if (product?.maximum_cart_quantity) {
            if (
                product?.maximum_cart_quantity &&
                product?.maximum_cart_quantity <= getQuantity(product?.id)
            ) {
                toast.error(t('Out Of Limits'))
            } else {
<<<<<<< HEAD
              updateMutate(itemObject,{
                onSuccess: cartUpdateHandleSuccess,
                onError: onErrorResponse,
              })
               // dispatch(incrementProductQty(isInCart))
            }
        } else {
          updateMutate(itemObject,{
            onSuccess: cartUpdateHandleSuccess,
            onError: onErrorResponse,
          })
            //dispatch(incrementProductQty(isInCart))
        }
    }
  const cartUpdateHandleSuccessDecrement = (res) => {
    if (res) {
      res?.forEach((item) => {
        if (isInCart?.cartItemId === item?.id) {
          const product = {
            ...item?.item,
            cartItemId: item?.id,
            totalPrice: item?.price,
            quantity: item?.quantity,
            variations: item?.item?.variations,
            selectedAddons: getSelectedAddons(item?.item?.addons),
            itemBasePrice:  getConvertDiscount(
              item?.item?.discount,
              item?.item?.discount_type,
              calculateItemBasePrice(item, item?.item?.variations),
              item?.item?.restaurant_discount
            ),
          };

          dispatch(decrementProductQty(product)) // Dispatch the single product
        }
      });
    }
  };
    const handleDecrement = (e) => {
        e.stopPropagation()
      const updateQuantity=isInCart?.quantity-1
      const totalPrice = handleIncrementedTotal(
        isInCart?.itemBasePrice,
        updateQuantity,
        isInCart?.discount,
        isInCart?.discount_type
      )
      const itemObject=getItemDataForAddToCart(isInCart,updateQuantity,totalPrice,guestId)
      updateMutate(itemObject,{
        onSuccess: cartUpdateHandleSuccessDecrement,
        onError: onErrorResponse,
      })
        //dispatch(decrementProductQty(isInCart))
    }
  const handleSuccess = () => {
    dispatch(removeProduct(isInCart));
    //toast.success(t(cart_item_remove));
  };
  const handleRemove = () => {
    const cartIdAndGuestId = {
      cart_id: isInCart?.cartItemId,
      guestId: getGuestId(),
    };
    itemRemove(cartIdAndGuestId, {
      onSuccess:  handleSuccess,
      onError: onErrorResponse,
    });
  };
    // const handleRemove = (e) => {
    //     e.stopPropagation()
    //     dispatch(removeProduct(isInCart))
    // }
=======
                dispatch(incrementProductQty(isInCart))
            }
        } else {
            dispatch(incrementProductQty(isInCart))
        }
    }
    const handleDecrement = (e) => {
        e.stopPropagation()
        dispatch(decrementProductQty(isInCart))
    }
    const handleRemove = (e) => {
        e.stopPropagation()
        dispatch(removeProduct(isInCart))
    }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    return (
        <Stack
            sx={{
                borderRadius: '5px',
                background: (theme) => theme.palette.neutral[200],
                position: 'absolute',
                right: '0',
                left: 'unset',
<<<<<<< HEAD
                bottom: "0",
=======
                top: position ? position : '0',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                width: { xs: '100%', md: '50%' },
                transformOrigin: 'right',
                '@keyframes scaleXCustom': {
                    '0%': {
                        transform: 'scaleX(0)',
                        transformOrigin: 'right',
                    },
                    '100%': {
                        transform: 'scaleX(1)',
                    },
                },
                animation: 'scaleXCustom .3s',
                WebkitAnimation: 'scaleXCustom .3s',
                MozAnimation: 'scaleXCustom .3s',
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setIncrOpen(true)}
        >
            <Stack
                width="100%"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                gap="12px"
                onMouseEnter={handleHover}

                // height={{ xs: '15px', sm: '20px', md: '25px' }}
            >
                {getQuantity(product?.id) === 1 ? (
                    <IconButton
<<<<<<< HEAD
                      disabled={removeIsLoading}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        aria-label="delete"
                        size="small"
                        color="error"
                        sx={{
                            padding: '4px',
                        }}
                        onClick={(e) => handleRemove(e)}
                    >
                        <DeleteIcon
                            fontSize="inherit"
                            sx={{ width: '25px', height: '25px' }}
                        />
                    </IconButton>
                ) : (
                    <>
                        <IconButton
<<<<<<< HEAD
                          disabled={updatedLoading}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            // disabled={
                            //   state.modalData[0]?.totalPrice === 0 ||
                            //   state.modalData[0]?.quantity <= 1
                            // }
                            size="small"
                            color="primary"
                            sx={{
                                background: (theme) =>
                                    alpha(theme.palette.primary.main, 0.5),
                                borderRadius: '3px',
                                padding: '3px',
                                '&:hover': {
                                    background: (theme) =>
                                        theme.palette.primary.dark,
                                },
                            }}
                            onClick={(e) => handleDecrement(e)}
                        >
                            <RemoveIcon
                                size="small"
                                sx={{
                                    color: (theme) =>
                                        theme.palette.neutral[100],
                                    width: '25px',
                                    height: '25px',
                                }}
                            />
                        </IconButton>
                    </>
                )}
<<<<<<< HEAD

              {updatedLoading?<CircularLoader size="14px"/>: <Typography
                variant="h5"
                fontWeight="500"
                color={theme.palette.neutral[1000]}
              >
                {getQuantity(product?.id)}
              </Typography>}

                <IconButton
                  disabled={updatedLoading}
=======
                <Typography
                    variant="h5"
                    fontWeight="500"
                    color={theme.palette.neutral[1000]}
                >
                    {getQuantity(product?.id)}
                </Typography>
                <IconButton
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    color="primary"
                    aria-label="add"
                    onClick={(e) => handleIncrement(e)}
                    size="small"
                    sx={{
                        background: (theme) => theme.palette.primary.main,
                        borderRadius: '3px',
                        padding: '3px',
                        '&:hover': {
                            background: (theme) => theme.palette.primary.dark,
                        },
                    }}
                >
                    <AddIcon
                        size="small"
                        sx={{
                            color: (theme) => theme.palette.neutral[100],
                            width: '25px',
                            height: '25px',
                        }}
                    />
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default FoodCardIncrementAndDecrement
