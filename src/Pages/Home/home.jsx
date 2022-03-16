import FeatInfo from "../../Components/FeaturedInfo/featinfo"
import Chart from "../../Components/Chart/chart";
import Cake from "../../Components/Cake/cake";
import RightWidget from "../../Components/RightWidget/rightwidget";
import LeftWidget from "../../Components/LeftWidget/leftwidget";
import "./home.css"
import {usersData, percentages} from "../../DummyData"



export default function () {
  return (
    <div className="home">
      <FeatInfo />
      <div className="statistics">
        <Chart data={usersData} title="Students Analytics" grid />
        <Cake data={percentages} title="Studens Grades" />
      </div>
      <div className="homeWidgets">
        <LeftWidget />
        <RightWidget />
      </div>
    </div>
  );
}
