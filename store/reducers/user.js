const initialState = {
    clips: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CLIP':
            // actionで渡ったclipを追加
            return {
                ...state,
                clips: [...state.clips, action.clip]
            };
        case 'DELETE_CLIP':
            return {
                ...state,
                //filter使って、条件の中から当てはまる要素を除いた配列を返す
                // もしactionのclipとURlが一致したら除く
                clips: state.clips.filter(clip => clip.url !== action.clip.url),
            };
        default:
            return state;
    }

};

export default reducer;