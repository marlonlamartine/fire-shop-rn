import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import * as React from 'react';

const CartScreen = () => {

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()}
                title="Go back home"
            />
        </View>
    );
}

export default CartScreen