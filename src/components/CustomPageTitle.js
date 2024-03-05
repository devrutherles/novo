import React from 'react';
import {CustomTypographyBold} from "../styled-components/CustomStyles.style";
import {useTranslation} from "react-i18next";


const CustomPageTitle = props => {
<<<<<<< HEAD
    const {t,textAlign} =useTranslation()
    const {title} = props
    return (
        <CustomTypographyBold  textAlign={textAlign}>
=======
    const {t} =useTranslation()
    const {title} = props
    return (
        <CustomTypographyBold variant="h3" >
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
           {t(title)}
       </CustomTypographyBold>
    );
};
export default CustomPageTitle;