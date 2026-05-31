import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
      <span style={{ color: '#6366f1' }}>CP</span>
      <span style={{ color: 'inherit' }}> Algorithms on Steroids</span>
    </span>
  ),
  project: {
    link: 'https://github.com/cp-algorithms-steroids/handbook'
  },
  docsRepositoryBase: 'https://github.com/cp-algorithms-steroids/handbook/tree/main',
  footer: {
    text: (
      <span>
        CP Algorithms on Steroids — The Definitive Competitive Programming Handbook.
        Built for ICPC, IOI, and Codeforces competitors.
      </span>
    )
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    title: 'On This Page',
    float: true
  },
  search: {
    placeholder: 'Search topics, algorithms, structures...'
  },
  editLink: {
    text: 'Improve this page'
  },
  feedback: {
    content: 'Report an issue',
    labels: 'content'
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return { titleTemplate: '%s – CP Algorithms on Steroids' }
    }
    return { titleTemplate: 'CP Algorithms on Steroids' }
  },
  head() {
    const { frontMatter } = useConfig()
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={frontMatter.description || 'The Definitive Competitive Programming Mathematics & Data Structures Handbook'} />
        <meta name="theme-color" content="#6366f1" />
        <link rel="icon" href="/favicon.ico" />
      </>
    )
  },
  primaryHue: 245,
  primarySaturation: 90,
  banner: {
    key: 'cp-steroids-v1',
    text: (
      <span>
        🏆 The most comprehensive CP reference ever built — Mathematics + Data Structures, ICPC to IOI level.
      </span>
    )
  }
}

export default config
