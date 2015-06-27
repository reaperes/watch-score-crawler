var html = require('./html').html;
var cheerio = require('cheerio');
var $ = cheerio.load(html);

var count = 1;

var t = $('th');
for (var i=0; i<t.length; i++) {
  var element = t[i];
  if (element.attribs.scope == 'row' && element.children[0].data == 'LG') {
    var parent = element.parent;

    for (var j=0; j<parent.children.length; j++) {
      var td = parent.children[j];
      if (td.name == 'td' && count <= 12) {
        console.log(count + ' 회 점수 : ' + td.children[0].data);
        count++;
      }
    }
  }
}
