ActiveAdmin.register Album do
  controller do 
    def permitted_params
      params.permit album: [ :title ]
    end
  end
end
