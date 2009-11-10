Atify
=====

***What is Atify?***

The purpose of Atify, is to automatically link twitter names on a page to their twitter.com profile. For example, the script will pick up @jarques(m,d) and replace it with a link. That way I don't have to link it myself inside the HTML.

***Why do this?***

No real reason, just an easier way to link to say, @meltingice(m,d) and other twitter names on a page.

***Hashtags anyone?***

By adding a hashtag: true parameter when enabling Atify, it will also link hashtags to twitter search, such as #atify or even #beatcancer.

***How do I use this?***

Using Atify is extremely simple, you'll need to download and add jQuery and Atify to your page:

    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="atify.js"></script>

Next, all you need to do now is call the Atify method on any given element. For the examples above you can do:

    $("#content").atify();
    $("#hash_example").atify({hashtag: true});

To add Mention and Direct Message links, add the following parameter:

    $("#content").atify({extras: true});