$('.favorite').click(function(){ // togglar ikonen på favorit knappen
    $(this).find('i').toggleClass('fa-regular fa-solid')
    });

    $('.favorite').click(function() { // tar bort eller lägger till produkten i favorit listan beroende på klick
        var clicks = $(this).data('clicks');
        if (clicks) {
            sessionStorage.removeItem("favoriteItem1");
            console.log("unfavorited item");
        } else {
            const productContent = document.querySelector("#product1").outerHTML;
            sessionStorage.setItem("favoriteItem1", productContent);
            console.log("favorited item");
        }
        $(this).data("clicks", !clicks);
    });