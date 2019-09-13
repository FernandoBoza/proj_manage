package com.starter_kit.auth.Company.Teams;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeamRepo extends MongoRepository<Team, String> {
    Team findTeamById(String id);
}
