ActiveAdmin.register Price do
  controller do 
    def permitted_params
      params.permit price: [ :title , :price ]
    end
  end
end
