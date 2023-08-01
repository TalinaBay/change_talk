class GroupWorkshopsController < ApplicationController
    def index
    end 
    
    def show  
        @part = params[:part]
        @prev_part = @part.to_i - 1
        @next_part = @part.to_i + 1
        @workshop = params[:id]
        if @workshop.to_i == 1
            render "learning_basics"
        end
    end
end
