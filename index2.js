  //password list
const passwords = ["Stcxkl@ctdvn1", "bonbi@123", "password123"]

function login() {
    const password = document.getElementById('password').value;
    const input = document.getElementById("password");
    
    // Perform login authentication here
    if (password === "Stcxkl@ctdvn1") {
      console.log('Login successful!');
      document.getElementById("result").textContent = "Logged In successful!"
      window.load("index.html")
    }
    else if(password === "bonbi@123"){
      console.log('Login successful!');
      document.getElementById("result").textContent = "Logged In successful!"
      window.open("index.html")
    } 
    else {
      console.log('Login failed. Please check your credentials. You won\'t be able to login in the next 10 seconds!');
      document.getElementById("result").textContent = "Login failed! Wrong Password!"
      input.setAttribute("readonly", "readonly")
      input.value = ""
    }

    const myTimeout = setTimeout(unlock, 10000);

    function unlock(){
      input.removeAttribute("readonly")
    }

  }
