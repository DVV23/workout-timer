function Main({ children, time }) {
  return (
    <main>
      <h1>Workout timer</h1>
      <time>For your workout on {time}</time>
      {children}
    </main>
  );
}

export default Main;
