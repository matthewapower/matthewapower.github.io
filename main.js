$(document).ready(function(){
  var blocks = [],
      container = $('.overlay');

  $.getJSON('https://api.are.na/v2/channels/portfolio-work', function(data) {
    blocks = data.contents.reverse();
    for (i = 0; i < blocks.length; i++ ) {
      var block = data.contents[i],
          link = block.source,
          img = block.image.large.url,
          title = block.title,
          description = block.description;

      if (link == null) { link = img; } else { link = link.url; }

      if (description == null) { description = ' '; }

      container.append(
        '<a class="block" href="'+ link +'" target="_blank"><img class="block--img" src="' + img +'"/><h2 class="block--title">' + title + '</h2><p class="block--description">' + description +'</p></a>'
      );
    }
  });

  $('.open--boii').click(function(){ $('.overlay').addClass('active'); });
  $('.close--boii').click(function(){ $('.overlay').removeClass('active'); });
});
