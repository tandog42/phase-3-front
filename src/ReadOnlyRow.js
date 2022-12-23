import React from 'react'

function ReadOnlyRow({emp, handleEditClick}) {

  
  return (
    <tr key={emp.id}>
    <td>{emp.first_name}</td>
    <td>{emp.last_name}</td>
    <td>{emp.position}</td>
    <td>${emp.salary}</td>
    <td>
      <button onClick={e => handleEditClick(e, emp)}>Edit</button>
    </td>
  </tr>
  )
}

export default ReadOnlyRow