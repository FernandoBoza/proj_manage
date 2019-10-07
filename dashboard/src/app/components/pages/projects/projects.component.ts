import { Component, OnInit } from '@angular/core';
import CONSTANTS from 'src/app/services/Constants';
import { Project } from "../../../models/Project"

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  public projects = CONSTANTS.projects;
  public projectLayout: any = null;
  public selected: number = -1;
  public filetaskOption: boolean = true;
  public project_toggle: boolean = true;
  public project_or_create_project: number = 0;
  public project: Project = new Project();

  ngOnInit() {
  }

  public showCreateProject() {
    this.project_or_create_project = 2;
  }

  public toggle_project(n: boolean) {
    this.project_toggle = n
  }

  public toggleFileTask(option: string) {

    if (option == "Files") {
      this.filetaskOption = true
    } else {
      this.filetaskOption = false;
    }
  }

  public selectProject(project: any, index: number) {
    this.project_or_create_project = 1
    this.projectLayout = project;
    this.selected = index;
  }

  public getProjectRatio(tasks: any) {
    let x = 0
    for (const task of tasks) {
      if (task.status == "complete") {
        x++;
      }
    }

    return (`Task Completed ${x}/${tasks.length}`);
  }

}
