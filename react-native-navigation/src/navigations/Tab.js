import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Meet, Settings } from '../screens/TabScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabIcon = ({ name, size, color }) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Settings">
            <Tab.Screen 
                name="Mail" 
                component={Mail}
                options={{
                    tabBarIcon: props => TabIcon({ ...props, name: 'email' }),
                }}
            />
            <Tab.Screen 
                name="Meet" 
                component={Meet}
                options = {{
                    tabBarIcon: props => TabIcon({ ...props, name: 'video' }),
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    tabBarIcon: props => TabIcon({ ...props, name: 'cog' }),
                }}    
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;