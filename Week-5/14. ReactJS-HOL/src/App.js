import React, { useState } from 'react';
import './App.css';
import EmployeesList from './EmployeesList';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  const employees = [
    {
      id: 1,
      name: 'John',
      role: 'Developer'
    },
    {
      id: 2,
      name: 'Jane',
      role: 'Tester'
    }
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme}>
        <h1>Employee Management</h1>

        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Change Theme
        </button>

        <EmployeesList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;