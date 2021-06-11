        // ESCAPE SEQUENCE

    //   \'  SINGLE QUOTE
    //   \"  DOUBLE QUOTE
    //   \\  BACKSLASH
    //   \n  NEW LINE
    //   \r  CARRIAGE RETURN
    //   \t  TAB
    //   \b  BACKSPACE
    //   \f  FORM FEED

// ------------------------------------------------------------------------
        // .PUSH() FUNCTION
    // ADDS ITEM TO THE LAST OF THE ARRAY
    
    // var ourArray=["shubh","jain","23rd"];
    // ourArray.push(["may"]);
    // console.log(ourArray);

        // RESULT
    // ["shubh", "jain", "23rd", ["may"]]

// ------------------------------------------------------------------------
        // .POP() FUNCTION
    // REMOVES LAST ITEM OF THE ARRAY

    // var ourArray=[1,2,3];    var ourArray=[[1,1,1],[2,2,2]]
    // var remove = ourArray.pop();
    // console.log(ourArray)

        // RESULT
    //  [1,2]            [[1, 1, 1]]

// ------------------------------------------------------------------------
        // .SHIFT() FUNCTION
    // REMOVES FIRST ITEM FROM ARRAY

    // var ourArray=["a","b",["c"],"d"];
    // var remove= ourArray.shift();
    // console.log(ourArray);

        // RESULT
    // ["b", ["c"], "d"]

// -----------------------------------------------------------------------
        // .UNSHIFT() FUNCTION
    // ADDS ITEM AT FIRST OF ARRAY

    // var ourArray =["a","b","c","d"];
    // ourArray.unshift("z");
    // console.log(ourArray);

        // RESULT
    // ["z", "a", "b", "c", "d"]

// ------------------------------------------------------------------------
        // USING BOTH SHIFT AND UNSHIFT WILL CAUSE REPLACING FIRST OF THE ARRAY
    
    // var ourArray =["a","b","c","d"];
    // ourArray.shift();
    // ourArray.unshift("z");
    // console.log(ourArray);

        // RESULT
    // ["z", "b", "c", "d"]

// ------------------------------------------------------------------------
        // REUSABLE FUNCTION
    
    // function reUsable(){
    //     console.log("hi");
    // }
    // reUsable();

        // RESULT
    // "hi"

// ------------------------------------------------------------------------
        // PARAMETER
    // PASSING VALUES TO FUNCTION THROUGH ARGUMENTS

    // function functionWithArgs(a,b) {
    //     console.log(a+b);
    // }

    // functionWithArgs(10,5);

        // RESULT
    // 15

// ------------------------------------------------------------------------
        //  GLOBAL SCOPE AND FUNCTION
    // MEANS IT CAN BE SEEN EVERYWHERE IN YOUR JAVA SCRIPT
    
    // var myGlobal = 10;
        // WE USED VAR HERE THAT DOES NOT MAKE IT LOCAL, IT'S A GLOBAL VARIABLE SINCE IT IS OUTSIDE OF THE FUNCTION
    
    // function fun1() {
    //  oopsGlobal = 5;
        // OOPSGLOBAL   IF WE USE VAR , THEN IT'LL BECOME UNDEFINED, SINCE IT'S INSIDE OF THE FUNCTION  THAT MAKES IT LOCAL VARIABLE, SINCE WE ARE NOT USING VAR KEYWORD IT BECOMES A GLOBAL VARIABLE..
    // }
    
    // function fun2(){
    //var output = "";
    //if (typeof myGlobal!= "undefined"){
    //    output += "myGlobal:" + myGlobal;
    //}
    //if(typeof oopsGlobal != "undefined"){
    //    output+= "  oopsGlobal: " + oopsGlobal;
    //}
    //console.log(output)
    // }

    // fun1();
    // fun2();

        // RESULT
    // "myGlobal:10  oopsGlobal: 5"

// ------------------------------------------------------------------------
        // GLOBAL VS LOCAL SCALE VARIABLE

    // var outerWear="T-shirt";

    // function myOutfit() {
            
    //     var	outerWear="sweater"
        // SINCE IT IS INSIDE THE FUNCTION I'LL TAKE PRIORITY

    //     return outerWear;
    // }
    
    // console.log(myOutfit());
    // console.log(outerWear);

        // RESULT
    // "sweater"
    // "T-shirt"

// ------------------------------------------------------------------------
        // ASSIGN RETURN VALUE FROM A FUNCTION

    // var changed = 0;

    // function change (num) {
        
    //     return(num+5)/3;
    // }

    // changed = change(10);

    // console.log(changed)

        // RESULT
    // 5

// ------------------------------------------------------------------------
        // STAND INLINE

    // function nextInLine(arr, item) {
    //     arr.push(item);
    //     return arr.shift();
    // }
    // var testArr = [1,2,3,4,5];

    // console.log("Before: " + JSON.stringify(testArr));
    // console.log(nextInLine(testArr, 6));
    // console.log("After: " + JSON.stringify(testArr));

        // RESULT
        // "Before: [1,2,3,4,5]"
        // 1
        // "After: [2,3,4,5,6]"

