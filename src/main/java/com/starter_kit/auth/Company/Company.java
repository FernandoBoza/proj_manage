package com.starter_kit.auth.Company;

import com.starter_kit.auth.Company.Department.Department;
import com.starter_kit.auth.Users.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document
public class Company {
    @Id
    private String id;
    private String name;
    private String creator;
    private String website;
    @DBRef
    private List<User> users = new ArrayList<>();
//    @DBRef
    private List<Department> departments = new ArrayList<>();

    public Company() {}

    public Company(String name, String creator) {
        this.name = name;
        this.creator = creator;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public void addUser(User user) {
        this.users.add(user);
    }

    public void removeUser(User user) { this.users.remove(user); }

    public List<Department> getDepartments() {
        return departments;
    }

    public void setDepartments(List<Department> department) { this.departments = department; }

    public void addTeam (Department department) { this.departments.add(department); }

    public void removeTeam (Department department) { this.departments.remove(department); }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }
}
