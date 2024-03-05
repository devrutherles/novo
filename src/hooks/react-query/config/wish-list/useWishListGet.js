import MainApi from '../../../../api/MainApi'
import { useQuery } from 'react-query'
import { onSingleErrorResponse } from '../../../../components/ErrorResponse'

export const WishList = async () => {
    const { data } = await MainApi.get('/api/v1/customer/wish-list')
    return data
}
export const useWishListGet = (onSuccessHandler,onErr) => {
    return useQuery('wishlist', () => WishList(), {
        enabled: false,
        onSuccess: onSuccessHandler,
<<<<<<< HEAD
        onError:onSingleErrorResponse,
=======
        //onError:onSingleErrorResponse,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    })
}
