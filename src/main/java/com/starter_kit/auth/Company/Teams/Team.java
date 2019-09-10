package com.starter_kit.auth.Company.Teams;

import com.starter_kit.auth.Users.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Team {
    @Id
    private String id;
    private String name;
    private User creator;
    private List<String> users;
    private boolean privacy;

    public Team(String name, User creator, List<String> users, boolean privacy) {
        this.name = name;
        this.creator = creator;
        this.users = users;
        this.privacy = privacy;
    }

    public String getId() {
        return id;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getUsers() {
        return users;
    }

    public void setUsers(List<String> users) {
        this.users = users;
    }

    public boolean isPrivacy() {
        return privacy;
    }

    public void setPrivacy(boolean privacy) {
        this.privacy = privacy;
    }
}
