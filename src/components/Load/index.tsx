import React from 'react';
import { Image, Text, View } from 'react-native';


export function Load() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{width: '100%'}}
                resizeMode='contain'
                source={require('../../assets/load.gif')}
            />
        </View>

    );
}