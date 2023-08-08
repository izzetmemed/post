document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn").addEventListener("click", function() {
        console.log("aasas")
      let name = document.querySelector(".input").value;
      let url = "data.json"; 
  
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 201) {
            let res = xhr.responseText;
            let response = JSON.parse(res);
            document.querySelector(".text").textContent = response.Username;
          } else {
            console.error("Error:", xhr.status, xhr.statusText);
          }
        }
      };
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  
      let body = JSON.stringify({ Username: name });
      xhr.send(body);
      console.log(xhr);
    });
  });
  