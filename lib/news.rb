require 'open-uri'
require 'json'
require 'date'

today = Date.today
url = "https://newsapi.org/v2/top-headlines?category=technology&country=jp&from=#{ (today - 7 ).to_s }&to=#{ today.to_s }&sortBy=popularity&apiKey=b494dadbf4f84d61ba5535455e31b7c5"
req = open(url)
response_body = req.read


File.open("_data/news.json", "w") do |f|
  f.write response_body 
end


