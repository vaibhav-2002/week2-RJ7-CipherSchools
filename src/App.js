import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SignUpForm from "./SignUpForm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path={"/"} element={<h1>This is Home Page</h1>} />
          <Route
            path={"/contact"}
            element={<h1>This is Contact page</h1>}
          ></Route>
          <Route
            path={"/about"}
            element={<h1>This is an About Page</h1>}
          ></Route>
          <Route path={"/signup"} element={<SignUpForm></SignUpForm>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
