#!/usr/bin/env python3
""" Module for retrieving schools by topic from a MongoDB collection. """


def schools_by_topic(mongo_collection, topic):
    """ return the list of school having a specific topic """
    return mongo_collection.find({"topics": topic})
