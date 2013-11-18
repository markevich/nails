ActiveAdmin.register News do
  controller do 
    def permitted_params
      params.permit news: [ :title , :text ]
    end
  end
end
