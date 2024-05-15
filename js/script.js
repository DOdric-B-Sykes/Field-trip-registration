const notRegistered = document.querySelector(".not-registered");

const getRegistrationData = async function (){
    let request = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json")
    let data = await request.json();
    displayContactList(data);
};

const displayContactList = function (data){
    for (const student of data){ /* for...of loop is used to access arrays - student is the variable (object in this case) - data is the array (provided by the json file via the data variable) */
        if (student.registered === "no"){ /* "student" is the object/variable and "registered" represents a property of the student object - in this instance, the "." between student and registered allows me to access the registered property of the student object */
        const li = document.createElement("li"); /* if "student.registered === "no" equals true, this line of code will create a list item and add it to an unordered list on the HTML */
        li.innerText = student.name; /* the value of the new list item is the value of the "name" property of the "student" object */
        notRegistered.append(li); /* append is used to add the new list item to the previously created unordered list */
        };
    };
};

getRegistrationData();