// ------------------------------------------------------------------------
        // CONDITIONAL LOGIC WITH IF STATEMENT

    // function trueOrFalse (wasItTrue){
    //     if(wasItTrue){
    //         return "yes, It is."
    //     }
    //     return "No, It's not."
    // }

    // console.log(trueOrFalse(true))

        // RESULT
    // "yes, It is."

// ------------------------------------------------------------------------
        // STRICT EQUALITY OPERATOR
    // == WILL ONLY COMPARE THE VALUE
    // IF 3 == '3'  THEN IT WILL CONVERT IT INTO NUMBER FIRST THEN RETURNS TRUE
    // === WILL COMPARE BOTH VALUE AND TYPE.
    // IF 3 === '3' THEN IT WILL JUST RETURN FALSE

    // function testStrict(val) {
    //     if(val === 9) {
    //         return "Equal";
    //     }
    //     return "Not Equal";
    // }

    // testStrict(10);
    // console.log(testStrict());

        // RESULT
    // "Not Equal"

// ------------------------------------------------------------------------
        // ANOTHER EXAMPLE
    
    // function testStrict(A, B) {
     //     if(A == B ){
    //         return "Equal";
    //     }
    //     return "Not Equal";
        
    // }
    // console.log(testStrict(10, '10'));
        
        // RESULT
    // "Equal"

// ------------------------------------------------------------------------
        // INEQUALITY OPERATOR
    // OPPOSITE OF AN EQUALITY OPERATOR

    // function notEqual(A) {
    //     if(A != 99 ){
    //         return "Not Equal";
    //     }
    //     return "Equal";
       
    // }
    // console.log(notEqual(10));

        // RESULT
    // "Not Equal"
    
//-------------------------------------------------------------------------
        // STRICT INEQUALITY OPERATOR
    // !== IS THE STRICT INEQUALITY OPERATOR

    // function notEqual(A) {
    //     if(A !== 99 ){
    //         return "Not Equal";
    //     }
    //     return "Equal";
       
    // }
    // console.log(notEqual("99"));

        // RESULT
    // "Not Equal"

// ------------------------------------------------------------------------
        // COMPARISON GREATER THAN 
    // WILL BE SAME FOR LESS THAN
    
    // function testGreat(A) {
    //     if (A >100) {
    //         return "over 100";
    //     }
    //     if(A>40) {
    //         return "over 40"
    //     }
    //     return "40 or less than 40"
    // }
    // console.log(testGreat(10));

        // RESULT
    // "40 or less than 40"

// ------------------------------------------------------------------------
        // COMPARISON GREATER THAN EQUAL TO
    // WILL BE SAME FOR LESS THAN EQUAL TO

    // function testGreat(A) {
    //     if (A >= 100) {
    //         return "100 OR over 100";
    //     }
    //     if(A>= 40) {
    //         return "40 OR over 40"
    //     }
    //     return "less than 40"
    // }
    // console.log(testGreat(199));

        // RESULT
    // "100 OR over 100"

// ------------------------------------------------------------------------
        // AND OPERATOR
    
    // function testAnd(A) {
    //     if(A <= 50 && A>=25){
    //         return "yes";
    //     }
    //     return "no"
    // }

    // console.log(testAnd(10));

        // RESULT
    // "no"

// ------------------------------------------------------------------------
        // OR OPERATOR

    // function testOr(A) {
    //     if (A < 50 || A > 70){
    //         return "outside";
    //     }
    //     return "inside";
    // }

    // console.log(testOr(54));

        // RESULT
    // "inside"

// ------------------------------------------------------------------------
        // IF ELSE

    // function ifElse(A){
    //     if (A >= 10){
    //         return " over 10"
    //     } else {
    //         return "under 10"
    //     }
    // }
    // console.log(ifElse(12))

        // RESULT
    // " over 10"

// -----------------------------------------------------------------------
        // ELSE IF
    // WE ALWAYS NEED TO ORDER IT PROPERLY, SHOULD ALWAYS PUT THE VALUE IN ASSCENDING ORDER

    // function elseIf(A) {
    //     if(A>=10) {
    //         result="over 10"
    //     } else if(A<9 && A >=5) {
    //         result="under 10"
    //     } else {
    //         result="fuckoff"
    //     }
    //     return result
    // }

    // console.log(elseIf(1))

        // RESULT
    // "fuckoff"

//-------------------------------------------------------------------------
        // CHAIN IF FUNCTION

    // function chain(num) {
    //     if(num<5){
    //         return "tiny"
    //     } else if(num<10){
    //         return "small"
    //     } else if(num<15){
    //         return "medium"
    //     } else if(num<20){
    //         return "large"
    //     } else{
    //         return "huge"
    //     }
    // }
    // console.log(chain(25))

        // RESULT
    //  "huge"

        // WITHOUT USING ELSE WE CAN SHORT THE BY HALF AND THE RESULT WILL NOT CHANGE.

        // function chain(num) {
        //     if(num<5) return "tiny"
        //     if(num<10) return "small"
        //     if(num<15)return "medium"
        //     if(num<20)return "large"
        //     return "huge"
        // }
        // console.log(chain(25))

