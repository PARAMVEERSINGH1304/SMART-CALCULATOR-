import math

def sine(x):
    return math.sin(math.radians(x))

def cosine(x):
    return math.cos(math.radians(x))

def tangent(x):
    return math.tan(math.radians(x))

def logarithm(x):
    if x <= 0:
        return "Invalid input"
    return math.log10(x)

def square_root(x):
    if x < 0:
        return "Invalid input"
    return math.sqrt(x)

def power(x, y):
    return math.pow(x, y)