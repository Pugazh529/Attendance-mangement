import React from 'react'


function Attendancecontent() {

const attendanceRecords = [
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
];

   

    
    return (
        <div className="container">

            <div className='m-5' style={{ textAlign: "center" }}>
                <h2>Employee Attendance</h2>
                <table className='table' style={{ margin: "auto" }}>
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceRecords.map((row, index) => (
                            <tr key={index}>
                                <td>{row.date}</td>
                                <td>{row.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                
            </div>

        </div>
    )
}

export default Attendancecontent