package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.model.Skill;
import com.cognizant.ormlearn.service.DepartmentService;
import com.cognizant.ormlearn.service.EmployeeService;
import com.cognizant.ormlearn.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class OrmlearnApplication implements CommandLineRunner {

	@Autowired
	private EmployeeService employeeService;

	@Autowired
	private DepartmentService departmentService;

	@Autowired
	private SkillService skillService;

	public static void main(String[] args) {
		SpringApplication.run(OrmlearnApplication.class, args);
	}

	@Override
	public void run(String... args) {
		testAddSkillToEmployee();
	}

	private void testAddSkillToEmployee() {

		System.out.println("========== ADD SKILL TO EMPLOYEE ==========");

		// Fetch Employee with ID 1
		Employee employee = employeeService.get(1);

		// Fetch Skill with ID 3
		Skill skill = skillService.get(3);

		// Add Skill to Employee
		List<Skill> skills = employee.getSkills();
		skills.add(skill);

		employee.setSkills(skills);

		// Save Employee
		employeeService.save(employee);

		// Print Updated Employee
		System.out.println(employee);

		// Print 
		System.out.println(employee.getSkills());
	}
}