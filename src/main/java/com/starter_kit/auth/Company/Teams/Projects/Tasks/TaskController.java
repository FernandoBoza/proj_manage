package com.starter_kit.auth.Company.Teams.Projects.Tasks;

import com.starter_kit.auth.Company.Teams.Projects.Project;
import com.starter_kit.auth.Company.Teams.Projects.Tasks.Comments.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    TaskService taskService;

    @PostMapping(value = "/create/{project_id}/{creator}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Project createTask(@PathVariable String project_id, @RequestBody Task task, @PathVariable String creator) {
        return taskService.createTask(project_id, task, creator);
    }

    @DeleteMapping(value = "/delete/{project_id}/{task_id}")
    public Project deleteTask(@PathVariable String project_id, @PathVariable String task_id) {
        return taskService.deleteTask(task_id, project_id);
    }

    @GetMapping(value = "/id/{task_id}")
    public Task findTaskById(@PathVariable String task_id) {
        return taskService.findTaskById(task_id);
    }

    @PutMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Task updateTask(@RequestBody Task task) {
        return taskService.updateTask(task);
    }

    @PostMapping(value = "/id/{task_id}/{user_id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Task createComment(@PathVariable String task_id, @RequestBody Comment comment, @PathVariable String user_id) {
        return taskService.createComment(task_id, comment, user_id);
    }

    @DeleteMapping(value = "/id/{task_id}/{task_id}")
    public Task createComment(@PathVariable String comment_id, @PathVariable String task_id) {
        return taskService.deleteComment(comment_id, task_id);
    }
}
