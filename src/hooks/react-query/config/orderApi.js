import MainApi from '../../../api/MainApi'
<<<<<<< HEAD
import { getToken } from "../../../components/checkout-page/functions/getGuestUserId";

let token = undefined
if (typeof window != 'undefined') {
    token = localStorage.getItem('token')
}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
export const OrderApi = {
    placeOrder: (formData) => {
        return MainApi.post('/api/v1/customer/order/place', formData)
    },
    orderHistory: (orderType, limit, offset) => {
        return MainApi.get(
            `/api/v1/customer/order/${orderType}?limit=${limit}&offset=${offset}`
        )
    },
<<<<<<< HEAD
    orderDetails: (order_id, phone, guestId) => {
        const params = !getToken()
            ? `?order_id=${order_id}&guest_id=${guestId}&contact_number=${phone}`
            : `?order_id=${order_id}`;
        if(order_id){
            if (getToken()) {
                return MainApi.get(`/api/v1/customer/order/details${params}`)
            } else {
                if (phone) {
                    return MainApi.get(`/api/v1/customer/order/details${params}`)
                }

            }
        }


=======
    orderDetails: (order_id) => {
        return MainApi.get(`/api/v1/customer/order/details?order_id=${order_id}`)
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    },
    foodLists: (foodId) => {
        return MainApi.post(`/api/v1/customer/food-list?food_id=${foodId}`)
    },
<<<<<<< HEAD
    orderTracking: (order_id, phone, guestId) => {
        const params = !getToken()
            ? `?order_id=${order_id}&guest_id=${guestId}&contact_number=${phone}`
            : `?order_id=${order_id}`;
        if (getToken()) {
            return MainApi.get(`/api/v1/customer/order/track${params}`)
        } else {
            if (phone) {
                return MainApi.get(`/api/v1/customer/order/track${params}`)
            }

        }

=======
    orderTracking: (order_id) => {
        return MainApi.get(`/api/v1/customer/order/track?order_id=${order_id}`)
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    },
    CancelOrder: (formData) => {
        return MainApi.post('/api/v1/customer/order/cancel', formData)
    },
    FailedPaymentMethodUpdate: (formData) => {
        return MainApi.post('/api/v1/customer/order/payment-method', formData)
    },
}
