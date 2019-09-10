package com.starter_kit.auth.Company.Teams.Projects;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Project {
    @Id
    private String id;
    private String name;
    private List<String> users;
}