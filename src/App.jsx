
// const App = () => {
//   const SubmitHandler = (e) => {
//     e.preventDefault();

//     const formData = {
//       firstname: e.target.firstname.value,
//       lastname: e.target.lastname.value,
//       username: e.target.username.value,
//       email: e.target.email.value,
//       contact: e.target.contact.value,
//     };
//     console.log(formData);
//   };

//   return (
//     <div>
//       <form onSubmit={SubmitHandler}>
//         <input
//           autoComplete="off"
//           name="firstname"
//           placeholder="Firstname"
//           type="text"
//         />
//         <input
//           autoComplete="off"
//           name="lastname"
//           placeholder="Lastname"
//           type="text"
//         />
//         <input
//           autoComplete="off"
//           name="username"
//           placeholder="Username"
//           type="text"
//         />
//         <input
//           autoComplete="off"
//           name="email"
//           placeholder="Email"
//           type="email"
//         />
//         <input
//           autoComplete="off"
//           name="contact"
//           placeholder="Contact"
//           type="contact"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;


import { useState } from "react";
const App = () => {
  const [username, setusername] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => setusername(e.target.value)}
          value={username}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
