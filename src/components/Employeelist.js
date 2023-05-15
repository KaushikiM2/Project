import React, { useEffect, useState} from "react"
import { getemployee, addemployee , editemployee, deleteemployee} from "./ApiService"
import AddEmployee from "./AddEmployee"
import EditEmployee from "./EditEmployee"



export default function Employeelist() {

const [employee, setEmployee] = useState([])
const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false)
const [showEditEmployeeForm, setShowEditEmployeeForm] = useState(false)
const [selectedEditData, setSelectedEditData] = useState()

useEffect(() => {
    let mount = true
    getemployee()
    .then(res => { console.log("res from api", res)
        setEmployee(res)
        return() => mount = false

    })

}, [])


const handleAddSubmit = (e) => {
    alert("error")
    addemployee(e.target).then(res => {
        setEmployee(res)
    
})

}


const handleEditBtn = (employee) => {
    setSelectedEditData(employee)
    console.log("Employee selected is", employee)
    setShowEditEmployeeForm(true)
    setShowAddEmployeeForm(false)
}

const handleEditSubmit = (e, id) => {
    editemployee(id, e.target)
    .then(res => {
        setEmployee(res)
    })
}




function handleCancelBtn() {
    setShowAddEmployeeForm(false)
}


const handleDeleteBtn = (id) => {
    deleteemployee(id)
    .then(res => {
        setEmployee(employee.filter(p=> p.id !== id))
    })
}


return (
<>
<h3> Employee List</h3>
<table border={"2px"} cellPadding={"10px"}>
    <thead>
        <tr>
        <th>ID </th>
        <th>Name</th>
        <th>Designation</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Department</th>
        <th>Cost Center</th>
        <th>REporting To</th>
        <th>Location</th>
        <th>Salary</th>
        <th>Action</th>
        </tr>
    </thead>
    <tbody>
        
            {employee.map(employee =>{
                return <tr key ={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.email}</td>
                <td>{employee.contact}</td>
                <td>{employee.dept}</td>
                <td>{employee.costcenter}</td>
                <td>{employee.reportingto}</td>
                <td>{employee.location}</td>
                <td>{employee.salary}</td>
               <td><button onClick= {()=>handleEditBtn(employee)}>Edit</button>
                 <button onClick= {()=>handleDeleteBtn(employee.id)}>Delete</button></td>
                </tr>
            })}
        
    </tbody>
</table>
<button onClick={()=>setShowAddEmployeeForm(true)}>Add Employee</button>
{showAddEmployeeForm && <AddEmployee handleAddSubmit={handleAddSubmit} handleCancelBtn = {handleCancelBtn}/>}
{showEditEmployeeForm && <EditEmployee handleEditSubmit={handleEditSubmit} selectedEditData = {selectedEditData}/>}




</>


)


}