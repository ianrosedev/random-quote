//API for random quote from quotesondesign.com
$('#get-another-quote-button').on('click', function(e) {
  e.preventDefault();
  $.ajax( {
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      var post = data.shift(); // The data is an array of posts. Grab the first one.
      var postNoHTML = post.content.replace(/<\/?[^>]+>/gi, ''); // Gets rid of HTML code from JSON.
      // Decodes special HTML entities so the tweet will work correctly.
      function decodeHTML(value) {
        return $("<textarea/>").html(value).text();
      };
      var postNoCharCode = decodeHTML(postNoHTML);
      $('#quote-content').html(postNoCharCode);
      $('#quote-title').html(post.title);
      $("#twitter").attr("href", "https://twitter.com/home?status=" + postNoCharCode + ' -' + post.title);
    },
    cache: false
  });
}).click(); //loads first quote on page load


