# Point Of Sale Kata

This is an example solution in TypeScript for J.B. Rainsbergers Kata "Point of Sale" from the course "The World's Best Intro to TDD, Level 1: TDD done right".

## Iteration 1 - Show Price On Display
Test list:

1. Barcode shows error for invalid barcode
2. Barcode can be found in the price database, show price in display
3. Barcode can not be found in the price database, show error in display
4. POS can receive a barcode
5. Display can show the barcode

Questions:

1. Before starting to code, I usually think about "acceptance tests" / ask the users for those. An acceptance test in this case is on the API level. In this case, the first 3 tests in my eyes are acceptance test. all other test are only there to drive the architecture. the first (test 4.) one generally enables the communication between the POS and the outside world. the second one (test 5.) enables the communication with a display.
2. Usually i would now set up the acceptance tests that fail. after that i would think about a possible architectural solution which potentially solves the problem. maybe draw it on paper. I would maybe come up with a Display-Class with a show( )-method, a catalog class for a database/API access, a barcode value object for the validation rules and the POS-Class as the application that glues it all together. I would use interfaces for the display and the catalog. then I would start to implement this design bottom up and test first, meaning that every class and method would get their own "little unit" tests. if all those little unit tests are green then also the acceptance tests should be green. as needed, some methods would be set private, which beforehand maybe were public to enable unit testing. Finally I would remove those "scaffolding"-tests, because the acceptance tests cover the whole application. this seems easier for me for non-algorithmic problems like this kata, because its quite hard to find incremental tests. I won't to it this way this time and see if the result differs
3. the first test "POS can receive a barcode" was obsolete after the test "Display can show the barcode", because the architecture changed. is it okay to delete a test? was the test actually useless in the first place? I also dont like that the test directly access the "display" instance... I would feel better if the POS-Class was the only entry Point for the application, but actually the access to the display.getDisplayText-Method is only needed by the test, theres no business requirement for this. seems like the test has influenced my implementation strategy. I would prefer to test the display class in isolation.
4. there no business requirements for a real barcode validation, so I just validate of the barcode is initial or not as a basic validation rule. should I create a value object even for this simple validation?
5. I refactored the tests to use parameters, because I didnt want to change every test by hand because of the new constructor parameter... maybe I also should throw exceptions instead of returning undefined.
6. the test for products/items/barcodes that are not in the database worked directly, because I had to implement that feature beforehand because of typescripts type-checking.
7. well seems like I found a workaround for the type-checking problem in the PriceDataBase, so could have made that extra step. will do next time.
8. PriceDataBase now throws an exception if nothing can be found.
9. Changed nested IF to guardclause in PointofSale
10. After watching the Videos on how JB solved the problem, I think I took some steps too fast. they were no baby steps. Maybe because I already had a solution on my mind. 11. I actually don't see the Display as a classic View in a MVC-"architecture". I interpreted the display as a predefined unchangeable API to an external device, which only exposes two methods. So I chose to give PointOfSale the task to define the textfragments to be displayed. I might got that wrong.
11. Added two new value objects "price" and "currency" to get rid of primitive obsession without adding further tests. Is this "ok" from a TDD perspective or should I have created tests for new classes first?


##  Iteration 2 - Buy multiple items & more

Test list:
1. Show totals on display when all items are scanned ("checkout")
2. Buy 3 existing item and show totals
3. bug 3 existing and 1 non existing items and show totals
4. buy 3 non existing items and show totals
5. manually add a non existing item
6. notify manager that non existing item has been scanned

Questions:
1. I wrote specific unit tests for my Money-class. is this okay or should I just have used the acceptance test? I like the faster feedback of a specific unit test
