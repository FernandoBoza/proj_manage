package com.starter_kit.auth.Company.Department.Projects.Tasks;

import com.starter_kit.auth.Company.Department.Projects.Project;
import com.starter_kit.auth.Company.Department.Projects.ProjectRepo;
import com.starter_kit.auth.Company.Department.Projects.ProjectService;
import com.starter_kit.auth.Company.Department.Projects.Tasks.Comments.Comment;
import com.starter_kit.auth.Company.Department.Projects.Tasks.Comments.CommentRepo;
import com.starter_kit.auth.Users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

import static com.starter_kit.auth.Utils.Utils.getFromOptional;

@Service
public class TaskService {
    private final TaskRepo taskRepo;
    private final ProjectRepo projectRepo;
    private final CommentRepo commentRepo;

    public TaskService(TaskRepo taskRepo, ProjectRepo projectRepo, CommentRepo commentRepo) {
        this.taskRepo = taskRepo;
        this.projectRepo = projectRepo;
        this.commentRepo = commentRepo;
    }

    @Autowired
    public ProjectService projectService;

    @Autowired
    public UserService userService;

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

    public Task createComment(String task_id, Comment comment, String user_id) {
        System.out.println("FROM TASK SERVICE user id :" + user_id);
        Task t = findTaskById(task_id);
        comment.setUser(userService.findById(user_id));
        comment.setPostDate(new Date());
        commentRepo.save(comment);
        t.addComment(comment);
        return taskRepo.save(t);
    }

    public Task deleteComment(String comment_id, String task_id) {
        Task t = getFromOptional(taskRepo.findById(task_id));
        Comment c = findCommentById(t.getComments(), comment_id);
        t.removeComment(c);
        commentRepo.delete(c);
        return taskRepo.save(t);
    }

    public Comment findCommentById(List<Comment> comments, String id) {
        for (Comment c : comments) {
            if (c.getId().equals(id)) {
                return c;
            }
        }
        return null;
    }


}
