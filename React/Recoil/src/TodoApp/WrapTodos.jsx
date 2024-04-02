import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { DisplayJust } from "./DisplayJust";
import Show from "./Show";

const WrapTodos = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/p/:id" element={<DisplayJust />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default WrapTodos;
