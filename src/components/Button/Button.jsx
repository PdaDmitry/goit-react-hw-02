export default function Button({ evtHandlerFunc, children }) {
  return <button onClick={evtHandlerFunc}>{children}</button>;
}