// ---------------------------------------------------------------------
        // GOLF CODE
    /**
     * STROKES      RETURN
     * 1            "Hole-in-one"
     * <= par-2     "Eagle"
     * ==par-1      "Birdie"
     * ==par        "Par"
     * ==par+1      "Bogey"
     * ==par+2      "Double Bogey"
     * >=par+3      "Go-Home"
    */
    
    // var names=["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go-Home"]
    // function golfGo(strokes, par) {
    //     if(strokes==1) {
    //         return names[0]
    //     } else if (strokes <= par - 2){
    //         return names[1]
    //     } else if(strokes == par - 1){
    //         return names[2]
    //     } else if(strokes == par) {
    //         return names [3]
    //     } else if (strokes == par +1){
    //         return names[4]
    //     } else if (strokes == par+2){
    //         return names [5]
    //     } else if(strokes >= par+3){
    //         return names[6]
    //     }
    // }
    // console.log(golfGo(3, 4))

        // RESULT
    // "Birdie"

// ----------------------------------------------------------------------
        // SWITCH STATEMENTS                DEFAULT OPTION
                                    // UPDATE 1: ADD AN DEFAULT OPTION IF WE DO NOT INPUT ANY KNOWN CASE THEN THE DEFAULT OPTION WILL BE TRIGERED
                                    // UPDATE 2: WE CAN ALSO USE MULTIPLE CASEES AND ALSO DON'T NEED TO BREAK BY EVERY CASE USE MULTIPLE CASES ONLY WHEN WE NEED SAME ANSWER FROM MULTIPLE CASES
                                    // Eg. : case 1:
                                    //      case 2:
                                    //      answer ="same"
                                    //      break;          
                                    // JUST LIKE THIS AND WE WILL GET THE ANSWER "SAME" FOR ALL CASES i.e CASE 1 AND CASE 2 
                                    // UPDATE 3: WE CAN JUST REPLACE IF EKSE STATEMENT BY USING SWITCH STATEMENT

    // function switchState(A) {
    //     var ans ="";
    //     switch (A){
    //         case 1: 
    //             ans = "alpha"
    //         break;
    //         case 2:
    //             ans ="beta"
    //         break;
    //         case 3:
    //             ans ="gama"
    //             break;
    //         case 4:
    //             ans ="delta"
    //              break;
                                            // default:
                                            // ans="stuff"
                                            // break
    //     }
    //     return ans;
    // }

    // console.log(switchState(3));
                                            // console.log(switchState("z"))

        // RESULT
    // "gama"                                  "stuff"

// ------------------------------------------------------------------------
        // RETURNING BOOLEAN FROM FUNCTION

    // function isLess(a, b){
    //     return a>b
    // }

    //     console.log(isLess(10 , 16))

        // RESULT
    // false

// ------------------------------------------------------------------------
        // RETURNING EARLY PATTERN FROM FUNCTION
    
    // function abTest(a, b) {

    //     if (a < 0 || b < 0) {
    //         return undefined;
    //     }

    //     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2 ));
    // }

    // console.log(abTest(-2 , 2));

        // RESULT
    // undefined

// -----------------------------------------------------------------------
        // COUNTING CARDS
            // IN THE CASINO GAME, A PLAYER CAN GAIN AN ADVANTAGE OVER THE HOUSE BY KEEPING TRACK OF THE RELATIVE NO. OF HIGH AND LOW CARDS REMAINING IN THE DECK THIS IS CALLED CARD COUNTING.
            // HAVING MORE CARDS REMAINING IN DECK FAVORS THE PLAYER. EACH CARD IS ASSIGNED A VALUE ACCORDING TO THE INFO BELOW. WHEN THE COUNT IS POSITIVE, THE PLAYER SHOULD BET HIGH. WHEN THE COUNT IS ZERO OR NEGATIVE, THE PLAYER SHOULD BET LOW
            // COUNT CHANGE         CARDS
            // +1                   2,3,4,5,6
            // 0                    7,8,9
            // -1                   10,'J','Q','K','A'



    // var count = 0
    // function cc (card) {
    //     switch (card) {
    //         case 2:
    //         case 3:
    //         case 4:
    //         case 5:
    //         case 6:
    //             count++;
    //             break;
    //             case 10:
    //             case "j":
    //             case "q":
    //             case "k":
    //             case "a":
    //                 count--;
    //                 break;
    //     }
    //         var holdbet = 'hold'
    //         if (count > 0) {
    //             holdbet = 'bet'
    //         }
    //         return count + " " + holdbet;
    // }
    // cc(2); cc(3); cc(7); cc('k'); cc('a');

    // console.log(cc(4));

        //RESULT
    // "1 bet"

// ------------------------------------------------------------------------
        // OBJECTS
            // OBJS ARE SIMILER TO ARRAYS, OBJS USES {}, WHEREAWS ARRAY USES [].
        // var myDog = {
        //     "name" : "Quincy",
        //     "legs" : 4,
        //     "tails" : 2,
        //     "friends" : []
        // }

            // BELOW IS THE DOT NOTATION

        // var dogName = myDog.name;
        // var dogTails = myDog.tails;

        // console.log(dogName)

            // RESULT
        // "Quincy"

