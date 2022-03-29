import TeamMemberCard from "../components/TeamMemberCard";

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
          <TeamMemberCard
            text="Agenor Rodriguez"
            teamPhoto={genericMalePhoto}
          />
        </div>

        <div>
          <TeamMemberCard
            text="Jade Wing Ki Au"
            teamPhoto={genericFemalePhoto}
          />
        </div>

        <div>
          <TeamMemberCard text="Jaspreet Singh" teamPhoto={genericMalePhoto} />
        </div>

        <div>
          <TeamMemberCard text="Jonathan Yanez" teamPhoto={genericMalePhoto} />
        </div>

        <div>
          <TeamMemberCard text="Jiten Lama" teamPhoto={genericMalePhoto} />
        </div>

        <div>
          <TeamMemberCard text="Henry Nguyen" teamPhoto={genericMalePhoto} />
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
