#!/usr/bin/python3
# return[[elem**2 in row] for row in matrix]
# return  (list(map(lambda x: x**2, list)) for list in matrix)

def square_matrix_simple(matrix=[]):
    if matrix is not None:
        new = []
        for row in matrix:
            new.append(list(map(lambda x: x**2, rows)))
            return(new)
    return None
