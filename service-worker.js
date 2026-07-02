{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww34000\viewh19140\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const CACHE = "humalog-scale-v2";\
\
const ASSETS = [\
  "./",\
  "./index.html",\
  "./manifest.webmanifest"\
];\
\
self.addEventListener("install", e => \{\
  e.waitUntil(\
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))\
  );\
\});\
\
self.addEventListener("fetch", e => \{\
  e.respondWith(\
    caches.match(e.request).then(r => r || fetch(e.request))\
  );\
\});}