#!/usr/bin/env python3
"""Module for key-value operations."""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> \
        Tuple[str, float]:
    """Return a tuple containing a string and
    the square of a number as a float."""
    return (k, float(v * v))
