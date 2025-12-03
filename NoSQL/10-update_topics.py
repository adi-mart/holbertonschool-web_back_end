#!/usr/bin/env python3
""" Module for updating topics in a MongoDB collection. """


def update_topics(mongo_collection, name, topics):
    """ update topics for a school document in a collection """
    return mongo_collection.update_one(
        {"name": name},
        {"$set": {"topics": topics}}
    )
