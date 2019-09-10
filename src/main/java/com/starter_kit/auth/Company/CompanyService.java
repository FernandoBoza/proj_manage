package com.starter_kit.auth.Company;

import com.starter_kit.auth.Company.Teams.Team;
import com.starter_kit.auth.Users.User;
import com.starter_kit.auth.Users.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

import static com.starter_kit.auth.Utils.Utils.getFromOptional;

@Service
public class CompanyService {
    private final CompanyRepo companyRepo;
    private final UserRepo userRepo;

    @Autowired
    public CompanyService(CompanyRepo companyRepo, UserRepo userRepo) {
        this.companyRepo = companyRepo;
        this.userRepo = userRepo;
    }

    public Company findCompanyById(String id) {
        return getFromOptional(companyRepo.findById(id));
    }

//    TODO: Work on this logic
    public List<User> addUser(String compId, String userId) {
        User user = getFromOptional(userRepo.findById(userId));
        Company c = getFromOptional(companyRepo.findById(compId));
        c.setUsers(user);
        return c.getUsers();
    }

    public String removeUser(String compId, String userId) {
        User user = getFromOptional(userRepo.findById(userId));
        String name = user.getName();
        Company c = getFromOptional(companyRepo.findById(compId));
        c.getUsers().remove(user);
        return "removed " + name;
    }

}
