#!/usr/bin/env python3
"""Measure the runtime of multiple async comprehensions
running concurrently."""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measures the total runtime of running four async comprehensions
    concurrently."""
    start = time.time()
    await asyncio.gather(*(async_comprehension() for i in range(4)))
    end = time.time()
    return end - start