// ------------------------------------------------------------------------
        // BRACKET NOTATION
    
    //     var testObj = {
    //         "an entree" : "hamburger",
    //         "my side" : "veggies",
    //         "the drink" : "water"
    //     }
    //     var entreeValue = testObj["an entree"];
    //     var drinkvalue = testObj["the drink"];

    // console.log(entreeValue);

        // RESULT
    // "hamnurger"

// ------------------------------------------------------------------------
        // ACCESSING OBJECT PROPERTIES WITH VARIABLE
    
        // var testObj = {
        //     12 : "namath",
        //     16 : "mantana",
        //     19 : "unitas"
        // }

        // var playerNumber = 16;
        // var player = testObj[playerNumber];

        // console.log(player);

        // RESULT
    // "mantana"

// ------------------------------------------------------------------------
        // UPDATING OBJ PROPERTIES

    // var myDog = {
        // "name" : "coder" ,
        // "legs" : 4 ,
        // "tails" : 1 ,
        // "friends" : ["everything"]
    // }

    // myDog.name = "Happy Coder";

    // console.log(myDog);

        // RESULT
    // "name" : "Happy Coder" ,
    // "legs" : 4 ,
    // "tails" : 1 ,
    // "friends" : ["everything"]

// ------------------------------------------------------------------------
        // ADDING A PROPERTY
    
    // var ourDog = {
    //     "name" : "camper",
    //     "legs" : 4,
    //     "tails" : 1,
    //     "friends" : ["everything"]
    // }

    // ourDog.bark = "bow-wow";

    // ourDog['bark'] = "woof!"             THIS WILL ALSO WORK

    // console.log(ourDog);

        // RESULT
    //  { "name" : "camper",
    // "legs" : 4,
    // "tails" : 1,
    // "friends" : ["everything"],
    // "bark" : "bow-wow" }

// ------------------------------------------------------------------------
        // DELETING A PROPRRTY FROM OBJECT
    
    // var ourDog = {
    //     "name" : "camper",
    //     "legs" : 4,
    //     "tails" : 1,
    //     "friends" : ["everything"],
    //     "bark" : "bow-bow"
    // }

    // delete ourDog.legs;

    // console.log(ourDog);        

                            // THE LEGS PROPERTY WILL BE DELETED

        // RESULT
    // {
    //   bark: "bow-bow",
    //   friends: ["everything"],
    //   name: "camper",
    //   tails: 1
    // }

// ------------------------------------------------------------------------
        // USING OBJECTS FOR LOOKUPS

    // function phoneticLookups(val) {
    //     var result = ""

    //     var lookup = {
    //         "alpha" : "adams",
    //         "bravo" : "boston",
    //         "charlie" : "chicago",
    //         "delta" : "denver",
    //         "echo" : "casy",
    //         "foxtrot" : "frank"
    //     };
    //     result = lookup[val];
    //     return result;
    // }

    // console.log(phoneticLookups("charlie"));

        // RESULT
    // "chicago"

// ------------------------------------------------------------------------
        // TESTING OBJECTS FOR PROPERTIES

    //  var myObj = {
    //      gift : "pony",
    //      pet : "kitten",
    //      bed : "sleigh"
    //  }

    //  function checkObj(checkProp){
    //      if (myObj.hasOwnProperty(checkProp)) {
    //          return myObj [checkProp]
    //      }
    //      else {
    //          return "not found" ;
    //      }
    //  }

    //  console.log(checkObj("gift"));

        // RESULT
    // "pony"

// ------------------------------------------------------------------------
        // ACCESSING NESTED OBJECTS
    
    // var myStorage = {
    //     "car" : {
    //         "inside" : {        
    //         "glove box" : "maps",
    //         "passanger set" : "crumbs"
    //     },
    //     "outside" : {
    //         "trunk" : "jack"
    //         }
    //     }
    // }

    // var gloveBoxContents = myStorage.car.inside["glove box"]

    // console.log(gloveBoxContents);

        // RESULT
    // "maps"

// ------------------------------------------------------------------------
        // ACCESSING NESTED ARRAY

    // var myPlants = [
    //     {
    //         type : "flowers",
    //         list : [
    //             "rose",
    //             "tulip",
    //             "lotus"
    //         ],
    //     },
    //     {
    //         type : "trees",
    //         list : [
    //             "banayan",
    //             "neem",
    //             "pine"
    //         ]
    //     }
    // ];

    // var secondTree = myPlants[1].list[1];
    // console.log(secondTree);

    //  IN THIS WE ARE ACCESSING THE SECOND ARRAY WHICH TYPES ARE TREES

        // RESULT
    // "neem"

