// frontend/src/pages/Profile.js
import { auth } from '../firebase';

export default function Profile() {
  const user = auth.currentUser;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.displayName || 'N/A'}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>UID:</strong> {user.uid}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
