import "./rightwidget.css"
export default function rightwidget() {
  const Button = ({type}) => {
    return <button className={"rightwidgetbutton " + type}>{type}</button>
  }
  return (
    <div className="rightwidget">
      <h3 className="rightwidgettitle">Payments</h3>
      <table className="rightwidgettable">
        <tr className="rightwidgettr">
          <th className="rightwidgetth">Student</th>
          <th className="rightwidgetth">Date</th>
          <th className="rightwidgetth">Amount</th>
          <th className="rightwidgetth">Status</th>
        </tr>
        <tr className="rightwidgettr">
          <td className="rightwidgetuser">
            <img
              src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
              alt=""
              srcset=""
              className="rightwidgetimage"
            />
            <span className="rightwidgetname">Chouaib Moncef</span>
          </td>
          <td className="rightwidgetdate">2 Jan 2022</td>
          <td className="rightwidgetamount">150 Dhs</td>
          <td className="rightwidgetstatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="rightwidgettr">
          <td className="rightwidgetuser">
            <img
              src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
              alt=""
              srcset=""
              className="rightwidgetimage"
            />
            <span className="rightwidgetname">Chouaib Moncef</span>
          </td>
          <td className="rightwidgetdate">2 Jan 2022</td>
          <td className="rightwidgetamount">150 Dhs</td>
          <td className="rightwidgetstatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="rightwidgettr">
          <td className="rightwidgetuser">
            <img
              src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
              alt=""
              srcset=""
              className="rightwidgetimage"
            />
            <span className="rightwidgetname">Chouaib Moncef</span>
          </td>
          <td className="rightwidgetdate">2 Jan 2022</td>
          <td className="rightwidgetamount">150 Dhs</td>
          <td className="rightwidgetstatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="rightwidgettr">
          <td className="rightwidgetuser">
            <img
              src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
              alt=""
              srcset=""
              className="rightwidgetimage"
            />
            <span className="rightwidgetname">Chouaib Moncef</span>
          </td>
          <td className="rightwidgetdate">2 Jan 2022</td>
          <td className="rightwidgetamount">150 Dhs</td>
          <td className="rightwidgetstatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="rightwidgettr">
          <td className="rightwidgetuser">
            <img
              src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
              alt=""
              srcset=""
              className="rightwidgetimage"
            />
            <span className="rightwidgetname">Chouaib Moncef</span>
          </td>
          <td className="rightwidgetdate">2 Jan 2022</td>
          <td className="rightwidgetamount">150 Dhs</td>
          <td className="rightwidgetstatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
