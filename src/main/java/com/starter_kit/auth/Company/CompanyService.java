package com.starter_kit.auth.Company;

import com.starter_kit.auth.Company.Teams.Team;
import com.starter_kit.auth.Users.User;
import com.starter_kit.auth.Users.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

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
        return companyRepo.findCompanyById(id);
    }

    //    TODO: Work on this logic
    public Company addUser(String compId, String userId) {
        User user = getFromOptional(userRepo.findById(userId));
        Company c = getFromOptional(companyRepo.findById(compId));
        List<String> ids = new ArrayList<>();
        for (User u : c.getUsers()) {
            ids.add(u.getId());
        }

        if (!ids.contains(userId)) {
            c.add(user);
            user.setCompanyID(compId);
            userRepo.save(user);
            return companyRepo.save(c);
        } else {
            return null;
        }
    }

    public Company removeUser(String compId, String userId) {
        User user = getFromOptional(userRepo.findById(userId));
        Company c = getFromOptional(companyRepo.findById(compId));
        c.removeUser(user);
        user.setCompanyID(null);
        userRepo.save(user);
        return companyRepo.save(c);
    }

}
