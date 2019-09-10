package com.starter_kit.auth.Company.Teams.Projects;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document
public class Task {
    @Id
    private String id;
    private String name;
    private Date dueDate;
    private String description;
    private List<Comment> comments;

    public Task() {}

    public Task(String name, Date dueDate) {
        this.name = name;
        this.dueDate = dueDate;
    }

    public String getId() { return id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public Date getDueDate() { return dueDate; }

    public void setDueDate(Date dueDate) { this.dueDate = dueDate; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public List<Comment> getComments() { return comments; }

    public void setComments(Comment comments) { this.comments.add(comments); }
}
