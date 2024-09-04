import { FC } from "react";
import InteractiveList from "./pages/InteractiveList";
import { Provider } from "react-redux";
import { setupStore } from "./events";

const store = setupStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <InteractiveList />
    </Provider>
  );
};

export default App;
