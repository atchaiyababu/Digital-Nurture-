package com.cognizant.springrest.dao;

import com.cognizant.springrest.model.Department;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class DepartmentDao {

    private static ArrayList<Department> DEPARTMENT_LIST;

    @Autowired
    @Qualifier("departmentList")
    private ArrayList<Department> departmentList;

    @PostConstruct
    public void init() {
        DEPARTMENT_LIST = departmentList;
    }

    public ArrayList<Department> getAllDepartments() {
        return DEPARTMENT_LIST;
    }
}