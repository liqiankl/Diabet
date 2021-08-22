import axios from 'axios'
import LoginScreen from '../../screens/LoginScreen'
import { getAccessToken } from '../../selectors/authSelector'
import store from '../../store'
const BASE_URL = 'http://13.235.81.249:4002'
import ToastMessage from '../../components/ToastMessage'

const request = async function (options, isHeader = true) {

    return new Promise((resolve, reject) => {
        let authHeader = null;
        if (isHeader) {
            authHeader = getAccessToken(store.store.getState())
        }

        const client = axios.create({
            baseURL: BASE_URL,
            headers: { 'x-access-token': authHeader }
        })

        const onSuccess = (response) => {
            resolve(response)
        }

        const onError = (error) => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                ToastMessage('error', error.response.data.error, error.response.data.message)
                reject(error.response.data)
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js

                reject(error.request)
            } else {
                // Something happened in setting up the request that triggered an Error
                reject(error.message)
            }
        }

        return client(options)
            .then(onSuccess)
            .catch(onError)
    })
}

export default request


