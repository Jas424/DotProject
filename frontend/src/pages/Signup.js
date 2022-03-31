import React from "react";
import { useForm } from "react-hook-form";

function Signup() {
  return (
    <div>
      <h1>Signup Page</h1>

      <form>
        <p>
          <input type="text" placeholder="FullName" name="FullName" />
        </p>
        <p>
          <input type="text" placeholder="Email" name="email" />
        </p>
        <p>
          <input type="password" placeholder="Password" name="password" />
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    </div>
  );
}

export default Signup;
