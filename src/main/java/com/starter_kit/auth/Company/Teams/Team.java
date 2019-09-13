package com.starter_kit.auth.Company.Teams;

import com.starter_kit.auth.Company.Teams.Projects.Project;
import com.starter_kit.auth.Users.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document
public class Team {
    @Id
    private String id;
    private String name;
    private String creator;
    private List<User> users = new ArrayList<>();
    @DBRef
    private List<Project> projects = new ArrayList<>();
    private boolean privacy = false;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Team team = (Team) o;

        return getId() != null ? getId().equals(team.getId()) : team.getId() == null;
    }

    @Override
    public int hashCode() {
        return getId() != null ? getId().hashCode() : 0;
    }

    public Team() {
    }

    public Team(String name, String creator) {
        this.name = name;
        this.creator = creator;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public void addProject(Project project) { this.projects.add(project); }

    public void removeProject(Project project) { this.projects.remove(project); }

    public String getId() {
        return id;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<User> getUsers() { return users; }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public void addUser(User user) { this.users.add(user); }

    public void removeUser(User user) { this.users.remove(user); }

    public boolean isPrivacy() {
        return privacy;
    }

    public void setPrivacy(boolean privacy) {
        this.privacy = privacy;
    }
}
