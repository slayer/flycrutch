#!/bin/sh

coffee -c javascripts/crutch.coffee
# rsync -avz root@flymon.net:/var/www/esp8266/crutch/javascripts/*.js javascripts/  || exit 0
# rsync -avz root@flymon.net:/var/www/esp8266/crutch/javascripts/graphs.js javascripts/  || exit 0
rsync -avz javascripts stylesheets index.html root@flymon.net:/var/www/esp8266/crutch
