import { useEffect } from "react";
import "./App.css";
import { ThemsProvider } from "./context/thems";

function App() {
  const [themsMode, setThemsMode] = useState("light");
  const lightThems = () => {
    setThemsMode("light");
  };

  const lightThems = () => {
    setThemsMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themsMode);
  }, [themsMode]);

  return (
    <ThemsProvider value={{ themsMode, lightThems, darkThems }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemsBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemsProvider>
  );
}

export default App;
