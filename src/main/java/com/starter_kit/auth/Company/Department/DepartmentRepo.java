package com.starter_kit.auth.Company.Department;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface DepartmentRepo extends MongoRepository<Department, String> {
    Department findTeamById(String id);
}
