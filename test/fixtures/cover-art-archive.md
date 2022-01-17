# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Objects](#objects)
    * [CoverArtArchiveImage](#coverartarchiveimage)
    * [CoverArtArchiveImageThumbnails](#coverartarchiveimagethumbnails)
    * [CoverArtArchiveRelease](#coverartarchiverelease)
    * [Release](#release)
    * [ReleaseGroup](#releasegroup)
  * [Enums](#enums)
    * [CoverArtArchiveImageSize](#coverartarchiveimagesize)

</details>

## Objects

### CoverArtArchiveImage

An individual piece of album artwork from the [Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive).

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
<td colspan="2" valign="top"><strong><a name="fileid">fileID</a></strong></td>
<td valign="top">String!</td>
<td>

The Internet Archive’s internal file ID for the image.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="image">image</a></strong></td>
<td valign="top">URLString!</td>
<td>

The URL at which the image can be found.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="thumbnails">thumbnails</a></strong></td>
<td valign="top"><a href="#coverartarchiveimagethumbnails">CoverArtArchiveImageThumbnails</a>!</td>
<td>

A set of thumbnails for the image.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="front">front</a></strong></td>
<td valign="top">Boolean!</td>
<td>

Whether this image depicts the “main front” of the release.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="back">back</a></strong></td>
<td valign="top">Boolean!</td>
<td>

Whether this image depicts the “main back” of the release.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="types">types</a></strong></td>
<td valign="top">[String]!</td>
<td>

A list of [image types](https://musicbrainz.org/doc/Cover_Art/Types)
describing what part(s) of the release the image includes.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="edit">edit</a></strong></td>
<td valign="top">Int</td>
<td>

The MusicBrainz edit ID.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="approved">approved</a></strong></td>
<td valign="top">Boolean</td>
<td>

Whether the image was approved by the MusicBrainz edit system.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="comment">comment</a></strong></td>
<td valign="top">String</td>
<td>

A free-text comment left for the image.

</td>
</tr>
</tbody>
</table>

### CoverArtArchiveImageThumbnails

URLs for thumbnails of different sizes for a particular piece of cover art.

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
<td colspan="2" valign="top"><strong><a name="small">small</a></strong></td>
<td valign="top">URLString</td>
<td>

The URL of a small version of the cover art, where the maximum dimension is
250px.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="large">large</a></strong></td>
<td valign="top">URLString</td>
<td>

The URL of a large version of the cover art, where the maximum dimension is
500px.

</td>
</tr>
</tbody>
</table>

### CoverArtArchiveRelease

An object containing a list of the cover art images for a release obtained
from the [Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive),
as well as a summary of what artwork is available.

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
<td colspan="2" valign="top"><strong><a name="front">front</a></strong></td>
<td valign="top">URLString</td>
<td>

The URL of an image depicting the album cover or “main front” of the release,
i.e. the front of the packaging of the audio recording (or in the case of a
digital release, the image associated with it in a digital media store).

In the MusicBrainz schema, this field is a Boolean value indicating the
presence of a front image, whereas here the value is the URL for the image
itself if one exists. You can check for null if you just want to determine
the presence of an image.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">size</td>
<td valign="top"><a href="#coverartarchiveimagesize">CoverArtArchiveImageSize</a></td>
<td>

The size of the image to retrieve. By default, the returned image will
have its full original dimensions, but certain thumbnail sizes may be
retrieved as well.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="back">back</a></strong></td>
<td valign="top">URLString</td>
<td>

The URL of an image depicting the “main back” of the release, i.e. the back
of the packaging of the audio recording.

In the MusicBrainz schema, this field is a Boolean value indicating the
presence of a back image, whereas here the value is the URL for the image
itself. You can check for null if you just want to determine the presence of
an image.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">size</td>
<td valign="top"><a href="#coverartarchiveimagesize">CoverArtArchiveImageSize</a></td>
<td>

The size of the image to retrieve. By default, the returned image will
have its full original dimensions, but certain thumbnail sizes may be
retrieved as well.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="images">images</a></strong></td>
<td valign="top">[<a href="#coverartarchiveimage">CoverArtArchiveImage</a>]!</td>
<td>

A list of images depicting the different sides and surfaces of a release’s
media and packaging.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="artwork">artwork</a></strong></td>
<td valign="top">Boolean!</td>
<td>

Whether there is artwork present for this release.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="count">count</a></strong></td>
<td valign="top">Int!</td>
<td>

The number of artwork images present for this release.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong><a name="release">release</a></strong></td>
<td valign="top"><a href="#release">Release</a></td>
<td>

The particular release shown in the returned cover art.

</td>
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
<td colspan="2" valign="top"><strong><a name="coverartarchive">coverArtArchive</a></strong></td>
<td valign="top"><a href="#coverartarchiverelease">CoverArtArchiveRelease</a></td>
<td>

An object containing a list and summary of the cover art images that are
present for this release from the [Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive).
This field is provided by the Cover Art Archive extension.

</td>
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
<td colspan="2" valign="top"><strong><a name="coverartarchive">coverArtArchive</a></strong></td>
<td valign="top"><a href="#coverartarchiverelease">CoverArtArchiveRelease</a></td>
<td>

The cover art for a release in the release group, obtained from the
[Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive). A
release in the release group will be chosen as representative of the release
group.
This field is provided by the Cover Art Archive extension.

</td>
</tr>
</tbody>
</table>

## Enums

### CoverArtArchiveImageSize

The image sizes that may be requested at the [Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive).

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>SMALL</strong></td>
<td>

A maximum dimension of 250px.

</td>
</tr>
<tr>
<td valign="top"><strong>LARGE</strong></td>
<td>

A maximum dimension of 500px.

</td>
</tr>
<tr>
<td valign="top"><strong>FULL</strong></td>
<td>

The image’s original dimensions, with no maximum.

</td>
</tr>
</tbody>
</table>
