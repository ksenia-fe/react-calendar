const baseUrl = `https://5ffacff987478d0017d9a8a0.mockapi.io/tasks/grom/tasks`;

// const fetchEvents = () => {
//   return fetch(baseUrl)
//     .then((response) => response.json())
//     .then((arrOfEvents) =>
//       arrOfEvents
//         .map(({ _id, dateFrom, dateTo, ...task }) => ({
//           id: _id,
//           dateFrom: new Date(dateFrom),
//           dateTo: new Date(dateTo),
//           ...task,
//         }))
//         .then((data) => console.log(data))
//     );
// };

const fetchEvents = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("There are some problems to display events");
    })
    .then((events) =>
      events.map(({ id, dateFrom, dateTo, title, description }) => ({
        id,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        title,
        description,
      }))
    );
};

console.log(fetchEvents());
// export default fetchEvents;
