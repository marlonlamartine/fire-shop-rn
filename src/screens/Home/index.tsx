import { CommonActions, useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import * as React from 'react';
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootStackParams } from "../../types/routes";


const HomeScreen = () => {

    const navigation = useNavigation<DrawerNavigationProp<RootStackParams>>();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => { navigation.navigate('Cart') }}
                title="Carrinho"
            />
        </View>
    );
}

export default HomeScreen