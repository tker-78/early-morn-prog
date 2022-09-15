require 'webrick'

root = File.expand_path '~/blog/early-morn-prog/_draft/js'
puts root

server = WEBrick::HTTPServer.new(
  Port: 7777,
  DocumentRoot: root,

)

trap('INT') { server.shutdown }

server.start

# Thread.start {
#   WEBrick::HTTPServer.new(
#     DocumentRoot: ".",
#     Port: 7777
#   ).start
# }


# gets