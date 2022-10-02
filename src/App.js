import MainApp from "./lib/components/MainApp";
import SettingApp from "./lib/components/SettingApp";
function App() {
  if (window.location.pathname === "/setting") {
    return <SettingApp />;
  }
  return (
    <div style={{ backgroundColor: "#ebebeb", margin: 0, height: "100vh" }}>
      <MainApp />
    </div>
  );
}
export default App;
