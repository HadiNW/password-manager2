const initState = {
    users: [
        {name: '', password: '', username: ''}
    ],
    authError: null
}

const user = (state = initState, action) => {
    switch(action.type) {
        case 'REGISTER_SUCCESS':
            console.log('reg succ')
            return {
                ...state,
                authError: null
            }
            
        case 'REGISTER_ERR':
            console.log('reg err')
            return {
                ...state,
                authError: action.err.message
            }
        default: return state
    }
}

export default user