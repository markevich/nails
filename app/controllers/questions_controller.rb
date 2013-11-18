class QuestionsController < ApplicationController
  def index
     @text = Text.take.questions
  end
end
