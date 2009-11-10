/*
*
*	@tify v1.1 by Jarques  -  jpretorius.com
*	Follow me @jarques - http://twitter.com/@jarques
*	------------------------------------------------
*	Modified by MeltingIce - meltingice.net
*	Follow me @meltingice - http://twitter.com/meltingice
*
*/

jQuery.fn.atify = function(options) {
    settings = jQuery.extend({
        hashtag: false,
        extras: false
    },
    options);
    var html = jQuery(this).html();
    if (html) {
        if (settings.extras) {
            html = html.replace(/@([A-Za-z0-9_]+)/gi, "<a href=\"http://twitter.com/$1\">@$1</a>(<a class=\"mention\" href=\"http://twitter.com/?status=%40$1\">m</a>,<a class=\"send_dm\" href=\"http://twitter.com/direct_messages/create/$1\">d</a>)");
        } else {
            html = html.replace(/@([A-Za-z0-9_]+)/gi, "<a href=\"http://twitter.com/$1\">@$1</a>");
        }
        if (settings.hashtag) {
            html = html.replace(/#([A-Za-z0-9_-]+)/gi, "<a href=\"http://twitter.com/search?q=%22$1%22\">#$1</a>");
        }
        jQuery(this).html(html);
    }
};