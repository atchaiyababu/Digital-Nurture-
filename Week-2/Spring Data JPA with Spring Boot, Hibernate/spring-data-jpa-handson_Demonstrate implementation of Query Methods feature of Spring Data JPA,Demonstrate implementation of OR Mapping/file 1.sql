USE ormlearn;

CREATE TABLE employee (
    em_id INT AUTO_INCREMENT PRIMARY KEY,
    em_name VARCHAR(50),
    em_salary DOUBLE,
    em_permanent BOOLEAN,
    em_date_of_birth DATE,
    em_dp_id INT,
    FOREIGN KEY (em_dp_id)
        REFERENCES department(dp_id)
);