import Todo from "./MemberCard";

import genericMalePhoto from "./components/genericMale.png";
import genericFemalePhoto from "./components/genericFemale.png";

function App() {
  return (
    <div>
      <center>
        <h1>Meet the Dot Team!</h1>
      </center>
      <div class="row">
        <div class="column">
          <Todo text="Agenor Rodriguez" teamPhoto={genericMalePhoto} />
        </div>
        <div class="column">
          <Todo text="Jade Wing Ki Au" teamPhoto={genericFemalePhoto} />
        </div>
        <div class="column">
          <Todo text="Jaspreet Singh" teamPhoto={genericMalePhoto} />
        </div>
      </div>
    </div>
  );
}

export default App;
