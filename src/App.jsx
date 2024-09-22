const App = () => {
  let data = "data from server";
  let subject = ["maths", "hindi"];
  let profile = {
    name: "palak",
    age: "18",
    email: "palak@.com",
  };
  return (
    <div>
      <h1>{data}</h1>
      <h1>{subject}</h1>
      <h1>{profile.name}</h1>
      <h1>{profile.age}</h1>
      <h1>{profile.email}</h1>
    </div>
  );
};

export default App;
