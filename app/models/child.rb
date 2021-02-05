class Child < ApplicationRecord
    
    has_many :chores
    has_many :tasks, through: :chores

    validate_presence_of :first_name
    validate_presence_of :last_name


    def name
    	first_name.capitalize() + " " + last_name.capitalize()
    end
end
