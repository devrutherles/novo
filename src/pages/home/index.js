import React from 'react'
import Homes from '../../components/home/Homes'
import Meta from '../../components/Meta'
import HomeGuard from '../../components/home-guard/HomeGuard'
import CssBaseline from '@mui/material/CssBaseline'
import { ConfigApi } from '../../hooks/react-query/config/useConfig'
import { landingPageApi } from '../../components/landingpage/Api'
import { CustomHeader } from '../../api/Headers'
import { getServerSideProps } from '../index'
const HomePage = ({ configData, landingPageData, pathName }) => {
<<<<<<< HEAD
  return (
    <>
      <Meta
        title={configData?.business_name}
        ogImage={`${configData?.base_urls?.react_landing_page_images}/${landingPageData?.banner_section_full?.banner_section_img_full}`}
        pathName={pathName}
      />
      <Homes   configData={configData} />
    </>
  )
=======
    return (
        <>
            <Meta
                title={configData?.business_name}
                ogImage={`${configData?.base_urls?.react_landing_page_images}/${landingPageData?.banner_section_full?.banner_section_img_full}`}
                pathName={pathName}
            />
            <Homes configData={configData} />
        </>
    )
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}
HomePage.getLayout = (page) => <HomeGuard>{page}</HomeGuard>

export default HomePage
<<<<<<< HEAD
export { getServerSideProps }
=======
export { getServerSideProps }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
