package com.starter_kit.auth.Users;

import com.starter_kit.auth.Company.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/")
@CrossOrigin // for development purpose
public class UserController {
    @Autowired
    UserService userService;


    @GetMapping(path = "")
    public List<User> findAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping(path = "id/{id}")
    public User findById(@PathVariable String id) {
        return userService.findById(String.valueOf(id));
    }

    @GetMapping(path = "{name}")
    public User findUserByName(@PathVariable String name) {
        return userService.findUserByName(name);
    }

    @PostMapping(value = "{id}/company", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Company createCompany(@PathVariable String id, @RequestBody Company company) {
        return userService.createCompany(id ,company);
    }
}
