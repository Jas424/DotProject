import SignupPage from "./SignupPage";

function ExplorePage() {
  function addNewUserHandler(newUserData) {
    fetch("https://dot-project-f73b1-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(newUserData),
      headers: {
        "Content-type": "application/json",
      },
    });
  }
  return (
    <div>
      <div>
        <center>
          <h1>EXPLORE OTHER DOT USERS!</h1>
        </center>
      </div>
      <div>
        <SignupPage onAddUser={addNewUserHandler} />
      </div>
    </div>
  );
}
export default ExplorePage;
