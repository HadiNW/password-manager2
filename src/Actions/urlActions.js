export const postUrl = (url) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({type: 'POST_URL_LOADING'})
        const firestore = getFirestore()
        url.createdAt = new Date().toString()
        url.updatedAt = new Date().toString()
        firestore.collection('urls').add({
            ...url
        })
        .then(() => {        
            dispatch({type: 'POST_URL_SUCCESS'})   
            // firestore.collection('urls')
            //          .get()
            //          .then(data => {                       
            //          })
           
        })
        .catch(err => {
            dispatch({type: 'POST_URL_ERR'})
        })
    }
}

export const deleteUrl = (urlId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('urls').doc(urlId).delete()
    }
}

export const updateUrl = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('urls').doc(data.id).update({
            url: data.url,
            username: data.username,
            password: data.password,
            updatedAt: new Date().toString()
        })
    }
}