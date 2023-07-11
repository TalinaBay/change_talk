class GroupWorkshopsController < ApplicationController
    def index
    end 
    
    def show  
        @part = params[:part] 
        if params[:id].to_i == 1
            render "learning_basics"
        end
    end
end
