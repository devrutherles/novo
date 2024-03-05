import React from 'react'
<<<<<<< HEAD
import { Stack, styled } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
const CustomSkeleton = styled(Skeleton)(({ theme }) => ({
    width: "100%",
    height: "50px",
    borderRadius: "8px"
})
)
const CustomCheckOutShimmer = () => {
    return (
        <Stack gap="20px">
            <CustomSkeleton variant="rectangular" />
            <CustomSkeleton variant="rectangular" />
            <CustomSkeleton variant="rectangular" />
        </Stack>
=======

import {
    CustomBoxFullWidth,
    CustomStackFullWidth,
} from '../../styled-components/CustomStyles.style'
import { Grid, Typography, Stack } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import CustomShimmerCard from '../customShimmerForProfile/CustomShimmerCard'
const CustomCheckOutShimmer = () => {
    return (
        <CustomBoxFullWidth>
            <Skeleton width="100%" height={100} variant="rectangular" />
        </CustomBoxFullWidth>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    )
}

export default CustomCheckOutShimmer
