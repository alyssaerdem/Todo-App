import styles from "./Item.module.css";
import { FiTrash, FiEdit } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import { useState } from "react";

const Item = () => {
  const [title, setTitle] = useState("Print Homework");
  const [date, setDate] = useState("2023-03-24");
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    console.log("here");
    setEdit(!edit);
    console.log(edit);
  };

  return (
    <div>
      <div style={{ display: edit ? "none" : "initial" }}>
        <div className={styles.container}>
          <div className={styles.check}>
            <MdOutlineDone />
          </div>
          <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <div className={styles.bottom_container}>
              <div className={styles.date}>{date}</div>
              <div className={styles.actions}>
                <span>
                  <FiTrash className={styles.delete} />
                </span>
                <span>
                  <FiEdit
                    className={styles.edit}
                    onClick={() => handleEdit()}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: edit ? "initial" : "none" }}>
        <div className={styles.container}>
          <div className={styles.check}>
            <FiEdit />
          </div>
          <div className={styles.card}>
            <div className={styles.title}>
              <input
                type="text"
                name="Title"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.bottom_container}>
              <div className={styles.date}>
                <input
                  type="date"
                  name="Date"
                  defaultValue={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className={styles.actions}>
                <span>
                  <button onClick={handleEdit}> Cancel </button>
                </span>
                <span>
                  <button onClick={handleEdit}> Save </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
