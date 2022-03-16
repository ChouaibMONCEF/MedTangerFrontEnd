import "./featinfo.css"
import { ArrowDownwardRounded, ArrowUpwardRounded } from "@material-ui/icons";

export default function featinfo() {
  return (
    <div className="featured">
      <div className="featItem">
        <span className="featTitle">Revenue</span>
        <div className="featMoneyContainer">
          <span className="featMoney">2,532$</span>
          <span className="featRate">
            -21.9% <ArrowDownwardRounded className="featIcon negative" />
          </span>
        </div>
        <span className="featSub">Compared to last month</span>
      </div>
      <div className="featItem">
        <span className="featTitle">Students</span>
        <div className="featMoneyContainer">
          <span className="featMoney">1,312$</span>
          <span className="featRate">
            +11.9% <ArrowUpwardRounded className="featIcon" />
          </span>
        </div>
        <span className="featSub">Compared to last month</span>
      </div>
      <div className="featItem">
        <span className="featTitle">Rooms</span>
        <div className="featMoneyContainer">
          <span className="featMoney">1,312$</span>
          <span className="featRate">
            +11.9% <ArrowUpwardRounded className="featIcon" />
          </span>
        </div>
        <span className="featSub">Compared to last month</span>
      </div>
    </div>
  );
}
