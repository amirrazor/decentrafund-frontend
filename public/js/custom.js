;(function ($) {


    // MENU
        $(".navbar-toggle").on("click", function () {
            $(".collapse").toggle("")
        })


    $(".navbar-collapse a").on("click", function () {
        $(".navbar-collapse").collapse("hide")

    })


    $(window).on("scroll", function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse")
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse")
        }
    })

    // PARALLAX EFFECT

    // SMOOTHSCROLL
    $(function () {
        $(".custom-navbar a").on("click", function (event) {
            var $anchor = $(this)
            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop: $($anchor.attr("href")).offset().top - 49,
                    },
                    1000
                )
            event.preventDefault()
        })
    })
})(jQuery)
