import React, {useEffect} from 'react';
import {PrimaryButton} from "../products-page/FoodOrRestaurant";
import {t} from "i18next";
import {useMutation} from "react-query";
import {OrderApi} from "../../hooks/react-query/config/orderApi";
import {onErrorResponse} from "../ErrorResponse";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import {
    calculateItemBasePrice,
    getConvertDiscount,
    handleProductValueWithOutDiscount
} from "../../utils/customFunctions";
import {toast} from "react-hot-toast";
import {setClearCart, setReorderCartItemByDispatch} from "../../redux/slices/cart";
import { handleValuesFromCartItems } from "../checkout-page/CheckoutPage";
import useAddCartItem from "../../hooks/react-query/add-cart/useAddCartItem";
import useReorderAddToCart from "../../hooks/react-query/reorder/useReorderAddToCart";
import { getSelectedAddons, getSelectedVariations } from "../navbar/second-navbar/SecondNavbar";
import { getGuestId } from "../checkout-page/functions/getGuestUserId";
import { setCouponInfo } from "../../redux/slices/global";
import useDeleteAllCartItem from "../../hooks/react-query/add-cart/useDeleteAllCartItem";


const Reorder = ({orderData, orderZoneId}) => {
    const { cartList } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const { mutate:removeCartMutate } = useDeleteAllCartItem();
    const { mutate:reorderAddToCartMutate, isLoading:addToCartLoading } = useReorderAddToCart();
=======
import {useDispatch} from "react-redux";
import {calculateItemBasePrice, getConvertDiscount} from "../../utils/customFunctions";
import {toast} from "react-hot-toast";
import {setClearCart, setReorderCartItemByDispatch} from "../../redux/slices/cart";


const Reorder = ({orderData, orderZoneId}) => {
    const dispatch = useDispatch()
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const orderItemId = () => {
        let currentId = []
        orderData?.forEach((item) => {
            currentId = [...currentId, item?.food_id]
        })
        return currentId
    }
    const {data, mutate, isLoading} =
        useMutation(
            'food-lists',
            OrderApi.foodLists
        )
    useEffect(() => {
        const foodId = JSON.stringify(orderItemId())
        mutate(foodId, {
                onError: onErrorResponse
            }
        )
    }, [orderData])

    const isSame = (itemVariation, orderItemVariation) => {
        let orderItemVariationRequiredCount = 0
        let itemVariationRequiredCount = 0
        if (orderItemVariation?.length > 0 && itemVariation?.length > 0) {
            orderItemVariation?.forEach(item => {
                if (item?.required === 'on') {
                    orderItemVariationRequiredCount++
                }
            })
            itemVariation?.forEach(item => {
                if (item?.required === 'on') {
                    itemVariationRequiredCount++
                }
            })
        }
        return orderItemVariationRequiredCount === itemVariationRequiredCount;
    }

    const isVariationValuesSame = (itemVariationValues, orderItemVariationValues) => {
        let count = 0
        orderItemVariationValues?.forEach(value => {
            if (itemVariationValues?.find(item => item?.label === value?.label)) {
                count++
            }
        })
        return orderItemVariationValues.length === count;
    }
    const getReorderAbleItems = (apiData, orderDetailsData) => {
        let items = []
        apiData?.forEach((item) => {
            if (item?.variations.length > 0) {
                item?.variations?.forEach((itemVariation) => {
                    orderDetailsData?.forEach(orderData => {
                        //variation wise check
                        if (orderData?.variation?.length > 0) {
                            if (isSame(item?.variations, orderData?.variation)) {
                                orderData?.variation?.forEach(orderVariation => {
                                    //selected variation check
                                    if (orderVariation?.values?.length > 0) {
                                        if (itemVariation?.name === orderVariation?.name) {
                                            isVariationValuesSame(itemVariation?.values, orderVariation?.values)
                                            items.push(item)
                                        }
                                    } else {
                                        if (itemVariation?.name === orderVariation?.name) {
                                            items.push(item)
                                        }
                                    }
                                })
                            }
                        }
                    })
                })
            } else {
                items.push(item)
            }
        })
        return [...new Set(items)]
    }

    const getNewValues = (variationIndex, variationValues, sVariationValues, type) => {
        return variationValues?.map((item, index) => {
            let isExist = sVariationValues?.find(sItem => sItem?.label === item?.label)
            if (isExist) {
                return {
                    ...item,
                    isSelected: true,
                    choiceIndex: variationIndex,
                    optionIndex: index,
                    type: type === 'on' ? 'required' : 'optional'
                }
            } else {
                return item
            }
        })
    }
    const getSimilarVariations = (variations, sVariation) => {
        if (sVariation?.length > 0) {
            return variations?.map((variation, index) => {
                const isExist = sVariation.find(item => item.max === variation.max && item.min === variation.min && item.name === variation.name && item.required === variation.required && item.type === variation.type)
                if (isExist) {
                    return {
                        ...variation,
                        values: getNewValues(index, variation?.values, isExist?.values, isExist?.required)
                    }
                } else {
                    return variation
                }
            })
        } else {
            return variations
        }
    }
    const getNewAddons = (item) => {
        if (item?.[0]?.add_ons?.length > 0) {
            return item?.[0]?.add_ons?.map(addOn => {
                return {
                    ...addOn,
                    restaurant_id: item?.[0]?.food_details?.restaurant_id,
                    status: 1
                }
            })
        } else {
            return []
        }

    }

<<<<<<< HEAD

    const handleSuccess=(res)=>{
        if(res){
              let cartNewItem=res?.map((item)=>{
                  return{
                      ...item?.item,
                      cartItemId: item?.id,
                      variations: item?.item?.variations,
                      quantity: item?.quantity,
                      totalPrice:
                          getConvertDiscount(
                              item?.item?.discount,
                              item?.item?.discount_type,
                              handleProductValueWithOutDiscount(item?.item),
                              item?.item?.restaurant_discount
                          )
                          *
                          item?.quantity,
                      selectedAddons:getSelectedAddons(item?.item?.addons),
                      itemBasePrice: getConvertDiscount(
                          item?.item?.discount,
                          item?.item?.discount_type,
                          calculateItemBasePrice(item?.item, item?.item?.variations),
                          item?.item?.restaurant_discount
                      ),
                      selectedOptions:getSelectedVariations(item?.item?.variations)
                  }
              })
            dispatch(setReorderCartItemByDispatch(cartNewItem))
            toast.success(t('Reorder-able items added to the cart successfully.'))
        }

    }

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const reorderAddToCart = () => {
        const orderAbleZoneIds = JSON.parse(localStorage.getItem('zoneid'))
        const isZoneExist = orderAbleZoneIds?.length > 0 && orderAbleZoneIds.find(item => item === orderZoneId)
        if (isZoneExist) {
            const reorderAbleItem = getReorderAbleItems(data?.data, orderData)
            if (reorderAbleItem?.length > 0) {
<<<<<<< HEAD
                const item_list = reorderAbleItem.map(rItem => {
=======
                const newArray = reorderAbleItem.map(rItem => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    let similar = []
                    orderData?.forEach(item => {
                        let count = 0
                        item?.food_details?.variations?.forEach((itemVari, index) => {
                            if (itemVari?.name === rItem?.variations[index]?.name) {
                                count++
                            }
                        })
                        if (count === rItem?.variations?.length) {
                            similar.push(item)
                        }
                    })
                    if (similar?.length > 0) {
                        let selectedOptions = []
                        const similarVariations = getSimilarVariations(rItem.variations, similar?.[0]?.variation)
                        if (similarVariations?.length > 0) {
                            similarVariations?.forEach(variation => {
                                if (variation?.values?.length > 0) {
                                    variation?.values?.forEach(item => {
                                        if (item?.isSelected) {
                                            selectedOptions.push(item)
                                        }
                                    })
                                }
                            })
                        }
                        let optionsTotalPrice = 0
                        if (selectedOptions?.length > 0) {
                            selectedOptions?.forEach(item => {
                                optionsTotalPrice += Number.parseInt(item?.optionPrice)
                            })
                        }
                        let itemsBasePrice = getConvertDiscount(
                            rItem?.discount,
                            rItem?.discount_type,
                            calculateItemBasePrice(rItem, selectedOptions),
                            rItem?.restaurant_discount
                        )
                        let totalPrice = (itemsBasePrice * similar?.[0]?.quantity)
<<<<<<< HEAD
                        let totalQty = 0;
                        return {
                            model:rItem.available_date_starts ? "ItemCampaign" : "Food",
                            add_on_ids: rItem?.add_on?.length > 0 ? rItem?.add_on?.map((add) => {
                                return add.id;
                            }):[],
                            add_on_qtys:
                                rItem?.add_on?.length > 0
                                    ? rItem?.add_on?.map((add) => {
                                        totalQty = add.quantity;
                                        return totalQty;
                                    })
                                    : [],
                            item_id: rItem?.id,
                            price: itemsBasePrice,
                            quantity: similar?.[0]?.quantity,
                            variations: getSimilarVariations(rItem.variations, similar?.[0]?.variation)?.map((variation) => {
                                return {
                                    name: variation.name,
                                    values: {
                                        label: handleValuesFromCartItems(variation.values),
                                    },
                                }
                            }),


                            // totalPrice: totalPrice,
                            // selectedAddons: getNewAddons(similar),
                            // itemBasePrice: itemsBasePrice
                        }
                    }
                })

                if (item_list?.length > 0) {
                    if (item_list?.every(item => item !== undefined)) {
                        reorderAddToCartMutate(item_list,{
                            onSuccess:handleSuccess,
                            onErrorResponse:onErrorResponse
                        })
                        // toast.success(t('Reorder-able items added to the cart successfully.'))
                        // dispatch(setClearCart())
                        // dispatch(setReorderCartItemByDispatch(newArray))
=======
                        return {
                            ...rItem,
                            variations: getSimilarVariations(rItem.variations, similar?.[0]?.variation),
                            quantity: similar?.[0]?.quantity,
                            totalPrice: totalPrice,
                            selectedAddons: getNewAddons(similar),
                            itemBasePrice: itemsBasePrice
                        }
                    }
                })
                if (newArray?.length > 0) {
                    if (newArray?.every(item => item !== undefined)) {
                        toast.success(t('Reorder-able items added to the cart successfully.'))
                        dispatch(setClearCart())
                        dispatch(setReorderCartItemByDispatch(newArray))
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    }

                }
            } else {
                toast.error(t('Current orders can not be reordered as some changes occurred to the items.'))
            }

        } else {
            toast.error(t('This order can not be reordered as the restaurant is not existing in your current zone.'))
        }
    }

<<<<<<< HEAD
const clearCartData = async () => {
    if(cartList?.length > 0){
        await  dispatch(setClearCart())
        await  removeCartMutate(getGuestId(), {
            //onSuccess: handleSuccess,
            onError: onErrorResponse,
        });

    }
     reorderAddToCart()
}
    return (
        <PrimaryButton
            variant="contained"
            // sx={{width: '100%'}}
            onClick={clearCartData}
=======

    return (
        <PrimaryButton
            variant="contained"
            sx={{width: '100%'}}
            onClick={reorderAddToCart}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            disabled={!data}
        >
            {t('Reorder')}
        </PrimaryButton>
    );
};

export default Reorder;
