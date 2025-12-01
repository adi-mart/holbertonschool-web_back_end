#!/usr/bin/env python3
"""Module for pagination helper function."""
import typing


def index_range(page: int, page_size: int) -> typing.Tuple[int, int]:
    """Return a tuple of size two containing a start index and an end index"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
