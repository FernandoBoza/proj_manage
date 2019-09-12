package com.starter_kit.auth.Company.Teams;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/team/")
public class TeamController {
    @Autowired
    TeamService teamService;

    @PostMapping(value = "{comp_id}/{user_id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Team createTeam(@PathVariable String comp_id, @PathVariable String user_id, @RequestBody Team team) {
        return teamService.createTeam(comp_id, user_id, team);
    }
}