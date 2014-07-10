# encoding: utf-8

require 'rubygems'
require 'bundler'
begin
  Bundler.setup(:default, :development)
rescue Bundler::BundlerError => e
  $stderr.puts e.message
  $stderr.puts "Run `bundle install` to install missing gems"
  exit e.status_code
end
require 'rake'

require 'jeweler'
Jeweler::Tasks.new do |gem|
  gem.name = "seml"
  gem.homepage = "http://seml.loganbraga.fr"
  gem.license = "GNU/GPL 3"
  gem.summary = "S-Expression Markup Language"
  gem.description = %Q{SEML is an S-Expression Markup Language compiler, that takes
  S-Expressions and turn them into beautiful HTML.}
  gem.email = "braga.logan@gmail.com"
  gem.authors = ["Logan Braga"]
end
Jeweler::RubygemsDotOrgTasks.new

require 'rspec/core'
require 'rspec/core/rake_task'
RSpec::Core::RakeTask.new(:spec) do |spec|
  spec.pattern = FileList['spec/**/*_spec.rb']
end

desc "Code coverage detail"
task :simplecov do
  ENV['COVERAGE'] = "true"
  Rake::Task['spec'].execute
end

require 'cucumber/rake/task'
Cucumber::Rake::Task.new(:features)

require 'reek/rake/task'
Reek::Rake::Task.new do |t|
  t.fail_on_error = true
  t.verbose = false
  t.source_files = 'lib/**/*.rb'
end

task :default => :spec

require 'yard'
YARD::Rake::YardocTask.new
