package com.starter_kit.auth.Company.Teams.Projects;

import com.starter_kit.auth.Company.Teams.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    ProjectService projectService;

    @PostMapping(value = "/create/{team_id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Team createProject(@RequestBody Project project, @PathVariable String team_id) {
        return projectService.createProject(project, team_id);
    }

    @GetMapping(value = "/id/{project_id}")
    public Project findTeamById(@PathVariable String project_id) {
        return projectService.findProjectById(project_id);
    }

    @DeleteMapping(value = "/id/{project_id}/team/{team_id}")
    public Team deleteProject(@PathVariable String project_id, @PathVariable String team_id) {
        return projectService.deleteProject(project_id, team_id);
    }

    @PostMapping(value = "/id/{project_id}/user/{user_id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Project addProjectUser(@PathVariable String project_id, @PathVariable String user_id) {
        return projectService.addProjectUser(project_id, user_id);
    }

    @DeleteMapping(value = "/id/{project_id}/user/{user_id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Project removeProjectUser(@PathVariable String project_id, @PathVariable String user_id) {
        return projectService.removeProjectUser(project_id, user_id);
    }
}
