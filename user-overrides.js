// mcnlty's Arkenfox Overrides

// DNS over HTTPS
// Protects web requests from an ISP
// Disable if you use PiHole, etc.
user_pref("network.trr.uri", "https://base.dns.mullvad.net/dns-query");
user_pref("network.trr.custom_uri", "https://base.dns.mullvad.net/dns-query");
user_pref("network.trr.mode", 3);
// user_pref("network.trr.excluded-domains", "*.example.com"); // Use this if you need to access local

// Enable IPv6
user_pref("network.dns.disableIPv6", false);

//// Disable Safe Browsing (Phones home to Google).
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);

//// Disable Caching
// Disable Disk Caching
user_pref("browser.cache.disk.enable", false);
// Disable SSL Certificate Cache
user_pref("browser.cache.disk_cache_ssl", false);
// Disable Memory Cache
user_pref("browser.cache.memory.enable", false);

//// Strict third party requests (May cause images/video to break).
user_pref("network.http.referer.XOriginPolicy", 2);

//// WebRTC settings (Video calls, etc)
user_pref("media.peerconnection.enabled", false);

//// Disable WebGL (Security)
user_pref("webgl.disabled", true);

//// Disable DRM
user_pref("media.eme.enabled", false);

//// Autoplaying settings
// 0 = Allow all, 1 = Block Non-Muted Media (default), 5 = Block All
user_pref("media.autoplay.default", 5);
// 0 = Sticky (Default), 1 = Transient, 2 = User
user_pref("media.autoplay.blocking_policy", 2);

//// Fingerprinting
// Enable ETP Strict Mode
user_pref("browser.contentblocking.category", "strict");
// Enable RFP
user_pref("privacy.resistFingerprinting", true);
// Enable RFP Letterboxing
user_pref("privacy.resistFingerprinting.letterboxing", true);
// Enable First Party Isolation
user_pref("privacy.firstparty.isolate", true);

//// Disable Tracking.
// Geolocation Tracking
// General
user_pref("geo.enabled", false);
// Windows
user_pref("geo.provider.ms-windows-location", false);
// MacOS
user_pref("geo.provider.use_corelocation", false);
// Linux
user_pref("geo.provider.use_gpsd", false);
user_pref("geo.provider.use_geoclue", false);
// Disable Tracking of Microphone and Camera Status
user_pref("media.navigator.enabled", false);
// Sets 'en-US, en' for Displaying Pages and 'en-US' as Locale.
user_pref("privacy.spoof_english", 2);
// Set Browser Search Region to the US
user_pref("browser.search.region", "US");
// Set 'en-US' as Javascript Locale
user_pref("javascript.use_us_english_locale", true);

//// Activity Stream
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);
user_pref("browser.startup.page", "1");

//// Clear Data on Shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.offlineApps", false);
user_pref("privacy.clearOnShutdown.cookies", false);
// Manual Wiping
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.offlineApps", false);
user_pref("privacy.cpd.cookies", false);
// Delete History
user_pref("places.history.enabled", false);


//// Disable Mozilla Crap / Fix UI
// Disable Firefox Accounts
user_pref("identity.fxaccounts.enabled", false);
// Disable Pocket (Spyware)
user_pref("extensions.pocket.enabled", false);
// Disable Firefox Password Manager (stores passwords in plain text)
user_pref("signon.rememberSignons", false);
// Disable More From Mozilla
user_pref("browser.preferences.moreFromMozilla", false);
// Disable Firefox Labs
user_pref("browser.preferences.experimental", false);