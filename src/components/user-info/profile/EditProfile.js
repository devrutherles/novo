import React from 'react';
<<<<<<< HEAD
import { IconButton, Typography } from "@mui/material";
import { CustomPaperBigCard, CustomStackFullWidth } from "../../../styled-components/CustomStyles.style";
import BasicInformation from "./BasicInformation";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const EditProfile = ({ data, refetch, deleteUserHandler }) => {
    return (
        <BasicInformation data={data} refetch={refetch} deleteUserHandler={deleteUserHandler} />
=======
import {IconButton, Typography} from "@mui/material";
import {CustomPaperBigCard, CustomStackFullWidth} from "../../../styled-components/CustomStyles.style";
import BasicInformation from "./BasicInformation";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const EditProfile = ({setEditProfile,data,refetch,deleteUserHandler}) => {
    return (
       <CustomPaperBigCard padding="1rem">
               <CustomStackFullWidth spacing={1}>
                   {/*<Typography onClick={()=>setEditProfile(false)}>back</Typography>*/}
                   <IconButton onClick={()=>setEditProfile(false)} sx={{width:"50px" ,height:"50px",color:theme=>theme.palette.primary.main}}>
                       <ArrowBackIosNewIcon />
                   </IconButton>
                   <BasicInformation data={data} refetch={refetch} deleteUserHandler={deleteUserHandler}/>
               </CustomStackFullWidth>
       </CustomPaperBigCard>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    );
};

export default EditProfile;
