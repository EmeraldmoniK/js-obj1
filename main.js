let profileBase = {
    
}

for(let i = 1; i <= 10; i++){


    profileBase[i] = {
        user : {
            name: prompt('Введите имя пользователя'),
            age: +prompt('Введите возраст пользователя'),
            


            info(){
                return `Имя ${this.name} возраст ${this.age}`
            }
        } 
    
        
    }

    if( i == 1  && !isNaN(profileBase[i].user.age)){
        console.log('Пользователь один');
        console.log(profileBase[i].user.info());
    }else if( i == 2 && !isNaN(profileBase[i].user.age)){
        console.log('Пользователь два');
        console.log(profileBase[i].user.info());
    }else if( i == 3 && !isNaN(profileBase[i].user.age)){
        console.log('Пользователь три');
        console.log(profileBase[i].user.info());
    }else if( i == 4 && !isNaN(profileBase[i].user.age)){
        console.log('Пользователь четыре');
        console.log(profileBase[i].user.info());
    }else if( i == 5 && !isNaN(profileBase[i].user.age)){
        console.log('Пользователь пять');
        console.log(profileBase[i].user.info());
    }else if( i == 6 && !isNaN(profileBase[i].user.age)){
        console.log('Пользователь шесть');
        console.log(profileBase[i].user.info());
    }else if( i == 7 && !isNaN(profileBase[i].user.age)){
        console.log('Пользователь семь');
        console.log(profileBase[i].user.info());
    }else if( i == 8 && !isNaN(profileBase[i].user.age)){
        console.log('Пользователь восемь');
        console.log(profileBase[i].user.info());
    }else if( i == 9 && !isNaN(profileBase[i].user.age)){
        console.log('Пользователь девять');
        console.log(profileBase[i].user.info());
    }else if( i == 10 && !isNaN(profileBase[i].user.age)){
        console.log('Пользователь десять');
        console.log(profileBase[i].user.info());
    }
}

console.log(profileBase);

