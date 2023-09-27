import { useState, CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loading(userLoading) {
  let [color, setColor] = useState("#0096c7");
  return (
    <div className="sweet-loading">
      <PulseLoader
        color={color}
        loading={userLoading.loading}
        cssOverride={override}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;
