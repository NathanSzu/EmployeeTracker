INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Legal');

INSERT INTO role (title, salary, department_id) VALUES ('Sales Lead', 100000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Salesperson', 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Lead Engineer', 150000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 120000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 125000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Legal Team Lead', 250000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id) VALUES ('Tom', 'Ferald', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Alfred', 'Smith', 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('George', 'Carlos', 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Rick', 'Svannah', 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Ethyl', 'Denver', 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Roberta', 'Clark', 5);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Samuel', 'Jackson', 6);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Carter', 'Brahm', 7);