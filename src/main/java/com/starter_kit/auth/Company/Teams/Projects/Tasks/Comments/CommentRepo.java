package com.starter_kit.auth.Company.Teams.Projects.Tasks.Comments;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommentRepo extends MongoRepository<Comment, String> {
}
