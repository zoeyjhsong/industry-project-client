import React, { useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useNavigate } from "react-router-dom";
import "./BookingPage.scss";
import SelectedTable from "../../assets/images/icons/selected_table_image.png";
import UnselectedTable from "../../assets/images/icons/table_image.jpg";
import accountIcon from "../../assets/icon/account.png";
import notificationIcon from "../../assets/icon/notification.png";
import inboxIcon from "../../assets/icon/mail-inbox-app.png";
import searchIcon from "../../assets/icon/search-interface-symbol.png";

const BookingPage = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
  });

  const navigate = useNavigate();

  const handleDragStart = (tableId) => {
    setSelectedTable(tableId);
  };

  const handleDragEnd = () => {
    // Handle drag end if needed
  };

  const handleDrop = (tableId) => {
    setSelectedTable(tableId);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    console.log("Selected table:", selectedTable);
    // Navigate to payment page
    navigate("/payment");
  };

  const tables = [
    { id: "table1", top: "50px", left: "50px" },
    { id: "table2", top: "50px", left: "200px" },
    { id: "table3", top: "170px", left: "50px" },
    { id: "table4", top: "170px", left: "200px" },
    { id: "table5", top: "290px", left: "50px" },
  ];

  const ItemTypes = {
    TABLE: "table",
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="booking-table">
        <h2 className="booking-table__header">Book a Table</h2>
        <div
          style={{
            width: "100%",
            height: "420px",
            border: "2px dashed #ccc",
            margin: "20px auto",
            position: "relative",
          }}
        >
          {tables.map((table, index) => (
            <Table
              key={index}
              id={table.id}
              top={table.top}
              left={table.left}
              selectedTable={selectedTable}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDrop={handleDrop}
              ItemTypes={ItemTypes}
            />
          ))}
        </div>
        <selection className="booking-table__selected-container">
          <form className="booking-table__form" onSubmit={handleFormSubmit}>
            <span className="booking-table__subheader">
              Selected Table: {selectedTable}
            </span>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
            <br />
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleFormChange}
            />
            <br />
            <label>Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleFormChange}
            />
            <br />
            <label>Guests:</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleFormChange}
            />
            <br />
            <button className="booking-table__button" type="submit">
              Submit
            </button>
          </form>
        </selection>
      </div>
      <div className="footer">
        <div className="footer__container">
          <div>
            <img className="footer__icon" src={searchIcon} />
          </div>

          <div>
            <img className="footer__icon" src={inboxIcon} />
          </div>
          <div>
            <img className="footer__icon" src={notificationIcon} />
          </div>
          <div>
            <img className="footer__icon" src={accountIcon} />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

const Table = ({
  id,
  top,
  left,
  selectedTable,
  onDragStart,
  onDragEnd,
  onDrop,
  ItemTypes,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TABLE,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        onDragEnd();
      }
    },
  }));

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.TABLE,
    drop: () => onDrop(id),
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        width: "100px",
        height: "100px",
        border: selectedTable === id ? "2px solid red" : "none",
        position: "absolute",
        top: top,
        left: left,
        cursor: "pointer",
        opacity: isDragging ? 0.5 : 1,
      }}
      onClick={() => onDragStart(id)}
    >
      {/* Placeholder Image for the table */}
      <img
        src={selectedTable === id ? SelectedTable : UnselectedTable}
        alt={`Table ${id}`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default BookingPage;
