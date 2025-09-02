export const NasaCard = ({ id, name, image }) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>
      <div>
        {image ? (
        <img src={image} alt={name} style={{ maxHeight: "180px", objectFit: "cover" }} />
        ) : (
        <p>No hay imagen disponible</p>
        )}
      </div>
    </section>
  );
};