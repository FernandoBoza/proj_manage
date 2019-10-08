package com.starter_kit.auth.Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    UserRepo userRepo;

    @SuppressWarnings("rawtypes")
    @PutMapping(path = "/update")
    public ResponseEntity updateUser(@RequestBody User user) {
        try {
            Map<Object, Object> model = new HashMap<>();
            userRepo.save(user);
            model.put("user", user);
            return ok(model);
        } catch (Exception e) {
            e.printStackTrace();
            return ok("Error updating user");
        }
    }

    @SuppressWarnings("rawtypes")
    @PutMapping(path = "/update/password")
    public ResponseEntity updatePassword(@RequestBody User user) {
        try {
            Map<Object, Object> model = new HashMap<>();
            user.setPassword(userService.updateUserPassword(user.getPassword()));
            userRepo.save(user);
            model.put("user", user);
            return ok(model);
        } catch (Exception e) {
            e.printStackTrace();
            return ok("Error updating user password");
        }
    }

    @GetMapping(path = "")
    public List<User> findAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping(path = "/id/{id}")
    public User findById(@PathVariable String id) {
        return userService.findById(String.valueOf(id));
    }

    @GetMapping(path = "/name/{name}")
    public User findUserByName(@PathVariable String name) {
        return userService.findUserByName(name);
    }
}
