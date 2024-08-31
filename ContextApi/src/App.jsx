import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

export default function App() {
  return (
    <div>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}
