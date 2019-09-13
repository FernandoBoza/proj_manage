package com.starter_kit.auth.Company.Teams.Projects.Tasks;

import com.starter_kit.auth.Company.Teams.Projects.Comment;
import com.starter_kit.auth.Users.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document
public class Task {
    @Id
    private String id;
    private String name;
    private User creator;
    private User assignee;
    private Date dueDate;
    private String description;
    private List<Comment> comments = new ArrayList<>();

    public Task() {}

    public Task(String name) {
        this.name = name;
    }

    public String getId() { return id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public Date getDueDate() { return dueDate; }

    public void setDueDate(Date dueDate) { this.dueDate = dueDate; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public List<Comment> getComments() { return comments; }

    public void setComments(List<Comment> comments) { this.comments = comments; }
}
