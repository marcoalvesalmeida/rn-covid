import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, Alert } from 'react-native';
import Moment from 'moment';

//import components
import ArrowBack from '../../components/ArrowBack';

import styles from './styles';

import api from '../../services/api';

interface Notice {
    uid: number,
    state: string,
    cases: number,
    deaths: number,
    suspects: number,
    refuses: number,
    datetime: string
}

const List = () => {
    const [notices, setNotices] = useState<Notice[]>([]);
    
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    async function loadNotices() {
        if (loading) return;

        setLoading(true);
  
        try{
  
            const response = await api.get('api/report/v1')
    
            setNotices([...notices, ...response.data.data]);
            
        }catch(e){
            Alert.alert(
                "Desculpe",
                "Os dados não podem ser exibidos no momento.\nTente novamente mais tarde.",
                [
                    { text: "OK", onPress: () => {} }
                ],
                { cancelable: false }
            );
        }
        setLoading(false);
    }

    useEffect(() => {
        loadNotices();
    }, [])

    function renderItemList(notice:Notice){
        return <View style={styles.notice}>
                    <Text style={styles.noticeTitleProperty}>{notice.state}</Text>

                    <View style={styles.firstLine}>
                        <View>
                            <Text style={styles.noticeProperty}>Confirmados:</Text>
                            <Text style={styles.noticeValue}>{notice.cases}</Text>
                        </View>
                        <View>
                            <Text style={styles.noticeProperty}>Mortos:</Text>
                            <Text style={styles.noticeValue}>{notice.deaths}</Text>
                        </View>
                    </View>

                    <View style={styles.lastLine}>
                        <View>
                            <Text style={styles.noticeProperty}>Suspeitos:</Text>
                            <Text style={styles.noticeValue}>{notice.suspects}</Text>
                        </View>
                        <View>
                            <Text style={styles.noticeProperty}>Negativos:</Text>
                            <Text style={styles.noticeValue}>{notice.refuses}</Text>
                        </View>
                    </View>

                    <Text style={styles.updated}>Atualizado em: { Moment(notice.datetime).format('DD/M/Y, H:mm') }</Text>
                    
                </View>;
    }

    function renderList(){
        return (
            <FlatList
                data={notices}
                style={styles.noticeList}
                keyExtractor={notice => String(notice.uid)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: notice }) => renderItemList(notice) }
            />
        );
    }

    function renderEmptyList(){
        if(!loading){
            return (
                <View style={styles.emptyListView}>
                    <Text style={styles.emptyList}>Desculpe. Os dados não podem ser exibidos no momento. Tente novamente mais tarde.</Text>
                </View>
            );
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View>
                    <ArrowBack icon="arrow-left" iconSize={20} iconColor="#67b4fd" onPress={handleNavigateBack} />
                </View>

                <Text style={styles.title}>Covid-19 no Brasil</Text>
                <Text style={styles.description}>Dados extraídos de Covid19 Brazil API </Text>

                { notices && notices.length > 0 ? renderList() : renderEmptyList() }


            </View>
        </>
    );

}

export default List;
