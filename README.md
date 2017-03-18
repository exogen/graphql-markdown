# graphql-markdown

Generate Markdown docs for a GraphQL schema.

```sh
npm install graphql-markdown --save-dev
```

**[See an example][example]** generated from the [graphbrainz][] schema.

## Usage

Installing the package adds a `graphql-markdown` script. Point it at a schema
and the output will be written to stdout.

```sh
$ graphql-markdown http://your-server.com/graphql > schema.md
$ graphql-markdown ./path/to/schema.graphql > schema.md
$ graphql-markdown ./path/to/schema.json > schema.md
```

```sh
$ graphql-markdown --help

  Usage: graphql-markdown [options] <schema>

  Output a Markdown document with rendered descriptions and links between types.
  The schema may be specified as:

    - a URL to the GraphQL endpoint (the introspection query will be run)
    - a GraphQL document containing the schema (.graphql or .gql)
    - a JSON document containing the schema (as returned by the introspection query)

  Options:

    --title <string>       Change the document title
    --prologue <string>    Include custom Markdown at the beginning of the document
    --epilogue <string>    Include custom Markdown at the end of the document

```

## Output

Output is optimized for display on GitHub, using GitHub's Markdown renderer.

Due to the complexity of the tables in the generated document, much of the
output is HTML (as allowed by Markdown). Some of your GraphQL descriptions may
be printed as-is (for GitHub to render) while others are pre-rendered by
`graphql-markdown` (if they need to be included in certain HTML tags – GitHub
will not render such content as Markdown).


[example]: https://github.com/exogen/graphbrainz/blob/master/docs/types.md
[graphbrainz]: https://github.com/exogen/graphbrainz
