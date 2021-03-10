class ProjectsController < ApplicationController
    def index
        projects = Project.all
        render json: projects
    end

    def create
        p = project_params
        project = Project.create(client_id: p["client_id"].to_i, title: p["title"], skills: p["skills"], duration: p["duration"], description: p["description"])

        if (project.valid?)
            project_data = Project.last
            render json: project_data, except: [:created_at, :updated_at]
        else
            render json: {type: "failure", message: "Project did not save"}
        end
    end

    private
        def project_params
            params.require(:project).permit(:client_id ,:title,:skills, :duration, :description)
        end
end