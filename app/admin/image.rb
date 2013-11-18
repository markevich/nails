ActiveAdmin.register Image do
  controller do 
    def permitted_params
      params.permit image: [ :title , :path , :album_id ] 
    end
  end
end
