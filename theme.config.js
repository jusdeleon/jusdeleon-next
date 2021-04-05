const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8rem' }}>
      <span>
        <time>{YEAR}</time> © Justin De Leon.
        Built with <a href="https://nextra.vercel.app" target="_blank" rel="noopener">Nextra</a>
      </span>
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
