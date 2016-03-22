//API for random quote from quotesondesign.com
$('#get-another-quote-button').on('click', function(e) {
  e.preventDefault();
  $.ajax( {
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1?escape=javascript',
    success: function(data) {
      var post = data.shift(); // The data is an array of posts. Grab the first one.
      $('#quote-content').html(post.content);
      $('#quote-title').html(post.title);
    },
    cache: false
  });
}).click(); //loads first quote on page load
