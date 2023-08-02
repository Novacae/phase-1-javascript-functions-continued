// code your solution here
//function saturdayFun(toDo = "roller-skate!") {
    //console.log('This Saturday, I want to ${toDo}');

    function saturdayFun( toDo = "roller-skate",b) {
        return(`This Saturday, I want to ${toDo}!`);
    }

   function mondayWork(Act = "go to the office",c) {
   return(`This Monday, I will ${Act}.`)
   }

   function wrapAdjective(flair= "*")  {
    return function (adjective = "a hard worker") {
         (`You are ${flair}${adjective}${flair}!`)
    }
     
}
    
  const encouragingPromptFunction =function wrapAdjective(dedd = "||"){
  console.log(encouragingPromptFunction(`${dedd}a dedicated programmer${dedd}`));}