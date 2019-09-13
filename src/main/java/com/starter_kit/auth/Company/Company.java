package com.starter_kit.auth.Company;

import com.starter_kit.auth.Company.Teams.Team;
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
    @DBRef
    private List<User> users = new ArrayList<>();
//    @DBRef
    private List<Team> teams = new ArrayList<>();

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

    public List<Team> getTeams() {
        return teams;
    }

    public void setTeams(List<Team> team) { this.teams = team; }

    public void addTeam (Team team) { this.teams.add(team); }

    public void removeTeam (Team team) { this.teams.remove(team); }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }
}
