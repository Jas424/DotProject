import MemberCard from "../components/MemberCard";

import genericMalePhoto from "../components/genericMale.png";
import genericFemalePhoto from "../components/genericFemale.png";

function AboutUsPage() {
  return (
    <div>
      <center>
        <h1>MEET THE DOT TEAM</h1>
      </center>
      <div class="flexbox-container">
        <div>
          <MemberCard text="Agenor Rodriguez" teamPhoto={genericMalePhoto} />
        </div>

        <div>
          <MemberCard text="Jade Wing Ki Au" teamPhoto={genericFemalePhoto} />
        </div>

        <div>
          <MemberCard text="Jaspreet Singh" teamPhoto={genericMalePhoto} />
        </div>

        <div>
          <MemberCard text="Jonathan Yanez" teamPhoto={genericMalePhoto} />
        </div>

        <div>
          <MemberCard text="Jiten Lama" teamPhoto={genericMalePhoto} />
        </div>

        <div>
          <MemberCard text="Henry Nguyen" teamPhoto={genericMalePhoto} />
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
