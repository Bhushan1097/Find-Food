import React from "react";
import styles from "./EditButton.module.css";

const EditButton = ({ isEdit, onSave, onEdit }) => {
  return (
    <div className={styles.buttonContainer}>
      {isEdit ? (
        <button onClick={onSave} className={styles.saveBtn}>
          Save
        </button>
      ) : (
        <button onClick={onEdit} className={styles.editBtn}>
          Edit
        </button>
      )}
    </div>
  );
};

export default EditButton;