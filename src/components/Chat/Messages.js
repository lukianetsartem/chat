export const Messages = props => {
  const { messages } = props;

  return (
    <section className="chat--messages">
      {messages.map(m => (
        <div className="chat--message" key={m.id}>{m.text}</div>
      ))}
    </section>
  );
};
