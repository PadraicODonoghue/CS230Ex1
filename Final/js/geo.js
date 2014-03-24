window.onload = function() {
  var info = document.getElementById("map-canvas");
};

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude
    info.innerHTML="<iframe width=\"425\" height=\"350\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=FYBjLgMdkkeb_w%3BFe6UGAMdgLFj_yHIHNeElWnEOyldH7Tw5fJPSDHIHNeElWnEOw&amp;q="+ lat +",+"+ lon +"+to+Mannix+Point&amp;aq=&amp;sll="+ lat +",-6.600814&amp;sspn=0.007963,0.021136&amp;t=h&amp;g="+ lat +",+"+ lon +"&amp;ie=UTF8&amp;saddr="+ lat +",+"+ lon +"&amp;daddr=Mannix+Point&amp;ll=52.655726,-8.406877&amp;spn=1.431909,3.663237&amp;output=embed\"></iframe><br /><small><a href=\"https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=FYBjLgMdkkeb_w%3BFe6UGAMdgLFj_yHIHNeElWnEOyldH7Tw5fJPSDHIHNeElWnEOw&amp;q="+ lat +",+"+ lon +"+to+Mannix+Point&amp;aq=&amp;sll="+ lat +",-6.600814&amp;sspn=0.007963,0.021136&amp;t=h&amp;g="+ lat +",+"+ lon +"&amp;ie=UTF8&amp;saddr="+ lat +",+"+ lon +"&amp;daddr=Mannix+Point&amp;ll=52.655726,-8.406877&amp;spn=1.431909,3.663237\" style=\"color:#0000FF;text-align:left\">View Larger Map</a></small>";
}
