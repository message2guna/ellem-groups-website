interface CompanyCardProps {
  title: string
  description: string
  image?: string
  link: string
}

export default function CompanyCard({
  title,
  description,
  image,
  link,
}: CompanyCardProps) {
  return (
    <div className="company-card">
      <div className="company-card-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div style={{ width: '100%', height: '100%' }} />
        )}
      </div>
      <div className="company-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="company-card-link">
          Learn More →
        </a>
      </div>
    </div>
  )
}
