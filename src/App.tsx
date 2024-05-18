import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/fontStyles.css";
import "./App.css";
import Content from "./assets/components/Content";
import CookieBar from "./assets/components/CookieBar";

function App() {
  return (
    <div>
      <Content />
      <CookieBar />
    </div>
  );
}

export default App;
