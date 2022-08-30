import { atom, useAtom } from "jotai";

export const authenticated = atom<string | null>(null);

export const useAuthenticated = () => {
  const [auth, setAuth] = useAtom(authenticated);
};
