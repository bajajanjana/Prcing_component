import "./perks_nd_trial.css";
import check from "../../../images/icon-check.svg";
const Perks_Nd_Trial = () => {
  return (
    <div className="flex1">
      <div className="flex2">
        <ul className="perks_list">
          <li>
            <img src={check}></img>
            Unlimited Websites
          </li>
          <li>
            <img src={check}></img>
            100% data ownership
          </li>
          <li>
            <img src={check}></img>
            Email reports
          </li>
        </ul>
      </div>
      <div>
        <button className="trial_btn">Start my trial</button>
      </div>
    </div>
  );
};
export default Perks_Nd_Trial;
