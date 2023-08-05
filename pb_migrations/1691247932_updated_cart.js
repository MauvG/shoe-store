/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bhpu81vhgllsfax")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "isewu39w",
    "name": "category",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bhpu81vhgllsfax")

  // remove
  collection.schema.removeField("isewu39w")

  return dao.saveCollection(collection)
})
