const initState = {
    posts: [
        {id:1, title:'jobboz', body:'a dancer involved with electronics and pop'},
        {id:2, title:'justin', body:'a dancer involved with classic and pop'},
        {id:3, title:'jude', body:'a dancer involved with jazzzzz and pop'}


    ]
}


const rootReducer = (state=initState, action) => {
    if(action.type === 'DELETE_POST') {
    let newPost = state.posts.filter(post => post.id !== action.id)

    return{
        ...state,
        posts: newPost
    }
} 
    return state;
}



export default rootReducer;