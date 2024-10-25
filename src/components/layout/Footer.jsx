import OrderTime from "../OrderTime";

function Footer() {
  const currentHour = new Date().getHours(); // current hour in 0-23 range
  const openingHour = 12; // opening hour (12PM)
  const closingHour = 22; // closing hour (10PM)
  const isOpen = currentHour >= openingHour && currentHour <= closingHour;

  return (
    <>
      <div className="footer">
        {isOpen ? (
          <OrderTime openingHour={openingHour} closingHour={closingHour} />
        ) : (
          <p>
            We &apos;re happay to welcome you between {openingHour}:00 to{" "}
            {closingHour}:00.
          </p>
        )}
      </div>
    </>
  );
}

export default Footer;
