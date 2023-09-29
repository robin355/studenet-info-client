import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const StudentInfo = () => {
const [students,setStudent]=useState([]);
useEffect(()=>{
    fetch('https://student-info-server-2er3iek2e-robin355.vercel.app/students')
    .then(res=>res.json())
    .then(data=>setStudent(data))
},[])


const handleDelete = (id) => {
  console.log(id)
  fetch(`https://student-info-server-2er3iek2e-robin355.vercel.app/students/${id}`, {
      method: 'DELETE',

  })
      .then(res => res.json())
      .then(data => {
          if (data.deletedCount > 0) {
              toast.success('delete successfully')
              const remaing = students.filter(studentId => studentId._id !== id)
              setStudent(remaing)
          }
      })
    }
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
      students.map((student, i) => <tr key={student._id}>
          <th>{i + 1}</th>
          <td>{student.Roll}</td>
          <td>{student.name}</td>
          <td>{student.clases}</td>
          <td>{student.section}</td>
          <td>{student.address}</td>
          <td>{student.mobile}</td>
          <td>{student.email}</td>
          <td><button className='btn btn-xs btn-danger' onClick={()=>handleDelete(student._id)}>Delete</button></td>
          <Link to={`/update/${student._id}`} > <button className='btn btn-xs btn-danger'>Update</button></Link>
      </tr>)
  }
    </tbody> 
  </table>
</div>
            
        </div>
    );
};

export default StudentInfo;