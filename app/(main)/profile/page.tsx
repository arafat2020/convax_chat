"use client"
import React from 'react'
import ErrorBoundary from '../_components/ErrorBoundary'
import Profile from '../_components/Profile'

function ProfilePage() {
  return (
    <ErrorBoundary>
        <Profile/>
    </ErrorBoundary>
  )
}

export default ProfilePage