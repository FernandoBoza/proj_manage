package com.starter_kit.auth.Company.Teams;

import com.starter_kit.auth.Company.Company;
import com.starter_kit.auth.Company.CompanyRepo;
import com.starter_kit.auth.Company.CompanyService;
import com.starter_kit.auth.Users.User;
import com.starter_kit.auth.Users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.starter_kit.auth.Utils.Utils.getFromOptional;

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
        Company c = companyService.findCompanyById(comp_id);
        User u = userService.findById(user_id);
        if (u.getCompanyID().equals(comp_id)) {
            team.setCreator(user_id);
            team.addUser(u);
            c.addTeam(team);
            companyRepo.save(c);
            return teamRepo.save(team);
        } else {
            return null;
        }
    }

    public Company removeTeam(String comp_id ,String team){
        teamRepo.delete(getFromOptional(teamRepo.findById(team)));
        return companyRepo.findCompanyById(comp_id);
    }

    public Team addTeamUser(String team_id, String user_id) {
        Team t = getFromOptional(teamRepo.findById(team_id));
        User u = userService.findById(user_id);
        t.addUser(u);
        return teamRepo.save(t);
    }

    public Team removeTeamUser(String team_id, String user_id) {
        Team t = getFromOptional(teamRepo.findById(team_id));
        User u = userService.findById(user_id);
        t.removeUser(u);
        return teamRepo.save(t);
    }


    public Team findTeamById(String id) {
        return getFromOptional(teamRepo.findById(id));
    }
}
