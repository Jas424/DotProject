import SignupPage from "./OldSignupPage";

import { useNavigate } from "react-router-dom";

function ExplorePage() {
  const navigate = useNavigate();

  function addNewUserHandler(newUserData) {
    fetch("https://dot-project-f73b1-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(newUserData),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <center>
        <h1>EXPLORE OTHER DOT USERS!</h1>
      </center>

      <SignupPage onAddUser={addNewUserHandler} />
    </section>
  );
}
export default ExplorePage;
