package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    List<Employee> findByName(String name);

    List<Employee> findByPermanentTrue();

    List<Employee> findBySalaryGreaterThan(double salary);

}