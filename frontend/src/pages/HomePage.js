import UserCard from "../components/UserCard/UserCard";

import userProfile from "../components/images/genericMale2.jpg";

function HomePage() {
  return (
    <div>
      <div className="welcome">
        <center>
          <h1>Welcome to the Dot dating app!</h1>
        </center>
        <p>
          <center>
            <h2>
              Sign up now and meet thousands of other people just like you that
              are looking for their perfect match!
            </h2>
          </center>
        </p>
      </div>
      <div class="flexbox-container">
        <div>
          <UserCard fullName="Jane Doe" userPhoto={userProfile} />
        </div>
        <div>
          <UserCard fullName="John Doe" userPhoto={userProfile} />
        </div>
        <div>
          <UserCard fullName="Tom Cruise" userPhoto={userProfile} />
        </div>
        <div>
          <UserCard fullName="Angelina Jolie" userPhoto={userProfile} />
        </div>
        <div>
          <UserCard fullName="Tom Holland" userPhoto={userProfile} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
