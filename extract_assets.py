import re, urllib.request, os, sys, posixpath
from urllib.parse import urljoin, urlparse

urls = [
    'https://ballenacabo.com/',
    'https://ballenacabo.com/menu/',
    'https://ballenacabo.com/gallery/',
    'https://ballenacabo.com/location/',
    'https://ballenacabo.com/about/',
    'https://ballenacabo.com/events/'
]

media_exts = ['.jpg', '.jpeg', '.png', '.webp', '.mp4', '.mov', '.webm']
found = []
for u in urls:
    try:
        html = urllib.request.urlopen(u, timeout=20).read().decode('utf-8', 'ignore')
    except Exception as e:
        print('ERR', u, e)
        continue
    patterns = [r'(?:src|poster)=["\']([^"\']+)["\']', r'data-src=["\']([^"\']+)["\']', r'data-srcset=["\']([^"\']+)["\']']
    for p in patterns:
        for m in re.findall(p, html, flags=re.I):
            for part in m.split(','):
                part = part.strip().split()[0]
                if any(part.lower().endswith(e) for e in media_exts):
                    found.append(part)

# dedupe while preserving order
seen = []
for item in found:
    if item not in seen:
        seen.append(item)

for item in seen:
    print(item)
