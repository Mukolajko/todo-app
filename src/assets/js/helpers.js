//helper library with global methods and stuff
export default {
  setSessionStorage (key, value) {
    if (window.sessionStorage) {
      window.sessionStorage.setItem(key, value);
    }
    else {
      //doenst support session storage
      console.log("doenst support session storage");
    }

  },
  getSessionStorage (key) {
    if (window.sessionStorage) {
      return window.sessionStorage.getItem(key) || null;
    }
    else {
      //doenst support session storage
      console.log("doenst support session storage");
      return null;
    }
  },
  clearSessionStorage (key) {
    if (window.sessionStorage) {
      window.sessionStorage.clear();
    }
  },
  parseJson (string) {
    let result = null;
    try {
      result = JSON.parse(string);
    }
    catch(e) {
      console.log(e);
    }
    return result;
  },
  //simple error messages showing
  showErrorMessage(error) {
    let errorElement = document.getElementsByClassName("error_message")[0];
    errorElement.innerHTML = '<p>'+error+'</p>';
    //remove message after 2 sec
    setTimeout(function(){
      errorElement.innerHTML = '';
    }, 2000)
  }
}
