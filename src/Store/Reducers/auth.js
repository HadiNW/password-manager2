const initState = {
    authError: null
}
const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERR':
            console.log('faile log')
            return {
                ...state,
                authError: 'failed login'
            }

        case 'LOGIN_SUCCESS':
            console.log('succ lgn')
             return {
                 ...state,
                 authError: null
             }
        case 'SIGN_OUT_SUCCESS':
             console.log('signout succ')
              return {
                  state
              }
 


        default: return state
    }
}

export default authReducer