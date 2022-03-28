import jsonPlaceholder from "../apis/jsonPlaceholder";
export const fetchPosts = ()=>{
    return async (dispatch)=> {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({
            type: 'FETCTH_POSTS',
            payload: response
        })
    };  
};