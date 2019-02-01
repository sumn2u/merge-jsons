`merge-jsons` is a Node.js module, which provides 3 functions, `isJSON` ,`removeDuplicates` and `mergeJSON`.

## installation and usage

``` bash
npm install merge-jsons
```

``` javascript
import { mergeJSON, removeDuplicatesJSON , isJSON } from "merge-jsons";

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
removeDuplicatesJSON(arrays)
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