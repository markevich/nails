class ImagesController < ApplicationController
  def index
    @images = Image.where album_id: params[:album_id]   
  end

end
