'use strict';
import Test from 'tape';
import { mergeJSON, removeDuplicatesJSON , isJSON } from '../dist/lib';

Test('test merge-jsons', (t) => {
    t.test('should join JSON on the first level', (t) => {
        const json1 = { a: 1,b: 2 };
        const json2 = {c: 2, d: 3 };
        t.plan(1);
        t.deepEqual(mergeJSON(json1, json2), {a: 1,b: 2,c: 2,d: 3})
        t.end();
    });

     t.test('should join arrays on the first level', (t) => {
         const json1 = ['a', 'b'];
         const json2 = ['c', 'd'];
         t.plan(1);
         t.deepEqual(mergeJSON(json1, json2), ['a', 'b', 'c', 'd'])
         t.end();
     });

    t.test('should join nested JSON', (t) => {
        const json1 = {a: {a: 1}, b: 2} ;
        const json2 = {a: {b: 2}, c: 2} ;
        t.plan(1);
        t.deepEqual(mergeJSON(json1, json2), { a: { a: 1, b: 2 }, b: 2, c: 2 })
        t.end();
    });

    t.test('should join nested arrays', (t) => {
        const json1 = {a: {a: 1, c: [1, 2]}} ;
        const json2 = {a: {b: 2, c: [3, 4]}} ;
        t.plan(1);
        t.deepEqual(mergeJSON(json1, json2),  { a: { a: 1, c: [ 1, 2, 3, 4 ], b: 2 } })
        t.end();
    });

    t.test('should avoid duplicating simple values when joining arrays', (t) => {
        const json1 = ['a', 'b'];
        const json2 = ['a', 'c', 'd'];
        t.plan(1);
        t.deepEqual(mergeJSON(json1, json2), ['a', 'b', 'c', 'd'])
        t.end();
    });

    t.test('should drop complex values from first object when joining arrays', (t) => {
        const json1 = [{a: 1, b: 2}, {a: 2, b: 4}];
        const json2 = [{a: 1, b: 2}, {a: 3, b: 9}, {a: 4, b: 16}];
        t.plan(1);
        t.deepEqual(mergeJSON(json1, json2),    [ { a: 1, b: 2 }, { a: 2, b: 4 }, { a: 3, b: 9 }, { a: 4, b: 16 } ])
        t.end();
    });

});

Test('remove duplicates', (t) => {
    t.test('should remove duplicate json', (t) => {
        const arr = [
        {id:1,name:"sravan ganji"},
        {id:2,name:"anu"},
        {id:4,name:"mammu"},
        {id:3,name:"sanju"},
        {id:3,name:"ram"}
        ];
        const arr2= [ {id:1,name:"sravan ganji"},
        {id:2,name:"anu"},
        {id:4,name:"mammus"},
        {id:4,name:"sanju"},
        {id:3,name:"ram"}];
        const arrs = arr.concat(arr2)
        t.plan(1);
        t.deepEqual(removeDuplicatesJSON(arrs), [ { id: 1, name: 'sravan ganji' }, { id: 2, name: 'anu' }, { id: 4, name: 'mammu' }, { id: 3, name: 'sanju' }, { id: 3, name: 'ram' }, { id: 4, name: 'mammus' }, { id: 4, name: 'sanju' } ])
        t.end();
    });
})

Test('check given object is json or not', (t) => {
    t.test('check given input is json or not', (t) => {
        t.plan(1);
        t.deepEqual(isJSON({}), true)
        t.end();
    });
})
