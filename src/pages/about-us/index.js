import React from 'react'

import AboutUs from '../../components/about-us/AboutUs'
import { useSelector } from 'react-redux'
import Meta from '../../components/Meta'
import { ConfigApi } from '../../hooks/react-query/config/useConfig'
import { Container, CssBaseline } from '@mui/material'
import AboutUsPage from '../../components/about-us/AboutUsPage'
import { getServerSideProps } from '../index'

const index = ({ configData }) => {
    return (
        <>
<<<<<<< HEAD

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            <CssBaseline />
            <Meta title={`About us - ${configData?.business_name}`} />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <AboutUsPage configData={configData} />
            </Container>
        </>
    )
}
export default index
export { getServerSideProps }
