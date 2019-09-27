// Budget Controller

// var BudgetController = (function() {
//     var x = 23;
//     var add = function(a) {
//         return x + a;
//     }
//     return {
//         publicTest: function(b) {
//             return add(b);
//         } 
//     }
// }) ();

// UI Controlller

// var UIController = (function() {
//     // Some Code
// }) ();

// Global App Controller

// var Controller = (function(BudgetCntrl, UICntrl) {
//     var y = BudgetCntrl.publicTest(40);
//     return {
//         AnotherPublicTest: function() {
//             console.log(y);
//         }
//     }
// }) (BudgetController, UIController);


var BudgetController = (function() {
    
    // Some Code

}) ();

var UIController = (function() {

    // Some Code

}) ();

var Controller = (function(BudgetCntrl, UICntrl) {

// Some Code

}) (BudgetController, UIController);

window.onload = function(){
    $('.combo.dropdown')
        .dropdown({
        action: 'combo'
    });
};








