function Comments({ savedMessages }) {
  if (savedMessages()) {
    console.log(savedMessages());
    return (
      <>
        {savedMessages().map((message) => (
          <>
            <p className="messageText">{message.message}</p>
            <p className="messageTimestamp">{message.time}</p>
          </>
        ))}
      </>
    );
  }
  return <></>;
}

export default Comments;
