var message = "I am doing good today. yo."

function ransomCase(message) {
  var newMessage = ""
  for (var i = 0; i < message.length; i++) {
    if(i % 2 !== 0) {
      newMessage += message[i].toUpperCase()
    } else {
      newMessage += message[i].toLowerCase()
    }
  }
  return newMessage
}