// ------------------------------------------------------------------------
        // RECORD COLLECTION

    // var collection = {
    //     "2584" : {
    //         "album" : "Slippery When Wet",
    //         "artist" : "Bon Jovi",
    //         "tracks" : [
    //             "Let It Rock",
    //             "You Give Love A Bad Name"
    //         ]
    //     },
    //     "2468" : {
    //         "album" : "1999",
    //         "atrist" : "Prince",
    //         "tracks" : [
    //             "1999",
    //             "Little Red Corvette"
    //         ]
    //     },
    //     "1245" : {
    //         "artist" : "Robert Palmer",
    //         "tracks" : []
    //     },
    //     "5439" : {
    //         "album" : "ABBA Gold"
    //     }
    // };

                         // KEEP A COPY OF THE COLLECTION FOR TESTS

    // var collectionCopy = JSON.parse(JSON.stringify(collection));

    // function updateRecords(id, prop, value) {
    //     if(value === "" ) {
    //         delete collection[id][prop];
    //     } else if(prop === "tracks") {
    //         collection[id][prop] = collection[id][prop] || [];
    //         collection[id][prop].push(value);
    //     } else {
    //         collection[id][prop] = value;
    //     }
    //     return collection
    // }

    // updateRecords(2468, "tracks", "test")
    // console.log(updateRecords(5439, "artist", "ABBA"));


        // RESULT
    // {
//   1245: {
//     artist: "Robert Palmer",
//     tracks: []
//   },
//   2468: {
//     album: "1999",
//     atrist: "Prince",
//     tracks: ["1999", "Little Red Corvette", "test"]
//   },
//   2584: {
//     album: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love A Bad Name"]
//   },
//   5439: {
//     album: "ABBA Gold",
//     artist: "ABBA"
//   }
// }

// ------------------------------------------------------------------------
        // FOR LOOP THROUGH AN ARRAY

    // var myArray = [ 2,3,5,9,7,8,9];
    // var total = 0;

    // for (var i = 0; i < myArray.length; i++) {    /** IN THIS THE ARRAY IS ALREADY GIVEN MYARRAY.LENGTH IS MEASURING THE LENGTH OF THE GIVEN ARRAY(IT'S A CONDITION WE CAN CHANGE THE CONDITION HOWEVER WE WANT LOOK ATA THE NESTED ARRAY EXAMPLE)  */
    //     total += myArray[i];
    // }

    // console.log(total);

        // RESULT
    // 43

// ------------------------------------------------------------------------
        // NESTED ARRAY (FOR LOOP)
    
    // function multiplyAll(arr) {
    //     var product = 1 ;

    //     for ( var i=0; i < arr.length; i++) {
    //         for ( var j=0; j < arr[i].length; j++) {
    //             product *= arr[i][j];
    //         }
    //     }
    //     return product;
    // }

    // var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

    // console.log(product);

        // RESULT
    // 5040     /** WHAT IT IS DOING IS MULTIPLY EVERY SINGLE NUMBER [1*2],[3*4],[5*6*7] = 2*12*210 = 5040 */


                     // ANOTHER EXAMPLE OF NESTED FOR LOOP
    
    // for (i=0; i<3; i++)
    // {
    //     document.write("outer");
    //     document.write(i);
    //     document.write(<br></br>);
        
    //     for (j=0; j<5; j++)
    //     {
    //         document.write("inner");
    //         document.write(j);
    //         document.write(<br></br>)
    //     }
    // }

        // RESULT
    // outer0
    // inner0
    // inner1
    // inner2
    // inner3
    // inner4

    // outer1
    // inner0
    // inner1
    // inner2
    // inner3
    // inner4
    
    // outer2
    // inner0
    // inner1
    // inner2
    // inner3
    // inner4
    

// ------------------------------------------------------------------------
        // DO WHILE
    
    // var myArray = [];
    // var i = 8;

    // do {
    //     myArray.push(i)
    //     i++
    // }
    // while ( i <= 3)

    // console.log(i)

        // RESULT
    // 9

// ------------------------------------------------------------------------
        // PROFILE LOOKUP CHALLENGE
    
    // var contacts = [
    //     {
    //         "firstName" : "Akira",
    //         "lastName" : "Laine",
    //         "number" : "09403651607",
    //         "likes" : ["Pizza", "Coading", "Brownie Points"]
    //     },{
    //         "firstName" : "Harry",
    //         "lastName" : "Potter",
    //         "number" : "09421749344",
    //         "likes" : ["Magic", "Hogwarts", "Hagrid"]
    //     },{
    //         "firstName" : "Sherlok",
    //         "lastName" : "Holmes",
    //         "number" : "07972098458",
    //         "likes" : ["Intriguing Cases", "voilen", "Pranks"]
    //     },{
    //         "firstName" : "Kristen",
    //         "lastName" : "Vos",
    //         "number" : "07588495573",
    //         "likes" : ["JawaScript", "Gaming", "Foxes"]
    //     }
    // ];

    // function lookUpProfile(name, prop){
    //     for(var i= 0; i < contacts.length; i++) {
    //         if(contacts[i].firstName === name) {
    //             return contacts[i][prop] || "no such property"
    //         }
    //     }
    //     return "no contact available"
    // }

    // var data = lookUpProfile("Akira", "likes");

    // console.log(data);

        // RESULT
    // ["Pizza", "Coading", "Brownie Points"]

