require 'open-uri'
require 'json'
require 'date'

class News
  attr_accessor :name, :type, :category, :country, :start_date, :end_date, :url, :q

  def initialize(name='', type='', category='', country='', q='')
    @name = name
    @type = type
    @category = category
    @country = country
    @q = q
    @start_date = start_date
    @end_date = end_date
    @url = url
  end

  def url
    head = "https://newsapi.org/v2/"
    api_key = "apiKey=b494dadbf4f84d61ba5535455e31b7c5"

    url_type = "#{type}?"
    # url_q = "&q=#{q}" if q

    if category != ''
      url_category = "category=#{category}&"
    else
      url_category = ''
    end

    if country != ''
      url_country = "country=#{country}&"
    else
      url_country = ''
    end

    if q != ''
      url_q = "q=#{q}&"
    else
      url_q = ''
    end

    url_from = "from=#{start_date}&"
    url_to = "to=#{ end_date }&"
    url_sort = "sortBy=popularity&"
    url = head + url_type + url_category + url_country + url_q + url_from + url_to + url_sort + api_key
    URI.encode(url)
  end

  def start_date
    today = Date.today
    (today - 3).to_s
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

english = News.new("english", "everything", "", "", "english")
english.save

ap = News.new("ap", "everything", "", "", "プログラミング")
ap.save

# js = News.new("js", "everything", "", "", "JavaScript&プログラミング")
# js.save
