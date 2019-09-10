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
    public List<String> users;
    public List<String> teams;

    public Company() {}

    public Company(String name) { this.name = name; }

    public String getId() { return id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public List<String> getUsers() { return users; }

    public void setUsers(User users) { this.users.add(users.getId()); }

    public List<String> getTeams() { return teams; }

    public void setTeams(Team teams) { this.teams.add(teams.getId()); }
}
