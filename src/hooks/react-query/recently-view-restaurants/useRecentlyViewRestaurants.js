import MainApi from '../../../api/MainApi'
import { useQuery } from 'react-query'
import {onSingleErrorResponse} from "../../../components/ErrorResponse";

export const getData = async () => {
    const { data } = await MainApi.get('/api/v1/restaurants/recently-viewed-restaurants')
    return data
}
export const useRecentlyViewRestaurants = () => {
    return useQuery('view-restaurants', () => getData(), {
        enabled:true,
        onError:onSingleErrorResponse
    })
<<<<<<< HEAD
}
export const useRecentlyViewRestaurantsOnSuccess = (handleSuccess) => {
    return useQuery('view-restaurants', () => getData(), {
        enabled:false,
        onError:onSingleErrorResponse,
        retry:1,
        onSuccess: handleSuccess,
    })
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}