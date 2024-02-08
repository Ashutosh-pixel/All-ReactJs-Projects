export function Content({ posts }) {
  return (
    <div>
      {posts.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>
              By <span>{item.author}</span> on <span>{item.category}</span>
            </p>
            <p>posted on {item.date}</p>
            <p>{item.content}</p>
            <div>
              {item.tags.map((tag, index) => (
                <span key={index}>#{tag} </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
