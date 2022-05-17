import React from "react";
import { Alert } from "react-bootstrap";
import TeamMemberCard from "../components/TeamCard/TeamMemberCard";

import genericMalePhoto from "../components/images/genericMale.png";
import genericFemalePhoto from "../components/images/genericFemale.png";
import dotSmallLogo from "../components/layout/dot-small-logo.png";

function AboutUsPage() {
  return (
    <div className="d-grid gap-2">
      <Alert>
        <img className="dotAnimation" src={dotSmallLogo} alt="dot-small-logo" />
        <center>
          <h1>MEET THE DOT TEAM</h1>
        </center>
      </Alert>
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

        <div>
          <TeamMemberCard
            fullName="Varsha Singh"
            teamPhoto={genericFemalePhoto}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
