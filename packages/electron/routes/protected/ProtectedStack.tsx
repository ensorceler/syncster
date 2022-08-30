import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import AddButton from "../../icons/AddButton";
import BudgetsIcon from "../../icons/BudgetsIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import CreditCardIcon from "../../icons/CreditCardIcon";
import HomeIcon from "../../icons/HomeIcon";
import BudgetsScreen from "../../screens/protected/BudgetsScreen";
import CalendarScreen from "../../screens/protected/CalendarScreen";
import CreditCardScreen from "../../screens/protected/CreditCardScreen";
import HomeScreen from "../../screens/protected/HomeScreen";
import SubscriptionStack from "../../screens/protected/NewSubscription";
import SettingsScreen from "../../screens/protected/SettingsScreen";
import { ProtectedStackParamList, PublicStackParamList } from "../../types";
import { TabArr, TabBarStyle } from "./TabBarDetails";

const BottomTab = createBottomTabNavigator<ProtectedStackParamList>();

function ProtectedStack() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: TabBarStyle.TabBar,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#a2a2b5",
          tabBarActiveTintColor: "white",
          tabBarIcon: HomeIcon,
        }}
      />

      <BottomTab.Screen
        name="Budgets"
        component={BudgetsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#a2a2b5",
          tabBarActiveTintColor: "white",
          tabBarIcon: BudgetsIcon,
        }}
      />
      <BottomTab.Screen
        name="NewSubscription"
        component={SubscriptionStack}
        options={{
          tabBarStyle: {
            display: "none",
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#a2a2b5",
          tabBarActiveTintColor: "white",
          tabBarButton: AddButton,
        }}
      />

      <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#a2a2b5",
          tabBarActiveTintColor: "white",
          tabBarIcon: CalendarIcon,
        }}
      />

      <BottomTab.Screen
        name="Credit"
        component={CreditCardScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#a2a2b5",
          tabBarActiveTintColor: "white",
          tabBarIcon: CreditCardIcon,
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
    </BottomTab.Navigator>
  );
}

export default ProtectedStack;
