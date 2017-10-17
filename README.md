[![npm version](https://img.shields.io/npm/v/graphql-markdown.svg)](https://www.npmjs.com/package/graphql-markdown)
[![Greenkeeper](https://badges.greenkeeper.io/exogen/graphql-markdown.svg)](https://greenkeeper.io/)

# graphql-markdown

Generate nice docs for your GraphQL schema right in your GitHub repository.

```console
$ npm install graphql-markdown --save-dev
```

**[See an example][example]** generated from the [GraphBrainz][] schema.

## Usage

### Command Line API

Installing the package adds a `graphql-markdown` script. Point it at a schema
and the output will be written to stdout.

The schema may be retrieved from a GraphQL endpoint:

```console
$ graphql-markdown http://your-server.com/graphql > schema.md
```

…or a module exporting an instance of `GraphQLSchema`:

```console
$ graphql-markdown ./path/to/schema.js > schema.md
```

…or a file containing GraphQL syntax:

```console
$ graphql-markdown ./path/to/schema.graphql > schema.md
```

…or a file containing the JSON output of an introspection query:

```console
$ graphql-markdown ./path/to/schema.json > schema.md
```

#### Options

```console
$ graphql-markdown --help
Usage: graphql-markdown [options] <schema>

Output a Markdown document with rendered descriptions and links between types.
The schema may be specified as:

  - a URL to the GraphQL endpoint (the introspection query will be run)
  - a GraphQL document containing the schema (.graphql or .gql)
  - a JSON document containing the schema (as returned by the introspection query)
  - an importable module with the schema as its default export (either an instance
    of GraphQLSchema or a JSON object)

Options:

  --title <string>       Change the document title (default: 'Schema Types')
  --prologue <string>    Include custom Markdown at the beginning of the document
  --epilogue <string>    Include custom Markdown at the end of the document
  --require <module>     If importing the schema from a module, require the specified
                         module first (useful for e.g. babel-register)
  --version              Print version and exit
```

### Node API

The following functions are exported from the `graphql-markdown` module for
programmatic use.

#### loadSchemaJSON(schemaPath: string)

Given a string pointing to a GraphQL schema (URL, module, or file path), get the
result of the introspection query, suitable for use as input to `renderSchema`.

#### renderSchema(schema: object, options: object)

Given a schema JSON object (the output of the introspection query, an object
with a `__schema` property), render the schema to the console or the provided
`printer` function.

| Option     | Description |
| ---------- | ----------- |
| `title`    | The title of the document, defaults to “Schema Types”. |
| `prologue` | Markdown content to include after the title. |
| `epilogue` | Markdown content to include at the end of the document. |
| `printer`  | A function to handle each line of output, defaults to `console.log`. |

#### diffSchema(oldSchema: object, newSchema: object, options: object)

Given two schema JSON objects (the results of the introspection query on two
schemas), return a new schema JSON object containing only the added or updated
types and fields. You can use this to document a schema update, or to document
the effects of a schema extension (e.g. `extend type` definitions).

| Option            | Description |
| ----------------- | ----------- |
| `processTypeDiff` | A function to add or modify fields on each type that will be output. |

## Output

Output is optimized for display on GitHub, using GitHub Flavored Markdown. Due to the
complexity of the tables in the generated document, much of the table output is raw HTML
(as allowed by Markdown).


[example]: https://github.com/exogen/graphbrainz/blob/master/docs/types.md
[graphbrainz]: https://github.com/exogen/graphbrainz
