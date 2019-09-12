package com.starter_kit.auth.Company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/company")
public class CompanyController {
    @Autowired
    CompanyService companyService;

    @PostMapping(value = "/create/user/{id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Company createCompany(@PathVariable String id, @RequestBody Company company) {
        return companyService.createCompany(id , company);
    }

    @GetMapping(value = "/id/{id}")
    public Company findCompanyById(@PathVariable String id) {
        return companyService.findCompanyById(id);
    }

    @PostMapping(value = "/id/{id}/user/{userId}")
    public Company addUser(@PathVariable String id, @PathVariable String userId) {
        return companyService.addUser(id, userId);
    }

    @DeleteMapping(value = "/id/{id}/{userId}")
    public Company removeUser(@PathVariable String id, @PathVariable String userId) {
        return companyService.removeUser(id, userId);
    }
}