// ------------------------------------------------------------------------
        // GENRATE RANDOM FRACTION
    
    // function randomFraction() {
    //     return Math.random();
    // }

    // console.log(randomFraction());

        // RESULT
    // IT WILL GENRATE A DECIMAL NO. BETWEEN 0 AND 1, IT COULD BE 0 BUT IT WILL DEFENITLY NOT BE 1.

// ------------------------------------------------------------------------
        // GENRATE RANDOM WHOLE NUMBER
    
    // function randomWholeNumber() {
    //     return Math.floor(Math.random() * 20);
    // }

    // console.log(randomWholeNumber());

        // RESULT
    // IT WILL GENRATE A DECIMAL NO. BETWEEN 0 AND 20, IT COULD BE 0 BUT IT WILL DEFENITLY NOT BE 20.

// ------------------------------------------------------------------------
        // GENRATE RANDOM WHOLE NUMBER WITHIN A RANGE
    
    // function randomRange(myMax, myMin) {
        
    //     return Math.floor (Math.random() * (myMax - myMin + 1 )) + myMin; 

    // }

    // var myRandom = randomRange(15, 25) ;

    // console.log(myRandom);

        // RESULT
    // THIS WILL GENRATE THE NO. BETWEEN THE GIVEN RANGE i.e 15 TO 25

// ------------------------------------------------------------------------
        // USE THE parseInt FUNCTION

    // function convertTointeger(str) {
    //     return parseInt(str)
    // }

    // console.log(convertTointeger("56"))

        // RESULT
    // 56

// ------------------------------------------------------------------------
        // USE THE parseInt FUNCTION WITH RADIX
    
    // function convertTointeger(str) {
    //     return parseInt(str, 2)
    // }

    // console.log(convertTointeger("100111"))

        // RESULT
    // 39       
        // THE NUMBER 2 IS BASE. BASE 2 REPRESENTS THE NUMBER IS BIARY IF THE BASE IS 10 THEN IT WILL RESULT IN NORMAL NUMBER

// ------------------------------------------------------------------------
        // USE THE CONDITIONAL (TERNARY) OPERATOR
    // CONDITION? STATEMENT-IF-TRUE : STATEMENT-IF-FALSE
    
    // function equals(a,b) {
    //     return a===b ? true : false    //IF TRUE FALSE THEN JUST RETURN A===B WILL WORK
    // }

    // console.log(equals(1,5))

        // RESULT
    // false

// ------------------------------------------------------------------------
        // USE MULTIPLE CONDITIONAL (TERNARY) OPERATOR
    
    // function equals(a) {
    //     return a > 0 ? "Positive" : a < 0 ? "Negative" : "Zero"
    // }

    // console.log(equals(10))

        // RESULT
    // Positive

// ------------------------------------------------------------------------
        // VAR VS LET SCOPES
        //HERE THE LET SCOPE IS ONLY LIMITED TO THE CURLY BRACES, IT WILL NULLIFY OUTSIDE THE BRACES
        // ALSO "CONST" KEYWORD IS TO DECLARE A VERIABLE ONCE WE CANNOT CHANGE IT AFTEREWORDS,
    
    // function checkScope() {
    //     "use strict";
    
    //     let i = "function scope";            

    //     if(true) {

    //         let i = "block scope";               
    
    //         console.log("Block scope i is: " , i); 
    //     }

    //     console.log("Function scope i is: ", i)
    // }
    // console.log(checkScope())

        //RESULT
    // "Block scope i is: ", "block scope"
    // "Function scope i is: ", "function scope"

// ------------------------------------------------------------------------
        // MUTATE AN ARRAY DECLARED WITH CONST          //MUTATE = EDIT
    
    // const s = [5, 7, 2];

    // function editConst () {
    //     "use strict"

    //     // s = [2, 5, 7]        WE CANNOT RE DECLARE CONST, BUT WE CAN DO THE BELOW
    //     s[0] = 2;
    //     s[1] = 5;
    //     s[2] = 7;

    // }

    // editConst()
    // console.log(s)

        // RESULT
    // [2, 5, 7]

// ------------------------------------------------------------------------
        // PREVENT OBJECT MUTATION
    
    // function freezeObj() {
    //     "use strict";
    //      const MATH_CONSTANTS = {
    //          PI : 3.14
    //      };
          
    //      Object.freeze(MATH_CONSTANTS);         // THIS FREEZES THE VALUE OF "PI"  AND CANNOT BE CHANGED ANYHOW

    //      try{                                   /**this is also callded error handling */             
    //          MATH_CONSTANTS.PI = 99;
    //      } catch( ex ) {
    //          console.log(ex)
    //      }

    //      return MATH_CONSTANTS.PI;
    // }

    // const PI = freezeObj();

    // console.log (freezeObj())

        // RESULT
    // 3.14

// ------------------------------------------------------------------------
        // USE ARROW FUNCTION TO CONCISE ANONYMOUS FUNCTIONS
            // REGULAR JAVASCRIPT FUNCTION

    // var magic = function() {
    //     return new Date()
    //     }
        
    //     console.log(Date())


        // ES6 ARROW FUNCTION

    // const magic = () => new Date()
    // console.log(Date())

        // THE RESULT WILL BE SAME
        // RESULT
    // "Wed Jun 09 2021 17:56:44 GMT+0530 (India Standard Time)"

