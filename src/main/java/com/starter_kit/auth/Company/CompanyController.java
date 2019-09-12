package com.starter_kit.auth.Company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/company")
public class CompanyController {
    @Autowired
    CompanyService companyService;


    @GetMapping(value = "/{id}")
    public Company findCompanyById(@PathVariable String id) {
        return companyService.findCompanyById(id);
    }

    @PostMapping(value = "/{id}/{userId}")
    public Company addUser(@PathVariable String id, @PathVariable String userId) {
        return companyService.addUser(id, userId);
    }

    @DeleteMapping(value = "/{id}/{userId}")
    public Company removeUser(@PathVariable String id, @PathVariable String userId) {
        return companyService.removeUser(id, userId);
    }
}
