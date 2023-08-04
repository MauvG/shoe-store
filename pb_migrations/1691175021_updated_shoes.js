/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ws4xkuvsoriuajo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rkgrir8x",
    "name": "inCart",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qyzpmtft",
    "name": "size",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ws4xkuvsoriuajo")

  // remove
  collection.schema.removeField("rkgrir8x")

  // remove
  collection.schema.removeField("qyzpmtft")

  return dao.saveCollection(collection)
})
