import reducer from './url'
import * as actionType from '../../Actions/authActions'

describe('url reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            urls: [
                {
                    url: '',
                    username:'',
                    password: '',
                    user: ''
                }
            ]
        })
    })
})