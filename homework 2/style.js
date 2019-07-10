let counter = 1;
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
var password; 
do {
password = prompt("Введите пароль"); 
  if (password == 'qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'){
    alert("Неверный пароль, у вас осталось n попыток");
  counter ++
    // break
  }
    
}
while(counter<= 3)
// while ( password !== 'qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'  ) 
alert('У вас закончились попытки, аккаунт заблокирован!')
Collapse




