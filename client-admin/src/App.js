import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <div className="App min-vh-100">
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </div>
  );
}

export default App;
