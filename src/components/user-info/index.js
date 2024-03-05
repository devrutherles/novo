<<<<<<< HEAD
import React from 'react'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import { Grid, useMediaQuery, useTheme } from '@mui/material'
import ProfileSideMenu from './ProfileSideMenu'
import ProfileBody from './ProfileBody'
import SideDRawerForProfile from './SideDrawer'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import ScrollerProvider from '../scroller-provider'
import { getToken } from '../checkout-page/functions/getGuestUserId'

const UserInfo = ({ page, orderId,setAttributeId }) => {
    const theme = useTheme();
    const token = getToken()
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <CustomStackFullWidth
            sx={{ paddingTop: { xs: "1.1rem", md: "66px" } }}
=======
import React, { useEffect, useState } from 'react'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import { Grid, IconButton } from '@mui/material'
import ProfileSideMenu from './ProfileSideMenu'
import ProfileBody from './ProfileBody'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import SideDRawerForProfile from './SideDrawer'
import { Scrollbar } from '../Scrollbar'

const UserInfo = ({ page }) => {
    return (
        <CustomStackFullWidth
            sx={{ paddingBlockStart: '1rem', paddingBlockEnd: '1rem' }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        >
            <Grid container spacing={2}>
                <Grid
                    container
                    item
                    sx={{
                        display: { sm: 'block', md: 'none' },
                        zIndex: 1155,
<<<<<<< HEAD

                    }}
                    alignItems="center"
                >
                    <SideDRawerForProfile page={page} setAttributeId={setAttributeId}/>
=======
                    }}
                    alignItems="center"
                >
                    <SideDRawerForProfile page={page} />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </Grid>
                <Grid
                    item
                    xs={0}
                    sm={0}
<<<<<<< HEAD
                    md={token ? 3 : 0}
                    sx={{ display: { xs: 'none', md: 'block' }, paddingTop: "2px", }}
                    mb={isXs ? "20px" : "20px"}
                >
                    <ProfileSideMenu page={page} setAttributeId={setAttributeId} />
                </Grid>
                <Grid item xs={12} sm={12} md={token ? 9 : 12} mb={isXs ? "20px" : "20px"}>
                    {isXs ? (
                        <ProfileBody page={page} orderId={orderId} />
                    ) : (
                        <ProfileBody page={page} orderId={orderId} />
                    )

                    }
                </Grid>
            </Grid>
        </CustomStackFullWidth >
=======
                    md={3}
                    sx={{ display: { xs: 'none', md: 'block' } }}
                >
                    <ProfileSideMenu page={page} />
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <ProfileBody page={page} />
                </Grid>
            </Grid>
        </CustomStackFullWidth>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    )
}

export default UserInfo
