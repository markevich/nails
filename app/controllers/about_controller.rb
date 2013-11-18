class AboutController < ApplicationController
  def index 
    @text = Text.take.about
  end
end
