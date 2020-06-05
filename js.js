const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");
const submitButton = document.getElementById("submitButton");
var fieldset = document.getElementsByTagName("fieldset");

// ------------ DONT SUBMIT -----------
const form = document.getElementById("form-container");

previousButton.addEventListener("click", goBackTo);

function goBackTo() {
    document.getElementById("step1").classList.add("visible");
    document.getElementById("step2").classList.remove("visible");
}

// ------------ VALIDATE FIRST FORM -------------
nextButton.addEventListener("click", validateFirstForm);

function validateFirstForm() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const userNameError = name.value.length < 3;
    const emailError = !reg.test(email.value);

    if (userNameError) {

        document.getElementById("name").classList.add("invalid");
    } else {
        console.log(name.value);
        document.getElementById("name").classList.remove("invalid");
    }

    if (emailError) {

        document.getElementById("email").classList.add("invalid");
    } else {
        console.log(email.value);
        document.getElementById("email").classList.remove("invalid");
    }

    if (emailError || userNameError) {

    } else {
        document.getElementById("second-li").classList.add("active");
        document.getElementById("first-li").classList.remove("active");
        document.getElementById("step1").classList.remove("visible");
        document.getElementById("step2").classList.add("visible");
    }
}

// ------------ VALIDATE SECOND FORM -------------
submitButton.addEventListener("click", validateSecondForm);

function validateSecondForm() {
    var phoneNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    var phoneNumberEmpty = phone.value == "";
    const addressError = address.value.length < 5;

    if (!phone.value.match(phoneNumber) || phoneNumberEmpty) {
        document.getElementById("phone").classList.add("invalid");
    } else {
        document.getElementById("phone").classList.remove("invalid");
        console.log(phone.value);
    }
    if (addressError) {
        document.getElementById("address").classList.add("invalid");
    } else {
        console.log(address.value);
        document.getElementById("address").classList.remove("invalid");
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

const demoForm = document.getElementById('demoForm');

const step1 = demoForm.querySelector('.js-step[data-step="1"]');
const step2 = demoForm.querySelector('.js-step[data-step="2"]');

const prevButton = demoForm.querySelector('[id="prevButton"]');
const nextButton = demoForm.querySelector('[id="nextButton"]');



// // Track the current step
// let currentStep = 1;

// // Set the rule for fields in the first step
// const fv1 = FormValidation
//     .formValidation(
//         step1, {
//             fields: {
//                 ...
//             },
//             plugins: {
//                 ...
//             },
//         }
//     )
//     .on('core.form.valid', function () {
//         // Jump to the next step when all fields in the current step are valid
//         currentStep++;

//         nextButton.innerHTML = 'Purchase';

//         // Hide the first step
//         FormValidation.utils.classSet(step1, {
//             'js-step-active': false,
//         });

//         // Show the next step
//         FormValidation.utils.classSet(step2, {
//             'js-step-active': true,
//         });
//     });

// // Set the rule for fields in the second step
// const fv2 = FormValidation
//     .formValidation(
//         step2, {
//             fields: {
//                 ...
//             },
//             plugins: {
//                 ...
//             },
//         }
//     )
//     .on('core.form.valid', function () {
//         // You can submit the form
//         // demoForm.submit()
//         // or send the form data to server via an Ajax request

//         // To make the demo simple, I just update the label of button
//         nextButton.innerHTML = 'Done';
//     });