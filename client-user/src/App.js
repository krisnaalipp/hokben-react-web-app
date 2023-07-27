import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </div>
  );
}

export default App;
