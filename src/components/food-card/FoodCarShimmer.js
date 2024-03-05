import React from 'react';
import {CustomFoodCardNew} from "./FoodCard.style";
import Skeleton from "@mui/material/Skeleton";
import {Stack} from "@mui/system";

<<<<<<< HEAD
const FoodCardShimmer = (props) => {
    const {cardWidth="100%", cardHeight="100%"} = props;
    return (
        <CustomFoodCardNew width="375px" height={cardHeight}>
                  <Stack  spacing={1.5} width={cardWidth}>
=======
const FoodCardShimmer = () => {
    return (
        <CustomFoodCardNew width="375px">
                  <Stack  spacing={1.5} width="100%">
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                      <Skeleton width="100%" height="170px" variant="rectangular" animation="wave"/>
                      <Skeleton width="50px" height="20px" variant="text"/>
                      <Skeleton width="100px" height="20px" variant="text"/>
                      <Stack direction="row" justifyContent="space-between" >
                               <Skeleton width="150px" height="20px"/>
                              <Skeleton width="30px" height="50px"/>
                      </Stack>
                  </Stack>
        </CustomFoodCardNew>
    );
};

export default FoodCardShimmer;
