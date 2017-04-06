# graphql-markdown

[![Greenkeeper badge](https://badges.greenkeeper.io/exogen/graphql-markdown.svg)](https://greenkeeper.io/)

Generate nice docs for your GraphQL schema right in your GitHub repository.

```sh
npm install graphql-markdown --save-dev
```

**[See an example][example]** generated from the [graphbrainz][] schema.

## Usage

Installing the package adds a `graphql-markdown` script. Point it at a schema
and the output will be written to stdout.

The schema may be retrieved from a GraphQL endpoint:

```sh
$ graphql-markdown http://your-server.com/graphql > schema.md
```

…or a module exporting an instance of `GraphQLSchema`:

```sh
$ graphql-markdown ./path/to/schema.js > schema.md
```

…or a file containing GraphQL syntax:

```sh
$ graphql-markdown ./path/to/schema.graphql > schema.md
```

…or a file containing the JSON output of an introspection query:

```sh
$ graphql-markdown ./path/to/schema.json > schema.md
```

### Options

```
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

## Output

Output is optimized for display on GitHub, using GitHub Flavored Markdown.

Due to the complexity of the tables in the generated document, much of the table
output is HTML (as allowed by Markdown).


[example]: https://github.com/exogen/graphbrainz/blob/master/docs/types.md
[graphbrainz]: https://github.com/exogen/graphbrainz
