package com.cognizant.springrest.dao;

import com.cognizant.springrest.model.Employee;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class EmployeeDao {

    private static ArrayList<Employee> EMPLOYEE_LIST;

    @Autowired
    @Qualifier("employeeList")
    private ArrayList<Employee> employeeList;

    @PostConstruct
    public void init() {
        EMPLOYEE_LIST = employeeList;
    }

    public ArrayList<Employee> getAllEmployees() {
        return EMPLOYEE_LIST;
    }
}