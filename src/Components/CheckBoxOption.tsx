import { FONT_FAMILY } from "../Shared/constants";
import { boxStatus, firstBoxStatus } from "../Shared/styles";

export const CheckboxOptions = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={firstBoxStatus}>
        <div style={{ fontSize: 30, fontFamily: FONT_FAMILY }}>Approved</div>
        <input type="checkbox" checked />
      </div>
      <div style={boxStatus}>
        <div style={{ fontSize: 30, fontFamily: FONT_FAMILY }}>Rejected</div>
        <input type="checkbox" />
      </div>
      <div style={boxStatus}>
        <div style={{ fontSize: 30, fontFamily: FONT_FAMILY }}>
          More information
        </div>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default CheckboxOptions;
