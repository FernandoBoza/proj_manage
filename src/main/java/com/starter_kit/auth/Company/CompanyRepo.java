package com.starter_kit.auth.Company;

import com.starter_kit.auth.Users.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CompanyRepo extends MongoRepository<Company, String> {
    Company findCompanyById(String id);
}
