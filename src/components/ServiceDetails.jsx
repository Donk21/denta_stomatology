import Icon from './Icon.jsx'

export default function ServiceDetails({ service, onBook }) {
  return (
    <div className="service-details">
      <div className="service-details__meta">
        <span>
          <Icon name="file" size={18} /> {service.price}
        </span>
        <span>
          <Icon name="clock" size={18} /> {service.duration}
        </span>
      </div>
      <p>{service.description}</p>
      <h3>Что входит</h3>
      <ul className="checklist">
        {service.includes.map((i) => (
          <li key={i}>
            <Icon name="check" size={18} /> {i}
          </li>
        ))}
      </ul>
      <h3>Стоимость</h3>
      <table className="price-table">
        <tbody>
          {service.prices.map(([name, price]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn--primary btn--block" onClick={() => onBook(service.id)}>
        Записаться на «{service.title}»
      </button>
    </div>
  )
}
