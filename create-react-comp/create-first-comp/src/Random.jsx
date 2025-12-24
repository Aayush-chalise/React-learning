function Random() {
  let number = Math.floor(Math.random() * 100);
  return (
    <h3 style={{ "background-color": "red" }}>Random number is: {number}</h3>
  );
}
export default Random;
