package com.starter_kit.auth.Company;

import com.starter_kit.auth.Company.Teams.Team;
import com.starter_kit.auth.Users.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Company {
    @Id
    public String id;
    public String name;
    public User creator;
    public List<User> users;
    public List<String> teams;

    public Company() {}

    public Company(String name, User creator) {
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

    public void setUsers(User users) {
        this.users.add(users);
    }

    public List<String> getTeams() {
        return teams;
    }

    public void setTeams(Team teams) {
        this.teams.add(teams.getId());
    }
}
