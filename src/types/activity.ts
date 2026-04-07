// Activity (活動) 類型定義
export enum ActivityStatus {
    DRAFT = 'draft',
    PLANNING = 'planning',
    SCHEDULED = 'scheduled',
    ACTIVE = 'active',
    COMPLETED = 'completed',
    ARCHIVED = 'archived'
}

export enum ActivityType {
    PROMOTION = 'promotion',
    NEW_PRODUCT = 'new_product',
    SEASONAL = 'seasonal',
    PARTNERSHIP = 'partnership',
    REGIONAL = 'regional',
    LIMITED_TIME = 'limited_time'
}

export interface ActivityDateRange {
    startDate: string;
    endDate: string;
    startTime?: string;
    endTime?: string;
}

export interface ActivityContent {
    description: string;
    contentPlan: string;
    targetAudience: string;
    channels: string[]; // Facebook, Instagram, Line, WeChat 等
}

export interface ActivityPerformance {
    impressions: number;
    clicks: number;
    conversions: number;
    roas: number; // Return on Ad Spend
  budget: number;
    spend: number;
}

export interface Activity {
    id: string;
    brandId: string;
    name: string;
    type: ActivityType;
    status: ActivityStatus;
    dateRange: ActivityDateRange;
    content: ActivityContent;
    performance?: ActivityPerformance;
    kpis: {
      targetImpressions: number;
      targetClicks: number;
      targetConversions: number;
      targetRoas: number;
    };
    budget: number;
    assignees: string[]; // 指派給的團隊成員 ID
  tags: string[];
    notes?: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
}

export interface CreateActivityInput {
    brandId: string;
    name: string;
    type: ActivityType;
    dateRange: ActivityDateRange;
    content: ActivityContent;
    kpis: Activity['kpis'];
    budget: number;
    assignees?: string[];
}

export interface UpdateActivityInput {
    name?: string;
    status?: ActivityStatus;
    dateRange?: ActivityDateRange;
    content?: ActivityContent;
    performance?: ActivityPerformance;
    budget?: number;
    assignees?: string[];
}
