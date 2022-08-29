
require './lib/news'

RSpec.describe News do
  let(:today) { Date.today }
  let(:news) { News.new("technology", "top-headlines", "technology", "jp") }
  let(:news_blank_category) { News.new("technology", "top-headlines", "", "jp") }
  it 'has correct attributes' do 
    expect(news.name).to eq 'technology'
    expect(news.type).to eq 'top-headlines'
    expect(news.category).to eq 'technology'
    expect(news.country).to eq 'jp'
  end

  it 'has correct date' do
    expect(News.new.start_date).to eq (today - 7 ).to_s
    expect(News.new.end_date).to eq today.to_s
  end

  it 'can save json data' do
    pending 
  end

  context "url for technology" do
    it 'has correct url' do
      expect(news.url).to eq "https://newsapi.org/v2/top-headlines?category=technology&country=jp&from=#{news.start_date}&to=#{news.end_date}&sortBy=popularity&apiKey=b494dadbf4f84d61ba5535455e31b7c5"
    end
  end

  context "url for blank category" do
    it 'has correct url' do
      expect(news_blank_category.url).to eq "https://newsapi.org/v2/top-headlines?country=jp&from=#{news.start_date}&to=#{news.end_date}&sortBy=popularity&apiKey=b494dadbf4f84d61ba5535455e31b7c5"
    end
  end

end








