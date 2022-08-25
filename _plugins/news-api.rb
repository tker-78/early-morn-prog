require 'news-api'

newsapi = News.new("b494dadbf4f84d61ba5535455e31b7c5")

top_headlines = newsapi.get_top_headlines(q: 'bitcoin',
                                          category: 'business',
                                          language: 'en',
                                          country: 'us') 


puts top_headlines.methods.grep('') 