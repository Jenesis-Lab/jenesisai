import ReactGA from 'react-ga4'

// Check if analytics should be enabled
const isAnalyticsEnabled = () => {
  const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true'
  const isProduction = process.env.NODE_ENV === 'production'
  
  // In production, always enable. In development, only if ENABLE_ANALYTICS=true
  return isProduction || enableAnalytics
}

// Initialize Google Analytics
export const initGA = () => {
  if (!isAnalyticsEnabled()) {
    console.log('Analytics disabled (set NEXT_PUBLIC_ENABLE_ANALYTICS=true to enable in development)')
    return
  }

  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  
  if (!measurementId) {
    console.warn('GA Measurement ID is not set')
    return
  }

  if (typeof window !== 'undefined') {
    ReactGA.initialize(measurementId, {
      gaOptions: {
        anonymizeIp: true,
      },
    })
    
    if (process.env.NODE_ENV === 'development') {
      console.log('✅ GA initialized in development mode')
    }
  }
}

// Track page views
export const trackPageView = (path: string) => {
  if (!isAnalyticsEnabled()) return
  
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Track pageview:', path)
  }
  ReactGA.send({ hitType: 'pageview', page: path })
}

// Event tracking functions
export const trackSignIn = (location = 'navbar') => {
  if (!isAnalyticsEnabled()) return
  
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Track event: sign_in_click', { location })
  }
  ReactGA.event('sign_in_click', {
    location,
  })
}

export const trackGetStarted = (location: 'hero' | 'navbar' | 'cta' | 'pricing' | 'solutions') => {
  if (!isAnalyticsEnabled()) return
  
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Track event: get_started_click', { location })
  }
  ReactGA.event('get_started_click', {
    location,
  })
}

export const trackBoardsClick = () => {
  if (!isAnalyticsEnabled()) return
  
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Track event: boards_click')
  }
  ReactGA.event('boards_click', {})
}

export const trackPricingView = () => {
  if (!isAnalyticsEnabled()) return
  
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Track event: pricing_view')
  }
  ReactGA.event('pricing_view', {})
}

export const trackPricingPlanClick = (planName: string) => {
  if (!isAnalyticsEnabled()) return
  
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Track event: pricing_plan_click', { plan_name: planName })
  }
  ReactGA.event('pricing_plan_click', {
    plan_name: planName,
  })
}

export const trackContactClick = (source: 'cta' | 'pricing' | 'email' | 'enterprise' | 'solutions') => {
  if (!isAnalyticsEnabled()) return
  
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Track event: contact_click', { source })
  }
  ReactGA.event('contact_click', {
    source,
  })
}

export const trackWatchDemo = () => {
  if (!isAnalyticsEnabled()) return
  
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Track event: watch_demo_click')
  }
  ReactGA.event('watch_demo_click', {})
}
