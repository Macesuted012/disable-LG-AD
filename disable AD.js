// ==UserScript==
// @name         洛谷广告屏蔽
// @namespace    http://tampermonkey.net/
// @version      1.3.2
// @description  屏蔽洛谷的广告
// @author       hide
// @match        *://*.luogu.com.cn/problem/*
// @match        *://*.luogu.com.cn/contest/*
// @match        *://*.luogu.com.cn/training/*
// @match        *://*.luogu.com.cn/
// @match        *://*.luogu.org/
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    var document=unsafeWindow.document;
    window.onload=function(){setTimeout(function()
    {
        var first_ban_list = [
            "div[data-v-0a593618]",
            "[src*=\'njc7dlng.png\']",
            "[href*=\'item.htm?id=637730514783\']",
            "[href*=\'class.luogu.com.cn\']",
            "[href*=\'ipic.luogu.com.cn\']"
        ];

        var all_ban_list = [
            "[src*=\'banner\']",
            "[href*=\'396041\']",
            "[href*=\'379612\']"
            //"[href*='luogu.com.cn/#']"
        ];

        //#lg-slider > div

        var class_ban_list = [
            "#lg-slider",
            "#app-old > div.lg-index-content.am-center > div:nth-child(3) > div.am-u-lg-3.am-u-md-4.lg-right > div.lg-article.am-hide-sm"
            //"#lg-slider"
            //"[class*=\'am-control-nav am-control-paging\']"
            //"[#.am-control-nav.am-control-paging]"
            //"ul[.am-direction-nav]",
            //"ol[.am-control-nav am-control-paging]"
        ];

        var cnt = 0;

        for (let i = 0; i < class_ban_list.length; i++) {
            //consloe.log(class_ban_list[i]);
            let chk = document.querySelector(class_ban_list[i]);
            //console.log(chk);
            if (chk != null) {
                chk.remove();
                ++cnt;
            }
        }

        for (let i = 0; i < first_ban_list.length; i++) {
            let chk = document.querySelector(first_ban_list[i]);
            if (chk != null) {
                //console.log(chk);
                chk.remove();
                ++cnt;
            }
        }

        for (let i = 0; i < all_ban_list.length; i++) {
            let chk = document.querySelectorAll(all_ban_list[i]);
            for (let j = 0; j < chk.length; j++) {
                if (chk[j] != null) {
                    //console.log(chk[j]);
                    chk[j].remove();
                    ++cnt;
                }
            }
        }

        //var LB = document.getElementById("#lg-slider > div");
        //LB.style.cssText = "";

        //console.log(class_ban_list[1]);
        //console.log(document.querySelectorAll('.am-next'));

        // var lg = document.querySelector(class_ban_list[1]);
        // lg.remove();

        if (cnt) {
            console.log("广告已经消除!");
        }
        else {
            console.log("本页未发现广告!");
        }

    },500)}
    //本代码仅供学习交流使用
})();