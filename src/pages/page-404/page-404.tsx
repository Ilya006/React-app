import { Link } from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router';

export function Page404() {
  return (
    <>
      <h1>Ops...</h1>
      <Link to={pathKeys.home()}>Go Home page</Link>
    </>
  )
}