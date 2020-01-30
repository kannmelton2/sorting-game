const students = [
    {
        name: 'Sarah Potter',
        house: 'Ravenclaw',
        expelled: false,
        uniqueID: ''
    }
];

// PRINT TO DOM FUNCTION
const printToDom = (containerId, textToPrint) => {
    const selectedDiv = document.getElementById(containerId);
    selectedDiv.innerHTML = textToPrint;
};

// CREATE CARDS FUNCTION
const buildCards = (containerId, arr) => {
    let domStr = '';
    for (let i = 0; i < arr.length; i++) {
        domStr += '<div class="col-md-6 col-lg-4>"';
        domStr += '   <div class="card">';
        domStr += '     <div class="card-body border border-light bg-light mb-3 text-center">';
        domStr += `         <h5 class="card-title">${arr[i].name}</h5>`;
        domStr += `         <p class="card-text">${arr[i].house}</p>`;
        domStr += '         <a href="#" class="btn btn-danger">Expel</a>';
        domStr += '     </div>';
        domStr += '   </div>';
        domStr += '</div>';
    }
    printToDom(containerId, domStr);
};

// EVENT LISTENERS FUNCTION
const events = () => {
    document.getElementById('replacethis').addEventListener('click', functionName);
}

// INIT FUNCTION - RUNS ON OPEN
const init = () => {
    buildCards('studentCards', students);
}

init();