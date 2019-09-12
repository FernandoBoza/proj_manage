package com.starter_kit.auth.Company.Teams.Projects;

import com.starter_kit.auth.Company.Teams.Team;
import com.starter_kit.auth.Company.Teams.TeamRepo;
import com.starter_kit.auth.Users.User;
import com.starter_kit.auth.Users.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.starter_kit.auth.Utils.Utils.getFromOptional;

@Service
public class ProjectService {
    private final ProjectRepo projectRepo;
    private final UserRepo userRepo;
    private final TeamRepo teamRepo;

    @Autowired
    public ProjectService(ProjectRepo projectRepo, UserRepo userRepo, TeamRepo teamRepo) {
        this.projectRepo = projectRepo;
        this.userRepo = userRepo;
        this.teamRepo = teamRepo;
    }

    public Project createProject(Project project, String team_id) {
        return projectRepo.save(project);
    }

    public Team deleteProject(String project_id, String team_id) {
        Project p = getFromOptional(projectRepo.findById(project_id));
        projectRepo.delete(p);
        return getFromOptional(teamRepo.findById(team_id));
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
