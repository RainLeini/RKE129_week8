const fNameSpan =document.querySelector('#fName');
const lNameSpan =document.querySelector('#lName');
const ageSpan =document.querySelector('#age');
const skillsList =document.querySelector('#skills');
const emailSpan = document.querySelector('#email');

const person = {
    fName:'Tauno',
    lName:'Mauno',
    age:29,
    skills:['html','css','java','python']
}

window.onload = () => {

    fetch('profile.json')
    .then(Response => Response.json())
    .then(data => {
        console.log(data);

        fNameSpan.textContent= data.fName;
        lNameSpan.textContent= data.lName;
        age.textContent= data.age;
        emailSpan.textContent= data.email;

    })
    
    
    
    
    //fNameSpan.textContent= person.fName;
    //lNameSpan.textContent= person.lName;
    //age.textContent= person.age;
    
    //for(let i=0;i<person.skills.length; i++){
        //let li= document.createElement('li');
        //li.innerHTML = person.skills[i];
        //skillsList.appendChild(li);
    //}

}