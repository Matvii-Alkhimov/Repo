import { nanoid } from 'nanoid'

// import { alert, defaultModules } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import * as PNotifyMobile from '@pnotify/mobile';
// import '@pnotify/mobile/dist/PNotifyMobile.css';
import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';



const id = nanoid();

console.log(id)

// pnotify
 
// defaultModules.set(PNotifyMobile, {});
 
// alert({
//   text: 'Notice me, senpai!'
// });


   
//   const myNotice = notice({
//     text: "I'm a notice."
//   });
   
//   const myInfo = info({
//     text: "I'm an info message."
//   });
   

   
//   const myError = error({
//     text: "I'm an error message."
//   });


const button = document.querySelector(".button");

button.addEventListener("click", fn);

function fn() {
    const mySuccess = success({
    text: "Success!",
    type: 'info'
  });
}