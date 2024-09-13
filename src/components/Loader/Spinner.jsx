import { Component } from "react";
import loading from "../../assets/LoaderBlue.gif";
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          className="my-3"
          src={loading}
          alt="loading"
          style={{ width: "80px", height: "80px" }}
        />
      </div>
    );
  }
}

export default Spinner;
