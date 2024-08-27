# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Objects](#objects)
    * [Organization](#organization)
    * [Person](#person)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [ID](#id)
    * [Int](#int)
    * [String](#string)
  * [Unions](#unions)
    * [Party](#party)

</details>

## Query
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
<td colspan="2" valign="top"><strong>party</strong></td>
<td valign="top"><a href="#party">Party</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### Organization

A group of **persons** <em>working</em> together for a purpose

This is a more elaborate description

* with some
* items
* to see
* if this markdown is properly
* translated

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

Node ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of the organization

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Main contact email address

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>founded</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Date the organization was founded

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ceo</strong></td>
<td valign="top"><a href="#person">Person</a></td>
<td>

The CEO

</td>
</tr>
</tbody>
</table>

### Person

A human being

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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>age</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dob</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.


## Unions

### Party

Either a `Person` or an `Organization`

<table>
<thead>
<tr>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong><a href="#person">Person</a></strong></td>
<td valign="top">

A human being

</td>
</tr>
<tr>
<td valign="top"><strong><a href="#organization">Organization</a></strong></td>
<td valign="top">

A group of **persons** <em>working</em> together for a purpose

This is a more elaborate description

* with some
* items
* to see
* if this markdown is properly
* translated

</td>
</tr>
</tbody>
</table>
