import "./container.css";
import img from "../../assets/images/icon-dice.svg";
import line_logo from "../../assets/images/pattern-divider-desktop.svg";
export default function Container(props) {
  return (
    <>
      <main className="h-64">
        <div
          id="container"
          className="flex flex-col items-center  h-56 justify-evenly rounded-xl"
        >
          <h1>ADVICE#{props.Id}</h1>
          <p>
            <q>{props.Advice}</q>
          </p>
          <div id="line_logo">
            <img src={line_logo} alt="" />
          </div>
          <button
            onClick={props.btn}
            id="btn"
            className="h-10 w-10 rounded-full grid place-items-center"
          >
            <img src={img} width={25} alt="" />
          </button>
        </div>
      </main>
    </>
  );
}
