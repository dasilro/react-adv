/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.loadModule('workbox-background-sync');
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

// Cachefirst strategy.
const cacheFirst = [
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css'
]

registerRoute(
    ({url}) => {
        return cacheFirst.includes(url.href);
    },
    new CacheFirst(),
);

// Referencia.
// registerRoute(
//     new RegExp('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'),
//     new CacheFirst(),
// );


// Networkfirst strategy.
const cacheNetworkFirst = [
    '/api/auth/renew',
    '/api/events'
];

registerRoute(
    ({url}) => {
        return cacheNetworkFirst.includes(url.pathname);
    },
    new NetworkFirst(),
);

// Referencia.
// registerRoute(
//     new RegExp('http://localhost:4000/api/auth/renew'),
//     new NetworkFirst(),
// );

// Post offline.
const bgSyncPlugin = new BackgroundSyncPlugin('posteos-offline', {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
  });

registerRoute(
    new RegExp('http://localhost:4000/api/events'),
    new NetworkOnly({
        plugins: [ bgSyncPlugin ]
    }),
    'POST'
);

// Put offline.
registerRoute(
    new RegExp('http://localhost:4000/api/events/'),
    new NetworkOnly({
        plugins: [ bgSyncPlugin ]
    }),
    'PUT'
);

// Delete offline.
registerRoute(
    new RegExp('http://localhost:4000/api/events/'),
    new NetworkOnly({
        plugins: [ bgSyncPlugin ]
    }),
    'DELETE'
);

