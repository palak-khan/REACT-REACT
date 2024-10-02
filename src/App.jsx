import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

const App = () => {
  return (
    <div>
      <h1>hello</h1>
      <Child1 title="Hey its Child1 here!" />
      <hr />

      <Child2 title="secret">
        <h1>Hey its child2 here!</h1>
        <p>Child2 is smart</p>
      </Child2>
    </div>
  );
};

export default App;
