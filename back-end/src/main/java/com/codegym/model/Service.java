package com.codegym.model;

import javax.persistence.*;

@Entity
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String image;
    private String area;
    private Long cost;
    private String maxPeople;
    @ManyToOne(targetEntity = RentType.class)
    private RentType rentType;
    @ManyToOne(targetEntity = AttachService.class)
    private AttachService attachService;

    public Service() {
    }

    public Service(Long id, String name, String image, String area, Long cost, String maxPeople, RentType rentType, AttachService attachService) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.area = area;
        this.cost = cost;
        this.maxPeople = maxPeople;
        this.rentType = rentType;
        this.attachService = attachService;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public Long getCost() {
        return cost;
    }

    public void setCost(Long cost) {
        this.cost = cost;
    }

    public String getMaxPeople() {
        return maxPeople;
    }

    public void setMaxPeople(String maxPeople) {
        this.maxPeople = maxPeople;
    }

    public RentType getRentType() {
        return rentType;
    }

    public void setRentType(RentType rentTypeList) {
        this.rentType = rentTypeList;
    }

    public AttachService getAttachService() {
        return attachService;
    }

    public void setAttachService(AttachService attachServiceList) {
        this.attachService = attachServiceList;
    }
}
