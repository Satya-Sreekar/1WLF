export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Views', href: '#views' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Access Control', href: '#roles' },
  { label: 'Stack', href: '#tech' },
  { label: 'Screenshots', href: '#screenshots' },
]

export interface HeroData {
  badge: string
  title: string
  subtitle: string
  screenshotSrc: string
  screenshotAlt: string
}

export const heroData: HeroData = {
  badge: '1WLF Task Management System',
  title: 'Manage Tasks.\nShip Faster.',
  subtitle: 'A full-stack, multi-tenant task management platform built for teams and freelancers. Kanban boards, hierarchical tasks, real-time updates, time tracking, and role-based access — all in one place.',
  screenshotSrc: '/tms/screenshots-dark/01-kanban.png',
  screenshotAlt: '1WLF TMS Kanban Dashboard',
}

export interface Stat {
  value: string
  label: string
  isNumeric: boolean
}

export const stats: Stat[] = [
  { value: '7', label: 'Task Statuses', isNumeric: true },
  { value: '4', label: 'Org Roles', isNumeric: true },
  { value: 'SSE', label: 'Real-Time Updates', isNumeric: false },
  { value: 'CSV', label: 'Import / Export', isNumeric: false },
  { value: '∞', label: 'Subtask Depth', isNumeric: false },
]

export type IconName =
  | 'building-2' | 'clipboard-list' | 'puzzle' | 'zap'
  | 'timer' | 'flask-conical' | 'scroll-text' | 'bell-ring'
  | 'bar-chart-3' | 'file-down' | 'mail' | 'search'
  | 'lock-keyhole' | 'landmark' | 'folder-open' | 'check-circle-2'
  | 'radio-tower' | 'clock'

export interface Feature {
  icon: IconName
  title: string
  description: string
}

export const features: Feature[] = [
  { icon: 'building-2', title: 'Multi-Tenant Organizations', description: 'Create multiple organizations, each with their own projects, members, and isolated data. Role-based access at every level.' },
  { icon: 'clipboard-list', title: 'Rich Task Properties', description: 'Title, description, type (task/story/feature), category, priority, difficulty (1–5), story points, estimated hours, due date, and assignee.' },
  { icon: 'puzzle', title: 'Subtask Hierarchies', description: 'Break tasks into subtasks indefinitely. Parent-child relationships are preserved in both list and kanban views with cascade deletes.' },
  { icon: 'zap', title: 'Real-Time Sync via SSE', description: 'Server-Sent Events push task changes (created, updated, deleted) live to all project members — no refresh needed.' },
  { icon: 'timer', title: 'Automatic Time Tracking', description: 'Timers start and stop automatically as tasks move to/from "In Progress". Tracks weekday vs weekend time with a 1.5× weekend multiplier.' },
  { icon: 'flask-conical', title: 'QA Testing Workflow', description: 'Assign tasks to testers, track testing history with notes and timestamps, then route completed work through In Review back to the owner.' },
  { icon: 'scroll-text', title: 'Full Audit Trail', description: 'Every field change is logged — status, priority, assignment, story points, category. Browse per-task or per-project audit history.' },
  { icon: 'bell-ring', title: 'In-App Notifications', description: 'Get notified when assigned to a task, when your task status changes, when you receive a testing request, or when testing completes.' },
  { icon: 'bar-chart-3', title: 'Freelancer Dashboard', description: 'Visual time breakdowns by task, project, and organization. Bar charts and donut charts with estimated vs. actual time comparisons.' },
  { icon: 'file-down', title: 'CSV Import / Export', description: 'Export any project to CSV. Import tasks in bulk with automatic assignee resolution, parent task linking, and per-row error reporting.' },
  { icon: 'mail', title: 'Email Invitations', description: 'Invite team members by email with 7-day expiring tokens. New users can sign up directly through the invitation link.' },
  { icon: 'search', title: 'Search & Filters', description: 'Filter by status, priority, difficulty, and assignee simultaneously. Sort by priority, due date, story points, or creation date.' },
]

export interface ShowcaseData {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  features: string[]
  chips?: Chip[]
  reversed?: boolean
}

export interface Chip {
  label: string
  variant: 'backlog' | 'todo' | 'progress' | 'blocked' | 'testing' | 'review' | 'done'
}

export const kanbanShowcase: ShowcaseData = {
  imageSrc: '/tms/screenshots-dark/01-kanban.png',
  imageAlt: 'Kanban Board',
  title: 'Kanban Board with Swim Lanes',
  description: 'Drag-and-drop style kanban board with configurable swim lane grouping. Columns are individually toggled from settings — keep only the statuses you care about visible.',
  features: [
    '7 status columns: Backlog, Todo, In Progress, Blocked, Testing, In Review, Done',
    'Configurable swim lane grouping (by status, priority, assignee)',
    'Task count badges on each column',
    'Quick-add tasks directly to a column',
    'Priority badges, difficulty dots, story points, due dates, and assignee avatars',
    'Show/hide individual columns from Settings',
  ],
  chips: [
    { label: 'Backlog', variant: 'backlog' },
    { label: 'Todo', variant: 'todo' },
    { label: 'In Progress', variant: 'progress' },
    { label: 'Blocked', variant: 'blocked' },
    { label: 'Testing', variant: 'testing' },
    { label: 'In Review', variant: 'review' },
    { label: 'Done', variant: 'done' },
  ],
}

