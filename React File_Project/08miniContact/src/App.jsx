import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>React with Chai our Code</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
