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
        if @workshop.to_i == 2
            render "explore_challenges"
        end
        if @workshop.to_i == 3
            render "practice_implementation"
        end
    end
end
