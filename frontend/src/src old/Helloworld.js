import { useEffect, useState } from "react";

const Helloworld = () => {
  const [value, setValue] = useState("");
  const helloVariable = 5;

  useEffect(() => {
    fetch("/helloworld")
      .then((val) => val.json())
      .then((data) => {
        setValue(data.body);
      });
  }, []);

  return (
    <>
      <p>Hello, {helloVariable}</p>
      <p>My data is {value}</p>
    </>
  );
};

export default Helloworld;
