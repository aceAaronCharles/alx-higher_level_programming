#!/usr/bin/python3
#  function that prints a dictionary by ordered keys

def print_sorted_dictionary(a_dictionary):
    """Print a dictionary by ordered keys."""
    [print("{} : {}".format(keys, a_dictionary[k])) for key in sorted(a_dictionary)]
