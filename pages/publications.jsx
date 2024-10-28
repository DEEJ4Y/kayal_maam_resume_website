import HeadTags from '../components/Index/Head/HeadTags';
import Navbar from '../components/Index/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import publications from '../lib/index/publications';
import Link from 'next/link';

const PublicationsPage = () => {
  return (
    <div>
      <HeadTags />
      <Navbar />
      <main className="container-padding bg-light text-dark mt-4">
        <div className="container-fluid">
          <h2 style={{ fontWeight: 800 }}>Publications</h2>
          <p>
            Only a few of my publications are listed here. For more details
            visit my{' '}
            <Link
              passHref
              href={
                'https://scholar.google.com/citations?hl=en&user=n0zJvI4AAAAJ&view_op=list_works&sortby=pubdate'
              }
            >
              Google Scholar
            </Link>{' '}
            page and my{' '}
            <Link
              passHref
              href={
                'https://www.scopus.com/authid/detail.uri?authorId=57188638422'
              }
            >
              Scopus
            </Link>{' '}
            page.
          </p>
          <ul>
            {publications.map((publication, idx) => {
              return (
                <li key={idx} style={{ marginBottom: '1.5rem' }}>
                  <h5 style={{ marginBottom: '0' }}>
                    {publication.title}{' '}
                    {publication.underReview ? '(Under Review)' : ''}
                  </h5>
                  <p style={{ marginBottom: '0' }}>{publication.journal}</p>
                  <p style={{ marginBottom: '0' }}>
                    <em>{publication.coPublisherAndUniversity}</em>
                  </p>
                  {publication.refId ? (
                    <p className="small" style={{ marginBottom: '0' }}>
                      {publication.refId}
                    </p>
                  ) : (
                    ''
                  )}
                  {publication.href ? (
                    <Link passHref={true} href={publication.href}>
                      See more
                    </Link>
                  ) : (
                    ''
                  )}
                  {/* {JSON.stringify(publication)} */}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicationsPage;
