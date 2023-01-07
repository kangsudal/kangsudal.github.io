'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "894eeb266bd4e4f713957673a1940669",
".git/config": "ff91313ecad78eb03d2cc335310f0778",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0635aae17800ebb57ac8d28ba8e58b8e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5da76c849a963315bec9c4316bd84ea8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e1d507f990b9bbdedefb53f9a40edbe",
".git/logs/refs/heads/master": "7e1d507f990b9bbdedefb53f9a40edbe",
".git/logs/refs/remotes/origin/master": "4f9a76a1ea185484c614d9ed21686b71",
".git/objects/02/4b6871800ae42d794883f1a71f18030ce70e98": "5815c61ee689ceb95ddbe435e03353c7",
".git/objects/04/3fc5871a7b0d100df21f465f76228d1ee202c2": "8113409ae8bfda723652e8972024d592",
".git/objects/08/296c10682ff40548b08dd2e653ff04975784e1": "ef544756993fbda8da2e4f93150ee4b4",
".git/objects/0e/44fed9fd516cc745b9f5dcf5c3fe7e1d1f3a02": "f5dd984fea82c834a1fee6e56d7d50bd",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/25/f9626f7e2120bd9425d666e0599042133d9ea4": "42330834b4dc7dbcce0b990e2bd80b65",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/36/51eae3e548e2763e2dcb5b6dab7981a941df64": "829d78a727e7c61e242f888474c37961",
".git/objects/39/e32c029e68ef1a3250d9c4320457b2d6cd160d": "1632f8a8528d3e18f27731b9f7269794",
".git/objects/3f/600a9e63ec145547667158562b21f31c19bd81": "97cb4e5255cd70560dde742cc8ba63e2",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/ab8c53202ecbffa8fd710aae5234fe247ad0bd": "ab4ab4a9f58011e2ac1dadccc2872a62",
".git/objects/54/e62dcd609878667594abc05b105aef02153410": "021267e746fa01b3acbf69e30f6fb3c2",
".git/objects/5a/af67318e08f9a54909fa8f81d065c0458b45ee": "1874339d6de834c67df6d01e971dc399",
".git/objects/6c/b3b705d018006a2bd4200ea94c9d5fb98b6f76": "3f0f65921839b32e52dee427e6222ebf",
".git/objects/74/b65cfa86583d5b6170cf51179dfa48a3a09ef1": "0c20416639108454d3da3035865f45ba",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/88/74d044ac": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/a90b1728154e742108d1c9d345f36b12cb604e": "c035c7f90b5c925d0b82184881b49b20",
".git/objects/91/bd00b04636ffc32edf9b8b9a5a4b15cc199a63": "ceb471db0f3cdfc0d2817dd105960370",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b0df9eec1e64b6d2b4af4313aebac63b0574b3": "51302ad2b35d38b2e7aecc7cd8cbaf2f",
".git/objects/a2/9d88a9849f9db97cd6f774208d856a0fd17687": "6f9f523f980cc166af84dac5d68acdfd",
".git/objects/aa/02c2c9dd2ae09cb60789e28a972c7a1e93d883": "b2f4038560419a0477085c3d1a207eff",
".git/objects/aa/86120dea472ed10b9819a8959954aa12359bab": "3a685b6a876298e2a873f79e0c44162c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/01baee936a9eb0494209481a93797d5ce0497c": "c188a8d99a8fa94a269454a2725abee4",
".git/objects/b4/0322270f0601be69956a3ad8bd7af7718ae240": "1a524bc0c4648f8992960f9700e9fceb",
".git/objects/b4/371ac58ab13af768c54582d92eb5ce38a35d8b": "f85d00aa95560731f6ead4299c81fd89",
".git/objects/b6/58a8576182be9ff0b76044197d01813997730a": "36822d7ce53bda06b77ac29afa72e54c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/eb834d0372b7d90c51eff1a86956a977ddcbd4": "d76f2c14325b110f89dd895d1b9b36ee",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/978639135a09c49f12d19de6171139c40467c8": "ac827400269987ce185307bb065af09f",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c2/9f9297bc522d49e70425b2e7b25be54def0985": "8ad7a35ad72e69a0653b2f1acd08af77",
".git/objects/c4/ecb722d5d811fe63bb32f2c68462efb9184ff5": "a00387a8b5fa11a201aaf6bdc50bc8f1",
".git/objects/c7/dfaf25d24a9c678e1fe28bfb22571262ff518b": "38a9ae7879420149ce34ed67a0dac64b",
".git/objects/c9/3e439cff8c66f37f9c607cd728dc7b16091d09": "379f2a3ad9c48a92ca0809169d4886f2",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/f829e64f81f2df4ec955fbb82bd66a53e02f3c": "fc9cdcf89875fca91d69ea2cca82e76d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/7385827749defad9b98e841139699725c917a1": "29df804ca8ce88c423b2267621c2939c",
".git/refs/heads/master": "ef1e83770deb003bada6932eaa130102",
".git/refs/remotes/origin/master": "ef1e83770deb003bada6932eaa130102",
"assets/AssetManifest.json": "8c0df76f346d1d26c990f40943293332",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/icons/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/icons/google-play-badge.png": "5ced005a4f24936837005ce07bd70a3a",
"assets/icons/whateatgo-icon.png": "9cb2a64c78c2734d3e5519c02da9aa3b",
"assets/images/calculator1.png": "025ee12cfde7bf16dd52ef3afe6e36d4",
"assets/images/calculator2.png": "7415c2eb1bc8e835267624b22bdb9948",
"assets/images/millie1.png": "18fe9f043e10f7de3b220d5e27889a6a",
"assets/images/millie2.png": "c5691826675e0f14e4452e6c60ef05b2",
"assets/images/millie3.png": "59e51510b59e59e4c9f8156612ec992b",
"assets/images/performance_tracker.png": "359933d008b8297d8ec3d118f310d787",
"assets/images/performance_tracker_web.png": "05014310979b78bcf3566b3bfc7b03b9",
"assets/images/whateatgo1.png": "1720b82b1821f1b99862d2cc6b4637db",
"assets/images/whateatgo2.png": "04749920516f5bd40bd119e7c0bdccfb",
"assets/NOTICES": "cbc238962dbdd77f39f118df55456062",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b35a02ac9fca428dc4368d87c81880e9",
"/": "b35a02ac9fca428dc4368d87c81880e9",
"main.dart.js": "dc4e2613a15d9112180bb6718ee3586e",
"manifest.json": "d0317f3c618ca1c17f5ced7e7c30eb58",
"version.json": "a45099842529357dcc8b58b9bade1f8a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
