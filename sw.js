/* ===== Vampire Crawlers Guide - Service Worker ===== */
/* Offline-first cache strategy for static guide site */

var CACHE_NAME = "vc-guide-v2.4.1";
var ASSETS = [
  "index.html",
  "getting-started.html",
  "combat.html",
  "deckbuilding.html",
  "dungeons.html",
  "items.html",
  "bosses.html",
  "changelog.html",
  "css/style.css",
  "js/common.js",
  "manifest.json"
];

/* Install: cache all core assets */
self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(ASSETS);
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

/* Activate: clean old caches */
self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return k.indexOf("vc-guide-") === 0 && k !== CACHE_NAME; })
            .map(function(k){ return caches.delete(k); })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});

/* Fetch: cache-first, fallback to network */
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  e.respondWith(
    caches.open(CACHE_NAME).then(function(cache){ return cache.match(e.request); }).then(function(cached){
      if(cached) return cached;
      return fetch(e.request).then(function(response){
        var url = new URL(e.request.url);
        if(url.origin === self.location.origin){
          var respClone = response.clone();
          caches.open(CACHE_NAME).then(function(cache){
            cache.put(e.request, respClone);
          });
        }
        return response;
      }).catch(function(){
        if(e.request.mode === "navigate"){
          return caches.open(CACHE_NAME).then(function(cache){ return cache.match("index.html"); });
        }
      });
    })
  );
});
