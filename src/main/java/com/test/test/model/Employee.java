package com.test.test.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private long id;
    @Column(name = "first_name", nullable = false)
    @Getter
    @Setter
    private String firstName;
    @Column(name = "last_name", nullable = false)
    @Getter
    @Setter
    private String lastName;
    @Column(name = "email_address", nullable = false)
    @Getter
    @Setter
    private String emailId;

    public Employee() {

    }

    public Employee(String firstName, String lastName, String emailId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }
    //getter/setter methods
}