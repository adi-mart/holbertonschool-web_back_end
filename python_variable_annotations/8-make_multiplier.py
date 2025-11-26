#!/usr/bin/env python3
"""Module for creating multiplier functions."""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by a given multiplier."""
    def inner(x: float) -> float:
        return x * multiplier
    return inner
