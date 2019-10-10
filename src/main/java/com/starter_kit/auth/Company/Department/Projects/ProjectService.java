package com.starter_kit.auth.Company.Department.Projects;

import com.starter_kit.auth.Company.Department.Department;
import com.starter_kit.auth.Company.Department.DepartmentRepo;
import com.starter_kit.auth.Users.User;
import com.starter_kit.auth.Users.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.starter_kit.auth.Utils.Utils.getFromOptional;

@Service
public class ProjectService {
    private final ProjectRepo projectRepo;
    private final UserRepo userRepo;
    private final DepartmentRepo departmentRepo;

    @Autowired
    public ProjectService(ProjectRepo projectRepo, UserRepo userRepo, DepartmentRepo departmentRepo) {
        this.projectRepo = projectRepo;
        this.userRepo = userRepo;
        this.departmentRepo = departmentRepo;
    }

    public Department createProject(Project project, String team_id) {
        Department t = getFromOptional(departmentRepo.findById(team_id));
        projectRepo.save(project);
        t.addProject(project);
        return departmentRepo.save(t);
    }

    public Department deleteProject(String project_id, String team_id) {
        projectRepo.delete(getFromOptional(projectRepo.findById(project_id)));
        return departmentRepo.findTeamById(team_id);
    }

    public Project addProjectUser(String project_id, String user_id) {
        User u = getFromOptional(userRepo.findById(user_id));
        Project p = getFromOptional(projectRepo.findById(project_id));
        p.addUser(u);
        return projectRepo.save(p);
    }

    public Project removeProjectUser(String project_id, String user_id) {
        User u = getFromOptional(userRepo.findById(user_id));
        Project p = getFromOptional(projectRepo.findById(project_id));
        p.removeUser(u);
        return projectRepo.save(p);
    }

    public Project findProjectById(String project_id) {
        return getFromOptional(projectRepo.findById(project_id));
    }

}
