import React from 'react';
import { Card } from '../components/ui/Card';

const ProfilePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <Card className="p-6">
        <p className="text-gray-600">Profile management feature coming soon...</p>
      </Card>
    </div>
  );
};

export default ProfilePage;