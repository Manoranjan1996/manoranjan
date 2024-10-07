import { createContext, useContext } from "react";

export const ThemsContext = createContext({
  themsMode: "light",
  darkThems: () => {},
  lightThems: () => {},
});
export const themsProvider = ThemsContext.Provider;

export default function useThems() {
  return useContext(ThemsContext);
}
