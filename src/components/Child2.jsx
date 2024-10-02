const Child2 = (props) => {
const {title,children} = props;
  return <div>
    <h1>{title}</h1>
    <p>{children}</p>
  </div>;
};

export default Child2;
