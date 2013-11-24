module ApplicationHelper
	def current_path_class(test_path)
  		current_page?(test_path) ? 'active' : ''
	end
	
	def expanded_menu
		cookies[:menu_expanded] == "true" ? "expanded" : ''
	end
end
