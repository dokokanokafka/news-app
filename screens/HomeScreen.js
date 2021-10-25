import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';
import Constants from 'expo-constants';
import axios from 'axios';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default HomeScreen = (props) => {
    const [articles, setArticles] = useState([]);

    // ローディング中のstate
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        fetchArticles();
    }, []);

    //API叩く
    const fetchArticles = async () => {
        setLoading(true);
        try {
            const response = await axios.get(URL);
            console.log(response);
            // レスポンスの結果はここで出す
            setArticles(response.data.articles);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    return (
        //いい感じにスクロールを納めるためためにSafeAreaView使う
        <SafeAreaView style={styles.container}>
            <FlatList
                // ここの書き方は公式のをそのまま参考
                //表示してあげたいデータの配列を入れる
                data={articles}
                // itemとはdataのなかの一項目ずつ
                renderItem={({ item }) => (
                    <ListItem
                        imageUrl={item.urlToImage}
                        title={item.title}
                        author={item.author}
                        onPress={() =>
                            props.navigation.navigate('Article', { article: item })
                            //ここでarticleの画面遷移の道筋を示し、第二引数でニュースをURL ArticleScreenに渡す
                        }
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            {loading && <Loading />}
        </SafeAreaView>
    );
};