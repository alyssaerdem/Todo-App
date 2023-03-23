import styles from "../styles/Item.module.css";
import { FiTrash, FiEdit } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import { useState } from "react";

const Item = ({ t, d, i, handleDelete }) => {
  const [title, setTitle] = useState(t);
  const [date, setDate] = useState(d);
  const [edit, setEdit] = useState(false);
  const index = i;

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleCheck = (index) => {
    handleDelete(index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(event.target[0].value);
    setDate(event.target[1].value);
    handleEdit();
  };

  return (
    <div>
      {/* Display item */}
      <div style={{ display: edit ? "none" : "initial" }}>
        <div className={styles.container}>
          <div className={styles.check}>
            <MdOutlineDone
              className={styles.checkIcon}
              onClick={() => {
                handleCheck(index);
              }}
            />
          </div>
          <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <div className={styles.bottom_container}>
              <div className={styles.date}>{date}</div>
              <div className={styles.actions}>
                <span>
                  <FiTrash
                    className={styles.delete}
                    onClick={() => handleDelete(index)}
                  />
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

      {/* Display item in editing mode */}
      <div style={{ display: edit ? "initial" : "none" }}>
        <div className={styles.container}>
          <div className={styles.check}>
            <FiEdit />
          </div>
          <div className={styles.card}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={styles.title}>
                <input
                  type="text"
                  name="Title"
                  defaultValue={title}
                  required={true}
                  maxlength="30"
                />
              </div>
              <div className={styles.bottom_container}>
                <div className={styles.date}>
                  <input
                    type="date"
                    name="Date"
                    defaultValue={date}
                    required={true}
                  />
                </div>
                <div className={styles.actions}>
                  <span>
                    <input
                      type="submit"
                      value="Save"
                      className={styles.saveBtn}
                    />
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
