module Jekyll
   class LinkParser < Liquid::Tag
      def render(context)
          "test_link_title"
      end
   end
end
Liquid::Template.register_tag('link_title', Jekyll::LinkParser)


