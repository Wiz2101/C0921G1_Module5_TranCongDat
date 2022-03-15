package com.codegym.model;

import javax.persistence.*;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String birthday;
    private String idCard;
    private String phone;
    private String email;
    @ManyToOne(targetEntity = Education.class)
    private Education education;
    @ManyToOne(targetEntity = Position.class)
    private Position position;
    @ManyToOne(targetEntity = Department.class)
    private Department department;
    private Long salary;

    public Employee() {
    }

    public Employee(Long id, String name, String birthday, String idCard, String phone, String email, Education education, Position position, Department department, Long salary) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.idCard = idCard;
        this.phone = phone;
        this.email = email;
        this.education = education;
        this.position = position;
        this.department = department;
        this.salary = salary;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Education getEducation() {
        return education;
    }

    public void setEducation(Education educationList) {
        this.education = educationList;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position positionList) {
        this.position = positionList;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department departmentList) {
        this.department = departmentList;
    }

    public Long getSalary() {
        return salary;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }
}
