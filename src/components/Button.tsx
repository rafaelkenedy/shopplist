import React from 'react'
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps{
    title: string
}

export function Button({title, ...rest} : ButtonProps){
    return(
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button:{
        backgroundColor: '#F9AA33',
        padding: 16,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 16,
    },
    buttonText:{
        color: '#232F34',
        fontSize: 18,
        fontWeight: 'bold'
    }
})