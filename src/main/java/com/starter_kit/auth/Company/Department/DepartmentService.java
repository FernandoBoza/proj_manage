package com.starter_kit.auth.Company.Department;

import com.starter_kit.auth.Company.Company;
import com.starter_kit.auth.Company.CompanyRepo;
import com.starter_kit.auth.Company.CompanyService;
import com.starter_kit.auth.Users.User;
import com.starter_kit.auth.Users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.starter_kit.auth.Utils.Utils.getFromOptional;

@Service
public class DepartmentService {
    private final DepartmentRepo departmentRepo;
    private final CompanyRepo companyRepo;

    @Autowired
    CompanyService companyService;
    @Autowired
    UserService userService;

    @Autowired
    public DepartmentService(DepartmentRepo departmentRepo, CompanyRepo companyRepo) {
        this.departmentRepo = departmentRepo;
        this.companyRepo = companyRepo;
    }

    public Department createTeam(String comp_id, String user_id, Department department) {
        Company c = companyService.findCompanyById(comp_id);
        User u = userService.findById(user_id);
        if (u.getCompanyID().equals(comp_id)) {
            department.setCreator(user_id);
            department.addUser(u);
            c.addTeam(department);
            companyRepo.save(c);
            return departmentRepo.save(department);
        } else {
            return null;
        }
    }

    public Company removeTeam(String comp_id ,String team){
        departmentRepo.delete(getFromOptional(departmentRepo.findById(team)));
        return companyRepo.findCompanyById(comp_id);
    }

    public Department addTeamUser(String team_id, String user_id) {
        Department t = getFromOptional(departmentRepo.findById(team_id));
        User u = userService.findById(user_id);
        t.addUser(u);
        return departmentRepo.save(t);
    }

    public Department removeTeamUser(String team_id, String user_id) {
        Department t = getFromOptional(departmentRepo.findById(team_id));
        User u = userService.findById(user_id);
        t.removeUser(u);
        return departmentRepo.save(t);
    }


    public Department findTeamById(String id) {
        return getFromOptional(departmentRepo.findById(id));
    }
}
