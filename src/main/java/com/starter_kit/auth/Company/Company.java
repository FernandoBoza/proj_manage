package com.starter_kit.auth.Company;

import com.starter_kit.auth.Company.Teams.Team;
import com.starter_kit.auth.Users.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document
public class Company {
    @Id
    public String id;
    public String name;
    public String creator;
    public List<User> users = new ArrayList<>();
    public List<String> teams;

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

    public void add(User user) {
        this.users.add(user);
    }

    public List<String> getTeams() {
        return teams;
    }

    public void setTeams(List<String> team) {
        this.teams = team;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }
}
