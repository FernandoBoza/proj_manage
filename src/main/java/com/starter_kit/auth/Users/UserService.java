package com.starter_kit.auth.Users;

import com.starter_kit.auth.Company.Company;
import com.starter_kit.auth.Company.CompanyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static com.starter_kit.auth.Utils.Utils.*;
import static com.starter_kit.auth.Utils.Constants.*;


@Service
public class UserService implements UserDetailsService {
    private final UserRepo userRepo;
    private final CompanyRepo companyRepo;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(UserRepo userRepo, CompanyRepo companyRepo) {
        this.userRepo = userRepo;
        this.companyRepo = companyRepo;

    }

    public User createUser(User user) {
        User userExist = findUserByEmail(user.getEmail());
        if (userExist != null) {
            return null;
        } else {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

            if (user.getRole() == null) {
                user.setRole(ADMIN);
            } else {
                user.setRole(USER);
            }
            return userRepo.save(user);
        }
    }

    public User findUserByEmail(String email) {
        return userRepo.findUserByEmail(email);
    }

    public User findById(String id) {
        return getFromOptional(userRepo.findById(id));
    }

    public User findUserByName(String name) {
        return userRepo.findUserByName(name);
    }

    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepo.findUserByEmail(email);
        if (user != null) {
            List<GrantedAuthority> authorities = getUserAuthority(user.getRole());
            return buildUserForAuthentication(user, authorities);
        } else {
            throw new UsernameNotFoundException("user not found");
        }
    }

    private List<GrantedAuthority> getUserAuthority(String userRoles) {
        Set<GrantedAuthority> roles = new HashSet<>();
        roles.add(new SimpleGrantedAuthority(userRoles));

        return new ArrayList<>(roles);
    }

    private UserDetails buildUserForAuthentication(User user, List<GrantedAuthority> authorities) {
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
    }

    public Company createCompany(String userId,Company company) {
        User u = findById(userId);
        if (u.getCompanyID() == null && u.getRole().equals(ADMIN)){
            companyRepo.save(company);
            u.setCompanyID(company.getId());
            return company;
        } else {
            return null;
        }
    }

}
