import React, { useState } from 'react'


function Attendancecontent() {

  const [attendanceRecords, setAttendanceRecords] = useState([
    {
      date: "2025-08-11",
      employeeId: "EMP001",
      name: "Aarav Kumar",
      department: "Engineering",
      role: "Frontend Developer",
      status: "Present",
      checkIn: "09:05",
      checkOut: "17:45"
    },
    {
      date: "2025-08-11",
      employeeId: "EMP002",
      name: "Meera Iyer",
      department: "Engineering",
      role: "Backend Developer",
      status: "Absent",
      reason: "Sick Leave"
    },
    {
      date: "2025-08-11",
      employeeId: "EMP003",
      name: "Ravi Sharma",
      department: "HR",
      role: "HR Manager",
      status: "Present",
      checkIn: "08:55",
      checkOut: "17:30"
    },
    {
      date: "2025-08-10",
      employeeId: "EMP001",
      name: "Aarav Kumar",
      department: "Engineering",
      role: "Frontend Developer",
      status: "Present",
      checkIn: "09:10",
      checkOut: "17:40"
    },
    {
      date: "2025-08-10",
      employeeId: "EMP002",
      name: "Meera Iyer",
      department: "Engineering",
      role: "Backend Developer",
      status: "Present",
      checkIn: "09:00",
      checkOut: "17:50"
    },
    {
      date: "2025-08-10",
      employeeId: "EMP003",
      name: "Ravi Sharma",
      department: "HR",
      role: "HR Manager",
      status: "Leave",
      leaveType: "Annual Leave"
    }
  ])
  const [disablecheckIn, setCheckIn] = useState(false);
  const [disablecheckOut, setCheckOut] = useState(false);

  const CheckIn = () => {
    const now = new Date();
    const todayDate = now.toISOString().split("T")[0]; // YYYY-MM-DD
    const currentTime = now.toTimeString().slice(0, 5); // HH:MM

    const employeeId = "EMP001"; // example: logged-in employee
    const employeeName = "Pugazh";
    const department = "Engineering";
    const role = "Frontend Developer";
    setCheckIn(true);



    setAttendanceRecords((prev) => {
      const filter = prev.filter((item) => item.date !== todayDate)

      return [
        {
          date: todayDate,
          employeeId,
          name: employeeName,
          department,
          role,
          status: "Present",
          checkIn: currentTime,
          checkOut:''
        },
        ...filter
      ];
    });


  }

  const CheckOut = () => {
    const now = new Date();
    const todayDate = now.toISOString().split("T")[0]; // YYYY-MM-DD
    const currentTime = now.toTimeString().slice(0, 5); // HH:MM

    const employeeId = "EMP001"; // example: logged-in employee
    const employeeName = "Pugazh";
    const department = "Engineering";
    const role = "Frontend Developer";
    setCheckOut(true);
    const index = attendanceRecords.findIndex((item) => item.date = todayDate);

  
    setAttendanceRecords((prev) => prev[index],{ checkOut : currentTime})

  }

  return (
    <div className="container">
      <div className="m-3 d-flex  justify-content-between">
        <button className='btn btn-primary' disabled={disablecheckIn} onClick={() => CheckIn()}>Check In</button>
        <button className='btn btn-danger' disabled={disablecheckOut} onClick={() => CheckOut()}>Check Out</button>
      </div>
      <div className='m-5' style={{ textAlign: "center" }}>
        <h2>Employee Attendance</h2>
        <table className='table' style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Check In</th>
              <th scope="col">Check Out</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.status}</td>
                <td>{row.checkIn}</td>
                <td>{row.checkOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />

      </div>

    </div >
  )
}

export default Attendancecontent