// ------------------------------------------------------------------------
        // WRITE ARROW FUNCTIONS WITH PARAMETERS
    
    // var magic = (arr1, arr2) => arr1.concat(arr2)

    // console.log(magic([1, 2, 3], [4, 5, 6]))

        // RESULT
    // [1, 2, 3, 4, 5, 6]

// ------------------------------------------------------------------------
        // HIGHER ORDER ARROW FUNCTIONS
    
//    const realNumberArray = [2 ,2.21, 4, 5.6, 9, 1.2, -11, -22.1, 5];
   
//    const squareList= (arr) => {
//        const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
//        return squaredIntegers;
//    }

//    const squaredIntegers = squareList(realNumberArray)
//    console.log(squaredIntegers);

        // RESULT
    // [4, 16, 81, 25]

    /**        const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
     * 
     * arr.filter                   = FILTERING THE ARRAY
     * num => Number.isInteger(num) = NUMBER WHICH ARE INTEGER ONLY
     * && num > 0                   = AND NUMBER GREATER THAN ZERO
     * .map                         = WE CAN MAP EACH ITEM IN AN ARRAY INTO SOMTHING ELSE
     * .map(x => x * x)             = WE ARE MAPPING THE NUMBERS INTO SQURED ONES
     */

// ------------------------------------------------------------------------
        // WRITE HIGHER ORDER ARROW FUNCTION

    // const increment = (function() {
    //     return function increment (number, value = 1) {
    //         return number + value;
    //     }
    // }) ();

    // console.log(increment (5,3));
    // console.log(increment (5));

        // RESULT
    // 8
    // 6

    /** WE ARE INCREMENTING THE NUMBER BY THE GIVING VALUE IF THE VALUE IS NOT GIVEN THEN THE NUMBER WILL BE INCREMENT BY 1 */

// ------------------------------------------------------------------------
        // REST OPERATOR
    /** 
     *  IN REST OPERATOR ALL THE VALUE OF SUM GONE TO ...a
     * IF WE ADD ANOTHER PARAMETER TO SUM THEN THE VALUE WILL SPLIT INTO BOTH PARAMETER
     */

    // function sum (...a) {
    //     console.log(a);
    // }
    // sum(5, 6, 7)

        // RESULT
    // [5, 6, 7]

        // 2 PARAMETERS
    
    // function sum (b,...a) {
    //     console.log(b,a);
    // }
    // sum(5, 6, 7) 

        // RESULT
    // 5, [6, 7]

        // SUM
    
    // const sum = (function() {
    //     return function sum (...args) {
    //         return args.reduce((a,b) => a + b , 0);
    //     }
    // })();
    // console.log(sum(1, 2, 3, 4))

        // RESULT
    // 10
    
// ------------------------------------------------------------------------
        // SPREAD OPERATOR
    /**
     * SPREAD OPERATOR SPREADS THE ARRAY
     * IF WE HAVE TWO ARRAYS ARR AND ARR1 WE CAN UNIFY THEM USING [...arr, values of arr1 ] 
     * WE CAN DO THE SAME TO THE OBJECTS AS WELL
     */

    // var arr = [1, 2, 3];
    // var arr1 = [...arr,4, 5, 6];
     
    // console.log(arr1)

        // RESULT
    // [1, 2, 3, 4, 5, 6]

                    // USING OBJS
    // var obj = {
    //     a:1,
    //     b:2
    // }
    // var obj1 = {
    //     ...obj,
    //     c:3
    // }

    // console.log(obj1)

        // RESULT
    // {
    //     a: 1,
    //     b: 2,
    //     c: 3
    //     }

// ------------------------------------------------------------------------
        // USE DESTRUCTION ASSIGNMENT TO ASSIGN VARIABLE FROM OBJECTS
    
    // const AVG_TEMPERATURE ={
    // today : 77.5,
    // tomorrow : 79
    // };

    // function getTempOfTmrw(avgTempreture) {
    //     "use strict";

    //     const {tomorrow : tempOfTomorrow} = avgTempreture;

    //     return tempOfTomorrow;
    // }
    // console.log(getTempOfTmrw(AVG_TEMPERATURE));

        // RESULT
    // 79

    /**
     * {tomorrow : tempOfTomorrow} = avgTempreture    IT MEANS THAT ASSIGN THE VALUE OF TOMORROW TO TEMPOFTOMORROW FROM AVGTEMPERATURE
    */

// ------------------------------------------------------------------------
        // DESTRUCTING ASSIGNMENT WITH NESTED OBJECTS
    
    // const LOCAL_FORECAST ={
    //     today : {min : 77.5, max : 80},
    //     tomorrow :{min : 79 , max : 82}
    //     };
    
    //     function getMax(foreCast) {
    //         "use strict";
    
    //         const {tomorrow : {max : maxOfTomorrow}} = foreCast;
    
    //         return maxOfTomorrow;
    //     }
    //     console.log(getMax(LOCAL_FORECAST));

        // RESULT
    // 82

