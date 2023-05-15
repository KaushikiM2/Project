import axios from "axios";

export function getemployee()
{
    return axios.get('http://127.0.0.1:8000/employee/')
    .then(res => {
        return res.data

    })

}

export function addemployee(employee)

{
    console.log(employee.elements.id.value)
    debugger;
    return axios.post('http://127.0.0.1:8000/employee/',
    {
       
        id: employee.elements.id.value,
        name: employee.elements.name.value,
        designation: employee.elements.designation.value,
        email: employee.elements.email.value,
        contact: employee.elements.contact.value,
        dept: employee.elements.dept.value,
        costcenter: employee.elements.costcenter.value,
        reportingto: employee.elements.reportingto.value,
        location: employee.elements.location.value,
        salary: employee.elements.salary.value,
        
    })
    
    .then(res => {
        debugger;
        return res.data

    })}

    export  function editemployee(id, employee) {
        return axios.put('http://127.0.0.1:8000/employee/'+id+'/',
        {
            id: employee.id.value,
        name: employee.name.value,
        designation: employee.designation.value,
        email: employee.email.value,
        contact: employee.contact.value,
        dept: employee.dept.value,
        costcenter: employee.costcenter.value,
        reportingto: employee.reportingto.value,
        location: employee.location.value,
        salary: employee.salary.value,
        })
        .then(res => {
            return res.data
        })}
    
    export  function deleteemployee(id) {
        return axios.delete('http://127.0.0.1:8000/employee/'+id+'/')
        .then(res => {
            return res.data
        })}