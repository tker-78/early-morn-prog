require 'open-uri'
require 'json'
require 'pp'

url = "https://newsapi.org/v2/top-headlines?country=jp&apiKey=b494dadbf4f84d61ba5535455e31b7c5"

req = open(url)

response_body = req.read

parsed_json = JSON.parse(response_body)

article = parsed_json["articles"]


articles = []

article.each do |a|
  articles << a['title']
end

puts articles.first(5)



File.open("_data/news.json", "w") do |f|
  f.write response_body
end
