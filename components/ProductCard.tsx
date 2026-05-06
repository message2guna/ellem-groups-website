interface ProductCardProps {
  name: string
  category: string
  description?: string
  image?: string
}

export default function ProductCard({
  name,
  category,
  description,
  image,
}: ProductCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-white)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.boxShadow =
          '0 12px 24px rgba(0, 0, 0, 0.15)'
        e.currentTarget.style.borderColor =
          'var(--secondary)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow =
          '0 2px 8px rgba(0, 0, 0, 0.05)'
        e.currentTarget.style.borderColor = 'var(--border)'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: 'linear-gradient(135deg, var(--bg-light) 0%, #f0f0f0 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, var(--bg-light) 0%, #f0f0f0 100%)',
        }}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div
            style={{
              textAlign: 'center',
              color: 'var(--text-light)',
              fontSize: '3rem',
            }}
          >
            📦
          </div>
        )}
      </div>

      <div style={{ padding: '1.5rem' }}>
        <div
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--accent)',
            color: 'var(--primary)',
            padding: '0.3rem 0.8rem',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '600',
            marginBottom: '0.8rem',
          }}
        >
          {category}
        </div>

        <h4
          style={{
            color: 'var(--primary)',
            marginBottom: '0.5rem',
            marginTop: 0,
          }}
        >
          {name}
        </h4>

        {description && (
          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
