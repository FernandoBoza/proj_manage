package com.starter_kit.auth.Company.Teams.Projects;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepo extends MongoRepository<Project, String> {
}
