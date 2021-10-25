import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch,useSelector } from 'react-redux';
import createPersistoid from 'redux-persist/es/createPersistoid';
import Loading from '../components/Loading';
import { addClip, deleteClip } from "../store/actions/user";
import ClipButton from '../components/ClipButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

// export default function ArticleScreen({ route }) {
// export default ArticleScreen = ({ route }) => {
export default ArticleScreen = ( props ) => {
    const { route } = props;
    const { article } = route.params;//homescreen.jsのArticleを受け取れる

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const { clips } = user;

    const isClipped = () => {
        // 配列の中に要素があるかを確認するときにsomeを使う
        return clips.some((clip) => clip.url === article.url);
    }

    const toggleClip = () => {
        if(isClipped()){
            dispatch(deleteClip({ clip: article }));
        } else{
            dispatch(addClip({clip: article}));
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ClipButton onPress={toggleClip} enabled={isClipped()} />
            {/* いらなくなったので隠す */}
            {/* clipの配列のところはpayload */}
            {/* <TouchableOpacity onPress={() => { dispatch(addClip({ clip: article })) }}>
                <Text stele={{ margin: 10, fontSize: 30 }}>ADD_CLIP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { dispatch(deleteClip({ clip: article })) }}>
                <Text stele={{ margin: 10, fontSize: 30 }}>DELETE_CLIP</Text>
            </TouchableOpacity> */}
            <WebView 
                source={{ uri: article.url }} 
                startInLoadingState={true}
                renderLoading={() => <Loading />}
            />
        </SafeAreaView >
    );
};
