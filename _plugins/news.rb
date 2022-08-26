require 'open-uri'
require 'json'

  url = "https://newsapi.org/v2/everything?q=apple&from=2022-08-25&to=2022-08-25&sortBy=popularity&apiKey=b494dadbf4f84d61ba5535455e31b7c5"
  req = open(url)
  response_body = req.read


  File.open("_data/news.json", "w") do |f|
    f.write response_body
  end
