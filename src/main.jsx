import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./GlobalStyled";
import { Provider } from "react-redux";
import store from "../src/redux/config/configStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>
);
