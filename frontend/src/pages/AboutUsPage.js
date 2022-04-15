import TeamMemberCard from "../components/TeamCard/TeamMemberCard";

import genericMalePhoto from "../components/images/genericMale.png";
import genericFemalePhoto from "../components/images/genericFemale.png";

function AboutUsPage() {
  return (
    <div>
      <center>
        <h1>Meet The Dot Team</h1>
      </center>
      <div className="flexbox-container">
        <div>
          <TeamMemberCard
            fullName="Agenor Rodriguez"
            teamPhoto={genericMalePhoto}
          />
        </div>

        <div>
          <TeamMemberCard
            fullName="Jade Wing Ki Au"
            teamPhoto={genericFemalePhoto}
          />
        </div>

        <div>
          <TeamMemberCard
            fullName="Jaspreet Singh"
            teamPhoto={genericMalePhoto}
          />
        </div>

        <div>
          <TeamMemberCard
            fullName="Jonathan Yanez"
            teamPhoto={genericMalePhoto}
          />
        </div>

        <div>
          <TeamMemberCard fullName="Jiten Lama" teamPhoto={genericMalePhoto} />
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