export const listShowcase: ShowcaseData = {
  imageSrc: '/tms/screenshots-dark/02-list-view.png',
  imageAlt: 'List View',
  title: 'Hierarchical List View',
  description: 'A collapsible tree view organized by Organization → Project → Tasks. See all your work across every org at a glance and drill into any project instantly.',
  features: [
    'Grouped by organization then project',
    'Collapse/expand orgs and projects independently',
    'Task count shown per project and per org',
    'Inline task actions: add subtask, edit, delete',
    'Checkbox completion for quick done-marking',
    'Same filter and sort toolbar as Kanban',
  ],
  reversed: true,
}

export const taskDetailShowcase: ShowcaseData = {
  imageSrc: '/tms/screenshots-dark/04-task-detail.png',
  imageAlt: 'Task Detail',
  title: 'Task Detail View',
  description: 'Click any task to see its full detail: status, priority, type, category, difficulty score, description, creator, estimated time, and the complete activity log.',
  features: [
    'Status, priority, type, and category at a glance',
    'Difficulty score (1–5) with visual indicator',
    'Story points for agile estimation',
    'Full description with multi-line support',
    'Created by, estimated hours, actual hours',
    'Activity log showing all changes with timestamps',
    'One-click jump to Edit mode',
  ],
}

export const taskEditShowcase: ShowcaseData = {
  imageSrc: '/tms/screenshots-dark/05-task-edit.png',
  imageAlt: 'Task Edit Form',
  title: 'Task Edit Form',
  description: 'A comprehensive modal form covering every field. Assign to any org member, set priority, difficulty, story points, estimated hours, and due date in one place.',
  features: [
    'Title and multi-line description',
    'Project selector (cross-project moves supported)',
    'Type: Task / Story / Feature',
    'Category: Feature / Bug / Improvement / Maintenance',
    'Priority: Low / Medium / High / Critical',
    'Difficulty: 1 (Trivial) → 5 (Extreme)',
    'Story points, estimated hours, actual hours, due date',
    'Assign to any organization member',
  ],
  reversed: true,
}

export const freelancerShowcase: ShowcaseData = {
  imageSrc: '/tms/screenshots-dark/07-settings.png',
  imageAlt: 'Freelancer Dashboard',
  title: 'Freelancer Dashboard & Settings',
  description: 'Enable Freelancer Mode to enforce a single active task at a time. When a second task moves to "In Progress", the current one is automatically bumped back to "Todo" — keeping you focused.',
  features: [
    'Single-task focus enforcement',
    'Automatic timer start/stop on status change',
    'Weekend time tracked separately (1.5× weighted)',
    'Time by task, project, and organization',
    'Estimated vs. actual hours with progress %',
    'Bar chart (by project) and donut chart (by org)',
    'Budget status: On track / Over budget',
    'Configurable Kanban column visibility',
  ],
}

export const notificationsShowcase: ShowcaseData = {
  imageSrc: '/tms/screenshots-dark/06-notifications.png',
  imageAlt: 'Notifications',
  title: 'In-App Notification Center',
  description: 'A notification bell in the header shows unread count. Click to see a live-updating feed of everything that affects you — no email required.',
  features: [
    'Task assigned to you',
    "Your task's status changed",
    'Task reassigned to a different user',
    'Testing requested on your task',
    'Testing completed — ready for your review',
    'Mark individual notifications or all as read',
    'Paginated feed — never lose old notifications',
  ],
  reversed: true,
}

export interface WorkflowStep {
  number: number
  title: string
  description: string
  color: string
  bgColor: string
}

export const workflowSteps: WorkflowStep[] = [
  { number: 1, title: 'Todo', description: 'Task created\nand assigned', color: '#818cf8', bgColor: 'rgba(79,110,247,0.15)' },
  { number: 2, title: 'In Progress', description: 'Timer starts\nautomatically', color: '#38bdf8', bgColor: 'rgba(14,165,233,0.15)' },
  { number: 3, title: 'Testing', description: 'Assigned to\nQA tester', color: '#fbbf24', bgColor: 'rgba(245,158,11,0.15)' },
  { number: 4, title: 'In Review', description: 'Tester submits\nnotes & result', color: '#a78bfa', bgColor: 'rgba(124,58,237,0.15)' },
  { number: 5, title: 'Done', description: 'Owner reviews\nand closes', color: '#34d399', bgColor: 'rgba(16,185,129,0.15)' },
]

export interface Screenshot {
  src: string
  darkSrc: string
  alt: string
  title: string
  caption: string
  span?: number
}

