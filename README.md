# Point Of Sale Kata

This is an example solution in TypeScript for J.B. Rainsbergers Kata "Point of Sale" from the course "The World's Best Intro to TDD, Level 1: TDD done right".

Test list:

1. Barcode shows error for invalid barcode
2. Barcode can be found in the price database, show price in display
3. Barcode can not be found in the price database, show error in display
4. POS can receive a barcode
5. Display can show the barcode

Questions:

1. Before starting to code, I usually think about "acceptance tests" / ask the users for those. An acceptance test in this case is on the API level. In this case, the first 3 tests in my eyes are acceptance test. all other test are only there to drive the architecture. the first (test 4.) one generally enables the communication between the POS and the outside world. the second one (test 5.) enables the communication with a display.
2. Usually i would now set up the acceptance tests that fail. after that i would think about a possible architectural solution which potentially solves the problem. maybe draw it on paper. I would maybe come up with a Display-Class with a show( )-method, a catalog class for a database/API access, a barcode value object for the validation rules and the POS-Class as the application that glues it all together. I would use interfaces for the display and the catlog. then I would start to implement this design bottom up and test first, meaning that every class and method would get their own "little unit" tests. if all those little unit tests are green then also the acceptance tests should be green. as needed, some methods would be set private, which beforehand maybe were public to enable unit testing. Finally I would remove those "scaffolding"-tests, because the acceptance tests cover the whole application. this seems easier for me for non-algorithmic problems like this kata, because its quite hard to find incremental tests. I won't to it this way this time and see if the result differs
3. the first test "POS can receive a barcode" was obsolete after the test "Display can show the barcode", because the architecture changed. is it okay to delete a test? was the test actually useless in the first place? I also dont like that the test directly access the "display" instance... I would feel better if the POS-Class was the only entry Point for the application, but actually the access to the display.getDisplayText-Method is only needed by the test, theres no business requirement for this. seems like the test has influenced my implementation strategy. I would prefer to test the display class in isolation.
4. there no business requirements for a real barcode validation, so I just validate of the barcode is initial or not as a basic validation rule. should I create a value object even for this simple validation?
5. I refactored the tests to use parameters, because I didnt want to change every test by hand because of the new constructor parameter... maybe I also should throw exceptions instead of returning undefined.
