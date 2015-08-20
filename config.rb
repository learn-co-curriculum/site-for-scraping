###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :directory_indexes
  activate :livereload
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# For maintaining SEO
redirects = {
  :"faculty" => "/team#instructors",
  :"iOScurriculum" => "/ios",
  :"nightsandweekends/courses/android-for-developers" => "/android",
  :"nightsandweekends/courses/frontend-web-development" => "/frontend",
  :"nightsandweekends/index" => "/courses",
  :"nightsandweekends/subscribe" => "/courses",
  :"nightsandweekends/gcal/index" => "/courses",
  :"rubycurriculum" => "/web",
  :"speakers" => "/events#guests",
  :"sponsors" => "/partners",
  :"codeforgood" => "/dosomething",
  :"stem" => "/precollege",
  :"dosomething" => "http://go.flatironschool.com/dosomething",
  :"precollege" => "http://precollege.flatironschool.com",
  :"code-of-conduct.html" => "/code-of-conduct"
}

redirects.each do |old_path, new_url|
  proxy "/#{old_path}.html", "html_redirect.html", :locals => { :new_url => new_url }, :ignore => true
end

# Build-specific configuration
configure :build do
  activate :relative_assets
  set :relative_links, true

  activate :sitemap, hostname: 'http://learn-co-curriculum.github.io/site-for-scraping/'
  activate :minify_css
  activate :minify_javascript
  activate :gzip
  activate :minify_html do |html|
    html.remove_http_protocol = false
  end

  if ENV['TARGET'].to_s.downcase == 'production'
    activate :imageoptim do |options|
      options.manifest = true
    end
  end
end

case ENV['TARGET'].to_s.downcase
when 'production'
  activate :deploy do |deploy|
    deploy.method       = :git
    deploy.remote       = 'git@github.com:flatiron-labs/dotcom.git'
    deploy.build_before = true
  end
when 'preview'
  activate :deploy do |deploy|
    deploy.method       = :git
    deploy.build_before = true
  end
else
  activate :deploy do |deploy|
    deploy.method       = :git
    deploy.remote       = 'git@github.com:flatiron-labs/dotcom-staging.git'
    deploy.build_before = true
  end
end
