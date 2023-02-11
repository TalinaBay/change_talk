class GroupWorkshopsController < ApplicationController
    def index
    end 
    
    def show   
        if params[:id].to_i == 1
            render "learning_basics"
        end
    end
end
