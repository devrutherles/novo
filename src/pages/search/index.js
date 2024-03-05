import React from 'react'
import { CustomHeader } from '../../api/Headers'
import HeroSectionWithSearch from '../../components/home/hero-section-with-search'
import { useRouter } from 'next/router'
import ProductSearchPage from '../../components/products-page/ProductSearchPage'
import CustomContainer from '../../components/container'
import ScrollToTop from '../../components/scroll-top/ScrollToTop'
<<<<<<< HEAD
import HomeGuard from "../../components/home-guard/HomeGuard";
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const SearchPage = ({ configData }) => {
    const router = useRouter()
    const { query } = router.query
    return (
        <>
<<<<<<< HEAD
        <HomeGuard>
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            <ScrollToTop />
            <HeroSectionWithSearch query={query} />
            <CustomContainer>
                <ProductSearchPage query={query} configData={configData} />
            </CustomContainer>
<<<<<<< HEAD
        </HomeGuard>
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </>
    )
}

export default SearchPage
export const getServerSideProps = async () => {
    const configRes = await fetch(
<<<<<<< HEAD
        `${process.NEXT_PUBLIC_BASE_URL}/api/v1/config`,
=======
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/config`,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        {
            method: 'GET',
            headers: CustomHeader,
        }
    )
    const config = await configRes.json()
    return {
        props: {
            configData: config,
        },
    }
}
