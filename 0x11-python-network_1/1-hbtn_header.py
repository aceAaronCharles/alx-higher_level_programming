#!/usr/bin/python3

"""
Takes in a url, send a request to the URL and displays
 the value of the X-Request-Id variable found in the header
"""

from sys import argv
import urllib.request

if __name__ == "__main__":

    quest = urllib.request.Request(argv[1])
    with urllib.request.urlopen(quest) as response:
        print(dict(response.headers).get("X-Request-Id"))
