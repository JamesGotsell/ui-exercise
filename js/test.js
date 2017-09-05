$( document ).ready(function() {
    console.log( "ready!" );
 var sideBarButton = document.getElementsByClassName('side-bar-button');
 console.log(sideBarButton)
    $(sideBarButton).click(function() {
         var status = $(".side-bar").css('display');
        if(status === 'block'){
            $('.side-bar').hide().fadeOut();
            $('.main-content').css('width','100%')
        }else {
            $('.side-bar').show().fadeIn();
            $('.main-content').css('width','70%')
        }
    });

});
