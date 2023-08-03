/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ws4xkuvsoriuajo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qwohq2ga",
    "name": "desc",
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
  const collection = dao.findCollectionByNameOrId("ws4xkuvsoriuajo")

  // remove
  collection.schema.removeField("qwohq2ga")

  return dao.saveCollection(collection)
})
