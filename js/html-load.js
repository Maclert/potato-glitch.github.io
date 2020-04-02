$(document).ready(function () {
        $("div[data-html]").each(function () {                
            $(this).load($(this).attr("data-html"));
        });
    });