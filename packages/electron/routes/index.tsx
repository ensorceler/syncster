import { NavigationContainer } from "@react-navigation/native";
import { useAtom } from "jotai";
import { authenticated } from "../context/AuthStore";
import ProtectedStack from "./protected/ProtectedStack";
import PublicStack from "./public/PublicStack";
import React from "react";

function Router() {
  const [Authenticated, setAuthenticated] = React.useState<boolean>(true);

  return (
    <NavigationContainer>
      {Authenticated ? <ProtectedStack /> : <PublicStack />}
    </NavigationContainer>
  );
}

export default Router;