// ------------------------------------------------------------------------
        // USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLE FROM ARRAYS

    /**  TWO EXAMPLES DIRECTLY */
        /** 1 */
    // const [z, x, ,y] = [1, 2, 3, 4, 5, 6];
    // console.log(z,x,y);

    //     /** 2 */
    // let a = 8, b = 6;
    // (() => {
    //     "use strict";
    //     [a, b] = [b, a]
    // })();
    
    // console.log(a);
    // console.log(b);

        // RESULT
    // /** 1 */         1, 2, 4

    // /** 2 */         6
    //                  8

// ------------------------------------------------------------------------
        // USE DESTRUCTING ASSIGNMENT WITH THE REST OPERATOR

    // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // function removeFirstTwo(list) {
    //     const [ , , ...arr] = list;
    //     return arr;
    // }

    // const arr = removeFirstTwo(source);

    // console.log(arr)
    // colsole.log(source)

        // RESULT
    // [3, 4, 5, 6, 7, 8, 9, 10]
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ------------------------------------------------------------------------
        // USE DESTRUCTRING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTIONS PARAMETER
    
    // const stats = {
    //     max: 56.78,
    //     standard_deviation: 4.34,
    //     medain: 34.54,
    //     mode: 23.87,
    //     min: -0.75,
    //     average: 35.85
    // };

    // const half = (function() {
    //     return function half({max, min}) {
    //         return (max + min) / 2.0
    //     };
    // })();

    // console.log(half(stats));

                    /** THIS IS MOSTLY USED IN API WHERE WE CAN DESTRUCT THE ONLY REQUIRED DATA */
        // RESULT
    // 28.015

// ------------------------------------------------------------------------
        // CREATE STRINGS USING TEMPLATE LITERIALS
                /** FOR MAKING COMPLEX STRINGS EASIER BY USING BACKSTIKS `` */
    // const result = {
    //     success: ["max-length", "no-amd", "prefer-arrow-functions"],
    //     failure: ["no-variable", "var-on-top", "linebreak"],
    //     skipped: ["id-blacklist", "no-dup-keys"]
    // };
    // function makeList(arr) {
    //     const resultDisplayArray = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    //     }
    //     return resultDisplayArray;
    // }

    // const resultDisplayArray = makeList(result.failure);

    // console.log(resultDisplayArray);

        // RESULT
    //  "<li class=\"text-warning\">no-variable</li>"
    //  "<li class=\"text-warning\">var-on-top</li>"
    //  "<li class=\"text-warning\">linebreak</li>"
    
// ------------------------------------------------------------------------
        // WRITE CONCISE OBJECT LITERALS DECLERATIONS USING SIMPLE FIELDS
            /** NORMALLY */
    // const createPerson = (name, age, gender) => {
    //     return {
    //         name : name,
    //         age : age,
    //         gender : gender
    //     }
    // }
    // console.log(createPerson("Vikram Rathod", 45, "male"))

        /** ES6 */
    // const createPerson = (name, age, gender) => ({name, age, gender});
    // console.log(createPerson("Vikram Rathod", 45, "male"));

        //RESULT
    // {name: "Vikram Rathod", age: 45, gender: "male"}

// ------------------------------------------------------------------------
        // USE CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION
    
            /** NORMALLY */
    // var SpaceShuttle = function(targetPlanet) {
    //     this.targetPlanet = targetPlanet
    // }
    // var zeus = new SpaceShuttle('jupiter');

    // console.log(zeus.targetPlanet)
    
            /** ES6 */
    // class SpaceShuttle {
    //     constructor (targetPlanet){
    //         this.targetPlanet = targetPlanet;
    //     }
    // } 
    // var zeus = new SpaceShuttle('jupiter')

    // console.log(zeus.targetPlanet)
        
        // RESULT
    // jupiter

            /** 2nd EXAMPLE */
    // function makeClass() {
    //     class Vegetable {
    //         constructor(name) {
    //             this.name = name;
    //         }
    //     }
    //     return Vegetable;
    // }

    // const Vegetable = makeClass();
    // const carrot = new Vegetable ('carrot');
    // console.log(carrot.name)

        // RESULT
    // "carrot"

// ------------------------------------------------------------------------
        // USE GETTERS AND SETTERS TO CONTROL ACCESS TO AN OBJECT
    
    // function makeClass() {
    //     class Thermostat {
    //         constructor (temp) {
    //             this._temp = 5/9 * (temp -32)
    //         }
    //                 // GETTERS
    //         get temperature() {
    //             return this._temp
    //         }
    //                 // SETTERS
    //         set temperature(updatedTemp){
    //             this._temp = updatedTemp
    //         }
    //     }
    //     return Thermostat
    // }

    // const Thermostat = makeClass();
    // const thermos = new Thermostat(76);
    // let temp = thermos.temperature;
    // thermos.temperature = 26
    // temp = thermos.temperature
    
    // console.log(thermos.temperature)

        // RESULT
    // 26

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------