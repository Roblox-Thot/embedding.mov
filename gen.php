<?php

function makePage($videoLink, $imageLink) {
    $template = '<!DOCTYPE html>
    <html>
        <head>
            <meta name="viewport" content="width=device-width" />
            <style type="text/css"></style>
            <meta
                property="og:image"
                content="%imageLink%"
            />
            <meta property="og:type" content="video.other" />
            <meta
                property="og:video:url"
                content="%videoLink%"
            />
            <meta property="og:video:width" content="1280" />
            <meta property="og:video:height" content="720" />
            <meta property="theme-color" content="#C74600" />
        </head>
        <body bgcolor="#303030">
            <script>
                // close();
                // window.close();
                setTimeout(function() {
                    document.location.href = "/movies/";
                }, 2000);
            </script>
            <meta
                http-equiv="refresh"
                content="2; url=/movies/"
            />
            You are about to be redirected to the Home page in 2 sec. If you would like a "https://discord.nfp.is/" version here it is:<br>
            %nfpLink%
        </body>
    </html>';

    $video = urlencode($videoLink);
    $img = urlencode($imageLink);
    
    $link = "https://discord.nfp.is/?v={$video}&i={$img}";

    $document = str_replace("%videoLink%", $videoLink, $template);
    $document = str_replace("%imageLink%", $imageLink, $document);
    $document = str_replace("%nfpLink%", $link, $document);

    return $document;
}