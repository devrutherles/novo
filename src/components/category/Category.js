import { Container, CssBaseline } from '@mui/material'
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import CategoryList from './CategoryList'
import { CustomPaperBigCard } from '../../styled-components/CustomStyles.style'
import CustomContainer from '../container'
import PageSearchWithTitle from "./PageSearchWithTitle";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { CategoryApi } from "../../hooks/react-query/config/categoryApi";
import { onErrorResponse } from "../ErrorResponse";
import CustomShimmerCategories from "../CustomShimmer/CustomShimmerCategories";
import { t } from 'i18next';

const Category = () => {
    const matches = useMediaQuery('(max-width:1180px)')
    const [searchKey, setSearchKey] = useState('')

    const { isLoading, data, isError, error, refetch } = useQuery(
        ['category'],
        () => CategoryApi.categories(searchKey),
        {
            onError: onErrorResponse,
        }
    )

    useEffect(async () => {
        await refetch()
    }, [searchKey])

    const handleSearchResult = async (values) => {
        if (values === '') {
            await refetch()
            setSearchKey('')
        } else {
            //setType('all')
            setSearchKey(values)
        }
    }
=======
import React from 'react'
import CategoryList from './CategoryList'
import { CustomPaperBigCard } from '../../styled-components/CustomStyles.style'
import CustomContainer from '../container'

const Category = () => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <>
            <CssBaseline />
            <CustomContainer>
<<<<<<< HEAD
                    <Box sx={{marginTop:{xs:"4rem",sm:"5rem",md:"8.5rem"},marginBottom:{xs:"1rem",sm:"1.5rem",md:"2rem"}}}>
                        <PageSearchWithTitle title="Choose Your Favourite Category" handleSearchResult={handleSearchResult}
                         label={t("Search categories ...")}
                        />
                        <CategoryList data={data} isLoading={isLoading} matches={matches} />
                    </Box>
=======
                <CustomPaperBigCard
                    sx={{ marginTop: '5rem', marginBottom: '1rem' }}
                >
                    <CategoryList />
                </CustomPaperBigCard>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            </CustomContainer>
        </>
    )
}

export default Category
