import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ProtectedStackParamList = {
  Home: undefined;
  Budgets: undefined;
  NewSubscription: undefined;
  Calendar: undefined;
  Credit: undefined;
  NotFound: undefined;
  SubscriptionInfo: undefined;
  Settings: undefined;
};

export type PublicStackParamList = {
  Welcome: undefined;
  RegisterOptions: undefined;
  Register: undefined;
  Login: undefined;
};

export type ProtectedStackScreenProps<
  Screen extends keyof ProtectedStackParamList
> = NativeStackScreenProps<ProtectedStackParamList, Screen>;

export type PublicStackScreenProps<Screen extends keyof PublicStackParamList> =
  NativeStackScreenProps<PublicStackParamList, Screen>;

declare global {
  namespace ReactNavigation {
    interface AuthParamList extends ProtectedStackParamList {}
    interface PublicParamList extends PublicStackParamList {}
  }
}
