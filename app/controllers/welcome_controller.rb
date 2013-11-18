class WelcomeController < ApplicationController
	def index
    	@text = Text.take.welcome
	end
end
