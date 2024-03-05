<<<<<<< HEAD
import MainApi from '../../../api/MainApi';
import { getToken } from "../../../components/checkout-page/functions/getGuestUserId";

export const ProfileApi = {
    profileInfo: () => {
        const token=getToken()
        if (token) {
            return MainApi.get('/api/v1/customer/info');
        }
    },
    profileUpdate: (profileData) =>
      MainApi.post('/api/v1/customer/update-profile', profileData),
};
=======
import MainApi from '../../../api/MainApi'

export const ProfileApi = {
    profileInfo: () => MainApi.get('/api/v1/customer/info'),
    profileUpdate: (profileData) =>
        MainApi.post('/api/v1/customer/update-profile', profileData),
}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
