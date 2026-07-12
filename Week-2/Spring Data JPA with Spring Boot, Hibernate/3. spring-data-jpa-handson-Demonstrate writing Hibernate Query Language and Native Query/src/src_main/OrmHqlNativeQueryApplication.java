package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class OrmHqlNativeQueryApplication implements CommandLineRunner {

	@Autowired
	private EmployeeService employeeService;

	public static void main(String[] args) {
		SpringApplication.run(OrmHqlNativeQueryApplication.class, args);
	}

	@Override
	public void run(String... args) {

		System.out.println("----- All Employees using Native Query -----");

		List<Employee> employees = employeeService.getAllEmployeesNative();

		employees.forEach(employee -> {
			System.out.println(employee);
		});

		System.out.println("--------------------------------------------");
	}
}