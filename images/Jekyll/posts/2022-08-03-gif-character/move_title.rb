for i in 0..6 do 
  num = i.to_s
  File.open("images/posts/githubpages/2022-08-03-gif-character/gif#{num}.txt", "r") { |f| 
    puts f.readlines
    sleep 0.5
    system 'clear'
  }
end