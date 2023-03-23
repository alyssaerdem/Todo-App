import Item from "./Item";
import styles from "./List.module.css";
import { useState } from "react";

const List = () => {
  let items = [
    {
      title: "Read Textbook",
      date: "2023-04-01",
    },
    {
      title: "Email Admin",
      date: "2023-05-02",
    },
    {
      title: "Car Oil Change",
      date: "2023-04-02",
    },
  ];

  const [itemList, setItemList] = useState(items);

  const handleAdd = (event) => {
    event.preventDefault();

    setItemList([
      ...itemList,
      {
        title: event.target[0].value,
        date: event.target[1].value,
      },
    ]);
    clearForm(event);
  };

  const clearForm = (event) => {
    event.target.reset();
  };

  const handleDelete = (index) => {
    const temp = [...itemList]; // make copy of current item list
    temp.splice(index, 1); // remove item at index
    setItemList(temp); // update itemList
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Todo List</h1>
      </div>
      <div>
        <form onSubmit={handleAdd}>
          <label>
            <input
              type="text"
              name="Title"
              placeholder="New item"
              required={true}
              maxLength="30"
            />
          </label>
          <input type="date" name="date" required={true} />
          <input type="submit" value="Add" className={styles.addBtn} />
        </form>
      </div>
      <div className={styles.itemsContainer}>
        {itemList.map((item, index) => (
          <li key={index}>
            <Item
              key={index}
              t={item.title}
              d={item.date}
              i={index}
              handleDelete={handleDelete}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default List;
