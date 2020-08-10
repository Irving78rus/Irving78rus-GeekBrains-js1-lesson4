programFinished = false;
while(!programFinished){ 

var quest1  = 'Как зовут преподавателя?' + "\n" + 'A :Василий Петрович' + "\n" + 'B :Петр Васильевич' + "\n" + 'C :Петр Васильев' + "\n" + 'D :Василий Петров' + "\n";
var quest2  = 'Что это за предмет?' + "\n" + 'A:Java Script базовый' + "\n" + 'B:Java Script продвинутый' + "\n" + 'C:Java базовый' + "\n" + 'D:Java продвинутый' + "\n"
var quest3  = 'Cколько  будет "true + true"' + "\n" + 'A:один' + "\n" + 'B:два' + "\n" + 'C:ноль' + "\n" + 'D:Нельзя складывать' + "\n" 

    var help = {E : "звонок Другу",
    F : "50/50",
    J : "Помощь зала",};

    function f_help(obg){
        var helpSTR = "";
        for(i in obg) { 
            helpSTR += i + ": "+ obg[i]+"\r\n"; 
        } 
        return helpSTR
        }

qwestTwo = true;
qwestOne = true;
qwestThree = true;
    while (qwestOne){
        var number = prompt(quest1 + f_help(help));
        
        if (number == "D"){
            alert ("Верно, следующий вопрос");
            break;}
        else if (number == "E")  {
            delete help.E
            alert ("Я думаю, это вариант D");
        }  
        else if ( number == "F"){
            delete help.F
            quest1 = 'A :Василий Петрович' + "\n" + 'D :Василий Петров' + "\n"
        }
        else if (number == "J"){
            delete help.J
            alert (" 87 %  D");
        }
        else if (number == "A" || number == "B" || number =="C"){
            alert ("Ответ неверный конец игры");
            qwestOne = false;
            qwestTwo = false;
            qwestThree = false;
            console.log(qwestOne);
        }

        else{
            alert("такого варианта отета нет")
        }
    }
   


    while (qwestTwo){
        var number = prompt(quest2 + f_help(help));
    
        if (number == "A"){
            alert ("Верно, следующий вопрос");
            break;}
        else if (number == "E")  {
            delete help.E
            alert ("Я думаю, это вариант A");
        }  
        else if ( number == "F"){
            delete help.F
            quest2 = 'A:Java Script базовый' + "\n" + 'C:Java базовый' + "\n"
        }
        else if (number == "J"){
            delete help.J
            alert (" 84 %  A");
        }
        else if (number == "D" || number == "B" || number =="C"){
            alert ("Ответ неверный конец игры");
            qwestTwo = false;
            qwestThree = false;
        }
        else{
            alert("такого варианта отета нет")
        }
    }
    while (qwestThree){
        var number = prompt(quest3 + f_help(help));
    
        if (number == "B"){
            alert ("Вы ответили на все вопросы, вы победитель");
            break;}
        else if (number == "E")  {
            delete help.E
            alert ("Я думаю, это вариант B");
        }  
        else if ( number == "F"){
            delete help.F
            quest3 = 'B:два' + "\n" + 'D:Нельзя складывать' + "\n"
        }
        else if (number == "J"){
            delete help.J
            alert (" 91 %  B");
        }
        else if (number == "D" || number == "A" || number =="C"){
            alert ("Ответ неверный конец игры");
            qwestThree = false;
        }
        else{
            alert("такого варианта отета нет")
        }
    }

 
    if (prompt("Хотите сыграть еще раз (Y/N)?") != "Y") {
        
        programFinished = true;
    }
}


