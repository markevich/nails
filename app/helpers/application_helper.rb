module ApplicationHelper
	def current_path_class(test_path)
  		current_page?(test_path) ? 'active' : ''
	end
end
