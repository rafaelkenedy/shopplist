import React from 'react'
import{
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet

} from 'react-native'

interface ItemCardProps extends TouchableOpacityProps{
    item: string
}

export function ItemCard({item, ...rest} : ItemCardProps){

    return(
        <TouchableOpacity
            style={styles.buttonItem}
            activeOpacity={.7}
            {...rest}
        >
            <Text style={styles.title}> 
                {item}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    buttonItem:{
        backgroundColor: '#4A6572',
        padding: 16,
        borderRadius: 32,
        marginVertical: 10,
        alignItems: 'center'        
    },
    title:{
        //color: '#F9AA33',
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
