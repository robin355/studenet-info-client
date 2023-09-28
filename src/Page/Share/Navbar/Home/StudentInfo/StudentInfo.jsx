import { useEffect, useState } from "react";

const StudentInfo = () => {
const [students,setStudent]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/students')
    .then(res=>res.json())
    .then(data=>setStudent(data))
},[])
console.log(students)
    return (
        <div>

<div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>Si</th>
        <th>Roll</th> 
        <th>Name</th> 
        <th>Class</th> 
        <th>Section</th> 
        <th>Address</th> 
        <th>Mobile No</th> 
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead> 
     <tbody>
{
    
    students.map((student,i) => <tr key={student._id}>
    <th>{i + 1}</th>
    <td>{student.Roll}</td>
    <td>{student.name}</td>
    <td>{student.class}</td>
    <td>{student.section}</td>
    <td>{student.address}</td>
    <td>{student.mobile}</td>
    <td>{student.email}</td>
    <td><button className='btn btn-xs btn-danger'>Delete</button></td>
</tr>)
}
    </tbody> 
  </table>
</div>
            
        </div>
    );
};

export default StudentInfo;