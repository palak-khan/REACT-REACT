// import { useState } from "react";

// const App = () => {
//   const [time, settime] = useState(new Date().toLocaleTimeString());
//   setInterval(() => {
//     settime(new Date().toLocaleTimeString());
//   }, 1000);
//   return (
//     <div>
//       <h1>{time}</h1>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.username.value)
    console.log("Done");
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input name="username" placeholder="Username" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
