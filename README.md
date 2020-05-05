# tmp-mocha-async
playing with mocha with asynchronous dependencies on test

## output
```
init start 300 T+0


init end 300 T+303
b init function start 100 T+304
a init function start 200 T+305
a inline start 400 T+305
b init function end 100 T+405
b post-init
a init function end 200 T+506
a initialized
  describe a
    ✓ should let 1 be 1

  describe b
    ✓ should let 2 be 2


  2 passing (505ms)

a inline end 400 T+705
a inline.then
```
This shows that the a inline stuff happens too late.

If I uncomment the `before()` in
``` js
describe('describe b', () => {
  // before(() => H.setup('b inline', 300).then(() => console.log('a inline.then')))
  it('should let 2 be 2', () => {
    expect(H.b).to.equal(2)
  })
})
```
, it fires before the test, and brings the one from `a` along with it
```
init start 300 T+0


init end 300 T+301
b init function start 100 T+302
a init function start 200 T+303
a inline start 400 T+303
b init function end 100 T+403
b post-init
a init function end 200 T+503
a initialized
  describe a
    ✓ should let 1 be 1

  describe b
b inline start 300 T+507
a inline end 400 T+703
a inline.then
b inline end 300 T+808
a inline.then
    ✓ should let 2 be 2


  2 passing (804ms)
```
Even sticking `a`'s inline code in a `before()` leaves `a` fired too late:
```
init start 300 T+0


init end 300 T+302
b init function start 100 T+303
a init function start 200 T+303
b init function end 100 T+404
b post-init
a init function end 200 T+503
a initialized
  describe a
a inline start 400 T+507
a inline end 400 T+907
a inline.then
    ✓ should let 1 be 1

  describe b
b inline start 300 T+913
b inline end 300 T+1214
a inline.then
    ✓ should let 2 be 2


  2 passing (1s)
```
