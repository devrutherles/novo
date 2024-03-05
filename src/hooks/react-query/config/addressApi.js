import MainApi from '../../../api/MainApi'

export const AddressApi = {
    addressList: () => MainApi.get('/api/v1/customer/address/list'),
<<<<<<< HEAD
    editAddress: (formData) => MainApi.put(`/api/v1/customer/address/update/${formData?.id}`, formData),
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    addNewAddress: (formData) => MainApi.post('/api/v1/customer/address/add', formData),
    deleteAddress: (addressId) =>
        MainApi.delete(`/api/v1/customer/address/delete?address_id=${addressId}`),
}
