package com.starter_kit.auth.Company.Teams.Projects;

import com.starter_kit.auth.Users.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document
public class Project {
    @Id
    private String id;
    private String name;
    private List<User> users = new ArrayList<>();
    private List<Task> tasks = new ArrayList<>();
    private boolean privacy = false;

    public Project() { }

    public Project(String name) {
        this.name = name;
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

    public void removeUser(User user) {
        this.users.remove(user);
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public void addTasks(Task tasks) {
        this.tasks.add(tasks);
    }

    public void removeTasks(Task tasks) {
        this.tasks.remove(tasks);
    }

    public boolean isPrivacy() {
        return privacy;
    }

    public void setPrivacy(boolean privacy) {
        this.privacy = privacy;
    }
}