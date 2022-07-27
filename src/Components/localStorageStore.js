const dataGetter = (key) => {
  let arr = JSON.parse(localStorage.getItem(key));
  return arr
};

const dataSetter = (key, obj) => {
  if (key === "users"|| key==="messages") {
    let arr = JSON.parse(localStorage.getItem(key));
    arr.push(obj);
    localStorage.setItem(key, JSON.stringify(arr));
    return arr;
  } else {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(obj));
    return true;
  }
};

const dataUpdate = (key,obj)=>{
  localStorage.setItem(key,JSON.stringify(obj))

}

const dataDelete = (key,obj)=>{
  localStorage.setItem(key,JSON.stringify(obj))
}





const checkUsername = (value) => {
  let character, digit, charSpecial, checkAlphanumeric;
  character = /[A-Z]|[a-z]/.test(value);
  digit = /\d/.test(value);
  charSpecial = /\W/.test(value);
  
  checkAlphanumeric = character && digit && !charSpecial;
  if (checkAlphanumeric) {
    let arr = JSON.parse(localStorage.getItem("users"));

    let checkUser = arr.filter((e) => e.username === value);
    if (checkUser.length === 0) {
      return 1
    } else {
      return 0;
    }


  } else {return -1}
};

const checkPassword = (value) => {
  if (value.length < 7) {
    return false;
  } else {
    let Uppercase, lowercase, digit, charSpecial, checkPass;
    Uppercase = /[A-Z]/.test(value);
    lowercase = /[a-z]/.test(value);
    digit = /\d/.test(value);
    charSpecial = /\W/.test(value);

    checkPass = Uppercase && lowercase && digit && charSpecial;

    if (checkPass) {
      return true;
    } else {
      return false;
    }
  }
};

const loginValidation = (user, pass) => {
  let arr = JSON.parse(localStorage.getItem("users"));
  let checkUser = arr.filter((e) => e.username === user);
  if (checkUser.length === 0) {
    return false;
  } else {
    if (checkUser[0].password === pass) {
      return true;
    }
    return false;
  }
};

export {
  dataSetter,
  checkPassword,
  checkUsername,
  loginValidation,
  dataGetter,
  dataUpdate,
  dataDelete
};
