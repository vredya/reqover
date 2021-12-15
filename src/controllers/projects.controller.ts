import { isEmpty } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { API_SERVICE_URL, API_SERVICE_URL_ARRAY, CURRENT_ID, setCorrentId, SWAGGER_BASE_PATH, SWAGGER_BASE_PATH_ARRAY, SWAGGER_SPEC_URL, SWAGGER_SPEC_URL_ARRAY } from '../config/constants';

const projects = [
    {
        id: 1,
        name: 'Demo project',
    },
];

class ProjectsController {
    public get_project_by_id = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        const project = projects.filter((p) => p.id === +id)[0];
        if (project != null) {
            res.render('main', { apiUrl: API_SERVICE_URL, specUrl: SWAGGER_SPEC_URL, graphqlUrl: '' });
        }

        res.send('Error');
    };

    public get_project_by_id_from_array = async (req: Request, res: Response, next: NextFunction) => {
        var id: number = +req.params.id;
        const project = projects.filter((p) => p.id === id)[0];
        setCorrentId(project.id);
        if (project != null) {
            res.render('main', { apiUrl: API_SERVICE_URL_ARRAY[id], specUrl: SWAGGER_SPEC_URL_ARRAY[id], graphqlUrl: '', basePath: SWAGGER_BASE_PATH_ARRAY[id], project });
        }

        res.send('Error');
    };

    public delete_project = async (req: Request, res: Response, next: NextFunction) => {
        if (CURRENT_ID > -1) {
            projects.splice(CURRENT_ID - 1, 1);
            res.send('The project with id "' + CURRENT_ID + '" was deleted');
            res.render('projects');
        }
        res.send('Error');
    }

    public delete_project_by_id = async (req: Request, res: Response, next: NextFunction) => {
        var id: number = +req.params.id;
        const project = projects.filter((p) => p.id === id)[0];
        if (project.id > -1) {
            projects.splice(project.id - 1, 1);
            res.send('The project with id "' + project.id + '" was deleted');
            res.render('projects');
        }
        res.send('Error');
    }

    public createProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const project = projects.slice(-1)[0] as any;
        const body = await req.body;
        const newProject = {
            id: project.id + 1,
            name: body.name,
        };
        if (newProject.name != null || newProject.name != isEmpty) {
            projects.push(newProject);
            res.send(newProject);
        }
        res.send('Error');
    };

    public listProjects = async (req: Request, res: Response, next: NextFunction) => {
        res.send(projects);
    };

    public index = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.render('projects');
    };
}

export default ProjectsController;
