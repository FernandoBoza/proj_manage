package com.starter_kit.auth.Company;

import com.starter_kit.auth.Users.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public List<User> addUser(@PathVariable String id, @PathVariable String userId) {
        return companyService.addUser(id, userId);
    }

    @PostMapping(value = "/{id}/{userId}")
    public String removeUser(@PathVariable String id, @PathVariable String userId) {
        return companyService.removeUser(id, userId);
    }
}
