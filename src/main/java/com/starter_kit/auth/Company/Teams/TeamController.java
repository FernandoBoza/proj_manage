package com.starter_kit.auth.Company.Teams;

import com.starter_kit.auth.Company.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/team/")
public class TeamController {
    @Autowired
    TeamService teamService;

    @PostMapping(value = "create/{comp_id}/{user_id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Team createTeam(@PathVariable String comp_id, @PathVariable String user_id, @RequestBody Team team) {
        return teamService.createTeam(comp_id, user_id, team);
    }

    @DeleteMapping(value = "delete/{comp_id}/{team_id}")
    public Company removeTeam(@PathVariable String comp_id, @PathVariable String team_id) {
        return teamService.removeTeam(comp_id, team_id);
    }

    @PostMapping(value = "{team_id}/{user_id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Team addTeamUser(@PathVariable String team_id, @PathVariable String user_id) {
        return teamService.addTeamUser(team_id, user_id);
    }

    @DeleteMapping(value = "{team_id}/{user_id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Team removeTeamUser(@PathVariable String team_id, @PathVariable String user_id) {
        return teamService.removeTeamUser(team_id, user_id);
    }
}