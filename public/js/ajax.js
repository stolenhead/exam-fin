 
 $(document).ready(function(){
        initialize('Cordoba Argentina');
        $('#search').bind('click',function(){
            initialize($('#address').val());    
        })
    })
 var location, country, limit = 10;
$.get("http://ip-api.com/json/", function (response) {
 country = response.country;
}, "jsonp");

$( "#search" ).click(function() {
 jobSearch($('#location').val(),$('#jobname').val(),country,0,limit);
});
var resultLinks = $('body').find('#pagination');
resultLinks.on('click', 'li', function (e) {
 var start = ($(this).text() - 1) * limit, end = start + limit;
 jobSearch($('#location').val(),$('#jobname').val(),country,start,end);
});
function extractDomain(url) {
 var domain;
 //find & remove protocol (http, ftp, etc.) and get domain
 if (url.indexOf("://") > -1) {
  domain = url.split('/')[2];
 }
 else {
  domain = url.split('/')[0];
 }
 //find & remove port number
 domain = domain.split(':')[0];
 return domain;
};
function jobSearch(location, data, country, start, end) {
 var serachData = data;
 $.ajax({
  cache: false,
  data: $.extend({
  publisher: “API_KEY”,
  v: '2',
  format: 'json',
  q: data,
  l: location,
  radius: 50,
  limit: limit,
  sort: 'date',
  highlight: 1,
  filter: 1,
  latlong: 1,
  co: country.toLowerCase(),
  userip: '',
  useragent: ''
 }, {
  start: start,
  end: end
 }),
 dataType: 'jsonp',
 type: 'GET',
 timeout: 5000,
 url: 'http://api.indeed.com/ads/apisearch'
 })
 .done(function(data) {
  var result = "",
  pagination = "",
  i = 2,
  style, url, paginationLimit = Math.ceil((data.totalResults) / limit);
 
 $.each(data.results, function(i, item) {
  style = ((i % 2) == 0) ? "articaljoblistinggray" : "articaljoblistingwhite"
  result = result + '<a target="_blank" href="' + item.url + '"><li class="articaljoblisting ' + style + '" style="margin-bottom:3px;">' + item.jobtitle + '<br /><span style="color:black;">' + item.source + ' - ' + item.formattedLocation + '</span></li></a>';
 i++;
  // Get current location indeed url
  url = item.url;
 });
 
 for (i = 1; i <= paginationLimit; i++) {
  pagination = pagination + '<li>' + i + '</li>';
 }
 
 $('#jobs-data').html('<ul style="list-style: none;margin: 0;padding:0;">' + result + '</ul>  ;<a style="float: right;" target="_blank" href="http://' + extractDomain(url) + '/jobs?q=' +  serachData + '&l=' + location + '">Find more jobs</a>');
 $('#pagination').html('<ul class="pagination" style="list-style: none;margin: 0;padding:0;">' + pagination + '</ul>');
 });
};