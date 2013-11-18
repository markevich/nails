ActiveAdmin.register Text do
  controller do 
    def permitted_params
      params.permit text: [ :welcome , :about , :questions ]
    end
  end
  form do |f|
    f.inputs do
      f.input :welcome, as: :html_editor
      f.input :about, as: :html_editor
      f.input :questions, as: :html_editor
    end
    f.actions
  end
  actions :all, :except => [:destroy, :new]

end