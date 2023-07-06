# Based on https://github.com/lbguilherme/crystal-js/blob/6fb85504c5393d4fdcd7f080dc0bd6bbb5fbd7a3/README.md?plain=1#L220
require "js"

class XMLHttpRequest < JS::Reference
  @[JS::Method]
  def self.new : self
    <<-js
      return new XMLHttpRequest();
    js
  end

  js_getter responseText : String

  js_method send
  js_method open(method : String, url : String, async : Bool)
end

req = XMLHttpRequest.new
req.open("GET", "https://httpbin.org/anything", false)
req.send
JS.console.log req.response_text
