package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Query Methods (Hands-on 6)
    public List<Employee> getEmployeeByName(String name) {
        return employeeRepository.findByName(name);
    }

    public List<Employee> getPermanentEmployees() {
        return employeeRepository.findByPermanentTrue();
    }

    public List<Employee> getEmployeesWithSalaryGreaterThan(double salary) {
        return employeeRepository.findBySalaryGreaterThan(salary);
    }

    // Hands-on 4 Methods

    @Transactional
    public Employee get(int id) {
        return employeeRepository.findById(id).get();
    }

    @Transactional
    public void save(Employee employee) {
        employeeRepository.save(employee);
    }
}