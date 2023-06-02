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
  js_method open(method : String, url : String, async : Int32)
end

req = XMLHttpRequest.new
req.open("GET", "https://httpbin.org/anything", 0)
req.send
JS.console.log req.response_text
