import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Home } from '../screens/Home';
import { PackagesDelivered } from '../screens/PackagesDelivered';

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function TopTabNavigator() {

    return (
        <Navigator
            tabBarPosition='bottom'
        >
            <Screen
                options={{ title: 'Em trânsito' }}
                name={'Home'}
                component={Home}
            />
            <Screen
                name={'Entregues'}
                component={PackagesDelivered}
            />
        </Navigator>
    )

}