import { Routes, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./homepage/Homepage";
import ContentHome from "./page/content-home/ContentHome";
import ContentIntroduce from "./page/content-introduce/ContentIntroduce";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}>
        <Route index element={<ContentHome></ContentHome>}></Route>
        <Route
          path="/introduce"
          element={<ContentIntroduce></ContentIntroduce>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
