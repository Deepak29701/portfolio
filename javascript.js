<script>
    $.get("/views/loader.ejs", function(data){
        $("#loading").replaceWith(data);
    });
    $(window).on('load', function(){
        setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
    });
    function removeLoader(){
        $(".loader-wrapper").fadeOut(500, function(){
            $(".loader-wrapper").remove(); 
        });   
    }
</script>
