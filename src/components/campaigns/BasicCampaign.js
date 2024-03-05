import React from 'react'
<<<<<<< HEAD
import { NoSsr, Typography } from "@mui/material";
=======
import { Typography } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import { Stack } from '@mui/system'
import { useTheme } from '@emotion/react'
import CustomImageContainer from '../CustomImageContainer'
import MiddleSection from './MiddleSection'
import ItemSection from './ItemSection'
<<<<<<< HEAD
import CustomPageTitle from "../CustomPageTitle";
import CustomEmptyResult from "../empty-view/CustomEmptyResult";
import { noRestaurantsImage } from "../../utils/LocalImages";
import { RTL } from "../RTL/RTL";
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const BasicCampaign = ({
    campaignsDetails,
    configData,
    isRefetching,
    isLoading,
}) => {
    const theme = useTheme()
<<<<<<< HEAD
    let languageDirection = undefined
    if (typeof window !== 'undefined') {
        languageDirection = localStorage.getItem('direction')
    }
    const camImage = `${configData?.base_urls?.campaign_image_url}/${campaignsDetails?.image}`

    return (
        <CustomStackFullWidth paddingTop={{ xs: '10px', md: "60px" }}>
          <NoSsr>
             <RTL direction={languageDirection}>
                 <Stack
                     paddingBottom="2rem"
                     paddingTop="1rem"
                     rowGap="1rem"
                 >
                     {  campaignsDetails!=="undefined" && <>
                         <MiddleSection
                             campaignsDetails={campaignsDetails}
                             image={camImage}
                             isLoading={isLoading}
                         />
                         <CustomPageTitle title="Restaurants"  textAlign="left"/>
                         <ItemSection
                             configData={configData}
                             campaignsDetails={campaignsDetails}
                             isLoading={isLoading}
                             isRefetching={isRefetching}
                         />
                     </>
                     }

                     {!isLoading && !campaignsDetails &&  <CustomEmptyResult
                         label="No store found"
                         image={noRestaurantsImage}
                     />}
                 </Stack>
             </RTL>

          </NoSsr>
=======

    const camImage = `${configData?.base_urls?.campaign_image_url}/${campaignsDetails?.image}`
    return (
        <CustomStackFullWidth>
            <Stack
                spacing={3}
                justifyContent="center"
                alignItems="center"
                paddingBottom="2rem"
                paddingTop="1rem"
            >
                <CustomImageContainer
                    src={camImage}
                    width="100%"
                    height="300px"
                    smHeight="150px"
                    objectFit="cover"
                    borderRadius=".5rem"
                />
                <CustomStackFullWidth spacing={{ xs: 1, md: 3 }}>
                    <MiddleSection
                        campaignsDetails={campaignsDetails}
                        image={camImage}
                    />
                    <ItemSection
                        configData={configData}
                        campaignsDetails={campaignsDetails}
                        isLoading={isLoading}
                        isRefetching={isRefetching}
                    />
                </CustomStackFullWidth>
            </Stack>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </CustomStackFullWidth>
    )
}

export default BasicCampaign
