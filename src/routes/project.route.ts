import { Router } from 'express';
import ProjectsController from '../controllers/projects.controller';

class ProjectRoute {
    public router = Router();
    public projectsController = new ProjectsController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/projects', this.projectsController.listProjects);
        this.router.post('/projects', this.projectsController.createProject);
        this.router.get('/', this.projectsController.index);
        this.router.get('/projects/:id', this.projectsController.get_project_by_id);
        this.router.delete('/projects/delete', this.projectsController.delete_project); //to use correctly need to go on the project config page which need to delete
        this.router.delete('/projects/delete/:id', this.projectsController.delete_project_by_id);
        this.router.get('/projects/array/:id', this.projectsController.get_project_by_id_from_array);
    }
}

export default ProjectRoute;
