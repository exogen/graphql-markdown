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

If `--update-file` is given, the generated Markdown will be output to the given
file between the `<!-- START graphql-markdown -->` and `<!-- END graphql-markdown -->`
comment markers instead of printed to STDOUT. If the file does not exist, it
will be created (and will include the comment markers for future updates). Use
this if you’d like to embed the rendered Markdown as just one part of a larger
document (see also the `--heading-level` option).

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

  --title <string>       Change the top heading title (default: 'Schema Types')
  --no-title             Do not print a default title
  --prologue <string>    Include custom Markdown after the title
  --epilogue <string>    Include custom Markdown after everything else
  --heading-level <num>  Heading level to begin at, useful if you are embedding the
                         output in a document with other sections (default: 1)
  --update-file <file>   Markdown document to update (between comment markers) or
                         create (if the file does not exist)
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

##### Options

* **`title`**: The title of the document, defaults to “Schema Types”.
* **`prologue`**: Markdown content to include after the title.
* **`epilogue`**: Markdown content to include after everything else.
* **`printer`**: A function to handle each line of output, defaults to `console.log`.
* **`headingLevel`**: The initial heading level at which to render Markdown
  sections in the output, defaults to 1. Use this if you are using `updateFile`
  to embed the output in a larger document with other sections.
* **`unknownTypeURL`**: A string or function to determine the URL for linking to
  types that aren’t found in the schema being rendered. This may be the case if
  you’re rendering the result of `diffSchema()`, for example. String values will
  have `#${type.name.toLowerCase()}` appended, and function values will be
  called with the type object for full control.

#### updateSchema(path: string, schema: object, options: object)

Given a path to a Markdown document, inject the output of `renderSchema` (with
the given schema and options) into the document between the comment markers
`<!-- START graphql-markdown -->` and `<!-- END graphql-markdown -->`. Returns a
Promise.

If the file does not exist, it will be created. If the document is empty, the
necessary comment markers will automatically be inserted, but if there is
existing content and no comment markers, the Promise will be rejected with an
error.

#### diffSchema(oldSchema: object, newSchema: object, options: object)

Given two schema JSON objects (the results of the introspection query on two
schemas), return a new schema JSON object containing only the added or updated
types and fields. You can use this to document a schema update, or to document
the effects of a schema extension (e.g. `extend type` definitions).

##### Options

* **`processTypeDiff`**: A function to add or modify fields on each type that
  will be output.

## Output

Output is optimized for display on GitHub, using GitHub Flavored Markdown. Due to the
complexity of the tables in the generated document, much of the table output is raw HTML
(as allowed by Markdown).


[example]: https://github.com/exogen/graphbrainz/blob/master/docs/types.md
[graphbrainz]: https://github.com/exogen/graphbrainz
