package com.starter_kit.auth.Company.Department.Projects.Tasks;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepo extends MongoRepository<Task, String> {
}
