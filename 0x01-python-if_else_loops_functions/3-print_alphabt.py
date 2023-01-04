#!/usr/bin/python3
for all_letters in range(ord('a'), ord('z')+1):
    letter = chr(all_letters)
    if letter not in "qe":
        print("{:s}".format(letter), end="")
