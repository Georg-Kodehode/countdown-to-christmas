//   FIKS: Add to session storage? (pga GitHub), kan ikke bruke innerhtml for input

let allMessages = [];

// Add a new message with a timestamp
function addMessage(savedMessages) {
  let message = document.getElementById("message");

  // Return a modified timestamp for a message
  const modifiedTimestamp = () => {
    let timeOfMessage = Date();
    timeOfMessage = timeOfMessage.split(" ").slice(0, 5).join(" ");
    return timeOfMessage;
  };
  // If the input field had a value, the message is added to the board
  if (message.value) {
    const savedMessages = localStorage.getItem("savedMessages");

    const newMessage = {
      time: `${modifiedTimestamp()}`,
      message: `${message.value}`,
    };
    // If there are no saved messages in local storage, add the new message to local storage
    // Else add the message to the other messages fuond in local storage
    if (!savedMessages) {
      allMessages.push(newMessage);
      localStorage.setItem("savedMessages", JSON.stringify(allMessages));
    } else {
      const getCurrentMessages = localStorage.getItem("savedMessages");
      const currentMessages = JSON.parse(getCurrentMessages);

      currentMessages.push(newMessage);
      localStorage.setItem("savedMessages", JSON.stringify(currentMessages));
      allMessages = currentMessages;
    }
    message.value = "";
    // Call updateMessages every time a new message is added
    updateMessages();
  }
}

// FIKS: ikke bruk DOM manipulation
// Updates the messages when a new one is added
function updateMessages() {
  document.querySelector("#comments").innerHTML = "";
  // FIKS: sanitize the messages
  for (const message of allMessages) {
    document.querySelector("#comments").innerHTML += `
                <p class="messageText">${message.message}</p>
                <p class="messageTimestamp">${message.time}</p>
    `;
  }
}
// Return the InputWrapper component with the input and the button
function InputWrapper(savedMessages) {
  return (
    <div className="input-wrapper">
      <input
        type={"text"}
        placeholder={"Skriv en julehilsen..."}
        id={"message"}
      ></input>
      <button onClick={() => addMessage(savedMessages)}>
        Skriv julehilsen
      </button>
    </div>
  );
}

export default InputWrapper;
