var items = $('.homepagetab li');
var numitems = items.length;
items.each(function(index) {
    $(this).css('left', 50 - 25 * Math.cos(-0.5 * Math.PI - 2 * (1 / numitems) * index * Math.PI).toFixed(4) + '%');
    $(this).css('top', 50 + 25 * Math.sin(-0.5 * Math.PI - 2 * (1 / numitems) * index * Math.PI).toFixed(4) + '%');
});
