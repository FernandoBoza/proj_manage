package com.starter_kit.auth.Company.Teams;

import com.starter_kit.auth.Company.Company;
import com.starter_kit.auth.Company.CompanyRepo;
import com.starter_kit.auth.Company.CompanyService;
import com.starter_kit.auth.Users.User;
import com.starter_kit.auth.Users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {
    private final TeamRepo teamRepo;
    private final CompanyRepo companyRepo;

    @Autowired
    CompanyService companyService;
    @Autowired
    UserService userService;

    @Autowired
    public TeamService(TeamRepo teamRepo, CompanyRepo companyRepo) {
        this.teamRepo = teamRepo;
        this.companyRepo = companyRepo;
    }

    public Team createTeam(String comp_id, String user_id, Team team) {
        team.setCreator(user_id);
        team.addUser(userService.findById(user_id));
        teamRepo.save(team);
        Company c = companyService.findCompanyById(comp_id);
        c.addTeam(team);
        companyRepo.save(c);
        return team;
    }
}
