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


window.onload = function () {
    $('.combo.dropdown')
        .dropdown({
            action: 'combo'
        });
};


// Budget Controller
var BudgetController = (function () {
    // function Constructer
    var Expenses = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Incomes = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        allItem: function (type, des, val) {
            var newItem, ID;

            if (data.allItems[type] >= 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if (type === 'Expences') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'Income') {
                newItem = new Incomes(ID, des, val);
            }
            data.newItem[type].push(newItem);
            return newItem;
        },
        testting: function () {
            console.log(data);
        }
    }
})();


// UI Controller
var UIController = (function () {
    // Some Code
    var DOMstrings = {
        inputType: '.type',
        inputDescription: '.description',
        inputValue: '.value_type',
        inputBut: '#add_record'
    };
    return {
        getInputs: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();


// Global Controller
var Controller = (function (BudgetCntrl, UICntrl) {
    // Some Code

    var setupEventListner = function () {
        var DOM = UICntrl.getDOMstrings();
        document.querySelector(DOM.inputBut).addEventListener('click', cntrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                cntrlAddItem();
            }
        });
    }

    var cntrlAddItem = function () {
        // addItem custome code
        // console.log(keyname)
        var input, newItem;

        input = UICntrl.getInputs();
        console.log(input);

        newItem = BudgetCntrl.addItem(input.type, input.description, input.value);
    }

    return {
        init: function () {
            console.log('Application is started');
            setupEventListner();
        }
    }
})(BudgetController, UIController);

Controller.init();






























































































































//      // const container = document.createElement('div');
//      // container.setAttribute('class', 'container');

//       // app.appendChild(container);
// const app = document.getElementById('ghibli');
// var request = new XMLHttpRequest();

// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// request.onload = function () {
//     var data = JSON.parse(this.response);
//     if (request.status >= 200 && request.status < 400) {
//         data.forEach(movie => {
//             // var title = movie.title;
//             // document.querySelector('#ghibli').textContent = movie.title;
//             // const h3 = document.createElement('h3');
//             // document.querySelector('h3').textContent = movie.title;
//             // console.log(movie.title);
//             // const card = document.createElement('div');
//             // card.setAttribute('class', 'card');

//             const h1 = document.createElement('h1');
//             h1.textContent = movie.title;

//             const p = document.createElement('p');
//             movie.description = movie.description.substring(0, 300);
//             p.textContent = `${movie.description}...`;

//             // container.appendChild(card);
//             app.appendChild(h1);
//             app.appendChild(p);
//         });
//     } else {
//         console.log('error');
//     }
// }
// request.send();