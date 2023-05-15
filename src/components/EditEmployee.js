import React from 'react'

export default function EditEmployee({handleEditSubmit, selectedEditData}) {
  return (
    <>
    <h3>EDIT FORM:</h3>
    <form onSubmit={(e)=>handleEditSubmit(e,selectedEditData.id)}>

        ID <input type='integer' name='id' defaultValue={selectedEditData.id}/> 
        <br>
        
        </br>
        Designation <input type='text' name='designation' defaultValue={selectedEditData.designation}/> 
        <br></br>
        Email <input type='text' name='email' defaultValue={selectedEditData.email}/> <br></br>
        Contact <input type='integer' name='conatct' defaultValue={selectedEditData.contact}/> <br></br>
        Department<input type='text' name='dept' defaultValue={selectedEditData.dept}/> <br></br>
        Cost Center <input type='text' name='costcenter' defaultValue={selectedEditData.costcenter}/> <br></br>
        Reporting to<input type='text' name='reportingto' defaultValue={selectedEditData.reportingto}/> <br></br>
        Location<input type='text' name='location' defaultValue={selectedEditData.location}/> <br></br>
        Salary <input type='integer' name='salary' defaultValue={selectedEditData.salary}/> <br></br>

        
        <button type='submit'>EDIT</button>
    </form>
    </>
  )
}

