const initState = {
    urls: [
        {
            url: '',
            username:'',
            password: '',
            user: ''
        }
    ]
}

const url = (state = initState, action) => {
    switch(action.type) {
        case 'POST_URL_LOADING':
            return state
        case 'POST_URL_SUCCESS':       
            return {
                ...state
            }
        case 'POST_URL_ERR':
            return state
        case 'DELETE_URL_LOADING':
            return state
        case 'DELETE_URL_SUCCESS':
            return state
        default:
            return state
        
    }
}

export default url