#!/usr/bin/python3
# fetching a page using urllib
import urllib.request

quest = urllib.request.Request('https://alx-intranet.hbtn.io/status')
with urllib.request.urlopen(quest) as response:
    html = response.read()

print('Body response:')
print('\t- type:', type(html))
print('\t- content:', html)
print('\t- utf8 content:', html.decode('utf-8'))
