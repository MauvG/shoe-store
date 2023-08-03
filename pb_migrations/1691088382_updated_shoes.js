/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ws4xkuvsoriuajo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rcfrsboh",
    "name": "featured",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ws4xkuvsoriuajo")

  // remove
  collection.schema.removeField("rcfrsboh")

  return dao.saveCollection(collection)
})
