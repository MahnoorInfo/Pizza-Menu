function OrderTime({ openingHour, closingHour }) {
  return (
    <div className="order">
      <p>
        We &apos;re open from {openingHour}:00 to {closingHour}:00.Come visit us
        and order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default OrderTime;
