import './navigationBar.html'

Template.navigationBar.onRendered(function () {
  this.autorun( ()=> {
    $(window).scroll(function () {
      if($("#mainNav").scrollTop() == 0 && $("#mainNav").css("opacity") != 1 ){
        $( "#mainNav" ).css("opacity", 0);
      }else if( $("#mainNav").scrollTop() != 0 && $("#mainNav").css("opacity") != 0 ){
        $( "#mainNav" ).css("opacity", 1);
      }
    })
  })
})
