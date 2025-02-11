// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightLinksValidator from 'starlight-links-validator'
import starlightImageZoom from 'starlight-image-zoom'
import starlightHeadingBadges from 'starlight-heading-badges'
import starlightSidebarTopicsDropdown from 'starlight-sidebar-topics-dropdown'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'HandBook',
			customCss: ['./src/tailwind.css'],
			plugins: [
				starlightLinksValidator(),
				starlightImageZoom(),
				starlightHeadingBadges(),
				starlightSidebarTopicsDropdown([
					{
						label: 'Start',
						icon: 'star',
						link: '/start/',
						id: 'start',
						items: [
							{
								label: 'Getting Started',
								slug: 'start/getting-started'
							},
							{
								label: 'Welcome, Dude!',
								items : [
									{
										label: 'Overview',
										slug: 'start/welcome/overview'
									},
									{
										label: 'Background',
										slug: 'start/welcome/background'
									},
									{
										label: 'Advantages',
										slug: 'start/welcome/advantages'
									},
									{
										label: 'Objectives',
										slug: 'start/welcome/objectives'
									},
									{
										label: 'Contribution Guidelines',
										slug: 'start/welcome/contribution-guidelines'
									},
									{
										label: 'Best Practices',
										slug: 'start/welcome/best-practices'
									}
								]
							},
							{
								label: 'Current Projects',
								collapsed: true,
								items: [
									{
										label: 'Overview',
										slug: 'start/projects/overview'
									},
									{
										label: 'Active Projects List',
										slug: 'start/projects/active-list'
									},
									{
										label: 'How to Get Involved',
										slug: 'start/projects/get-involved'
									}
								]
							}
						]
					},
					{
						label: 'Onboarding',
						icon: 'rocket',
						link: '/onboarding/',
						id: 'onboarding',
						items: [
							{
								label: 'Libraries & Resources',
								items: [
									{
										label: 'Overview',
										slug: 'onboarding/libraries/overview'
									},
									{
										label: 'Shared Libraries',
										slug: 'onboarding/libraries/shared'
									},
									{
										label: 'Frequently Used Frameworks',
										slug: 'onboarding/libraries/frameworks'
									},
									{
										label: 'Recommended Tools',
										slug: 'onboarding/libraries/tools'
									},
									{
										label: 'Recommended Resources',
										slug: 'onboarding/libraries/resources'
									},
									{
										label: 'Best Practices',
										slug: 'onboarding/libraries/best-practices'
									},
									{
										label: 'Configuration Guidelines',
										slug: 'onboarding/libraries/config'
									}
								]
							},
							{
								label: 'Work Devices',
								items: [
									{
										label: 'Overview',
										slug: 'onboarding/devices/overview'
									},
									{
										label: 'Device List',
										slug: 'onboarding/devices/list'
									},
									{
										label: 'Device Setup',
										slug: 'onboarding/devices/setup'
									},
									{
										label: 'Device Management',
										slug: 'onboarding/devices/management'
									},
									{
										label: 'Software Recommendations',
										slug: 'onboarding/devices/software'
									},
									{
										label: 'Company Equipment Policy',
										slug: 'onboarding/devices/policy'
									},
									{
										label: 'Security Guidelines',
										slug: 'onboarding/devices/security'
									}
								]
							},
							{
								label: 'Internal Systems & Security',
								items: [
									{
										label: 'Overview',
										slug: 'onboarding/systems/overview'
									},
									{
										label: 'Server',
										slug: 'onboarding/systems/server'
									},
									{
										label: 'Virtual Machines',
										slug: 'onboarding/systems/virtual-machines'
									},
									{
										label: 'Managing Personal Accounts',
										collapsed: true,
										items: [
											{
												label: 'GitHub',
												slug: 'onboarding/systems/accounts/github'
											},
											{
												label: 'Jira',
												slug: 'onboarding/systems/accounts/jira'
											},
											{
												label: 'Figma',
												slug: 'onboarding/systems/accounts/figma'
											},
										]
									},
									{
										label: 'Security & Authentication',
										slug: 'onboarding/systems/security'
									},
									{
										label: 'Safe Handling of Data',
										slug: 'onboarding/systems/data-handling'
									}
								]
							}
						]
					},
					{
						label: 'People',
						link: '/people/',
						id: 'people',
						items: [
							{
								label: 'Teams',
								items: [
									{
										label: 'Overview',
										slug: 'people/teams/overview'
									},
									{
										label: 'Organizational Structure',
										slug: 'people/teams/structure'
									},
									{
										label: 'Roles',
										slug: 'people/teams/roles'
									},
									{
										label: 'Titles',
										slug: 'people/teams/titles'
									},
									{
										label: 'Team Collaboration',
										slug: 'people/teams/collaboration'
									},
									{
										label: 'Team Communication',
										slug: 'people/teams/communication'
									},
									{
										label: 'Team Coordination',
										slug: 'people/teams/coordination'
									}
								]
							},
							{
								label: 'Policies',
								items: [
									{
										label: 'Overview',
										slug: 'people/policies/overview'
									},
									{
										label: 'Code of Conduct',
										slug: 'people/policies/conduct'
									},
									{
										label: 'Diversity & Inclusion',
										slug: 'people/policies/diversity'
									},
									{
										label: 'Equal Opportunity',
										slug: 'people/policies/opportunity'
									},
									{
										label: 'Harassment Policy',
										slug: 'people/policies/harassment'
									},
									{
										label: 'Workplace Safety',
										slug: 'people/policies/safety'
									},
									{
										label: 'Workplace Benefits',
										slug: 'people/policies/benefits'
									}
								]
							},
						]
					},
					{
						label: 'Workflows',
						link: '/workflows/',
						id: 'workflows',
						items: [
							{
								label: 'Development Workflows',
								items: [
									{
										label: 'Overview',
										slug: 'workflows/development/overview'
									},
									{
										label: 'Flows',
										collapsed: true,
										items: [
											{
												label: 'Git Flow',
												slug: 'workflows/development/flows/git-flow'
											},
											{
												label: 'Ship / Show / Ask',
												slug: 'workflows/development/flows/ship-show-ask'
											},
											{
												label: 'Feature Flow',
												slug: 'workflows/development/flows/feature-flow'
											},
											{
												label: 'Bug Flow',
												slug: 'workflows/development/flows/bug-flow'
											}
										]
									},
									{
										label: 'Version Control',
										slug: 'workflows/development/version-control'
									},
									{
										label: 'Commit Conventions',
										slug: 'workflows/development/commit'
									},
									{
										label: 'Branching Strategy',
										slug: 'workflows/development/branching'
									},
									{
										label: 'Feature Development',
										slug: 'workflows/development/feature'
									},
									{
										label: 'Bug Fixing',
										slug: 'workflows/development/bug'
									},
									{
										label: 'Code Review',
										slug: 'workflows/development/review'
									},
									{
										label: 'Testing',
										slug: 'workflows/development/testing'
									},
									{
										label: 'Deployment',
										slug: 'workflows/development/deployment'
									},
									{
										label: 'Monitoring',
										slug: 'workflows/development/monitoring'
									},
									{
										label: 'Performance Optimization',
										slug: 'workflows/development/performance'
									},
									{
										label: 'Security Checks',
										slug: 'workflows/development/security'
									},
									{
										label: 'Documentation',
										slug: 'workflows/development/documentation'
									},
									{
										label: 'Code Refactoring',
										slug: 'workflows/development/refactoring'
									},
									{
										label: 'Codebase Maintenance',
										slug: 'workflows/development/maintenance'
									}
								]
							},
							{
								label: 'Project Management Workflows',
								items: [
									{
										label: 'Overview',
										slug: 'workflows/management/overview'
									},
									{
										label: 'Task Management',
										slug: 'workflows/management/task'
									},
									{
										label: 'Sprint Planning',
										slug: 'workflows/management/sprint'
									},
									{
										label: 'Project Tracking',
										slug: 'workflows/management/tracking'
									},
									{
										label: 'Team Communication',
										slug: 'workflows/management/communication'
									},
									{
										label: 'Feedback Collection',
										slug: 'workflows/management/feedback'
									},
									{
										label: 'Stakeholder Communication',
										slug: 'workflows/management/stakeholder'
									},
									{
										label: 'Project Documentation',
										slug: 'workflows/management/documentation'
									},
									{
										label: 'Project Reporting',
										slug: 'workflows/management/reporting'
									},
									{
										label: 'Project Evaluation',
										slug: 'workflows/management/evaluation'
									}
								]
							}
						]
					},
					{
						label: 'Design',
						link: '/design/',
						id: 'design',
						items: [
							{
								label: 'Branding',
								items: [
									{
										label: 'Overview',
										slug: 'design/branding/overview'
									},
									{
										label: 'Brand Identity',
										slug: 'design/branding/identity'
									},
									{
										label: 'Brand Guidelines',
										slug: 'design/branding/guidelines'
									},
									{
										label: 'Brand Assets',
										slug: 'design/branding/assets'
									},
									{
										label: 'Brand Strategy',
										slug: 'design/branding/strategy'
									},
									{
										label: 'Brand Recognition',
										slug: 'design/branding/recognition'
									},
									{
										label: 'Brand Promotion',
										slug: 'design/branding/promotion'
									},
									{
										label: 'Brand Management',
										slug: 'design/branding/management'
									}
								]
							},
							{
								label: 'Collaboration',
								items: [
									{
										label: 'Overview',
										slug: 'design/collaboration/overview'
									},
									{
										label: 'Design Review',
										slug: 'design/collaboration/review'
									},
									{
										label: 'Feedback Collection',
										slug: 'design/collaboration/feedback'
									},
									{
										label: 'Working with Developers',
										slug: 'design/collaboration/developers'
									},
									{
										label: 'Design Handoff',
										slug: 'design/collaboration/handoff'
									},
									{
										label: 'Design Documentation',
										slug: 'design/collaboration/documentation'
									},
									{
										label: 'Design Presentations',
										slug: 'design/collaboration/presentations'
									},
									{
										label: 'Design Critique',
										slug: 'design/collaboration/critique'
									},
									{
										label: 'Design Pairing',
										slug: 'design/collaboration/pairing'
									},
									{
										label: 'Design Handshake',
										slug: 'design/collaboration/handshake'
									}
								]
							},
							{
								label: 'Design Principles',
								collapsed: true,
								items: [
									{
										label: 'Overview',
										slug: 'design/principles/overview'
									},
									{
										label: 'Design Thinking',
										slug: 'design/principles/thinking'
									},
									{
										label: 'Visual Consistency',
										slug: 'design/principles/consistency'
									},
									{
										label: 'Functional Consistency',
										slug: 'design/principles/functional'
									},
									{
										label: 'User-Centered Design',
										slug: 'design/principles/user-centered'
									},
									{
										label: 'Accessibility',
										slug: 'design/principles/accessibility'
									},
									{
										label: 'Inclusive Design',
										slug: 'design/principles/inclusive'
									},
									{
										label: 'Responsive Design',
										slug: 'design/principles/responsive'
									},
									{
										label: 'Mobile-First Design',
										slug: 'design/principles/mobile-first'
									},
									{
										label: 'Design Systems',
										slug: 'design/principles/systems'
									},
									{
										label: 'Design Patterns',
										slug: 'design/principles/patterns'
									},
									{
										label: 'Design Resources',
										slug: 'design/principles/resources'
									}
								]
							},
							{
								label: 'Design Process',
								collapsed: true,
								items: [
									{
										label: 'Overview',
										slug: 'design/process/overview'
									},
									{
										label: 'Research',
										slug: 'design/process/research'
									},
									{
										label: 'Ideation',
										slug: 'design/process/ideation'
									},
									{
										label: 'Wireframing',
										slug: 'design/process/wireframing'
									},
									{
										label: 'Prototyping',
										slug: 'design/process/prototyping'
									},
									{
										label: 'User Testing',
										slug: 'design/process/testing'
									},
									{
										label: 'Design Iteration',
										slug: 'design/process/iteration'
									},
									{
										label: 'Design Feedback',
										slug: 'design/process/feedback'
									},
									{
										label: 'Design Validation',
										slug: 'design/process/validation'
									},
									{
										label: 'Design Optimization',
										slug: 'design/process/optimization'
									},
									{
										label: 'Design Maintenance',
										slug: 'design/process/maintenance'
									}
								]
							},
							{
								label: 'Design Tools',
								collapsed: true,
								items: [
									{
										label: 'Figma',
										slug: 'design/tools/figma'
									},
									{
										label: 'Adobe XD',
										slug: 'design/tools/xd'
									},
									{
										label: 'Zeplin',
										slug: 'design/tools/zeplin'
									},
									{
										label: 'Framer',
										slug: 'design/tools/framer'
									},
									{
										label: 'Illustrator',
										slug: 'design/tools/illustrator'
									}
								]
							}
						]
					},
					{
						label: 'Development',
						link: '/development/',
						id: 'development',
						items: [
							{
								label: 'Code Standards',
								items: [
									{
										label: 'Overview',
										slug: 'development/standards/overview'
									},
									{
										label: 'Coding Best Practices',
										slug: 'development/standards/best-practices'
									},
									{
										label: 'Code Review Guidelines',
										slug: 'development/standards/review'
									},
									{
										label: 'Naming Conventions',
										slug: 'development/standards/naming'
									},
									{
										label: 'Code Formatting Guidelines',
										slug: 'development/standards/formatting'
									},
									{
										label: 'Code Linters',
										slug: 'development/standards/linters'
									},
									{
										label: 'Documentation Guidelines',
										slug: 'development/standards/documentation'
									},
									{
										label: 'Testing Guidelines',
										slug: 'development/standards/testing'
									},
									{
										label: 'Module Management',
										slug: 'development/standards/modules'
									},
									{
										label: 'Mono-Repo Guidelines',
										slug: 'development/standards/monorepos'
									},
									{
										label: 'Project Structure Guidelines',
										slug: 'development/standards/structure'
									},
									{
										label: 'Security Guidelines',
										slug: 'development/standards/security'
									}
								]
							},
							{
								label: 'Package Management',
								items: [
									{
										label: 'Overview',
										slug: 'development/packages/overview'
									},
									{
										label: 'pnpm',
										slug: 'development/packages/pnpm'
									},
									{
										label: 'Managing Shared Packages',
										slug: 'development/packages/shared'
									},
									{
										label: 'Package Versioning',
										slug: 'development/packages/versioning'
									},
									{
										label: 'Dependency Management',
										slug: 'development/packages/dependency'
									},
									{
										label: 'Workflows',
										slug: 'development/packages/workflow'
									},
									{
										label: 'Workspaces',
										slug: 'development/packages/workspaces'
									}
								]
							}
						]
					},
					{
						label: 'Infrastructure',
						link: '/infrastructure/',
						id: 'infrastructure',
						items: [
							{
								label: 'Environments',
								items: [
									{
										label: 'Overview',
										slug: 'infrastructure/environments/overview'
									},
									{
										label: 'Virtual Machines',
										slug: 'infrastructure/environments/virtual-machines'
									},
									{
										label: 'Windows Server Overview',
										slug: 'infrastructure/environments/windows-server'
									},
									{
										label: 'Local Development',
										slug: 'infrastructure/environments/local'
									},
									{
										label: 'Remote Access',
										slug: 'infrastructure/environments/remote'
									},
									{
										label: 'Development Environment',
										slug: 'infrastructure/environments/development'
									},
									{
										label: 'Staging Environment',
										slug: 'infrastructure/environments/staging'
									},
									{
										label: 'Production Environment',
										slug: 'infrastructure/environments/production'
									},
									{
										label: 'Environment Configuration',
										slug: 'infrastructure/environments/configuration'
									},
									{
										label: 'Environment Management',
										slug: 'infrastructure/environments/management'
									},
									{
										label: 'Environment Security',
										slug: 'infrastructure/environments/security'
									}
								]
							},
							{
								label: 'Deployment',
								collapsed: true,
								items: [
									{
										label: 'Overview',
										slug: 'infrastructure/deployment/overview'
									},
									{
										label: 'Continuous Deployment',
										slug: 'infrastructure/deployment/continuous'
									},
									{
										label: 'Continuous Integration',
										slug: 'infrastructure/deployment/integration'
									},
									{
										label: 'CI/CD Automation',
										slug: 'infrastructure/deployment/automation'
									},
									{
										label: 'CI/CD Pipelines',
										slug: 'infrastructure/deployment/pipelines'
									},
									{
										label: 'Deployment Process',
										slug: 'infrastructure/deployment/process'
									},
									{
										label: 'Deployment Workflow',
										slug: 'infrastructure/deployment/workflow'
									},
									{
										label: 'Deployment Strategies',
										slug: 'infrastructure/deployment/strategies'
									},
									{
										label: 'Deployment Tools',
										slug: 'infrastructure/deployment/tools'
									},
									{
										label: 'Deployment Automation',
										slug: 'infrastructure/deployment/deploy-automation'
									},
									{
										label: 'Deployment Monitoring',
										slug: 'infrastructure/deployment/monitoring'
									},
									{
										label: 'Deployment Security',
										slug: 'infrastructure/deployment/security'
									}
								]
							},
							{
								label: 'Containers',
								collapsed: true,
								items: [
									{
										label: 'Overview',
										slug: 'infrastructure/containers/overview'
									},
									{
										label: 'Docker',
										slug: 'infrastructure/containers/docker'
									},
									{
										label: 'Kubernetes',
										slug: 'infrastructure/containers/kubernetes'
									},
									{
										label: 'Container Orchestration',
										slug: 'infrastructure/containers/orchestration'
									},
									{
										label: 'Container Management',
										slug: 'infrastructure/containers/management'
									},
									{
										label: 'Container Security',
										slug: 'infrastructure/containers/security'
									},
									{
										label: 'Container Monitoring',
										slug: 'infrastructure/containers/monitoring'
									}
								]
							}
						]
					},
					{
						label: 'Security',
						link: '/security/',
						id: 'security',
						items: [
							{
								label: 'Security Basics',
								items: [
									{
										label: 'Overview',
										slug: 'security/basics/overview'
									},
									{
										label: 'Security Principles',
										slug: 'security/basics/principles'
									},
									{
										label: 'Security Threats',
										slug: 'security/basics/threats'
									},
									{
										label: 'Security Vulnerabilities',
										slug: 'security/basics/vulnerabilities'
									},
									{
										label: 'Security Risks',
										slug: 'security/basics/risks'
									},
									{
										label: 'Security Controls',
										slug: 'security/basics/controls'
									},
									{
										label: 'Security Policies',
										slug: 'security/basics/policies'
									},
									{
										label: 'Security Guidelines',
										slug: 'security/basics/guidelines'
									}
								]
							},
							{
								label: 'Data Security',
								items: [
									{
										label: 'Overview',
										slug: 'security/data/overview'
									},
									{
										label: 'Data Classification',
										slug: 'security/data/classification'
									},
									{
										label: 'Data Encryption',
										slug: 'security/data/encryption'
									},
									{
										label: 'Data Storage',
										slug: 'security/data/storage'
									},
									{
										label: 'Data Transmission',
										slug: 'security/data/transmission'
									},
									{
										label: 'Data Handling',
										slug: 'security/data/handling'
									},
									{
										label: 'Data Privacy',
										slug: 'security/data/privacy'
									},
									{
										label: 'Data Integrity',
										slug: 'security/data/integrity'
									},
									{
										label: 'Data Retention',
										slug: 'security/data/retention'
									},
									{
										label: 'Data Disposal',
										slug: 'security/data/disposal'
									}
								]
							},
							{
								label: 'Development Security',
								collapsed: true,
								items: [
									{
										label: 'Overview',
										slug: 'security/development/overview'
									},
									{
										label: 'Secure Coding Practices',
										slug: 'security/development/coding'
									},
									{
										label: 'Security Testing',
										slug: 'security/development/testing'
									},
									{
										label: 'Security Auditing',
										slug: 'security/development/auditing'
									},
									{
										label: 'Security Scanning',
										slug: 'security/development/scanning'
									},
									{
										label: 'Security Monitoring',
										slug: 'security/development/monitoring'
									},
									{
										label: 'Security Incident Response',
										slug: 'security/development/incident-response'
									},
									{
										label: 'Security Guidelines',
										slug: 'security/development/guidelines'
									}
								]
							},
							{
								label: 'Operations',
								collapsed: true,
								items: [
									{
										label: 'Overview',
										slug: 'security/operations/overview'
									},
									{
										label: 'Access Control',
										slug: 'security/operations/access-control'
									},
									{
										label: 'Identity Management',
										slug: 'security/operations/identity'
									},
									{
										label: 'Authentication',
										slug: 'security/operations/auth'
									},
									{
										label: 'Authorization',
										slug: 'security/operations/authorization'
									},
									{
										label: 'Account Management',
										slug: 'security/operations/account'
									},
									{
										label: 'Password Management',
										slug: 'security/operations/password'
									},
									{
										label: 'Session Management',
										slug: 'security/operations/session'
									},
									{
										label: 'Security Policies',
										slug: 'security/operations/policies'
									},
									{
										label: 'Security Guidelines',
										slug: 'security/operations/guidelines'
									}
								]
							}
						]
					},
					{
						label: 'Debugging',
						link: '/debugging/',
						id: 'debugging',
						items: [
							{
								label: 'Debugging Basics',
								items: [
									{
										label: 'Overview',
										slug: 'debugging/basics/overview'
									},
									{
										label: 'Debugging Principles',
										slug: 'debugging/basics/principles'
									},
									{
										label: 'Debugging Techniques',
										slug: 'debugging/basics/techniques'
									},
									{
										label: 'Debugging Tools',
										slug: 'debugging/basics/tools'
									},
									{
										label: 'Debugging Strategies',
										slug: 'debugging/basics/strategies'
									},
									{
										label: 'Debugging Guidelines',
										slug: 'debugging/basics/guidelines'
									}
								]
							},
							{
								label: 'Error Handling',
								items: [
									{
										label: 'Overview',
										slug: 'debugging/errors/overview'
									},
									{
										label: 'Error Types',
										slug: 'debugging/errors/types'
									},
									{
										label: 'Error Handling',
										slug: 'debugging/errors/handling'
									},
									{
										label: 'Error Reporting',
										slug: 'debugging/errors/reporting'
									},
									{
										label: 'Error Logging',
										slug: 'debugging/errors/logging'
									},
									{
										label: 'Error Monitoring',
										slug: 'debugging/errors/monitoring'
									},
									{
										label: 'Error Debugging',
										slug: 'debugging/errors/debugging'
									},
									{
										label: 'Error Resolution',
										slug: 'debugging/errors/resolution'
									}
								]
							},
						]
					},
					{
						label: 'The Handbook',
						link: '/handbook/',
						id: 'handbook',
						items: [
							{
								label: 'Changelog',
								slug: 'handbook/changelog'
							},
							{
								label: 'About',
								items: [
									{
										label: 'Overview',
										slug: 'handbook/about/overview'
									},
									{
										label: 'Purpose',
										slug: 'handbook/about/purpose'
									},
									{
										label: 'Audience',
										slug: 'handbook/about/audience'
									},
									{
										label: 'Scope',
										slug: 'handbook/about/scope'
									},
									{
										label: 'Structure',
										slug: 'handbook/about/structure'
									}
								]
							},
							{
								label: 'Usage',
								items: [
									{
										label: 'Overview',
										slug: 'handbook/usage/overview'
									},
									{
										label: 'Search',
										slug: 'handbook/usage/search'
									},
									{
										label: 'Navigation',
										slug: 'handbook/usage/navigation'
									},
									{
										label: 'Collections',
										slug: 'handbook/usage/collections'
									},
									{
										label: 'Feedback',
										slug: 'handbook/usage/feedback'
									},
								]
							},
							{
								label: 'Maintaining',
								collapsed: true,
								items: [
									{
										label: 'Overview',
										slug: 'handbook/maintaining/overview'
									},
									{
										label: 'Contribution Guidelines',
										slug: 'handbook/maintaining/contribution'
									},
									{
										label: 'Style Guide',
										slug: 'handbook/maintaining/style'
									},
									{
										label: 'Content',
										slug: 'handbook/maintaining/content'
									},
									{
										label: 'Structure',
										slug: 'handbook/maintaining/structure'
									},
									{
										label: 'Navigation',
										slug: 'handbook/maintaining/navigation'
									},
									{
										label: 'Collections',
										slug: 'handbook/maintaining/collections'
									},
									{
										label: 'Categories',
										slug: 'handbook/maintaining/categories'
									},
									{
										label: 'Topics',
										slug: 'handbook/maintaining/topics'
									}
								]
							},
							{
								label: 'Documentation',
								collapsed: true,
								items: [
									{
										label: 'Overview',
										slug: 'handbook/documentation/overview'
									},
									{
										label: 'Documentation Guidelines',
										slug: 'handbook/documentation/guidelines'
									},
									{
										label: 'Documentation Structure',
										slug: 'handbook/documentation/structure'
									},
									{
										label: 'Escalation Process',
										slug: 'handbook/documentation/escalation'
									},
									{
										label: 'Documentation Best Practices',
										slug: 'handbook/documentation/best-practices'
									},
									{
										label: 'Documentation Maintenance',
										slug: 'handbook/documentation/maintenance'
									},
									{
										label: 'Documentation Resources',
										slug: 'handbook/documentation/resources'
									},
								]
							}
						]
					}
				]),
			],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
