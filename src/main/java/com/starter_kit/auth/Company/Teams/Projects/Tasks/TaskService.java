package com.starter_kit.auth.Company.Teams.Projects.Tasks;

import com.starter_kit.auth.Company.Teams.Projects.Project;
import com.starter_kit.auth.Company.Teams.Projects.ProjectRepo;
import com.starter_kit.auth.Company.Teams.Projects.ProjectService;
import com.starter_kit.auth.Users.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.starter_kit.auth.Utils.Utils.getFromOptional;

@Service
public class TaskService {
    private final TaskRepo taskRepo;
    private final ProjectRepo projectRepo;

    public TaskService(TaskRepo taskRepo, ProjectRepo projectRepo) {
        this.taskRepo = taskRepo;
        this.projectRepo = projectRepo;
    }

    @Autowired
    public ProjectService projectService;

    public Project createTask(String project_id, Task task, String creator) {
        task.setCreator(creator);
        taskRepo.save(task);
        Project p = projectService.findProjectById(project_id);
        p.addTasks(task);
        return projectRepo.save(p);
    }

    public Project deleteTask(String task_id, String project_id) {
        Project p = projectService.findProjectById(project_id);
        p.removeTasks(getFromOptional(taskRepo.findById(task_id)));
        return projectRepo.save(p);
    }

    public Task findTaskById(String id) {
        return getFromOptional(taskRepo.findById(id));
    }

    public Task updateTask(Task task) {
        return taskRepo.save(task);
    }


}
