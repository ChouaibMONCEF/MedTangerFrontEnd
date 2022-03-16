import './StudentList.css'
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit } from "@material-ui/icons";
import { userrows as rows } from "../../DummyData"
import { Link } from "react-router-dom";

export default function StudentList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Profile", headerName: "Profile", width: 210, renderCell:(params)=>{
      return (
        <div className="studentavatarrow">
          <img className="studentimg" src={params.row.avatar} alt="" />
          {params.row.firstName + " " + params.row.lastName}
        </div>
      );
    } },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 240,
      renderCell: (params)=>{
        return (
          <div className='userbtns'>
            <Link to={/user/ + params.row.id} ><button className="userlistedit"><Edit/></button></Link>
            <Link to="/"><button className="userlistdelete"><Delete /></button></Link>
          </div>
        );
      },
    },
  ]
  
  return (
    <div className="StudentList">
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}