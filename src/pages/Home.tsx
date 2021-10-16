import React, {useState, useEffect} from 'react'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
    Alert
} from 'react-native'
import { Button } from '../components/Button'
import { ItemCard } from '../components/ItemCard'

interface ItemData{
    id: string
    name: string
}


export function Home(){

    const [newItem, setNewItem] = useState('')
    const [myItems, setMyItems] = useState<ItemData[]>([])

    function handleAddNewItem(){
        const data = {
            id: String(new Date().getTime()),
            name: newItem.trim()
        }
        if(data.name.trim() === ''){
            Alert.alert('Item is empty!')
        }else{
            setMyItems(oldState => [...oldState, data])
        }
    }

    function handleRemoveItem(id: string){
        setMyItems(oldState => oldState.filter(
            item => item.id !== id
        ))
    }

    return(
        <View style={styles.container}>

            <Text style={styles.title}>
                Welcome
            </Text>

            <TextInput
                style={styles.input}
                placeholder='Item...'
                placeholderTextColor='#232F34'
                onChangeText={setNewItem}
            />

            <Button 
                title='Add'
                onPress={handleAddNewItem}            
            />

            <Text style={[styles.title, { marginVertical: 32}]}>
                My Items
            </Text>

            <FlatList 
                data={myItems}
                keyExtractor={item => item.id}
                renderItem={({item}) =>(
                    <ItemCard
                        item={item.name}
                        onPress={() => handleRemoveItem(item.id)}                    
                    />
                )}
            />
        </View>
    )}
    
const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: '#232F34',
            paddingHorizontal: 24,
            paddingVertical: 64
        },
        title:{
            //color: '#F9AA33',
            color: '#FFF',
            fontSize: 18,
            fontWeight: 'bold',
        },
        input:{
            backgroundColor: '#4A6572',
            fontSize: 18,
            padding: 16,
            marginTop: 20,
            borderRadius: 7,
            color: '#FFF'

        }
    })