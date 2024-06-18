import './style.css';

export const Estate = ({ dum }) => {
  return (
    <div className="estate">
      <h2>{dum.title}</h2>
      <div className="textPhoto">
        <p className="text">{dum.text}</p>
        <img
          src={dum.photo}
          className="photo"
          alt={`Fotografie nemovitosti: ${dum.title}`}
        />
      </div>
      <p>
        <b>Cena:</b> {dum.price} Kč
      </p>
      <p>
        <b>Město:</b> {dum.city}
      </p>
      <p>
        <b>Kontakt:</b> {dum.contact.name}
      </p>
      <p>
        <b>Email: </b>
        {dum.contact.email}
      </p>
      <p>
        <b>Telefon:</b>
        {dum.contact.phone}
      </p>
    </div>
  );
};
