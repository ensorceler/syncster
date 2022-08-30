import { Dimensions, StyleSheet } from "react-native";
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
import NewSubsriptionScreen from "../../screens/protected/NewSubscription";
import SettingsScreen from "../../screens/protected/SettingsScreen";
import SubscriptionInfoScreen from "../../screens/protected/SubscriptionInfoScreen";
import { ProtectedStackParamList } from "../../types";

export interface TabArrType {
  route: keyof ProtectedStackParamList;
  component: (props: any) => JSX.Element;
  tabBarActiveColor: string;
  tabBarInactiveColor: string;
  tabBarIcon?: (props: any) => JSX.Element;
  tabBarButton?: () => JSX.Element;
  tabBarNotVisible?: boolean;
}
export const TabArr: Array<TabArrType> = [
  {
    route: "Home",
    component: HomeScreen,
    tabBarActiveColor: "white",
    tabBarInactiveColor: "#a2a2b5",
    tabBarIcon: HomeIcon,
  },
  {
    route: "Budgets",
    component: BudgetsScreen,
    tabBarActiveColor: "white",
    tabBarInactiveColor: "#a2a2b5",
    tabBarIcon: BudgetsIcon,
  },
  // button is used in newSubscription tab
  {
    route: "NewSubscription",
    component: SubscriptionStack,
    tabBarActiveColor: "white",
    tabBarInactiveColor: "#a2a2b5",
    // no icon just button
    tabBarButton: AddButton,
    tabBarNotVisible: true,
  },
  {
    route: "Calendar",
    component: CalendarScreen,
    tabBarActiveColor: "white",
    tabBarInactiveColor: "#a2a2b5",
    tabBarIcon: CalendarIcon,
  },
  {
    route: "Credit",
    component: CreditCardScreen,
    tabBarActiveColor: "white",
    tabBarInactiveColor: "#a2a2b5",
    tabBarIcon: CreditCardIcon,
  },
  {
    route: "Settings",
    component: SettingsScreen,
    tabBarActiveColor: "white",
    tabBarInactiveColor: "#a2a2b5",
    tabBarNotVisible: true,
  },
];

const DEVICE_WIDTH = Dimensions.get("window").width;

export const TabBarStyle = StyleSheet.create({
  TabBar: {
    borderTopWidth: 0,
    borderColor: "#1c1c23",
    position: "absolute",
    height: 60,
    bottom: 2,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 18,
    //backgroundColor: "rgba(78, 78, 97, 1)",
    backgroundColor: "#353542",
  },
});
