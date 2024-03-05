import MainApi from '../../../api/MainApi'

export const WalletApi = {
    walletList: (offset, type) => {
<<<<<<< HEAD
=======
        console.log({ type })
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        return MainApi.get(
            `/api/v1/customer/wallet/transactions?offset=${offset}&limit=10&type=${type}`
        )
    },
}
