// Import the module
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Create a client
const client = new sdk.Client()


// Set client credentials
client.setProject("6172d13cf302d")
    .setEndpoint("http://localhost:4003/v1")
    .setKey("1e860fbd1ccbf12f65afd08582d8df39003fd88c788315e720fe55711eeb104815f2b3d8781513224ce5aa27cb1570760055db800993ec5f5df0f57a06c5fbd5f53c28727333c995bd3fe04e78e78e354e6a67e053e613bdb43d89dbde7e61f488d729bcb338f2421e2be88fdec70ecf9968d8aa765960bdc6c4b962a1c3a5b4")


// Create the function class instance
const functions = new sdk.Functions(client)

// Creating a new function
functions.create("foo", ["*"], "node-16.0").then(() => {
        console.log("Successfully created a new function")
    })
    .catch((error) => {
        console.log("Error while creating a new function.")

        console.log(error)
    })

// Listing functions
functions.list().then((res) => {
    let index = 0

    res.functions.forEach((_function) => {
        console.log(`${index}: ${_function.name}`)

        index += 1
    })
})

// Getting details for a function
functions.get("6172d8bc57f89").then((res) => {
    console.log(`Fetching details for function id ${res.$id}`)
    console.log(`Name - ${res.name}`)
    console.log(`Created at - ${res.dateCreated}`)
    console.log(`Status - ${res.status}`)
    console.log(`Runtime - ${res.runtime}`)
})

// Update a function

const newName = "Bar"

functions.update("6172d8bc57f89", newName, ["*"]).then(() => {
    console.log("Successfully renamed the function!")
}).catch((err) => {
    console.log(err)
})

// Deleting function
functions.delete("6172d8bc57f89").then(() => {
    console.log("Successfully deleted")
})

// Create tags
functions.createTag("6172e57d60cc5", "foo", "somepath.tar.gz").then(() => {
    console.log("Successfully created a new tag")
})

// Update Tags
functions.updateTag("6172e57d60cc5", "foo-tag").then(() => {
    console.log("Succesfully changed the tag!")
})

// List tags
functions.listTags("6172e57d60cc5").then((res) => {
    let index = 0

    for (const tag of res.tags) {
        console.log(`${index}: ${tag.$id}`)

        index += 1
    }
})

// Get a tag
functions.getTag("6172e57d60cc5", "foo-tag").then((res) => {
    console.log("Tag id is", res.$id)
})

// Delete tag
functions.deleteTag("6172e57d60cc5", "foo-tag").then(() => {
    console.log("Successfully deleted the tag")
})

// Create an execution
functions.createExecution("6172e57d60cc5").then((res) => {
    console.log("Created an excecution")
})

// Get a list of all the executions
functions.listExecutions("6172e57d60cc5").then((res) => {
    let index = 0

    for (const tag of res.executions) {
        console.log(`${index}: ${tag.$id}`)

        index += 1
    }
})

functions.getExecution("6172e57d60cc5", "5e5ea5c16897e").then((res) => {
    // Play with the execution object
})
