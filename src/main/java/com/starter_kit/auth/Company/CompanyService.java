package com.starter_kit.auth.Company;

import com.starter_kit.auth.Users.User;
import com.starter_kit.auth.Users.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.starter_kit.auth.Utils.Constants.ADMIN;
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

    public Company createCompany(String user_id, Company company) {
        User u = getFromOptional(userRepo.findById(user_id));
        if (u.getCompanyID() == null && u.getRole().equals(ADMIN)) {
            company.setCreator(user_id);
            companyRepo.save(company);
            u.setCompanyID(company.getId());
            userRepo.save(u);
            company.addUser(u);
            return companyRepo.save(company);
        } else {
            return null;
        }
    }

    public Company findCompanyById(String id) {
        return companyRepo.findCompanyById(id);
    }

    //    TODO: Work on this logic
    public Company addUser(String compId, String userId) {
        User user = getFromOptional(userRepo.findById(userId));
        Company c = getFromOptional(companyRepo.findById(compId));
        if (!c.getUsers().contains(user)) {
            c.addUser(user);
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
        user.setCompanyID(null);
        userRepo.save(user);
        if (c.getUsers().contains(user)) {
            c.removeUser(user);
            return companyRepo.save(c);
        } else {
            return null;
        }
    }

}
