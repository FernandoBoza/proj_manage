package com.starter_kit.auth.Company.Department;

import com.starter_kit.auth.Company.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/team")
public class DepartmentController {
    @Autowired
    DepartmentService departmentService;

    @PostMapping(value = "/create/{comp_id}/user/{user_id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Department createTeam(@PathVariable String comp_id, @PathVariable String user_id, @RequestBody Department department) {
        return departmentService.createTeam(comp_id, user_id, department);
    }

    @GetMapping(value = "/id/{id}")
    public Department findTeamById(@PathVariable String id) {
        return departmentService.findTeamById(id);
    }

    @DeleteMapping(value = "/delete/company/{comp_id}/id/{team_id}")
    public Company removeTeam(@PathVariable String comp_id, @PathVariable String team_id) {
        return departmentService.removeTeam(comp_id, team_id);
    }

    @PostMapping(value = "/id/{team_id}/user/{user_id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Department addTeamUser(@PathVariable String team_id, @PathVariable String user_id) {
        return departmentService.addTeamUser(team_id, user_id);
    }

    @DeleteMapping(value = "/id/{team_id}/user/{user_id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Department removeTeamUser(@PathVariable String team_id, @PathVariable String user_id) {
        return departmentService.removeTeamUser(team_id, user_id);
    }
}