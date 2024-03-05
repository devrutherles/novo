import React from 'react'
import { Stack } from '@mui/system'
import StarIcon from '@mui/icons-material/Star'
import { alpha, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { getNumberWithConvertedDecimalPoint } from '../../utils/customFunctions'
import { useSelector } from 'react-redux'
import { CustomChip } from './FoodCard.style'

const FoodRating = ({ product_avg_rating }) => {
    const theme = useTheme()
    const starColor = theme.palette.whiteContainer.main
    const { global } = useSelector((state) => state.globalSettings)

<<<<<<< HEAD
    // let digitAfterDecimalPoint
    // if (global) {
    //     digitAfterDecimalPoint = global.digit_after_decimal_point
    // }
    return (
        <CustomChip
            background={theme.palette.customColor.eleven}
=======
    let digitAfterDecimalPoint
    if (global) {
        digitAfterDecimalPoint = global.digit_after_decimal_point
    }
    return (
        <CustomChip
            background={theme.palette.whiteContainer.dark}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            label={
                <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={0.5}
                    alignItems="center"
                >
<<<<<<< HEAD
                    <Typography
                        fontSize="12px"
                        fontWeight="600"
                        color={theme.palette.whiteContainer.main}
                        lineHeight={1.6}
                    >
                        {getNumberWithConvertedDecimalPoint(
                            product_avg_rating,
                            // digitAfterDecimalPoint
                            1
                        )}
                    </Typography>
                    <StarIcon
                        style={{
                            width: '12px',
                            height: '12px',
                            color: starColor,
                        }}
                    />
=======
                    <StarIcon
                        style={{
                            width: '15px',
                            height: '15px',
                            color: starColor,
                        }}
                    />
                    <Typography
                        fontSize={{ xs: '12px', sm: '13px', md: '13px' }}
                        fontWeight="400"
                        color={theme.palette.whiteContainer.main}
                    >
                        {getNumberWithConvertedDecimalPoint(
                            product_avg_rating,
                            digitAfterDecimalPoint
                        )}
                    </Typography>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </Stack>
            }
        ></CustomChip>
    )
}

export default FoodRating
