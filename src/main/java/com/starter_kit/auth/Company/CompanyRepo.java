package com.starter_kit.auth.Company;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CompanyRepo extends MongoRepository<Company, String> {
    public Company findCompanyById(String id);
}
