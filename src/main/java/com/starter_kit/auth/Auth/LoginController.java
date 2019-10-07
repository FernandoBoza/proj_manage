package com.starter_kit.auth.Auth;

import com.starter_kit.auth.Configs.JwtTokenProvider;
import com.starter_kit.auth.Users.User;
import com.starter_kit.auth.Users.UserRepo;
import com.starter_kit.auth.Users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import static org.springframework.http.ResponseEntity.ok;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RequestMapping("/")
@RestController
public class LoginController {

    @Autowired
    private UserService userService;

    @Autowired
    UserRepo users;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @SuppressWarnings("rawtypes")
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody User data) {
        try {
            String email = data.getEmail();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, data.getPassword()));
            String token = jwtTokenProvider.createToken(email,data.getRole());
            Map<Object, Object> model = new HashMap<>();
            model.put("user", userService.findUserByEmail(email));
            model.put("token", token);
            return ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid email/password supplied");
        }
    }

    @SuppressWarnings("rawtypes")
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody User user) {
        User userExists = userService.findUserByEmail(user.getEmail());
        if (userExists != null) {
            throw new BadCredentialsException("User with email: " + user.getEmail() + " already exists");
        }
        userService.createUser(user);
        Map<Object, Object> model = new HashMap<>();
        model.put("user", userService.findUserByEmail(user.getEmail()));
        model.put("message", "User registered successfully");
        return ok(model);
    }

    @GetMapping(path = "/dashboard")
    public User forwardToDashboard() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return userService.findUserByEmail(auth.getName());
    }

    @GetMapping(path = "/dashboard/user")
    public User forwardToUserDashboard() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return userService.findUserByEmail(auth.getName());
    }

}
