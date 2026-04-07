// Collaboration (團隊協作) 類型定義
export enum UserRole {
    ADMIN = 'admin',
    PROJECT_MANAGER = 'project_manager',
    CONTENT_CREATOR = 'content_creator',
    DESIGNER = 'designer',
    ANALYST = 'analyst',
    CLIENT = 'client'
}

export enum ApprovalStatus {
    DRAFT = 'draft',
    PENDING = 'pending',
    APPROVED = 'approved',
    REVISION_NEEDED = 'revision_needed',
    REJECTED = 'rejected'
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: UserRole;
    departmentId?: string;
    createdAt: string;
}

export interface Comment {
    id: string;
    contentId: string;
    authorId: string;
    author?: User;
    text: string;
    attachments?: string[];
    mentions?: string[]; // 被提及的用戶 ID
  createdAt: string;
    updatedAt: string;
    replies?: Comment[];
}

export interface Approval {
    id: string;
    contentId: string;
    status: ApprovalStatus;
    approverRole: UserRole[];
    currentApprovers: string[]; // 用戶 ID
  approvedBy?: string;
    rejectionReason?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CollaborativeContent {
    id: string;
    type: 'post' | 'design' | 'video' | 'report';
    title: string;
    description?: string;
    content: string;
    contentUrl?: string;
    status: ApprovalStatus;
    approval?: Approval;
    comments: Comment[];
    assignees: string[]; // 用戶 ID
  watchers: string[]; // 觀看者用戶 ID
  version: number;
    revisionHistory: {
      version: number;
      changes: string;
      changedBy: string;
      changedAt: string;
    }[];
    createdBy: string;
    createdAt: string;
    updatedAt: string;
}

export interface WorkflowStep {
    stepId: string;
    stepName: string;
    requiredRole: UserRole[];
    description: string;
    order: number;
}

export interface ApprovalWorkflow {
    id: string;
    name: string;
    steps: WorkflowStep[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CreateCollaborativeContentInput {
    type: CollaborativeContent['type'];
    title: string;
    description?: string;
    content: string;
    contentUrl?: string;
    assignees: string[];
}

export interface UpdateCollaborativeContentInput {
    title?: string;
    description?: string;
    content?: string;
    status?: ApprovalStatus;
    assignees?: string[];
}
