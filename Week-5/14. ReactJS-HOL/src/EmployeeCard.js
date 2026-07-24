import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>

      <button className={theme}>View</button>
      <button className={theme}>Edit</button>
    </div>
  );
}

export default EmployeeCard;