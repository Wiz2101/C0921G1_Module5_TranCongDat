package com.codegym.model;

import javax.persistence.*;

@Entity
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    @ManyToOne(targetEntity = Customer.class)
    private Contract contract;
    @ManyToOne(targetEntity = Service.class)
    private Service service;
    @ManyToOne(targetEntity = Employee.class)
    private Employee employee;
    private String startDate;
    private String endDate;
    private Long deposit;

    public Contract() {
    }

    public Contract(Long id, String code, Contract contract, Service service, Employee employee, String startDate, String endDate, Long deposit) {
        this.id = id;
        this.code = code;
        this.contract = contract;
        this.service = service;
        this.employee = employee;
        this.startDate = startDate;
        this.endDate = endDate;
        this.deposit = deposit;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contractList) {
        this.contract = contractList;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service serviceList) {
        this.service = serviceList;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employeeList) {
        this.employee = employeeList;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public Long getDeposit() {
        return deposit;
    }

    public void setDeposit(Long deposit) {
        this.deposit = deposit;
    }
}
