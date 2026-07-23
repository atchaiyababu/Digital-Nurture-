import office1 from "./office.jpg";
import office2 from "./office2.jpg";
import office3 from "./office3.jpg";

function App() {
  const officeList = [
    {
      id: 1,
      name: "Skyline Business Center",
      rent: 75000,
      address: "Kilpauk , Chennai",
      image: office1,
    },
    {
      id: 2,
      name: "Tech Park Towers",
      rent: 95000,
      address: "OMR, Chennai",
      image: office2,
    },
    {
      id: 3,
      name: "Elite Workspace",
      rent: 55000,
      address: "Anna Nagar, Chennai",
      image: office3,
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Office Space Rental App</h1>

      {officeList.map((office) => (
        <div
          key={office.id}
          style={{
            border: "2px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "25px",
            width: "600px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={office.image}
            alt={office.name}
            width="550"
            height="300"
            style={{
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          <h2>{office.name}</h2>

          <p>
            <strong>Rent: </strong>
            <span
              style={{
                color: office.rent < 60000 ? "red" : "green",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              ₹{office.rent}
            </span>
          </p>

          <p>
            <strong>Address: </strong>
            {office.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;