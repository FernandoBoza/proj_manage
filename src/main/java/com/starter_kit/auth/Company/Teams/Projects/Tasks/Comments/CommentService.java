package com.starter_kit.auth.Company.Teams.Projects.Tasks.Comments;

import com.starter_kit.auth.Company.Teams.Projects.Tasks.Task;
import com.starter_kit.auth.Company.Teams.Projects.Tasks.TaskRepo;
import com.starter_kit.auth.Company.Teams.Projects.Tasks.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.starter_kit.auth.Utils.Utils.getFromOptional;

@Service
public class CommentService {
    private final CommentRepo commentRepo;
    private final TaskRepo taskRepo;

    @Autowired
    TaskService taskService;

    public CommentService(CommentRepo commentRepo, TaskRepo taskRepo) {
        this.commentRepo = commentRepo;
        this.taskRepo = taskRepo;
    }

    public Task createComment(String task_id, Comment comment) {
        Task t = taskService.findTaskById(task_id);
        t.addComment(comment);
        return taskRepo.save(t);
    }

    public Task deleteComment(String comment_id, String task_id) {
        Comment c = getFromOptional(commentRepo.findById(comment_id));
        Task t = getFromOptional(taskRepo.findById(task_id));
        commentRepo.delete(c);
        t.removeComment(c);
        return taskRepo.save(t);
    }
}
