export default function Options() {
  const handleClick = e => {
    console.log(e);
  };

  return (
    <div>
      <button onClick={handleClick}>Good</button>
      <button>Neutrak</button>
      <button>Bad</button>
      <button>Reset</button>
    </div>
  );
}
