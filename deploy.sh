#!/bin/sh

coffee -c javascripts/crutch.coffee
rsync -avz javascripts stylesheets index.html root@flymon.net:/var/www/esp8266/crutch
