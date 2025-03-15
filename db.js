const games = [
    {
      id: "1",
      title: "The Legend of Zelda: Breath of the Wild",
      platform: ["Switch"],
    },
    { id: "2", title: "God of War", platform: ["PS5", "PC"] },
    { id: "3", title: "Halo Infinite", platform: ["Xbox", "PC"] },
  ];
  
  const reviews = [
    {
      id: "1",
      rating: 9,
      content: "Amazing game with great open-world exploration!",
      author_id: "1",
      game_id: "1",
    },
    {
      id: "2",
      rating: 8,
      content: "Solid gameplay mechanics but a bit short.",
      author_id: "2",
      game_id: "2",
    },
    {
      id: "3",
      rating: 7,
      content: "Good but had some bugs at launch.",
      author_id: "3",
      game_id: "3",
    },
  ];
  
  const authors = [
    { id: "1", name: "Alice", verified: true },
    { id: "2", name: "Bob", verified: false },
    { id: "3", name: "Charlie", verified: true },
  ];
  
  export default { games, reviews, authors };
  