# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Objects](#objects)
    * [Alias](#alias)
    * [Area](#area)
    * [AreaConnection](#areaconnection)
    * [AreaEdge](#areaedge)
    * [Artist](#artist)
    * [ArtistConnection](#artistconnection)
    * [ArtistCredit](#artistcredit)
    * [ArtistEdge](#artistedge)
    * [BrowseQuery](#browsequery)
    * [Collection](#collection)
    * [CollectionConnection](#collectionconnection)
    * [CollectionEdge](#collectionedge)
    * [Coordinates](#coordinates)
    * [Disc](#disc)
    * [Event](#event)
    * [EventConnection](#eventconnection)
    * [EventEdge](#eventedge)
    * [Instrument](#instrument)
    * [InstrumentConnection](#instrumentconnection)
    * [InstrumentEdge](#instrumentedge)
    * [Label](#label)
    * [LabelConnection](#labelconnection)
    * [LabelEdge](#labeledge)
    * [LifeSpan](#lifespan)
    * [LookupQuery](#lookupquery)
    * [Medium](#medium)
    * [PageInfo](#pageinfo)
    * [Place](#place)
    * [PlaceConnection](#placeconnection)
    * [PlaceEdge](#placeedge)
    * [Rating](#rating)
    * [Recording](#recording)
    * [RecordingConnection](#recordingconnection)
    * [RecordingEdge](#recordingedge)
    * [Relationship](#relationship)
    * [RelationshipConnection](#relationshipconnection)
    * [RelationshipEdge](#relationshipedge)
    * [Relationships](#relationships)
    * [Release](#release)
    * [ReleaseConnection](#releaseconnection)
    * [ReleaseEdge](#releaseedge)
    * [ReleaseEvent](#releaseevent)
    * [ReleaseGroup](#releasegroup)
    * [ReleaseGroupConnection](#releasegroupconnection)
    * [ReleaseGroupEdge](#releasegroupedge)
    * [SearchQuery](#searchquery)
    * [Series](#series)
    * [SeriesConnection](#seriesconnection)
    * [SeriesEdge](#seriesedge)
    * [Tag](#tag)
    * [TagConnection](#tagconnection)
    * [TagEdge](#tagedge)
    * [Track](#track)
    * [URL](#url)
    * [Work](#work)
    * [WorkConnection](#workconnection)
    * [WorkEdge](#workedge)
  * [Enums](#enums)
    * [ReleaseGroupType](#releasegrouptype)
    * [ReleaseStatus](#releasestatus)
  * [Scalars](#scalars)
    * [ASIN](#asin)
    * [Boolean](#boolean)
    * [Date](#date)
    * [Degrees](#degrees)
    * [DiscID](#discid)
    * [Duration](#duration)
    * [Float](#float)
    * [ID](#id)
    * [IPI](#ipi)
    * [ISNI](#isni)
    * [ISRC](#isrc)
    * [ISWC](#iswc)
    * [Int](#int)
    * [Locale](#locale)
    * [MBID](#mbid)
    * [String](#string)
    * [Time](#time)
    * [URLString](#urlstring)
  * [Interfaces](#interfaces)
    * [Entity](#entity)
    * [Node](#node)

</details>

## Query
The query root, from which multiple types of MusicBrainz
requests can be made.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>lookup</strong></td>
<td valign="top"><a href="#lookupquery">LookupQuery</a></td>
<td>
Perform a lookup of a MusicBrainz entity by its MBID.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>browse</strong></td>
<td valign="top"><a href="#browsequery">BrowseQuery</a></td>
<td>
Browse all MusicBrainz entities directly linked to another entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#searchquery">SearchQuery</a></td>
<td>
Search for MusicBrainz entities using Lucene query syntax.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#node">Node</a></td>
<td>
Fetches an object given its ID
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
</tbody>
</table>

## Objects

### Alias

[Aliases](https://musicbrainz.org/doc/Aliases) are variant names
that are mostly used as search help: if a search matches an entity’s alias, the
entity will be given as a result – even if the actual name wouldn’t be.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The aliased name of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sortName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The string to use for the purpose of ordering by name (for
example, by moving articles like ‘the’ to the end or a person’s last name to
the front).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>locale</strong></td>
<td valign="top"><a href="#locale">Locale</a></td>
<td>
The locale (language and/or country) in which the alias is
used.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>primary</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>
Whether this is the main alias for the entity in the
specified locale (this could mean the most recent or the most common).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The type or purpose of the alias – whether it is a variant,
search hint, etc.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>typeID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
</tbody>
</table>

### Area

[Areas](https://musicbrainz.org/doc/Area) are geographic regions
or settlements (countries, cities, or the like).

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official name of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sortName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The string to use for the purpose of ordering by name (for
example, by moving articles like ‘the’ to the end or a person’s last name to
the front).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disambiguation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A comment used to help distinguish identically named entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#alias">Alias</a>]</td>
<td>
[Aliases](https://musicbrainz.org/doc/Aliases) are used to store
alternate names or misspellings.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isoCodes</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>
[ISO 3166 codes](https://en.wikipedia.org/wiki/ISO_3166) are
the codes assigned by ISO to countries and subdivisions.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">standard</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Specify the particular ISO standard codes to retrieve.
Available ISO standards are 3166-1, 3166-2, and 3166-3.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The type of area (country, city, etc. – see the [possible
values](https://musicbrainz.org/doc/Area)).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>typeID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top"><a href="#artistconnection">ArtistConnection</a></td>
<td>
A list of artists linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top"><a href="#eventconnection">EventConnection</a></td>
<td>
A list of events linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>labels</strong></td>
<td valign="top"><a href="#labelconnection">LabelConnection</a></td>
<td>
A list of labels linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>places</strong></td>
<td valign="top"><a href="#placeconnection">PlaceConnection</a></td>
<td>
A list of places linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releases</strong></td>
<td valign="top"><a href="#releaseconnection">ReleaseConnection</a></td>
<td>
A list of releases linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top">[<a href="#releasegrouptype">ReleaseGroupType</a>]</td>
<td>
Filter by one or more release group types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top">[<a href="#releasestatus">ReleaseStatus</a>]</td>
<td>
Filter by one or more release statuses.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationships</strong></td>
<td valign="top"><a href="#relationships">Relationships</a></td>
<td>
Relationships between this entity and other entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a></td>
<td>
A list of collections containing this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#tagconnection">TagConnection</a></td>
<td>
A list of tags linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### AreaConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#areaedge">AreaEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#area">Area</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### AreaEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#area">Area</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### Artist

An [artist](https://musicbrainz.org/doc/Artist) is generally a
musician, group of musicians, or other music professional (like a producer or
engineer). Occasionally, it can also be a non-musical person (like a
photographer, an illustrator, or a poet whose writings are set to music), or
even a fictional character.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official name of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sortName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The string to use for the purpose of ordering by name (for
example, by moving articles like ‘the’ to the end or a person’s last name to
the front).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disambiguation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A comment used to help distinguish identically named entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#alias">Alias</a>]</td>
<td>
[Aliases](https://musicbrainz.org/doc/Aliases) are used to store
alternate names or misspellings.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The country with which an artist is primarily identified. It
is often, but not always, its birth/formation country.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>area</strong></td>
<td valign="top"><a href="#area">Area</a></td>
<td>
The area with which an artist is primarily identified. It
is often, but not always, its birth/formation country.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>beginArea</strong></td>
<td valign="top"><a href="#area">Area</a></td>
<td>
The area in which an artist began their career (or where
they were born, if the artist is a person).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endArea</strong></td>
<td valign="top"><a href="#area">Area</a></td>
<td>
The area in which an artist ended their career (or where
they died, if the artist is a person).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lifeSpan</strong></td>
<td valign="top"><a href="#lifespan">LifeSpan</a></td>
<td>
The begin and end dates of the entity’s existence. Its exact
meaning depends on the type of entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gender</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
Whether a person or character identifies as male, female, or
neither. Groups do not have genders.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>genderID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `gender`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
Whether an artist is a person, a group, or something else.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>typeID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ipis</strong></td>
<td valign="top">[<a href="#ipi">IPI</a>]</td>
<td>
List of [Interested Parties Information](https://musicbrainz.org/doc/IPI)
(IPI) codes for the artist.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isnis</strong></td>
<td valign="top">[<a href="#isni">ISNI</a>]</td>
<td>
List of [International Standard Name Identifier](https://musicbrainz.org/doc/ISNI)
(ISNI) codes for the artist.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recordings</strong></td>
<td valign="top"><a href="#recordingconnection">RecordingConnection</a></td>
<td>
A list of recordings linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releases</strong></td>
<td valign="top"><a href="#releaseconnection">ReleaseConnection</a></td>
<td>
A list of releases linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top">[<a href="#releasegrouptype">ReleaseGroupType</a>]</td>
<td>
Filter by one or more release group types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top">[<a href="#releasestatus">ReleaseStatus</a>]</td>
<td>
Filter by one or more release statuses.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releaseGroups</strong></td>
<td valign="top"><a href="#releasegroupconnection">ReleaseGroupConnection</a></td>
<td>
A list of release groups linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top">[<a href="#releasegrouptype">ReleaseGroupType</a>]</td>
<td>
Filter by one or more release group types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>works</strong></td>
<td valign="top"><a href="#workconnection">WorkConnection</a></td>
<td>
A list of works linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationships</strong></td>
<td valign="top"><a href="#relationships">Relationships</a></td>
<td>
Relationships between this entity and other entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a></td>
<td>
A list of collections containing this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rating</strong></td>
<td valign="top"><a href="#rating">Rating</a></td>
<td>
The rating users have given to this entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#tagconnection">TagConnection</a></td>
<td>
A list of tags linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### ArtistConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#artistedge">ArtistEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#artist">Artist</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### ArtistCredit

[Artist credits](https://musicbrainz.org/doc/Artist_Credits)
indicate who is the main credited artist (or artists) for releases, release
groups, tracks, and recordings, and how they are credited. They consist of
artists, with (optionally) their names as credited in the specific release,
track, etc., and join phrases between them.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>artist</strong></td>
<td valign="top"><a href="#artist">Artist</a></td>
<td>
The entity representing the artist referenced in the
credits.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The name of the artist as credited in the specific release,
track, etc.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>joinPhrase</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
Join phrases might include words and/or punctuation to
separate artist names as they appear on the release, track, etc.
</td>
</tr>
</tbody>
</table>

### ArtistEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#artist">Artist</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### BrowseQuery

A query for all MusicBrainz entities directly linked to another
entity.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>areas</strong></td>
<td valign="top"><a href="#areaconnection">AreaConnection</a></td>
<td>
Browse area entities linked to the given arguments.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a collection in which the entity is found.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top"><a href="#artistconnection">ArtistConnection</a></td>
<td>
Browse artist entities linked to the given arguments.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">area</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an area to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a collection in which the entity is found.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">recording</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a recording to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">release</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a release to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">releaseGroup</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a release group to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">work</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a work to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a></td>
<td>
Browse collection entities linked to the given arguments.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">area</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an area to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">artist</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an artist to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">editor</td>
<td valign="top"><a href="#string">String</a></td>
<td>
The username of the editor who created the collection.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">event</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an event to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">label</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a label to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">place</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a place to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">recording</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a recording to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">release</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a release to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">releaseGroup</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a release group to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">work</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a work to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top"><a href="#eventconnection">EventConnection</a></td>
<td>
Browse event entities linked to the given arguments.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">area</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an area to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">artist</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an artist to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a collection in which the entity is found.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">place</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a place to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>labels</strong></td>
<td valign="top"><a href="#labelconnection">LabelConnection</a></td>
<td>
Browse label entities linked to the given arguments.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">area</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an area to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a collection in which the entity is found.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">release</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a release to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>places</strong></td>
<td valign="top"><a href="#placeconnection">PlaceConnection</a></td>
<td>
Browse place entities linked to the given arguments.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">area</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an area to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a collection in which the entity is found.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recordings</strong></td>
<td valign="top"><a href="#recordingconnection">RecordingConnection</a></td>
<td>
Browse recording entities linked to the given arguments.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">artist</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an artist to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a collection in which the entity is found.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">isrc</td>
<td valign="top"><a href="#isrc">ISRC</a></td>
<td>
The [International Standard Recording Code](https://musicbrainz.org/doc/ISRC)
(ISRC) of the recording.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">release</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a release to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releases</strong></td>
<td valign="top"><a href="#releaseconnection">ReleaseConnection</a></td>
<td>
Browse release entities linked to the given arguments.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">area</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an area to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">artist</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an artist to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a collection in which the entity is found.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">discID</td>
<td valign="top"><a href="#discid">DiscID</a></td>
<td>
A [disc ID](https://musicbrainz.org/doc/Disc_ID)
associated with the release.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">label</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a label to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">recording</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a recording to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">releaseGroup</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a release group to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">track</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a track that is included in the release.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">trackArtist</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an artist that appears on a track in the
release, but is not included in the credits for the release itself.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top">[<a href="#releasegrouptype">ReleaseGroupType</a>]</td>
<td>
Filter by one or more release group types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top">[<a href="#releasestatus">ReleaseStatus</a>]</td>
<td>
Filter by one or more release statuses.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releaseGroups</strong></td>
<td valign="top"><a href="#releasegroupconnection">ReleaseGroupConnection</a></td>
<td>
Browse release group entities linked to the given arguments.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">artist</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an artist to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a collection in which the entity is found.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">release</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a release to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top">[<a href="#releasegrouptype">ReleaseGroupType</a>]</td>
<td>
Filter by one or more release group types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>works</strong></td>
<td valign="top"><a href="#workconnection">WorkConnection</a></td>
<td>
Browse work entities linked to the given arguments.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">artist</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of an artist to which the entity is linked.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">collection</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of a collection in which the entity is found.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">iswc</td>
<td valign="top"><a href="#iswc">ISWC</a></td>
<td>
The [International Standard Musical Work Code](https://musicbrainz.org/doc/ISWC)
(ISWC) of the work.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### Collection

[Collections](https://musicbrainz.org/doc/Collections) are
lists of entities that users can create.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official name of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>editor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The username of the editor who created the collection.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>entityType</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The type of entity listed in the collection.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The type of collection.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>typeID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>areas</strong></td>
<td valign="top"><a href="#areaconnection">AreaConnection</a></td>
<td>
The list of areas found in this collection.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top"><a href="#artistconnection">ArtistConnection</a></td>
<td>
The list of artists found in this collection.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top"><a href="#eventconnection">EventConnection</a></td>
<td>
The list of events found in this collection.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>instruments</strong></td>
<td valign="top"><a href="#instrumentconnection">InstrumentConnection</a></td>
<td>
The list of instruments found in this collection.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>labels</strong></td>
<td valign="top"><a href="#labelconnection">LabelConnection</a></td>
<td>
The list of labels found in this collection.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>places</strong></td>
<td valign="top"><a href="#placeconnection">PlaceConnection</a></td>
<td>
The list of places found in this collection.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recordings</strong></td>
<td valign="top"><a href="#recordingconnection">RecordingConnection</a></td>
<td>
The list of recordings found in this collection.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releases</strong></td>
<td valign="top"><a href="#releaseconnection">ReleaseConnection</a></td>
<td>
The list of releases found in this collection.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top">[<a href="#releasegrouptype">ReleaseGroupType</a>]</td>
<td>
Filter by one or more release group types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top">[<a href="#releasestatus">ReleaseStatus</a>]</td>
<td>
Filter by one or more release statuses.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releaseGroups</strong></td>
<td valign="top"><a href="#releasegroupconnection">ReleaseGroupConnection</a></td>
<td>
The list of release groups found in this collection.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top">[<a href="#releasegrouptype">ReleaseGroupType</a>]</td>
<td>
Filter by one or more release group types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>series</strong></td>
<td valign="top"><a href="#seriesconnection">SeriesConnection</a></td>
<td>
The list of series found in this collection.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>works</strong></td>
<td valign="top"><a href="#workconnection">WorkConnection</a></td>
<td>
The list of works found in this collection.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### CollectionConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#collectionedge">CollectionEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#collection">Collection</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### CollectionEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### Coordinates

Geographic coordinates described with latitude and longitude.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>latitude</strong></td>
<td valign="top"><a href="#degrees">Degrees</a></td>
<td>
The north–south position of a point on the Earth’s surface.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>longitude</strong></td>
<td valign="top"><a href="#degrees">Degrees</a></td>
<td>
The east–west position of a point on the Earth’s surface.
</td>
</tr>
</tbody>
</table>

### Disc

Information about the physical CD and releases associated with a
particular [disc ID](https://musicbrainz.org/doc/Disc_ID).

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discID</strong></td>
<td valign="top"><a href="#discid">DiscID</a>!</td>
<td>
The [disc ID](https://musicbrainz.org/doc/Disc_ID) of this disc.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>offsetCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>
The number of offsets (tracks) on the disc.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>offsets</strong></td>
<td valign="top">[<a href="#int">Int</a>]</td>
<td>
The sector offset of each track on the disc.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sectors</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>
The sector offset of the lead-out (the end of the disc).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releases</strong></td>
<td valign="top"><a href="#releaseconnection">ReleaseConnection</a></td>
<td>
The list of releases linked to this disc ID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### Event

An [event](https://musicbrainz.org/doc/Event) refers to an
organised event which people can attend, and is relevant to MusicBrainz.
Generally this means live performances, like concerts and festivals.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official name of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disambiguation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A comment used to help distinguish identically named entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#alias">Alias</a>]</td>
<td>
[Aliases](https://musicbrainz.org/doc/Aliases) are used to store
alternate names or misspellings.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lifeSpan</strong></td>
<td valign="top"><a href="#lifespan">LifeSpan</a></td>
<td>
The begin and end dates of the entity’s existence. Its exact
meaning depends on the type of entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>time</strong></td>
<td valign="top"><a href="#time">Time</a></td>
<td>
The start time of the event.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cancelled</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>
Whether or not the event took place.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>setlist</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A list of songs performed, optionally including links to
artists and works. See the [setlist documentation](https://musicbrainz.org/doc/Event/Setlist)
for syntax and examples.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
What kind of event the event is, e.g. concert, festival, etc.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>typeID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationships</strong></td>
<td valign="top"><a href="#relationships">Relationships</a></td>
<td>
Relationships between this entity and other entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a></td>
<td>
A list of collections containing this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rating</strong></td>
<td valign="top"><a href="#rating">Rating</a></td>
<td>
The rating users have given to this entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#tagconnection">TagConnection</a></td>
<td>
A list of tags linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### EventConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#eventedge">EventEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#event">Event</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### EventEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#event">Event</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### Instrument

[Instruments](https://musicbrainz.org/doc/Instrument) are
devices created or adapted to make musical sounds. Instruments are primarily
used in relationships between two other entities.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official name of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disambiguation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A comment used to help distinguish identically named entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#alias">Alias</a>]</td>
<td>
[Aliases](https://musicbrainz.org/doc/Aliases) are used to store
alternate names or misspellings.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A brief description of the main characteristics of the
instrument.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The type categorises the instrument by the way the sound is
created, similar to the [Hornbostel-Sachs](https://en.wikipedia.org/wiki/Hornbostel%E2%80%93Sachs)
classification.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>typeID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationships</strong></td>
<td valign="top"><a href="#relationships">Relationships</a></td>
<td>
Relationships between this entity and other entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a></td>
<td>
A list of collections containing this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#tagconnection">TagConnection</a></td>
<td>
A list of tags linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### InstrumentConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#instrumentedge">InstrumentEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#instrument">Instrument</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### InstrumentEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#instrument">Instrument</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### Label

[Labels](https://musicbrainz.org/doc/Label) represent mostly
(but not only) imprints. To a lesser extent, a label entity may be created to
represent a record company.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official name of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sortName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The string to use for the purpose of ordering by name (for
example, by moving articles like ‘the’ to the end or a person’s last name to
the front).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disambiguation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A comment used to help distinguish identically named entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#alias">Alias</a>]</td>
<td>
[Aliases](https://musicbrainz.org/doc/Aliases) are used to store
alternate names or misspellings.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The country of origin for the label.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>area</strong></td>
<td valign="top"><a href="#area">Area</a></td>
<td>
The area in which the label is based.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lifeSpan</strong></td>
<td valign="top"><a href="#lifespan">LifeSpan</a></td>
<td>
The begin and end dates of the entity’s existence. Its exact
meaning depends on the type of entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>labelCode</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The [“LC” code](https://musicbrainz.org/doc/Label/Label_Code)
of the label.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ipis</strong></td>
<td valign="top">[<a href="#ipi">IPI</a>]</td>
<td>
List of [Interested Parties Information](https://musicbrainz.org/doc/IPI)
codes for the label.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A type describing the main activity of the label, e.g.
imprint, production, distributor, rights society, etc.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>typeID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releases</strong></td>
<td valign="top"><a href="#releaseconnection">ReleaseConnection</a></td>
<td>
A list of releases linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top">[<a href="#releasegrouptype">ReleaseGroupType</a>]</td>
<td>
Filter by one or more release group types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top">[<a href="#releasestatus">ReleaseStatus</a>]</td>
<td>
Filter by one or more release statuses.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationships</strong></td>
<td valign="top"><a href="#relationships">Relationships</a></td>
<td>
Relationships between this entity and other entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a></td>
<td>
A list of collections containing this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rating</strong></td>
<td valign="top"><a href="#rating">Rating</a></td>
<td>
The rating users have given to this entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#tagconnection">TagConnection</a></td>
<td>
A list of tags linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### LabelConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#labeledge">LabelEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#label">Label</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### LabelEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#label">Label</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### LifeSpan

Fields indicating the begin and end date of an entity’s
lifetime, including whether it has ended (even if the date is unknown).

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>begin</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>
The start date of the entity’s life span.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>end</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>
The end date of the entity’s life span.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ended</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>
Whether or not the entity’s life span has ended.
</td>
</tr>
</tbody>
</table>

### LookupQuery

A lookup of an individual MusicBrainz entity by its MBID.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>area</strong></td>
<td valign="top"><a href="#area">Area</a></td>
<td>
Look up a specific area by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artist</strong></td>
<td valign="top"><a href="#artist">Artist</a></td>
<td>
Look up a specific artist by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collection</strong></td>
<td valign="top"><a href="#collection">Collection</a></td>
<td>
Look up a specific collection by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disc</strong></td>
<td valign="top"><a href="#disc">Disc</a></td>
<td>
Look up a specific physical disc by its disc ID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">discID</td>
<td valign="top"><a href="#discid">DiscID</a>!</td>
<td>
The [disc ID](https://musicbrainz.org/doc/Disc_ID)
of the disc.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>event</strong></td>
<td valign="top"><a href="#event">Event</a></td>
<td>
Look up a specific event by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>instrument</strong></td>
<td valign="top"><a href="#instrument">Instrument</a></td>
<td>
Look up a specific instrument by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>label</strong></td>
<td valign="top"><a href="#label">Label</a></td>
<td>
Look up a specific label by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#place">Place</a></td>
<td>
Look up a specific place by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recording</strong></td>
<td valign="top"><a href="#recording">Recording</a></td>
<td>
Look up a specific recording by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>release</strong></td>
<td valign="top"><a href="#release">Release</a></td>
<td>
Look up a specific release by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releaseGroup</strong></td>
<td valign="top"><a href="#releasegroup">ReleaseGroup</a></td>
<td>
Look up a specific release group by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>series</strong></td>
<td valign="top"><a href="#series">Series</a></td>
<td>
Look up a specific series by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#url">URL</a></td>
<td>
Look up a specific URL by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">resource</td>
<td valign="top"><a href="#urlstring">URLString</a></td>
<td>
The web address of the URL entity to look up.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>work</strong></td>
<td valign="top"><a href="#work">Work</a></td>
<td>
Look up a specific work by its MBID.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mbid</td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
</tbody>
</table>

### Medium

A medium is the actual physical medium the audio content is
stored upon. This means that each CD in a multi-disc release will be entered as
separate mediums within the release, and that both sides of a vinyl record or
cassette will exist on one medium. Mediums have a format (e.g. CD, DVD, vinyl,
cassette) and can optionally also have a title.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The title of this particular medium.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>format</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The [format](https://musicbrainz.org/doc/Release/Format) of
the medium (e.g. CD, DVD, vinyl, cassette).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>formatID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `format`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The order of this medium in the release (for example, in a
multi-disc release).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The number of audio tracks on this medium.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discs</strong></td>
<td valign="top">[<a href="#disc">Disc</a>]</td>
<td>
A list of physical discs and their disc IDs for this medium.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tracks</strong></td>
<td valign="top">[<a href="#track">Track</a>]</td>
<td>
The list of tracks on the given media.
</td>
</tr>
</tbody>
</table>

### PageInfo

Information about pagination in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>hasNextPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>
When paginating forwards, are there more items?
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasPreviousPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>
When paginating backwards, are there more items?
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
When paginating backwards, the cursor to continue.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
When paginating forwards, the cursor to continue.
</td>
</tr>
</tbody>
</table>

### Place

A [place](https://musicbrainz.org/doc/Place) is a venue, studio,
or other place where music is performed, recorded, engineered, etc.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official name of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disambiguation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A comment used to help distinguish identically named entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#alias">Alias</a>]</td>
<td>
[Aliases](https://musicbrainz.org/doc/Aliases) are used to store
alternate names or misspellings.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The address describes the location of the place using the
standard addressing format for the country it is located in.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>area</strong></td>
<td valign="top"><a href="#area">Area</a></td>
<td>
The area entity representing the area, such as the city, in
which the place is located.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>coordinates</strong></td>
<td valign="top"><a href="#coordinates">Coordinates</a></td>
<td>
The geographic coordinates of the place.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lifeSpan</strong></td>
<td valign="top"><a href="#lifespan">LifeSpan</a></td>
<td>
The begin and end dates of the entity’s existence. Its exact
meaning depends on the type of entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The type categorises the place based on its primary
function.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>typeID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top"><a href="#eventconnection">EventConnection</a></td>
<td>
A list of events linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationships</strong></td>
<td valign="top"><a href="#relationships">Relationships</a></td>
<td>
Relationships between this entity and other entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a></td>
<td>
A list of collections containing this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#tagconnection">TagConnection</a></td>
<td>
A list of tags linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### PlaceConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#placeedge">PlaceEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#place">Place</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### PlaceEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#place">Place</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### Rating

[Ratings](https://musicbrainz.org/doc/Rating_System) allow users
to rate MusicBrainz entities. User may assign a value between 1 and 5; these
values are then aggregated by the server to compute an average community rating
for the entity.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>voteCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>
The number of votes that have contributed to the rating.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>
The average rating value based on the aggregated votes.
</td>
</tr>
</tbody>
</table>

### Recording

A [recording](https://musicbrainz.org/doc/Recording) is an
entity in MusicBrainz which can be linked to tracks on releases. Each track must
always be associated with a single recording, but a recording can be linked to
any number of tracks.

A recording represents distinct audio that has been used to produce at least one
released track through copying or mastering. A recording itself is never
produced solely through copying or mastering.

Generally, the audio represented by a recording corresponds to the audio at a
stage in the production process before any final mastering but after any editing
or mixing.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official title of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disambiguation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A comment used to help distinguish identically named entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#alias">Alias</a>]</td>
<td>
[Aliases](https://musicbrainz.org/doc/Aliases) are used to store
alternate names or misspellings.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artistCredit</strong> ⚠️</td>
<td valign="top">[<a href="#artistcredit">ArtistCredit</a>]</td>
<td>
The main credited artist(s).
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>
The `artistCredit` field has been renamed to
`artistCredits`, since it is a list of credits and is referred to in the
plural form throughout the MusicBrainz documentation. This field is deprecated
and will be removed in a major release in the future. Use the equivalent
`artistCredits` field.
</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artistCredits</strong></td>
<td valign="top">[<a href="#artistcredit">ArtistCredit</a>]</td>
<td>
The main credited artist(s).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isrcs</strong></td>
<td valign="top">[<a href="#isrc">ISRC</a>]</td>
<td>
A list of [International Standard Recording Codes](https://musicbrainz.org/doc/ISRC)
(ISRCs) for this recording.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>length</strong></td>
<td valign="top"><a href="#duration">Duration</a></td>
<td>
An approximation to the length of the recording, calculated
from the lengths of the tracks using it.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>video</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>
Whether this is a video recording.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top"><a href="#artistconnection">ArtistConnection</a></td>
<td>
A list of artists linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releases</strong></td>
<td valign="top"><a href="#releaseconnection">ReleaseConnection</a></td>
<td>
A list of releases linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top">[<a href="#releasegrouptype">ReleaseGroupType</a>]</td>
<td>
Filter by one or more release group types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top">[<a href="#releasestatus">ReleaseStatus</a>]</td>
<td>
Filter by one or more release statuses.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationships</strong></td>
<td valign="top"><a href="#relationships">Relationships</a></td>
<td>
Relationships between this entity and other entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a></td>
<td>
A list of collections containing this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rating</strong></td>
<td valign="top"><a href="#rating">Rating</a></td>
<td>
The rating users have given to this entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#tagconnection">TagConnection</a></td>
<td>
A list of tags linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### RecordingConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#recordingedge">RecordingEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#recording">Recording</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### RecordingEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#recording">Recording</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### Relationship

[Relationships](https://musicbrainz.org/doc/Relationships) are a
way to represent all the different ways in which entities are connected to each
other and to URLs outside MusicBrainz.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top"><a href="#entity">Entity</a>!</td>
<td>
The target entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>direction</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The direction of the relationship.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>targetType</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The type of entity on the receiving end of the relationship.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sourceCredit</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
How the source entity was actually credited, if different
from its main (performance) name.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>targetCredit</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
How the target entity was actually credited, if different
from its main (performance) name.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>begin</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>
The date on which the relationship became applicable.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>end</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>
The date on which the relationship became no longer applicable.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ended</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>
Whether the relationship still applies.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>attributes</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>
Attributes which modify the relationship. There is a [list
of all attributes](https://musicbrainz.org/relationship-attributes), but the
attributes which are available, and how they should be used, depends on the
relationship type.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The type of relationship.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>typeID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
</tbody>
</table>

### RelationshipConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#relationshipedge">RelationshipEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#relationship">Relationship</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### RelationshipEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#relationship">Relationship</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### Relationships

Lists of entity relationships for each entity type.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>areas</strong></td>
<td valign="top"><a href="#relationshipconnection">RelationshipConnection</a></td>
<td>
A list of relationships between these two entity types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship direction.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">typeID</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top"><a href="#relationshipconnection">RelationshipConnection</a></td>
<td>
A list of relationships between these two entity types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship direction.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">typeID</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top"><a href="#relationshipconnection">RelationshipConnection</a></td>
<td>
A list of relationships between these two entity types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship direction.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">typeID</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>instruments</strong></td>
<td valign="top"><a href="#relationshipconnection">RelationshipConnection</a></td>
<td>
A list of relationships between these two entity types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship direction.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">typeID</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>labels</strong></td>
<td valign="top"><a href="#relationshipconnection">RelationshipConnection</a></td>
<td>
A list of relationships between these two entity types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship direction.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">typeID</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>places</strong></td>
<td valign="top"><a href="#relationshipconnection">RelationshipConnection</a></td>
<td>
A list of relationships between these two entity types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship direction.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">typeID</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recordings</strong></td>
<td valign="top"><a href="#relationshipconnection">RelationshipConnection</a></td>
<td>
A list of relationships between these two entity types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship direction.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">typeID</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releases</strong></td>
<td valign="top"><a href="#relationshipconnection">RelationshipConnection</a></td>
<td>
A list of relationships between these two entity types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship direction.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">typeID</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releaseGroups</strong></td>
<td valign="top"><a href="#relationshipconnection">RelationshipConnection</a></td>
<td>
A list of relationships between these two entity types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship direction.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">typeID</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>series</strong></td>
<td valign="top"><a href="#relationshipconnection">RelationshipConnection</a></td>
<td>
A list of relationships between these two entity types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship direction.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">typeID</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>urls</strong></td>
<td valign="top"><a href="#relationshipconnection">RelationshipConnection</a></td>
<td>
A list of relationships between these two entity types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship direction.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">typeID</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>works</strong></td>
<td valign="top"><a href="#relationshipconnection">RelationshipConnection</a></td>
<td>
A list of relationships between these two entity types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">direction</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship direction.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top"><a href="#string">String</a></td>
<td>
Filter by the relationship type.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">typeID</td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### Release

A [release](https://musicbrainz.org/doc/Release) represents the
unique release (i.e. issuing) of a product on a specific date with specific
release information such as the country, label, barcode, packaging, etc. If you
walk into a store and purchase an album or single, they’re each represented in
MusicBrainz as one release.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official title of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disambiguation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A comment used to help distinguish identically named entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#alias">Alias</a>]</td>
<td>
[Aliases](https://musicbrainz.org/doc/Aliases) are used to store
alternate names or misspellings.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artistCredit</strong> ⚠️</td>
<td valign="top">[<a href="#artistcredit">ArtistCredit</a>]</td>
<td>
The main credited artist(s).
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>
The `artistCredit` field has been renamed to
`artistCredits`, since it is a list of credits and is referred to in the
plural form throughout the MusicBrainz documentation. This field is deprecated
and will be removed in a major release in the future. Use the equivalent
`artistCredits` field.
</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artistCredits</strong></td>
<td valign="top">[<a href="#artistcredit">ArtistCredit</a>]</td>
<td>
The main credited artist(s).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releaseEvents</strong></td>
<td valign="top">[<a href="#releaseevent">ReleaseEvent</a>]</td>
<td>
The release events for this release.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>
The [release date](https://musicbrainz.org/doc/Release/Date)
is the date in which a release was made available through some sort of
distribution mechanism.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The country in which the release was issued.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>asin</strong></td>
<td valign="top"><a href="#asin">ASIN</a></td>
<td>
The [Amazon Standard Identification Number](https://musicbrainz.org/doc/ASIN)
of the release.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>barcode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The [barcode](https://en.wikipedia.org/wiki/Barcode), if the
release has one. The most common types found on releases are 12-digit
[UPCs](https://en.wikipedia.org/wiki/Universal_Product_Code) and 13-digit
[EANs](https://en.wikipedia.org/wiki/International_Article_Number).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>status</strong></td>
<td valign="top"><a href="#releasestatus">ReleaseStatus</a></td>
<td>
The status describes how “official” a release is.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>statusID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `status`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>packaging</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The physical packaging that accompanies the release. See
the [list of packaging](https://musicbrainz.org/doc/Release/Packaging) for more
information.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>packagingID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `packaging`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quality</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
Data quality indicates how good the data for a release is.
It is not a mark of how good or bad the music itself is – for that, use
[ratings](https://musicbrainz.org/doc/Rating_System).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>media</strong></td>
<td valign="top">[<a href="#medium">Medium</a>]</td>
<td>
The media on which the release was distributed.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top"><a href="#artistconnection">ArtistConnection</a></td>
<td>
A list of artists linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>labels</strong></td>
<td valign="top"><a href="#labelconnection">LabelConnection</a></td>
<td>
A list of labels linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recordings</strong></td>
<td valign="top"><a href="#recordingconnection">RecordingConnection</a></td>
<td>
A list of recordings linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releaseGroups</strong></td>
<td valign="top"><a href="#releasegroupconnection">ReleaseGroupConnection</a></td>
<td>
A list of release groups linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top">[<a href="#releasegrouptype">ReleaseGroupType</a>]</td>
<td>
Filter by one or more release group types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationships</strong></td>
<td valign="top"><a href="#relationships">Relationships</a></td>
<td>
Relationships between this entity and other entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a></td>
<td>
A list of collections containing this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#tagconnection">TagConnection</a></td>
<td>
A list of tags linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReleaseConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#releaseedge">ReleaseEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#release">Release</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### ReleaseEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#release">Release</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### ReleaseEvent

The date on which a release was issued in a country/region with
a particular label, catalog number, barcode, and format.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>area</strong></td>
<td valign="top"><a href="#area">Area</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReleaseGroup

A [release group](https://musicbrainz.org/doc/Release_Group) is
used to group several different releases into a single logical entity. Every
release belongs to one, and only one release group.

Both release groups and releases are “albums” in a general sense, but with an
important difference: a release is something you can buy as media such as a CD
or a vinyl record, while a release group embraces the overall concept of an
album – it doesn’t matter how many CDs or editions/versions it had.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official title of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disambiguation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A comment used to help distinguish identically named entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#alias">Alias</a>]</td>
<td>
[Aliases](https://musicbrainz.org/doc/Aliases) are used to store
alternate names or misspellings.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artistCredit</strong> ⚠️</td>
<td valign="top">[<a href="#artistcredit">ArtistCredit</a>]</td>
<td>
The main credited artist(s).
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>
The `artistCredit` field has been renamed to
`artistCredits`, since it is a list of credits and is referred to in the
plural form throughout the MusicBrainz documentation. This field is deprecated
and will be removed in a major release in the future. Use the equivalent
`artistCredits` field.
</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artistCredits</strong></td>
<td valign="top">[<a href="#artistcredit">ArtistCredit</a>]</td>
<td>
The main credited artist(s).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>firstReleaseDate</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>
The date of the earliest release in the group.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>primaryType</strong></td>
<td valign="top"><a href="#releasegrouptype">ReleaseGroupType</a></td>
<td>
The [type](https://musicbrainz.org/doc/Release_Group/Type)
of a release group describes what kind of releases the release group represents,
e.g. album, single, soundtrack, compilation, etc. A release group can have a
“main” type and an unspecified number of additional types.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>primaryTypeID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `primaryType`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>secondaryTypes</strong></td>
<td valign="top">[<a href="#releasegrouptype">ReleaseGroupType</a>]</td>
<td>
Additional [types](https://musicbrainz.org/doc/Release_Group/Type)
that apply to this release group.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>secondaryTypeIDs</strong></td>
<td valign="top">[<a href="#mbid">MBID</a>]</td>
<td>
The MBIDs associated with the values of the `secondaryTypes`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top"><a href="#artistconnection">ArtistConnection</a></td>
<td>
A list of artists linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releases</strong></td>
<td valign="top"><a href="#releaseconnection">ReleaseConnection</a></td>
<td>
A list of releases linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">type</td>
<td valign="top">[<a href="#releasegrouptype">ReleaseGroupType</a>]</td>
<td>
Filter by one or more release group types.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">status</td>
<td valign="top">[<a href="#releasestatus">ReleaseStatus</a>]</td>
<td>
Filter by one or more release statuses.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationships</strong></td>
<td valign="top"><a href="#relationships">Relationships</a></td>
<td>
Relationships between this entity and other entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a></td>
<td>
A list of collections containing this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rating</strong></td>
<td valign="top"><a href="#rating">Rating</a></td>
<td>
The rating users have given to this entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#tagconnection">TagConnection</a></td>
<td>
A list of tags linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### ReleaseGroupConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#releasegroupedge">ReleaseGroupEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#releasegroup">ReleaseGroup</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### ReleaseGroupEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#releasegroup">ReleaseGroup</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### SearchQuery

A search for MusicBrainz entities using Lucene query syntax.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>areas</strong></td>
<td valign="top"><a href="#areaconnection">AreaConnection</a></td>
<td>
Search for area entities matching the given query.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The query terms, in Lucene search syntax. See [examples
and search fields](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search).
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top"><a href="#artistconnection">ArtistConnection</a></td>
<td>
Search for artist entities matching the given query.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The query terms, in Lucene search syntax. See [examples
and search fields](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search).
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>events</strong></td>
<td valign="top"><a href="#eventconnection">EventConnection</a></td>
<td>
Search for event entities matching the given query.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The query terms, in Lucene search syntax. See [examples
and search fields](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search).
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>instruments</strong></td>
<td valign="top"><a href="#instrumentconnection">InstrumentConnection</a></td>
<td>
Search for instrument entities matching the given query.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The query terms, in Lucene search syntax. See [examples
and search fields](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search).
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>labels</strong></td>
<td valign="top"><a href="#labelconnection">LabelConnection</a></td>
<td>
Search for label entities matching the given query.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The query terms, in Lucene search syntax. See [examples
and search fields](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search).
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>places</strong></td>
<td valign="top"><a href="#placeconnection">PlaceConnection</a></td>
<td>
Search for place entities matching the given query.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The query terms, in Lucene search syntax. See [examples
and search fields](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search).
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recordings</strong></td>
<td valign="top"><a href="#recordingconnection">RecordingConnection</a></td>
<td>
Search for recording entities matching the given query.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The query terms, in Lucene search syntax. See [examples
and search fields](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search).
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releases</strong></td>
<td valign="top"><a href="#releaseconnection">ReleaseConnection</a></td>
<td>
Search for release entities matching the given query.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The query terms, in Lucene search syntax. See [examples
and search fields](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search).
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releaseGroups</strong></td>
<td valign="top"><a href="#releasegroupconnection">ReleaseGroupConnection</a></td>
<td>
Search for release group entities matching the given query.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The query terms, in Lucene search syntax. See [examples
and search fields](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search).
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>series</strong></td>
<td valign="top"><a href="#seriesconnection">SeriesConnection</a></td>
<td>
Search for series entities matching the given query.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The query terms, in Lucene search syntax. See [examples
and search fields](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search).
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>works</strong></td>
<td valign="top"><a href="#workconnection">WorkConnection</a></td>
<td>
Search for work entities matching the given query.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The query terms, in Lucene search syntax. See [examples
and search fields](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search).
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### Series

A [series](https://musicbrainz.org/doc/Series) is a sequence of
separate release groups, releases, recordings, works or events with a common
theme.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official name of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disambiguation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A comment used to help distinguish identically named entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The type primarily describes what type of entity the series
contains.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>typeID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationships</strong></td>
<td valign="top"><a href="#relationships">Relationships</a></td>
<td>
Relationships between this entity and other entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a></td>
<td>
A list of collections containing this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#tagconnection">TagConnection</a></td>
<td>
A list of tags linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### SeriesConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#seriesedge">SeriesEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#series">Series</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### SeriesEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#series">Series</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### Tag

[Tags](https://musicbrainz.org/tags) are a way to mark entities
with extra information – for example, the genres that apply to an artist,
release, or recording.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
The tag label.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
How many times this tag has been applied to the entity.
</td>
</tr>
</tbody>
</table>

### TagConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#tagedge">TagEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#tag">Tag</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### TagEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#tag">Tag</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

### Track

A track is the way a recording is represented on a particular
  release (or, more exactly, on a particular medium). Every track has a title
  (see the guidelines for titles) and is credited to one or more artists.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official title of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The track’s position on the overall release (including all
tracks from all discs).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The track number, which may include information about the
disc or side it appears on, e.g. “A1” or “B3”.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>length</strong></td>
<td valign="top"><a href="#duration">Duration</a></td>
<td>
The length of the track.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recording</strong></td>
<td valign="top"><a href="#recording">Recording</a></td>
<td>
The recording that appears on the track.
</td>
</tr>
</tbody>
</table>

### URL

A [URL](https://musicbrainz.org/doc/URL) pointing to a resource
external to MusicBrainz, i.e. an official homepage, a site where music can be
acquired, an entry in another database, etc.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resource</strong></td>
<td valign="top"><a href="#urlstring">URLString</a>!</td>
<td>
The actual URL string.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationships</strong></td>
<td valign="top"><a href="#relationships">Relationships</a></td>
<td>
Relationships between this entity and other entitites.
</td>
</tr>
</tbody>
</table>

### Work

A [work](https://musicbrainz.org/doc/Work) is a distinct
intellectual or artistic creation, which can be expressed in the form of one or
more audio recordings.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The ID of an object
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The official title of the entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disambiguation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
A comment used to help distinguish identically named entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>aliases</strong></td>
<td valign="top">[<a href="#alias">Alias</a>]</td>
<td>
[Aliases](https://musicbrainz.org/doc/Aliases) are used to store
alternate names or misspellings.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>iswcs</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>
A list of [ISWCs](https://musicbrainz.org/doc/ISWC) assigned
to the work by copyright collecting agencies.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>language</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The language in which the work was originally written.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>
The type of work.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>typeID</strong></td>
<td valign="top"><a href="#mbid">MBID</a></td>
<td>
The MBID associated with the value of the `type`
field.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top"><a href="#artistconnection">ArtistConnection</a></td>
<td>
A list of artists linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationships</strong></td>
<td valign="top"><a href="#relationships">Relationships</a></td>
<td>
Relationships between this entity and other entitites.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>collections</strong></td>
<td valign="top"><a href="#collectionconnection">CollectionConnection</a></td>
<td>
A list of collections containing this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rating</strong></td>
<td valign="top"><a href="#rating">Rating</a></td>
<td>
The rating users have given to this entity.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#tagconnection">TagConnection</a></td>
<td>
A list of tags linked to this entity.
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### WorkConnection

A connection to a list of items.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td>
Information to aid in pagination.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#workedge">WorkEdge</a>]</td>
<td>
A list of edges.
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodes</strong></td>
<td valign="top">[<a href="#work">Work</a>]</td>
<td>
A list of nodes in the connection (without going through the
`edges` field).
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
A count of the total number of items in this connection,
ignoring pagination.
</td>
</tr>
</tbody>
</table>

### WorkEdge

An edge in a connection.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#work">Work</a></td>
<td>
The item at the end of the edge
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>
A cursor for use in pagination
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The relevancy score (0–100) assigned by the search engine, if
these results were found through a search.
</td>
</tr>
</tbody>
</table>

## Enums

### ReleaseGroupType

A type used to describe release groups, e.g. album, single, EP,
etc.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ALBUM</strong></td>
<td>
An album, perhaps better defined as a “Long Play” (LP)
release, generally consists of previously unreleased material (unless this type
is combined with secondary types which change that, such as “Compilation”). This
includes album re-issues, with or without bonus tracks.
</td>
</tr>
<tr>
<td valign="top"><strong>SINGLE</strong></td>
<td>
A single typically has one main song and possibly a handful
of additional tracks or remixes of the main track. A single is usually named
after its main song.
</td>
</tr>
<tr>
<td valign="top"><strong>EP</strong></td>
<td>
An EP is a so-called “Extended Play” release and often
contains the letters EP in the title. Generally an EP will be shorter than a
full length release (an LP or “Long Play”) and the tracks are usually exclusive
to the EP, in other words the tracks don’t come from a previously issued
release. EP is fairly difficult to define; usually it should only be assumed
that a release is an EP if the artist defines it as such.
</td>
</tr>
<tr>
<td valign="top"><strong>OTHER</strong></td>
<td>
Any release that does not fit any of the other categories.
</td>
</tr>
<tr>
<td valign="top"><strong>BROADCAST</strong></td>
<td>
An episodic release that was originally broadcast via radio,
television, or the Internet, including podcasts.
</td>
</tr>
<tr>
<td valign="top"><strong>COMPILATION</strong></td>
<td>
A compilation is a collection of previously released tracks
by one or more artists.
</td>
</tr>
<tr>
<td valign="top"><strong>SOUNDTRACK</strong></td>
<td>
A soundtrack is the musical score to a movie, TV series,
stage show, computer game, etc.
</td>
</tr>
<tr>
<td valign="top"><strong>SPOKENWORD</strong></td>
<td>
A non-music spoken word release.
</td>
</tr>
<tr>
<td valign="top"><strong>INTERVIEW</strong></td>
<td>
An interview release contains an interview, generally with
an artist.
</td>
</tr>
<tr>
<td valign="top"><strong>AUDIOBOOK</strong></td>
<td>
An audiobook is a book read by a narrator without music.
</td>
</tr>
<tr>
<td valign="top"><strong>LIVE</strong></td>
<td>
A release that was recorded live.
</td>
</tr>
<tr>
<td valign="top"><strong>REMIX</strong></td>
<td>
A release that was (re)mixed from previously released
material.
</td>
</tr>
<tr>
<td valign="top"><strong>DJMIX</strong></td>
<td>
A DJ-mix is a sequence of several recordings played one
after the other, each one modified so that they blend together into a continuous
flow of music. A DJ mix release requires that the recordings be modified in some
manner, and the DJ who does this modification is usually (although not always)
credited in a fairly prominent way.
</td>
</tr>
<tr>
<td valign="top"><strong>MIXTAPE</strong></td>
<td>
Promotional in nature (but not necessarily free), mixtapes
and street albums are often released by artists to promote new artists, or
upcoming studio albums by prominent artists. They are also sometimes used to
keep fans’ attention between studio releases and are most common in rap & hip
hop genres. They are often not sanctioned by the artist’s label, may lack proper
sample or song clearances and vary widely in production and recording quality.
While mixtapes are generally DJ-mixed, they are distinct from commercial DJ
mixes (which are usually deemed compilations) and are defined by having a
significant proportion of new material, including original production or
original vocals over top of other artists’ instrumentals. They are distinct from
demos in that they are designed for release directly to the public and fans, not
to labels.
</td>
</tr>
<tr>
<td valign="top"><strong>DEMO</strong></td>
<td>
A release that was recorded for limited circulation or
reference use rather than for general public release.
</td>
</tr>
<tr>
<td valign="top"><strong>NAT</strong></td>
<td>
A non-album track (special case).
</td>
</tr>
</tbody>
</table>

### ReleaseStatus

A type used to describe the status of releases, e.g. official,
bootleg, etc.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>OFFICIAL</strong></td>
<td>
Any release officially sanctioned by the artist and/or their
record company. (Most releases will fit into this category.)
</td>
</tr>
<tr>
<td valign="top"><strong>PROMOTION</strong></td>
<td>
A giveaway release or a release intended to promote an
upcoming official release, e.g. prerelease albums or releases included with a
magazine.
</td>
</tr>
<tr>
<td valign="top"><strong>BOOTLEG</strong></td>
<td>
An unofficial/underground release that was not sanctioned by
the artist and/or the record company.
</td>
</tr>
<tr>
<td valign="top"><strong>PSEUDORELEASE</strong></td>
<td>
A pseudo-release is a duplicate release for
translation/transliteration purposes.
</td>
</tr>
</tbody>
</table>

## Scalars

### ASIN

An [Amazon Standard Identification Number](https://musicbrainz.org/doc/ASIN)
(ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com
and its partners for product identification within the Amazon organization.

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Date

Year, month (optional), and day (optional) in YYYY-MM-DD format.

### Degrees

Decimal degrees, used for latitude and longitude.

### DiscID

[Disc ID](https://musicbrainz.org/doc/Disc_ID) is the code
number which MusicBrainz uses to link a physical CD to a [release](https://musicbrainz.org/doc/Release)
listing.

A release may have any number of disc IDs, and a disc ID may be linked to
multiple releases. This is because disc ID calculation involves a hash of the
frame offsets of the CD tracks.

Different pressing of a CD often have slightly different frame offsets, and
hence different disc IDs.

Conversely, two different CDs may happen to have exactly the same set of frame
offsets and hence the same disc ID.

### Duration

A length of time, in milliseconds.

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### IPI

An [Interested Parties Information](https://musicbrainz.org/doc/IPI)
(IPI) code is an identifying number assigned by the CISAC database for musical
rights management.

### ISNI

The [International Standard Name Identifier](https://musicbrainz.org/doc/ISNI)
(ISNI) is an ISO standard for uniquely identifying the public identities of
contributors to media content.

### ISRC

The [International Standard Recording Code](https://musicbrainz.org/doc/ISRC)
(ISRC) is an identification system for audio and music video recordings. It is
standarized by the [IFPI](http://www.ifpi.org/) in ISO 3901:2001 and used by
IFPI members to assign a unique identifier to every distinct sound recording
they release. An ISRC identifies a particular [sound recording](https://musicbrainz.org/doc/Recording),
not the song itself. Therefore, different recordings, edits, remixes and
remasters of the same song will each be assigned their own ISRC. However, note
that same recording should carry the same ISRC in all countries/territories.
Songs are identified by analogous [International Standard Musical Work Codes](https://musicbrainz.org/doc/ISWC)
(ISWCs).

### ISWC

The [International Standard Musical Work Code](https://musicbrainz.org/doc/ISWC)
(ISWC) is an ISO standard similar to ISBNs for identifying musical works /
compositions.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 

### Locale

Language code, optionally with country and encoding.

### MBID

The MBID scalar represents MusicBrainz identifiers, which are
36-character UUIDs.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

### Time

A time of day, in 24-hour hh:mm notation.

### URLString

A web address.


## Interfaces


### Entity

An entity in the MusicBrainz schema.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>mbid</strong></td>
<td valign="top"><a href="#mbid">MBID</a>!</td>
<td>
The MBID of the entity.
</td>
</tr>
</tbody>
</table>

### Node

An object with an ID

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>
The id of the object.
</td>
</tr>
</tbody>
</table>
