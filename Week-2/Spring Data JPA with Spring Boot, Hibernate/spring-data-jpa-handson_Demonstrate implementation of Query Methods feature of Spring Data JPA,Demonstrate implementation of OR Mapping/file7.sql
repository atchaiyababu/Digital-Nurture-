USE ormlearn;

INSERT INTO employee
(em_name, em_salary, em_permanent, em_date_of_birth, em_dp_id)
VALUES
('John',50000,true,'1998-05-15',3),
('Priya',60000,true,'1997-09-20',3),
('Rahul',45000,false,'2000-01-10',2),
('Anitha',70000,true,'1995-12-25',1),
('David',55000,true,'1996-08-18',4);

SELECT * FROM employee;