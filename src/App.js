import "./App.css";
import AllUserList from "./component/AllUserList";
import Test from "./Test";
import Name from "./component/Name";
import SignUp from "./SignUpForm";
function App() {
  return (
    <div className="App">
      <Test></Test>
      <AllUserList></AllUserList>
      {/* <Name></Name> */}
      <SignUp></SignUp>
    </div>
  );
}

export default App;
