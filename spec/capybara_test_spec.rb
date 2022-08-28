
# 対象ページを配列に格納
site = File.join(File.dirname(__FILE__), '..', '_site', '**', '*.html')
PAGES = Dir.glob(site).map { |p| p.gsub(/[^_]+\/_site(.*)/, '\\1') } # マッチした部分文字列との置き換え


PAGES.each do |p|
  describe p do
    it_behaves_like 'Post'
    # it_behaves_like 'Page with search box' unless p == '/search.html'

    before :each do
      visit p
    end

    it 'has only valid internal hyperlinks' do
      page.all(:css, 'a').each do |link|
        next if link.text == '' || link[:href].match(/(http|\/\/).*/) 
        page.find(:xpath, link.path).click 
        expect(page.status_code).to be 200
        visit p
      end
    end
  end
end

