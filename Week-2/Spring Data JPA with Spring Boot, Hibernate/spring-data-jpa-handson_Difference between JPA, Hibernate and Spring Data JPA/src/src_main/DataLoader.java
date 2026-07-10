package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.service.EmployeeService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final EmployeeService employeeService;

    public DataLoader(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @Override
    public void run(String... args) {

        Employee employee = new Employee(101, "Atchaiya", 50000);

        employeeService.addEmployee(employee);

        System.out.println("Employee Added Successfully!");
    }
}