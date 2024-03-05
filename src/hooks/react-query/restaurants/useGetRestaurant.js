import { useInfiniteQuery, useQuery } from 'react-query'

import MainApi from '../../../api/MainApi'
import { onErrorResponse } from '../../../components/ErrorResponse'

const getData = async (params, pageParam) => {
    const { filterByData, offset, page_limit, filterType, searchKey } = params
    const { data } = await MainApi.get(
<<<<<<< HEAD
        `/api/v1/restaurants/get-restaurants/all?offset=${offset}&limit=${page_limit}&filter_data=${filterType}&name=${searchKey}&veg=${
            filterByData?.veg ? 1 : 0
        }&discount=${filterByData?.discount ? 1 : 0}&non_veg=${
            filterByData?.non_veg ? 1 : 0
=======
        `/api/v1/restaurants/get-restaurants/all?offset=${offset}&limit=${page_limit}&filter_data=${filterType}&veg=${
            filterByData?.veg ? 1 : 0
        }&discount=${filterByData?.discount ? 1 : 0}&non_veg=${
            filterByData?.non_Veg ? 1 : 0
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        }&top_rated=${filterByData?.top_rated ? 1 : 0}`
    )
    return data
}
<<<<<<< HEAD
export const useGetRestaurant = (params,handleSuccess) => {
=======
export const useGetRestaurant = (params) => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const { filterByData, offset, page_limit, filterType, searchKey } = params
    return useInfiniteQuery(
        [filterByData, filterType, searchKey],
        ({ pageParam = params.offset }) => getData(params, pageParam),
        {
            getNextPageParam: (lastPage, allPages) => {
                const maxPages = lastPage.total_size / params?.page_limit
                const nextPage = allPages.length + 1

                return lastPage?.restaurants?.length > 0 ? nextPage : undefined
            },
            enabled: false,
            onError: onErrorResponse,
            cacheTime: '0',
<<<<<<< HEAD
            retry:1
            //onSuccess:handleSuccess
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        }
    )
}
