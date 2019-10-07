package com.starter_kit.auth.Company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import static org.springframework.http.ResponseEntity.ok;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RequestMapping("/company")
@RestController
public class CompanyController {
    @Autowired
    CompanyService companyService;

    @SuppressWarnings("rawtypes")
    @PostMapping("/create/user/{id}")
    public ResponseEntity createCompany(@PathVariable String id, @RequestBody Company company) {
        try {
            Map<Object, Object> model = new HashMap<>();
            model.put("company", companyService.createCompany(id , company));
            return ok(model);
        } catch (Exception e) {
            e.printStackTrace();
            return ok("Error creating company on the backend");
        }
    }

    @GetMapping("/id/{id}")
    public Company findCompanyById(@PathVariable String id) {
        return companyService.findCompanyById(id);
    }

    @PostMapping("/id/{id}/user/{userId}")
    public Company addUser(@PathVariable String id, @PathVariable String userId) {
        return companyService.addUser(id, userId);
    }

    @DeleteMapping("/id/{id}/{userId}")
    public Company removeUser(@PathVariable String id, @PathVariable String userId) {
        return companyService.removeUser(id, userId);
    }
}
