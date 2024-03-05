import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Stack } from '@mui/material'
import { OrderFoodSubtitle } from '../checkout-page/CheckOut.style'

const VisibleVariations = (props) => {
<<<<<<< HEAD
    const { variations, t, orderDetailsColor} = props
=======
    const { variations, t, orderDetailsColor } = props
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const [variationsWithChild, setVariationsWithChild] = useState([])
    const handleVariationsWithChild = (variations) => {
        const variationsArray = []
        if (variations.length > 0) {
            variations.forEach((variation) => {
                if (variation?.values?.length > 0) {
                    const selected = variation?.values?.filter(
                        (variationValue) => variationValue?.isSelected === true
                    )

                    if (selected.length > 0) {
                        const sArray = {
                            variationName: variation.name,
                            variationValues: selected,
                        }
                        variationsArray.push(sArray)
                    }

                }
            })

            setVariationsWithChild(variationsArray)
        }
    }
    useEffect(() => {
        handleVariationsWithChild(variations)
    }, [variations])

    return (
        <>
            {variationsWithChild.length > 0 && (
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                    flexWrap="wrap"
                >
                    <OrderFoodSubtitle orderdetailscolor={orderDetailsColor}>
                        {t('Variation')}
                    </OrderFoodSubtitle>
                    <OrderFoodSubtitle>:</OrderFoodSubtitle>
                    {variationsWithChild.map((item, parentIndex) => {

                        return (
                            <Stack direction="row" alignItems="center">
                                <OrderFoodSubtitle
                                    orderdetailscolor={orderDetailsColor}
                                >
                                    {item?.variationName}
                                </OrderFoodSubtitle>
                                {item?.variationValues?.length > 0 && (
                                    <OrderFoodSubtitle
                                        orderdetailscolor={orderDetailsColor}
                                    >
                                        (
                                        {item?.variationValues?.map(
                                            (val, index) =>
<<<<<<< HEAD
                                                `${val.label}${index + 1 !==
                                                    item.variationValues.length
                                                    ? ','
                                                    : ''
=======
                                                `${val.label}${
                                                    index + 1 !==
                                                    item.variationValues.length
                                                        ? ','
                                                        : ''
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                                }`
                                        )}
                                        )
                                        {parentIndex + 1 !==
<<<<<<< HEAD
                                            variationsWithChild?.length
=======
                                        variationsWithChild?.length
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                            ? ','
                                            : ''}
                                    </OrderFoodSubtitle>
                                )}
                            </Stack>
                        )
                    })}
                </Stack>
            )}
        </>
    )
}

VisibleVariations.propTypes = {}

export default VisibleVariations
