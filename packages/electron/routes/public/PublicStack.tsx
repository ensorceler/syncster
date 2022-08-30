import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/public/LoginScreen";
import RegisterScreen from "../../screens/public/RegisterScreen";
import WelcomeScreen from "../../screens/public/Welcome";
import RegisterOptionsScreen from "../../screens/public/RegisterOptions";
import { PublicStackParamList } from "../../types";

const Stack = createNativeStackNavigator<PublicStackParamList>();

function PublicStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="RegisterOptions" component={RegisterOptionsScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
export default PublicStack;
