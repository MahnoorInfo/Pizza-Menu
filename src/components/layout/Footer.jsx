import OrderTime from "../OrderTime";

function Footer() {
  const currentHour = new Date().getHours();
  const openingHour = 12;
  const closingHour = 22;
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
