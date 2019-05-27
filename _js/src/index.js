// # src / index.js
// Copyright (c) 2018 Florian Klampfer <https://qwtel.com/>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import "@webcomponents/webcomponentsjs";
import "intersection-observer";
import ResizeObserver from "resize-observer-polyfill";
import "web-animations-js";
import smoothscroll from "smoothscroll-polyfill";
import "../lib/request-idle-callback";
import 'jquery/src/jquery'
import "timeago.js/src/timeago";

import "../lib/modernizr-custom";

import "./images";
import "./push-state";
import "./katex";
import timeagoFactory from "timeago.js";

window.ResizeObserver = window.ResizeObserver || ResizeObserver;
smoothscroll.polyfill();

$('hy-push-state').on('hy-push-state-load', () => {
    timeagoFactory().render($('time.timeago'));
});

$(document).ready(() => {
    window.onscroll = function() {myFunction()};
    window.onresize = function() {myFunction()};

    var header = $(".sidebar-title-container");
    var sticky = header.offset().top;

    function myFunction() {
        if($(window).width() >= 1024) {
            $(".site-author-title, .author-tags").css("opacity", 1);
            header.removeClass("sticky");
            return;
        }
        if (window.pageYOffset >= sticky) {
            header.addClass("sticky");
            $(".site-author-title, .author-tags").css("opacity", 1 - ((window.pageYOffset - sticky) / 50));
        } else {
            header.removeClass("sticky");
            $(".site-author-title, .author-tags").css("opacity", 1 - ((window.pageYOffset - sticky) / 50));

        }
    }
});
