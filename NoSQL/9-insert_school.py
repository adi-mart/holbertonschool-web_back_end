#!/usr/bin/env python3
""" Module for inserting a new document in a MongoDB collection. """


def insert_school(mongo_collection, **kwargs):
    """ insert a new document in a collection """
    return mongo_collection.insert_one(kwargs).inserted_id
