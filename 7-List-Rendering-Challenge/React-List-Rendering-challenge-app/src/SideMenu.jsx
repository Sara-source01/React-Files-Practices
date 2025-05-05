import TagButton from "./TagButton.jsx";
export default function SideMenu() {
  // c : children
  const categories = [
    {
      uniqueId: 1,
      title: "Latest Articles",
      c: (
        <div>
          <span>&#9733;⭐⭐⭐⭐</span>
          <span class="estrela">&#9733;</span>
        </div>
      ),
    },
    {
      uniqueId: 2,
      title: "Most read",
      c: (
        <div>
          <img
            style={{ width: "120px", height: "120px" }}
            src="https://images.pexels.com/photos/31870244/pexels-photo-31870244.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      ),
    },
    {
      uniqueId: 3,
      title: "Special",
      c: (
        <div>
          <h1>Click Me</h1>
          <span>👍&#128077;👍</span>
        </div>
      ),
    },
    {
      uniqueId: 4,
      title: "Articles of the week",
    },
  ];
  const categoriesList = categories.map((cat) => {
    return (
      <TagButton key={cat.uniqueId} title={cat.title}>
        {cat.c}
      </TagButton>
    );
  });
  return (
    <div
      style={{
        padding: "10px",
        border: "solid 5px teal",
        margin: "10px",
      }}
    >
      {categoriesList}
      {/* Nested Component
      <TagButton title="Latest Articles">
        <div>
          <span>&#9733;⭐⭐⭐⭐</span>
          <span class="estrela">&#9733;</span>
        </div>
      </TagButton>

      <TagButton title="Most read">
        <div>
          <img
            style={{ width: "120px", height: "120px" }}
            src="https://images.pexels.com/photos/31870244/pexels-photo-31870244.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </TagButton>

      <TagButton title="Special">
        <h1>Click Me</h1>
        <span>👍&#128077;👍</span>
      </TagButton>

      <TagButton title="Articles of the week"></TagButton>
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton /> */}
    </div>
  );
}
