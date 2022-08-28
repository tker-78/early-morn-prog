require 'open-uri'
require 'json'
require 'date'

# today = Date.today
# url = "https://newsapi.org/v2/top-headlines?category=technology&country=jp&from=#{ (today - 7 ).to_s }&to=#{ today.to_s }&sortBy=popularity&apiKey=b494dadbf4f84d61ba5535455e31b7c5"
# req = open(url)
# response_body = req.read


# File.open("_data/news.json", "w") do |f|
#   f.write response_body 
# end


class News
  attr_accessor :name, :type, :category, :country, :start_date, :end_date, :url

  def initialize(name='', type='', category='', country='' )
    @name = name
    @type = type
    @category = category
    @country = country
    @start_date = start_date
    @end_date = end_date
    @url = url
  end

  def url
    if category == (nil || '')
      url = "https://newsapi.org/v2/#{type}&country=#{country}&from=#{start_date}&to=#{ end_date }&sortBy=popularity&apiKey=b494dadbf4f84d61ba5535455e31b7c5"
    else
      url = "https://newsapi.org/v2/#{type}?category=#{category}&country=#{country}&from=#{start_date}&to=#{ end_date }&sortBy=popularity&apiKey=b494dadbf4f84d61ba5535455e31b7c5"
    end
  end

  def start_date
    today = Date.today
    (today -7).to_s
  end

  def end_date
    today = Date.today
    today.to_s

  end

  def save
    req = open(url)
    response_body = req.read
    File.open("_data/#{name}.json", "w") do |f|
      f.write response_body
    end
  end
end

technology = News.new("technology", "top-headlines", "technology", "jp")
technology.save

