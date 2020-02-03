const students = [];
const expelledStudents = [];

// PRINT TO DOM FUNCTION
const printToDom = (containerId, textToPrint) => {
    const selectedDiv = document.getElementById(containerId);
    selectedDiv.innerHTML = textToPrint;
};

// CREATE CARDS FUNCTION -- Figure out why they are not disaplying on the same line - bootstrap docs
const buildCards = (arr) => {
    let domStr = '';
    for (let i = 0; i < arr.length; i++) {
        domStr += '<div class="col-md-4 col-lg-6>"';
        domStr += '   <div class="card">';
        domStr += '     <div class="card-body border border-light bg-light mb-3 text-center">';
        domStr += `         <h5 class="card-title">${arr[i].name}</h5>`;
        domStr += `         <p class="card-text">${arr[i].house}</p>`;
        domStr += `         <a href="#" class="btn btn-danger" id="${students[i].id}">Expel</a>`;
        domStr += '     </div>';
        domStr += '   </div>';
        domStr += '</div>';
    }
    printToDom('studentCards', domStr);
};
   
// BUILD FORM FUNCTION
const buildForm = () => {
    let domStr = '<div class="col-md-10 col-lg-10 mx-auto border border-light bg-light my-3 py-3 invisible" id="sortingForm">';
        domStr += ' <form>';
        domStr += '     <div class="form-group row">';
        domStr += '     <label for="name" class="col-auto col-form-label">Student:</label>';
        domStr += '         <div class="col-auto">';
        domStr += '             <input type="name" class="form-control" id="studentName" placeholder="Molly Weasley">';
        domStr += '         </div>';
        domStr += '     </div>';
        domStr += '     <div class="col-auto">';
        domStr += '         <button class="btn btn-dark col-sm-1 mb-2" id="sortBtn">Sort!</button>';
        domStr += '     </div>';
        domStr += ' </form>';
        domStr += '</div>';
        printToDom('form', domStr);
};


// REVEAL FORM FUNCTION
const revealForm = () => {
    const sortForm = document.getElementById('sortingForm');
    sortForm.classList.remove('invisible');
};

// CREATE ID FUNC
const createId = () => {
    let uniqueId = 'id-' + Math.random().toString(36).substr(2, 16);
    return uniqueId;
}

// SUBMIT THE FORM / SORT STUDENT
const sortStudent = (e) => {
    e.preventDefault();
   let num = Math.floor(Math.random() * 4);
   const student = {
       id: createId(),
       name: document.getElementById('studentName').value, // get name from form
       house: '',
       expelled: false
   };
   switch (num) {
        case 0:
           student.house = 'Gryffindor';
            break;
        case 1:
            student.house = 'Ravenclaw';
            break;
        case 2:
            student.house = 'Slytherin';
            break;
        case 3:
            student.house = 'Hufflepuff';
            break;
   };
   students.push(student);
   buildCards(students);
};

// EXPEL STUDENTS
const expelStudent = (e) => {
 // how do you getElementById if you don't know what the id will be?
}

// EVENT LISTENERS FUNCTION
const events = () => {
    document.getElementById('sortBtn').addEventListener('click', sortStudent);
    document.getElementById('replaceThis').addEventListener('click', expelStudent);
}

// INIT FUNCTION - RUNS ON OPEN
const init = () => {
    buildCards(students);
    buildForm();
    events();
}

init();