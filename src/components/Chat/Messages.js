export const Messages = props => {
  const { messages } = props;

  return (
    <section className="chat--messages">
      {messages.map(m => (
        <div className="chat--message" key={m.id}>
          <div className="chat--message__avatar">{m.letter}</div>
          <p className="chat--message__text">{m.text}</p>
        </div>
      ))}
      {messages.length === 0 && <div className="chat--empty-label">This chat is empty, be first here!</div>}
    </section>
  );
};
