import MainApp from "./lib/components/MainApp";
import SettingApp from "./lib/components/SettingApp";
function App() {
  if (window.location.pathname === "/setting") {
    return <SettingApp />;
  }
  return <MainApp />;
}
export default App;
