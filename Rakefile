require "yui/compressor"
require "html_compressor"

desc "Minify CSS"
task :minify_css do
  puts "## Minifying CSS"
  compressor = YUI::CssCompressor.new
  Dir.glob("assets/css/*.css").each do |name|
    puts "Minifying #{name}"
    input = File.read(name)
    output = File.open("#{name}", "w")
    output << compressor.compress(input)
    output.close
  end
end

desc "Minify JS"
task :minify_js do
  puts "## Minifying JS"
  compressor = YUI::JavaScriptCompressor.new
  Dir.glob("assets/js/*.js").each do |name|
    puts "Minifying #{name}"
    input = File.read(name)
    output = File.open("#{name}", "w")
    output << compressor.compress(input)
    output.close
  end
end

desc "Minify HTML"
task :minify_html do
  puts "## Minifying HTML"
  compressor = HtmlCompressor::HtmlCompressor.new
  Dir.glob("*.html").each do |name|
    puts "Minifying #{name}"
    input = File.read(name)
    output = File.open("#{name}", "w")
    output << compressor.compress(input)
    output.close
  end
end
