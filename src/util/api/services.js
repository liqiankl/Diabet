import request from './apiManager'

const createAccount = (data) => {
    return request(
        {
            method: 'post',
            url: '/user/register',
            data: data
        }
    )
}


const Services = {
    createAccount
}

export default Services