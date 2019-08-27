export class Validations{
    validateString(s: String): boolean{
        if(s.length >= 6){
            return false;
        }else {
            return true;
        }
    }

    validatePhoneNumber(s: String): boolean{
        for (var i = 0; i<s.length; i++){
            if(s.charAt(i) < '0' && s.charAt(i) > '9'){
                return false;
            }
        }
        return true;
    }

    validateEmail(mail: String) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
    {
        return true;
    }
    // alert("You have entered an invalid email address!")
    return false;
    }
}