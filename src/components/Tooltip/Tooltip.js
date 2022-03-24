import "./Tooltip.css";

function Tooltip(props) {

  // const className = ["Description"];
  // if (props.top) {
  //   className.push("top");
  // }
  // if (props.right) {
  //   className.push("right");
  // }
  // if (props.bottom) {
  //   className.push("bottom");
  // }
  // if (props.left) {
  //   className.push("left");
  // }

  return (
    <div>
     
      <button className="Btn">{props.children}</button>
    </div>
  );
}
export default Tooltip;
