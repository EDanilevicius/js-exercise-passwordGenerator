let serviceName = "";
let basicPassword = "";
let output = "";

const render = () =>{
    //Generate div
    const outputDiv = document.getElementById("output_div");
    outputDiv.textContent = output;
}

function sequence(serviceName, basicPassword){
    output ="";
    //Get last letter of serviceName
    const lengthOfName = serviceName.length;
    const lastChar = serviceName.slice(lengthOfName-1);

    //Character according to vowels number
    let vowels = (serviceName.match(/[aeiyou]/gi)|| []).length;
    let vowelChar = serviceName[vowels>0? vowels-1 : 0];

    //Full basic password
    //const full = basicPassword;
    
    //Nonvowel
    const nonVowel = serviceName.length - vowels;

    //Get first letter
    const firstChar = serviceName[0];//charAt(0)
    
    output = output.concat(lastChar,vowelChar,basicPassword,nonVowel,firstChar);
    //return `${lastChar}${vowelChar}${basicPassword}${nonVowel}${firstChar}`
};

document.querySelector(`#input_form button[name="submit"]`).addEventListener("click", event =>{

    serviceName = document.querySelector(`#input_form input[name="service_name"]`).value;
    basicPassword = document.querySelector(`#input_form input[name="psw"]`).value;

    sequence(serviceName, basicPassword);
    //Generate div
    const outputDiv = document.getElementById("output_div");
    outputDiv.textContent = output;
    
});
document.querySelector(`#input_form button[name="clear"]`).addEventListener("click", event =>{
    var inputArray = document.querySelectorAll('input');
    inputArray.forEach(function (input){
        input.value = "";
    });
    output ="";
    render();
});