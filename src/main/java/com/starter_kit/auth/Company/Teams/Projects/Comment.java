package com.starter_kit.auth.Company.Teams.Projects;

import com.starter_kit.auth.Users.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
public class Comment {
    @Id
    private String id;
    private User User;
    private Date postDate;
    private String message;

    public Comment() {}

    public Comment(User user, Date postDate, String message) {
        User = user;
        this.postDate = postDate;
        this.message = message;
    }

    public String getId() { return id; }

    public User getUser() { return User; }

    public void setUser(User user) { User = user; }

    public Date getPostDate() { return postDate; }

    public void setPostDate(Date postDate) { this.postDate = postDate; }

    public String getMessage() { return message; }

    public void setMessage(String message) { this.message = message; }
}

