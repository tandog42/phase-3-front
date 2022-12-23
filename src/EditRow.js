import React from 'react'

function EditRow({emp}) {




  
  return (
    <tr key={emp.id}>
    <td>
      <input
        type="text"
        required="required"
        placeholder="First Name..."
        name="firstName"
      ></input>
    </td>
    <td>
      <input
        type="text"
        required="required"
        placeholder="Last Name..."
        name="lastName"
       
      ></input>
    </td>
    <td>
      <input
        type="text"
        required="required"
        placeholder="Position..."
        name="position"
 
      ></input>
    </td>
    <td>
      <input
        type="text"
        required="required"
        placeholder="Salary..."
        name="salary"
       
      ></input>
    </td>
    <td>
      <button type="submit">Save</button>
     
    
    
    </td>
  </tr>
);
};

export default EditRow