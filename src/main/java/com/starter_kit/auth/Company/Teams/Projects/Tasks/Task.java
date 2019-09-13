package com.starter_kit.auth.Company.Teams.Projects.Tasks;

import com.starter_kit.auth.Company.Teams.Projects.Tasks.Comments.Comment;
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
    private String creator;
    private String assignee;
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

    public String getCreator() { return creator; }

    public void setCreator(String creator) { this.creator = creator; }

    public String getAssignee() { return assignee; }

    public void setAssignee(String assignee) { this.assignee = assignee; }

    public Date getDueDate() { return dueDate; }

    public void setDueDate(Date dueDate) { this.dueDate = dueDate; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public List<Comment> getComments() { return comments; }

    public void setComments(List<Comment> comments) { this.comments = comments; }

    public List<Comment> addComment(Comment comment){
        this.comments.add(comment);
        return this.comments;
    }

    public List<Comment> removeComment(Comment comment){
        this.comments.remove(comment);
        return this.comments;
    }
}
