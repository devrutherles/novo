import React from 'react';
import {CustomFoodCardNew} from "./FoodCard.style";
import {Stack} from "@mui/system";
import Skeleton from "@mui/material/Skeleton";

<<<<<<< HEAD
const FoodCardHorizontalShimmer= ({maxWidth}) => {
    return (
        <CustomFoodCardNew maxWidth={maxWidth}>
=======
const FoodCardHorizontalShimmer= () => {
    return (
        <CustomFoodCardNew>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            <Stack direction="row" spacing={1}>
                    <Skeleton animation="wave" variant="rectangular" width="115px" height="95px"/>
                <Stack justifyContent="center"
                       alignItems=" flex-start" spacing={1.6} >
                    <Skeleton animation="wave" variant="text" width="150px" height="20px"/>
                    <Skeleton animation="wave" variant="text" width="100px" height="20px"/>
                    <Skeleton animation="wave" variant="text" width="100px" height="30px"/>
                </Stack>
                <Stack justifyContent="space-between"
                       alignItems=" flex-end">
                    <Skeleton animation='wave' height="30px" width="30px" variant="rectangular"/>
                    <Skeleton animation='wave' height="30px" width="30px" variant="rectangular"/>
                </Stack>
            </Stack>
        </CustomFoodCardNew>
    );
};

export default FoodCardHorizontalShimmer;
