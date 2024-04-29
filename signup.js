const userDetails = [];
const submitButton = document.querySelector('.submin-button');
submitButton.addEventListener('click', () => {
    
    
    
    const userName = document.querySelector('.username').value;
    const userPassword = document.querySelector('.password');
    const userReEnterPassword = document.querySelector('.re-enter-password');
    
    if((userReEnterPassword.value === userPassword.value)  && (userPassword.value.length > 0)){
        console.log('hello')
        if(userDetails.length>0){
            userDetails.forEach(eachDetail => {
                if(eachDetail.userName === userName){
                    console.log('taken');
                }
                else{
                    const obj = {};
                    obj.userName = userName;
                    obj.userPassword = userPassword.value;
                    userDetails.push(obj);
                    console.log(userDetails);
                }
            });
        }
        else{
            const obj = {};
                obj.userName = userName;
                obj.userPassword = userPassword.value;
                userDetails.push(obj);
                console.log(userDetails);
                localStorage.setItem('userDetails' , JSON.stringify(userDetails));
        }

        const misMatch = document.getElementById('mis-match');
        misMatch.style.display = "none";
        misMatch.style.color = "red";
    }
    else{
        const misMatch = document.getElementById('mis-match');
        misMatch.style.display = "block";
        misMatch.style.color = "red";
        userReEnterPassword.focus();
        console.log('re enter pass and pass must be same');
    }
});