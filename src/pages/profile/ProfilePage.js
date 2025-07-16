import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import './ProfilePage.css';
import BasicProfile from './BasicProfile';
import TeamDetails from '../../Team/TeamDetails';
import IncorporationDetails from './IncorporationDetails';
import StartupDocument from './StartupDocument';
import StageTaskAccordion from './StageTaskAccordion';
import API_BASE_URL from "../../componant/config";
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('basic-profile');
  const [profile, setProfile] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [countdown, setCountdown] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const startup_id = localStorage.getItem('userId');

  // Fetch profile and subscription
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/startup/getStartupInfo/${startup_id}`,
          { withCredentials: true }
        );
        setProfile(response.data?.startup || null);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setProfile(null);
      }
    };

    const getSubscriptionStatus = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/subscriptions/${startup_id}`,
          { withCredentials: true }
        );
        const date = res.data?.subscriptions?.[0]?.endDate;
        setEndDate(new Date(date));
      } catch (err) {
        console.error('Error getting subscription:', err);
      }
    };

    fetchData();
    getSubscriptionStatus();
  }, [startup_id]);

  // Countdown timer logic
  useEffect(() => {
    if (!endDate) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = endDate - now;

      if (timeLeft <= 0) {
        setCountdown('Your plan has expired.');
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  // File upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert('Please select a file first.');

    const formData = new FormData();
    formData.append('logo', selectedFile);

    try {
      await axios.put(`${API_BASE_URL}/api/profile/${startup_id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic-profile':
        return (
          <BasicProfile
            profile={profile}
            previewUrl={previewUrl}
            handleFileChange={handleFileChange}
            handleUpload={handleUpload}
            handleReset={handleReset}
            countdown={countdown}
          />
        );

      case 'team-details':
        return <TeamDetails   startupId={startup_id} />;

      case 'incorporation':
        return <IncorporationDetails activeTab={activeTab} profile={profile} />;

      case 'documents':
        return <StartupDocument activeTab={activeTab} startupId={startup_id} />;

      case 'stage-task':
        return <StageTaskAccordion activeTab={activeTab} />;

      default:
        return null;
    }
  };

  return (
    <div className="profile-font">
      {/* Header */}
      <div className="profile-header rounded-top">
        <div className="position-absolute top-100 start-0 translate-middle-y ms-4">
          <div className="avatar-container">
            <div className="avatar-content">Tt</div>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white shadow-sm p-4">
        <div className="d-flex mt-5 align-items-center justify-content-between flex-wrap gap-2 mb-3">
          <div>
            <h3 className="fw-semibold mb-1" style={{ fontSize: '1.75rem' }}>
              {profile?.startupName || "Test User"}
            </h3>
            <p className="text-muted mb-0" style={{ fontSize: '0.875rem' }}>
              {profile?.designation || 'Fresher/Student'}
            </p>
          </div>

          <button
            className="edit-button btn btn-outline-black text-dark rounded-pill d-flex align-items-center px-3 py-2"
            style={{ fontSize: '0.9rem' }}
          >
            <FaEdit className="me-2" style={{ fontSize: '1rem' }} />
            <span className="d-none d-sm-inline">Edit Profile</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="tabs-wrapper overflow-auto">
          <ul className="nav nav-tabs flex-nowrap gap-3 py-1 border-0">
            {[
              { key: 'basic-profile', label: 'Basic Profile', icon: 'ti-user-circle' },
              { key: 'team-details', label: 'Team Details', icon: 'ti-heart' },
              { key: 'incorporation', label: 'Incorporation', icon: 'ti-user-circle' },
              { key: 'documents', label: 'Documents', icon: 'ti-photo-plus' },
              { key: 'stage-task', label: 'Stage Task', icon: 'ti-list' },
            ].map((tab) => (
              <li className="nav-item" key={tab.key}>
                <button
                  className={`nav-link ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <i className={`ti ${tab.icon} tab-icon`} />
                  <span className="d-none d-sm-inline">{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProfilePage;
