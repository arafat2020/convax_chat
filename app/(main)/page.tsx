"use client"
import React from 'react'
import ErrorBoundary from './_components/ErrorBoundary'
import Home from './_components/Home'

function HomePage() {
  return (
    <ErrorBoundary>
      <Home/>
    </ErrorBoundary>
  )
}

export default HomePage