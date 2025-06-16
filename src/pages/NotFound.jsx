import { Link } from 'react-router';

function NotFound() {
  return (
    <div>
      <p>Page not found.</p>
      <Link to={'/'}>Return to Home Page</Link>
    </div>
  );
}

export default NotFound;
