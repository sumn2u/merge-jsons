[![GitHub issues](https://img.shields.io/github/issues/sumn2u/merge-jsons.svg)](https://github.com/sumn2u/merge-jsons/issues) [![GitHub forks](https://img.shields.io/github/forks/sumn2u/merge-jsons.svg)](https://github.com/sumn2u/merge-jsons/network) [![GitHub stars](https://img.shields.io/github/stars/sumn2u/merge-jsons.svg)](https://github.com/sumn2u/merge-jsons/stargazers) [![GitHub license](https://img.shields.io/github/license/sumn2u/merge-jsons.svg)](https://github.com/sumn2u/merge-jsons/blob/master/LICENSE) [![Twitter](https://img.shields.io/twitter/url/https/github.com/sumn2u/merge-jsons.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsumn2u%2Fmerge-jsons)
[![GitHub tag](https://img.shields.io/github/tag/sumn2u/merge-jsons.svg)](https://GitHub.com/sumn2u/merge-jsons/tags/)
[![GitHub release](https://img.shields.io/github/release/sumn2u/merge-jsons.svg)](https://GitHub.com/sumn2u/merge-jsons/releases/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/sumn2u/merge-jsons/graphs/commit-activity)
<a href="https://npmjs.com/package/money-cli"><img src="https://img.shields.io/npm/dt/merge-jsons.svg" alt="npm Downloads"></a> 
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsumn2u%2Fmerge-jsons.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsumn2u%2Fmerge-jsons?ref=badge_shield)

`merge-jsons` is a Node.js module, which provides 3 functions, `isJSON` ,`removeDuplicateJSON` and `mergeJSON`.

## installation and usage

``` bash
npm install merge-jsons
```

``` javascript
import { mergeJSON, removeDuplicateJSON , isJSON } from "merge-jsons";

```

## merging of JSON objects

``` javascript
let obj1 = {a:true, b:false} ;
let obj2 = {b:true, c:12345} ;
let result = mergeJSON(obj1, obj2) ;
console.log(result) ;
// Object {a: true, b: true, c: 12345}
```

When using `merge` consider, that the second parameter is dominant. Keys from the second parameter, already existing in the first parameter override these. If both keys contain JSON objects a merge is performed.

## removing duplicate JSON objects
``` javascript
const arrays = [{id: 1, name: "sravan ganji"}, {id: 2, name: "anu"},{id: 4, name: "mammu"}, {id: 3, name: "sanju"},{id: 3, name: "ram"},{id: 1, name: "sravan ganji"}
,{id: 2, name: "anu"},{id: 4, name: "mammus"},{id: 4, name: "sanju"},{id: 3, name: "ram"}];
removeDuplicateJSON(arrays)
//[ { id: 1, name: 'sravan ganji' }, { id: 2, name: 'anu' }, { id: 4, name: 'mammu' }, { id: 3, name: 'sanju' }, { id: 3, name: 'ram' }, { id: 4, name: 'mammus' }, { id: 4, name: 'sanju' } ]
```

## testing for JSON objects

``` javascript
let obj = {a:123, b:456} ;
let num = 123 ;
let str = "hello world!" ;
let date = new Date() ;

isJSON(obj) ;
// true

isJSON(num) ;
// false

isJSON(str) ;
// false

// note difference to typeof!
typeof date === "object"
// true
isJSON(date) ;
// false
```

The function returns **true**, when the given parameter is a JSON object. I it is no JSON object it returns **false**. For JavaScript objects, that are not *pure* JSON objects it also returns **false**.


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsumn2u%2Fmerge-jsons.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsumn2u%2Fmerge-jsons?ref=badge_large)
