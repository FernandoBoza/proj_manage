package com.starter_kit.auth.Company.Teams.Projects.Tasks.Comments;

import com.starter_kit.auth.Users.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

public class Comment {
    @Id
    private String id;
    private User user;
    private Date postDate;
    private String message;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Comment comment = (Comment) o;

        return getId() != null ? getId().equals(comment.getId()) : comment.getId() == null;
    }

    @Override
    public int hashCode() {
        return getId() != null ? getId().hashCode() : 0;
    }

    public Comment() {}

    public Comment(User user, String message) {
        this.user = user;
        this.postDate = new Date();
        this.message = message;
    }

    public String getId() { return id; }

    public User getUser() { return user; }

    public void setUser(User user) { this.user = user; }

    public Date getPostDate() { return postDate; }

    public void setPostDate(Date postDate) { this.postDate = postDate; }

    public String getMessage() { return message; }

    public void setMessage(String message) { this.message = message; }
}