export const screenshots: Screenshot[] = [
  { src: '/tms/screenshots/08-login.png', darkSrc: '/tms/screenshots-dark/08-login.png', alt: 'Login Page', title: 'Authentication', caption: 'Clean login page with email/password, forgot password flow, and new account registration.' },
  { src: '/tms/screenshots/01-kanban.png', darkSrc: '/tms/screenshots-dark/01-kanban.png', alt: 'Kanban Board', title: 'Kanban Board', caption: 'Multi-column kanban with swim lanes, task cards showing priority, difficulty, assignee, and due date.' },
  { src: '/tms/screenshots/02-list-view.png', darkSrc: '/tms/screenshots-dark/02-list-view.png', alt: 'List View', title: 'List View', caption: 'Hierarchical list grouped by organization and project with collapsible sections.' },
  { src: '/tms/screenshots/04-task-detail.png', darkSrc: '/tms/screenshots-dark/04-task-detail.png', alt: 'Task Detail', title: 'Task Detail', caption: 'Full task detail with status, priority, type, category, description, creator, and activity log.' },
  { src: '/tms/screenshots/05-task-edit.png', darkSrc: '/tms/screenshots-dark/05-task-edit.png', alt: 'Task Edit Form', title: 'Task Edit Form', caption: 'Complete task editor with all fields: type, category, priority, difficulty, story points, hours, due date.' },
  { src: '/tms/screenshots/06-notifications.png', darkSrc: '/tms/screenshots-dark/06-notifications.png', alt: 'Notifications', title: 'Notification Center', caption: 'In-app notification dropdown with real-time assignment and status-change alerts.' },
  { src: '/tms/screenshots/07-settings.png', darkSrc: '/tms/screenshots-dark/07-settings.png', alt: 'Settings & Freelancer Dashboard', title: 'Settings & Freelancer Dashboard', caption: 'Freelancer mode toggle, kanban column visibility, and time tracking analytics with charts.' },
]

export interface Role {
  badge: string
  badgeVariant: 'owner' | 'admin' | 'member' | 'viewer'
  title: string
  description: string
}

export const orgRoles: Role[] = [
  { badge: 'Owner', badgeVariant: 'owner', title: 'Owner', description: 'Full control. Delete org, manage all members, all projects. Cannot be demoted or removed.' },
  { badge: 'Admin', badgeVariant: 'admin', title: 'Admin', description: 'Manage members, create/delete projects, send invitations, bulk-set project access.' },
  { badge: 'Member', badgeVariant: 'member', title: 'Member', description: 'Create projects, manage tasks in their assigned projects, invite via explicit permission.' },
]

export const projectRoles: Role[] = [
  { badge: 'Project Lead', badgeVariant: 'owner', title: 'Project Lead', description: 'Full control of the project — tasks, members, settings.' },
  { badge: 'Contributor', badgeVariant: 'admin', title: 'Contributor', description: 'Create, edit, and manage tasks within the project.' },
  { badge: 'Tester', badgeVariant: 'member', title: 'Tester', description: 'Assigned to testing tasks, can mark testing complete with notes.' },
  { badge: 'Viewer', badgeVariant: 'viewer', title: 'Viewer', description: 'Read-only access to project tasks and members.' },
]

export interface TechItem {
  label: string
  name: string
}

export const techStack: TechItem[] = [
  { label: 'Backend Framework', name: 'FastAPI (Python)' },
  { label: 'Database', name: 'MySQL + SQLAlchemy' },
  { label: 'Auth', name: 'JWT (HS256) + bcrypt' },
  { label: 'Real-Time', name: 'Server-Sent Events' },
  { label: 'Frontend', name: 'React 19 + TypeScript' },
  { label: 'Build Tool', name: 'Vite' },
  { label: 'UI Components', name: 'Radix UI + shadcn' },
  { label: 'Styling', name: 'Tailwind CSS' },
  { label: 'Routing', name: 'React Router v7' },
  { label: 'State', name: 'React Context API' },
  { label: 'Deployment', name: 'Docker + Nginx' },
  { label: 'API Docs', name: 'Swagger / ReDoc' },
]

export const apiFeatures: Feature[] = [
  { icon: 'lock-keyhole', title: 'Auth Endpoints', description: 'Register, login, profile, password reset with 15-minute expiry tokens. User search scoped to organization.' },
  { icon: 'landmark', title: 'Organization API', description: 'Full CRUD for orgs, members, invitations, and project-access bulk updates. Stats endpoint for completion tracking.' },
  { icon: 'folder-open', title: 'Project API', description: 'Projects with status (active/archived), member management, and org-scoped filtering.' },
  { icon: 'check-circle-2', title: 'Task API', description: 'Paginated task listing, full CRUD, subtask management, testing assignment, audit log retrieval.' },
  { icon: 'radio-tower', title: 'SSE Stream', description: 'GET /events/{project_id} — live event stream for task_created, task_updated, task_deleted with 30-second keepalive.' },
  { icon: 'clock', title: 'Time Tracking API', description: 'Per-task time entries, batch totals, dashboard aggregates. Tracks actual and weighted time across orgs/projects.' },
]
