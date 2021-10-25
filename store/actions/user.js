export const addClip = ({ clip }) => {
    return {
        type: 'ADD_CLIP',
        // clip:clip こういう書き方でOKだが、同じなので1つでOK
        clip,
    };
};

export const deleteClip = ({ clip }) => {
    return {
        type: 'DELETE_CLIP',
        clip,
    };
};