
//imprt {onErrorResponse} from "../../../../components/ErrorResponse";
import MainApi from "../../../api/MainApi";
import {useQuery} from "react-query";
<<<<<<< HEAD
import { getToken } from "../../../components/checkout-page/functions/getGuestUserId";


const getData = async () => {
if(getToken()){
    const {data} = await MainApi.get("/api/v1/customer/order/refund-reasons")
    return data
}

=======


const getData = async () => {

    const {data} = await MainApi.get("/api/v1/customer/order/refund-reasons")
    return data
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

}
export const useGetRefundReasons = (handleRequestOnSuccess) => {
    return useQuery('get_refund_list', () => getData(), {
        // onSuccess: handleRequestOnSuccess,
        // onError: onErrorResponse,
    })
}