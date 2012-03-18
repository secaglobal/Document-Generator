/*jslint evil:true */
/**
 * Dynamic thread loader
 *
 * 
 * 
 * 
 * 
 * 
*/

// 
var DISQUS;
if (!DISQUS || typeof DISQUS == 'function') {
    throw "DISQUS object is not initialized";
}
// 

// json_data and default_json django template variables will close
// and re-open javascript comment tags

(function () {
    var jsonData, cookieMessages, session, key;

    /* */ jsonData = {"reactions": [{"body": "\"Reportlab Tables \u2013 Creating Tables in PDFs with Python \u00ab The Mouse Vs. The Python\" ( <a href=\"http://www.blog.pythonlibrary.org/2010/09/21/reportlab-tables-creating-tables-in-pdfs-with-python/\">http://bit.ly/djvMEQ</a> )", "author_name": "driscollis", "source_url": "http://backtype.com/", "id": 28155915, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/driscollis/status/25317184953", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a3.twimg.com/profile_images/71538783/IMG_0015_normal.jpg", "author_url": "#", "date_created": "1 year ago", "retweets": []}, {"body": "RT @FrikiFeeds: Reportlab Tables \u2013 Creating Tables in PDFs with Python <a href=\"http://www.blog.pythonlibrary.org/2010/09/21/reportlab-tables-creating-tables-in-pdfs-with-python/\">http://dlvr.it/5hRWN</a>", "author_name": "rolope", "source_url": "http://backtype.com/", "id": 28155916, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/rolope/status/25206784477", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a0.twimg.com/profile_images/1109919488/Rolope_at_Auronix_normal.jpg", "author_url": "#", "date_created": "1 year ago", "retweets": [{"url": "http://twitter.com/r0bertmart1nez/status/25180165254", "author_name": "r0bertmart1nez"}]}, {"body": "Mike Driscoll: Reportlab Tables \u2013 Creating Tables in PDFs with Python <a href=\"http://www.blog.pythonlibrary.org/2010/09/21/reportlab-tables-creating-tables-in-pdfs-with-python/\">http://bit.ly/9a0duo</a>", "author_name": "timgluz", "source_url": "http://backtype.com/", "id": 28155914, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/timgluz/status/25187931589", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a3.twimg.com/profile_images/465063171/0087_normal.jpg", "author_url": "#", "date_created": "1 year ago", "retweets": []}, {"body": "RT @planetpython: Mike Driscoll: Reportlab Tables \u2013 Creating Tables in PDFs with Python <a href=\"http://www.blog.pythonlibrary.org/2010/09/21/reportlab-tables-creating-tables-in-pdfs-with-python/\">http://bit.ly/bFFx7K</a>", "author_name": "TuPLE", "source_url": "http://backtype.com/", "id": 28155909, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/TuPLE/status/25184409695", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a2.twimg.com/profile_images/77156622/pylogo_normal.png", "author_url": "#", "date_created": "1 year ago", "retweets": []}, {"body": "Reportlab Tables \u2013 Creating Tables in PDFs with Python \u00ab The Mouse Vs. The Python <a href=\"http://www.blog.pythonlibrary.org/2010/09/21/reportlab-tables-creating-tables-in-pdfs-with-python/\">http://bit.ly/avvaci</a>", "author_name": "thepythonist", "source_url": "http://backtype.com/", "id": 28155907, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/thepythonist/status/25180424623", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://s.twimg.com/a/1284676327/images/default_profile_2_normal.png", "author_url": "#", "date_created": "1 year ago", "retweets": []}, {"body": "[Python] Mike Driscoll: Reportlab Tables \u2013 Creating Tables in PDFs with Python: Back in March of this year, I wrot... <a href=\"http://www.blog.pythonlibrary.org/2010/09/21/reportlab-tables-creating-tables-in-pdfs-with-python/\">http://bit.ly/bFFx7K</a>", "author_name": "dcreemer_rss", "source_url": "http://backtype.com/", "id": 28155913, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/dcreemer_rss/status/25178387472", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://s.twimg.com/a/1283564528/images/default_profile_3_normal.png", "author_url": "#", "date_created": "1 year ago", "retweets": []}, {"body": "Mike Driscoll: Reportlab Tables \u2013 Creating Tables in PDFs with Python <a href=\"http://www.blog.pythonlibrary.org/2010/09/21/reportlab-tables-creating-tables-in-pdfs-with-python/\">http://bit.ly/bFFx7K</a>", "author_name": "planetpython", "source_url": "http://backtype.com/", "id": 28155912, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/planetpython/status/25177186799", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a2.twimg.com/profile_images/413225762/python_normal.png", "author_url": "#", "date_created": "1 year ago", "retweets": []}, {"body": "Reportlab Tables \u2013 Creating Tables in PDFs with Python <a href=\"http://www.blog.pythonlibrary.org/2010/09/21/reportlab-tables-creating-tables-in-pdfs-with-python/\">http://dlvr.it/5hRWN</a>", "author_name": "FrikiFeeds", "source_url": "http://backtype.com/", "id": 28155908, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/FrikiFeeds/status/25176693968", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a2.twimg.com/profile_images/762835294/bbird01_normal.png", "author_url": "#", "date_created": "1 year ago", "retweets": []}, {"body": "Finished writing: \"Reportlab Tables \u2013 Creating Tables in PDFs with Python \u00ab The Mouse Vs. The Python\" ( <a href=\"http://www.blog.pythonlibrary.org/2010/09/21/reportlab-tables-creating-tables-in-pdfs-with-python/\">http://bit.ly/djvMEQ</a> )", "author_name": "driscollis", "source_url": "http://backtype.com/", "id": 28155911, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/driscollis/status/25174896215", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a3.twimg.com/profile_images/71538783/IMG_0015_normal.jpg", "author_url": "#", "date_created": "1 year ago", "retweets": []}], "reactions_limit": 10, "ordered_highlighted": [], "posts": {"82307080": {"edited": false, "author_is_moderator": false, "from_request_user": null, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "> Then we set the text color to red in the first two columns. I admit that I\u2019m not\n> quite sure how this works as the ending coordinates just don\u2019t seem to fit with\n> the ones for the background color. I\u2019ll leave that to my readers to explain.\n\nThe numbering used to set the red foreground is consistent with that used for the green background.  (1, -1) simply means the second row (positive indices being 0-based) and the last column (as you say yourself, negative indices are -1-based).  I don't see the confusion.  In case it helps, here are all the cell indices in a 2d list...\n\nAndrew ;)", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-09-30_02:26:00", "date": "1 year ago", "message": "&gt; Then we set the text color to red in the first two columns. I admit that I\u2019m not<br>&gt; quite sure how this works as the ending coordinates just don\u2019t seem to fit with<br>&gt; the ones for the background color. I\u2019ll leave that to my readers to explain.<br><br>The numbering used to set the red foreground is consistent with that used for the green background.  (1, -1) simply means the second row (positive indices being 0-based) and the last column (as you say yourself, negative indices are -1-based).  I don't see the confusion.  In case it helps, here are all the cell indices in a 2d list...<br><br>Andrew ;)", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": false, "likes": 1, "user_voted": null, "num_replies": 1, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 1, "user_key": "5a95a66662a0ec95dafca9df0fa4bd18", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "82358004": {"edited": false, "author_is_moderator": true, "from_request_user": false, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "Hi Andrew,\n\nWell, I know when I first saw them, they confused me. I would have created an example showing one or the other, but not both. Anyway, thanks!\n\n- Mike", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-09-30_09:03:39", "date": "1 year ago", "message": "Hi Andrew,<br><br>Well, I know when I first saw them, they confused me. I would have created an example showing one or the other, but not both. Anyway, thanks!<br><br>- Mike", "approved": true, "is_last_child": true, "author_is_founder": true, "can_reply": false, "likes": 0, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": true, "has_been_anonymized": false, "highlighted": false, "parent_post_id": 82307080, "depth": 1, "points": 0, "user_key": "driscollis", "author_is_creator": true, "email": "", "killed": false, "is_realtime": false}}, "ordered_posts": [82307080, 82358004], "realtime_enabled": false, "ready": true, "mediaembed": [], "has_more_reactions": false, "realtime_paused": false, "integration": {"receiver_url": "http://www.pythonlibrary.org/does-not-exist/", "hide_user_votes": false, "reply_position": false, "disqus_logo": false}, "highlighted": {}, "reactions_start": 0, "media_url": "http://mediacdn.disqus.com/1326405634", "users": {"5a95a66662a0ec95dafca9df0fa4bd18": {"username": "Pythonlibrary Org Punter", "tumblr": "", "about": "", "display_name": "Pythonlibrary Org Punter", "url": "http://disqus.com/guest/5a95a66662a0ec95dafca9df0fa4bd18/", "registered": false, "remote_id": null, "linkedin": "", "blog": "", "remote_domain": "", "points": null, "facebook": "", "avatar": "http://mediacdn.disqus.com/1326405634/images/noavatar32.png", "delicious": "", "is_remote": false, "verified": false, "flickr": "", "twitter": "", "remote_domain_name": ""}, "driscollis": {"username": "driscollis", "tumblr": "", "about": "", "display_name": "driscollis", "url": "http://disqus.com/driscollis/", "registered": true, "remote_id": null, "linkedin": "", "blog": "", "remote_domain": "", "points": 4, "facebook": "", "avatar": "http://mediacdn.disqus.com/uploads/users/261/26/avatar32.jpg?1326222649", "delicious": "", "is_remote": false, "verified": true, "flickr": "", "twitter": "", "remote_domain_name": ""}}, "user_unapproved": {}, "messagesx": {"count": 0, "unread": []}, "thread": {"voters_count": 1, "offset_posts": 0, "slug": "reportlab_tables_8211_creating_tables_in_pdfs_with_python", "paginate": false, "num_pages": 1, "days_alive": 0, "moderate_none": false, "voters": {"sakti": {"url": "http://disqus.com/sakti/", "username": "sakti", "is_moderator": false, "avatar": "http://mediacdn.disqus.com/uploads/users/441/6204/avatar32.jpg?1326196290", "name": "Sakti Dwi Cahyono"}}, "total_posts": 2, "realtime_paused": true, "queued": false, "pagination_type": "append", "user_vote": null, "likes": 4, "num_posts": 2, "closed": true, "per_page": 0, "id": 145179322, "killed": false, "moderate_all": false}, "forum": {"use_media": true, "avatar_size": 32, "apiKey": "3MlB1vYW7pmhdgfinY4i79Rwu4zxzpcxadfWgMqLMV8rU6nT8n32LJxWlu60gboI", "features": {}, "use_old_templates": false, "comment_max_words": 0, "mobile_theme_disabled": false, "linkbacks_enabled": true, "is_early_adopter": false, "allow_anon_votes": true, "revert_new_login_flow": false, "stylesUrl": "http://mediacdn.disqus.com/uploads/styles/33/4058/mousevsthepython.css", "login_buttons_enabled": false, "streaming_realtime": false, "show_avatar": true, "reactions_enabled": true, "reply_position": false, "id": 334058, "name": "Mouse Vs. the Python", "language": "en", "mentions_enabled": true, "url": "mousevsthepython", "allow_anon_post": true, "disqus_auth_disabled": false, "thread_votes_disabled": false, "default_avatar_url": "http://mediacdn.disqus.com/1326405634/images/noavatar32.png", "ranks_enabled": false, "template": {"url": "http://mediacdn.disqus.com/1326405634/build/themes/dsq7884a9652e94555c70f96b6be63be216.js?107", "mobile": {"url": "http://mediacdn.disqus.com/1326405634/build/themes/newmobile.js", "css": "http://mediacdn.disqus.com/1326405634/build/themes/newmobile.css"}, "api": "1.1", "name": "Houdini", "css": "http://mediacdn.disqus.com/1326405634/build/themes/dsq7884a9652e94555c70f96b6be63be216.css?107"}, "hasCustomStyles": false, "max_depth": 0, "lastUpdate": "", "moderate_all": false}, "settings": {"realtimeHost": "qq.disqus.com", "uploads_url": "http://media.disqus.com/uploads", "ssl_media_url": "https://securecdn.disqus.com/1326405634", "realtime_url": "http://rt.disqus.com/forums/realtime-cached.js", "facebook_app_id": "52254943976", "minify_js": true, "recaptcha_public_key": "6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u", "read_only": false, "facebook_api_key": "52254943976", "realtimePort": "80", "debug": false, "disqus_url": "http://disqus.com", "media_url": "http://mediacdn.disqus.com/1326405634"}, "ranks": {}, "request": {"sort": "hot", "is_authenticated": false, "user_type": "anon", "subscribe_on_post": 0, "missing_perm": "locked", "user_id": null, "remote_domain_name": "", "remote_domain": "", "is_verified": false, "profile_url": "", "username": "", "is_global_moderator": false, "sharing": {}, "timestamp": "2012-01-14_04:30:24", "is_moderator": false, "ordered_unapproved_posts": [], "unapproved_posts": {}, "forum": "mousevsthepython", "is_initial_load": true, "display_username": "", "points": null, "has_email": false, "moderator_can_edit": false, "is_remote": false, "userkey": "", "page": 1}, "context": {"use_twitter_signin": true, "use_fb_connect": false, "show_reply": false, "active_switches": ["bespin", "community_icon", "embedapi", "google_auth", "mentions", "new_facebook_auth", "new_thread_create", "realtime_cached", "show_captcha_on_links", "ssl", "static_reply_frame", "static_styles", "statsd_created", "upload_media", "use_rs_paginator_60m"], "sigma_chance": 10, "use_google_signin": false, "switches": {"olark_admin_addons": true, "listactivity_replies": true, "es_index_threads": true, "use_master_for_api": true, "google_auth": true, "html_email": true, "statsd.timings": true, "community_icon": true, "show_captcha_on_links": true, "google_analytics": true, "olark_admin_packages": true, "static_styles": true, "firehose": true, "stats": true, "realtime": true, "realtime_cached": true, "statsd_created": true, "bespin": true, "olark_support": true, "firehose_gnip": true, "olark_addons": true, "new_facebook_auth": true, "limit_get_posts_days_30d": true, "use_impermium": true, "use_disqus": true, "new_moderate": true, "phoenix": true, "new_thread_create": true, "edits_to_spam": true, "upload_media": true, "vip_read_slave": true, "embedapi": true, "ssl": true, "send_to_impermium": true, "theme_editor_disabled": true, "train_impermium": true, "listactivity_replies_30d": true, "firehose_gnip_http": true, "moderate_ascending": true, "git_themes": true, "send_to_disqus": true, "use_rs_paginator_60m": true, "redis_threadcount": true, "mentions": true, "olark_install": true, "static_reply_frame": true}, "forum_facebook_key": "b47f06b011b98da76f8e0af1b72b506b", "use_yahoo": true, "subscribed": false, "active_gargoyle_switches": ["edits_to_spam", "es_index_threads", "firehose", "firehose_gnip", "firehose_gnip_http", "git_themes", "google_analytics", "html_email", "limit_get_posts_days_30d", "listactivity_replies", "listactivity_replies_30d", "moderate_ascending", "new_moderate", "olark_addons", "olark_admin_addons", "olark_admin_packages", "olark_install", "olark_support", "phoenix", "realtime", "redis_threadcount", "send_to_disqus", "send_to_impermium", "show_captcha_on_links", "stats", "statsd.timings", "theme_editor_disabled", "train_impermium", "use_disqus", "use_impermium", "use_master_for_api", "vip_read_slave"], "realtime_speed": 15000, "use_openid": true}}; /* */
    /* */ cookieMessages = {"user_created": null, "post_has_profile": null, "post_twitter": null, "post_not_approved": null}; session = {"url": null, "name": null, "email": null}; /* */

    DISQUS.jsonData = jsonData;
    DISQUS.jsonData.cookie_messages = cookieMessages;
    DISQUS.jsonData.session = session;

    if (DISQUS.useSSL) {
        DISQUS.useSSL(DISQUS.jsonData.settings);
    }

    // The mappings below are for backwards compatibility--before we port all the code that
    // accesses jsonData.settings to DISQUS.settings

    var mappings = {
        debug:                'disqus.debug',
        minify_js:            'disqus.minified',
        read_only:            'disqus.readonly',
        recaptcha_public_key: 'disqus.recaptcha.key',
        facebook_app_id:      'disqus.facebook.appId',
        facebook_api_key:     'disqus.facebook.apiKey'
    };

    var urlMappings = {
        disqus_url:    'disqus.urls.main',
        media_url:     'disqus.urls.media',
        ssl_media_url: 'disqus.urls.sslMedia',
        realtime_url:  'disqus.urls.realtime',
        uploads_url:   'disqus.urls.uploads'
    };

    if (DISQUS.jsonData.context.switches.realtime_setting_change) {
        urlMappings.realtimeHost = 'realtime.host';
        urlMappings.realtimePort = 'realtime.port';
    }
    for (key in mappings) {
        if (mappings.hasOwnProperty(key)) {
            DISQUS.settings.set(mappings[key], DISQUS.jsonData.settings[key]);
        }
    }

    for (key in urlMappings) {
        if (urlMappings.hasOwnProperty(key)) {
            DISQUS.jsonData.settings[key] = DISQUS.settings.get(urlMappings[key]);
        }
    }
}());

DISQUS.jsonData.context.csrf_token = '21bc467119200cb06806902fa8e2f5b0';

DISQUS.jsonData.urls = {
    login: 'http://disqus.com/profile/login/',
    logout: 'http://disqus.com/logout/',
    upload_remove: 'http://mousevsthepython.disqus.com/thread/reportlab_tables_8211_creating_tables_in_pdfs_with_python/async_media_remove/',
    request_user_profile: 'http://disqus.com/AnonymousUser/',
    request_user_avatar: 'http://mediacdn.disqus.com/1326405634/images/noavatar92.png',
    verify_email: 'http://disqus.com/verify/',
    remote_settings: 'http://mousevsthepython.disqus.com/_auth/embed/remote_settings/',
    edit_profile_window: 'http://disqus.com/embed/profile/edit/',
    embed_thread: 'http://mousevsthepython.disqus.com/thread.js',
    embed_vote: 'http://mousevsthepython.disqus.com/vote.js',
    embed_thread_vote: 'http://mousevsthepython.disqus.com/thread_vote.js',
    embed_thread_share: 'http://mousevsthepython.disqus.com/thread_share.js',
    embed_queueurl: 'http://mousevsthepython.disqus.com/queueurl.js',
    embed_hidereaction: 'http://mousevsthepython.disqus.com/hidereaction.js',
    embed_more_reactions: 'http://mousevsthepython.disqus.com/more_reactions.js',
    embed_subscribe: 'http://mousevsthepython.disqus.com/subscribe.js',
    embed_highlight: 'http://mousevsthepython.disqus.com/highlight.js',
    embed_block: 'http://mousevsthepython.disqus.com/block.js',
    update_moderate_all: 'http://mousevsthepython.disqus.com/update_moderate_all.js',
    update_days_alive: 'http://mousevsthepython.disqus.com/update_days_alive.js',
    show_user_votes: 'http://mousevsthepython.disqus.com/show_user_votes.js',
    forum_view: 'http://mousevsthepython.disqus.com/reportlab_tables_8211_creating_tables_in_pdfs_with_python',
    cnn_saml_try: 'http://disqus.com/saml/cnn/try/',
    realtime: DISQUS.jsonData.settings.realtime_url,
    thread_view: 'http://mousevsthepython.disqus.com/thread/reportlab_tables_8211_creating_tables_in_pdfs_with_python/',
    twitter_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/twitter/begin/',
    yahoo_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/yahoo/begin/',
    openid_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/openid/begin/',
    googleConnect: DISQUS.jsonData.settings.disqus_url + '/_ax/google/begin/',
    community: 'http://mousevsthepython.disqus.com/community.html',
    admin: 'http://mousevsthepython.disqus.com/admin/moderate/',
    moderate: 'http://mousevsthepython.disqus.com/admin/moderate/',
    moderate_threads: 'http://mousevsthepython.disqus.com/admin/moderate-threads/',
    settings: 'http://mousevsthepython.disqus.com/admin/settings/',
    unmerged_profiles: 'http://disqus.com/embed/profile/unmerged_profiles/',

    channels: {
        def:      'http://disqus.com/default.html', /* default channel */
        auth:     'https://disqus.com/embed/login.html',
        tweetbox: 'http://disqus.com/forums/integrations/twitter/tweetbox.html?f=mousevsthepython',
        edit:     'http://mousevsthepython.disqus.com/embed/editcomment.html'
    }
};


// 
//     
DISQUS.jsonData.urls.channels.reply = 'http://mediacdn.disqus.com/1326405634/build/system/reply.html';
DISQUS.jsonData.urls.channels.upload = 'http://mediacdn.disqus.com/1326405634/build/system/upload.html';
DISQUS.jsonData.urls.channels.sso = 'http://mediacdn.disqus.com/1326405634/build/system/sso.html';
DISQUS.jsonData.urls.channels.facebook = 'http://mediacdn.disqus.com/1326405634/build/system/facebook.html';
//     
// 