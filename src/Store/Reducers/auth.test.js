import reducer from './auth'
import * as actionType from '../../Actions/authActions'

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            authError: null
        })
    })
})