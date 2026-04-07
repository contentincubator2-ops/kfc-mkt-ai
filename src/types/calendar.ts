// Calendar (行銷日曆) 類型定義
export enum EventPriority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    CRITICAL = 'critical'
}

export enum EventType {
    CAMPAIGN = 'campaign',
    PROMOTIONAL = 'promotional',
    SEASONAL = 'seasonal',
    PRODUCT_LAUNCH = 'product_launch',
    HOLIDAY = 'holiday',
    INTERNAL_MEETING = 'internal_meeting',
    CLIENT_MEETING = 'client_meeting'
}

export interface CalendarEvent {
    id: string;
    title: string;
    description?: string;
    type: EventType;
    priority: EventPriority;
    startDate: string;
    endDate: string;
    startTime?: string;
    endTime?: string;
    location?: string;
    relatedActivities?: string[]; // 活動 ID
  relatedProducts?: string[]; // 產品 ID
  attendees?: string[]; // 用戶 ID
  resources?: {
      budget: number;
      estimatedHours: number;
      requiredTeam: string[]; // 需要的角色
  };
    status: 'planning' | 'confirmed' | 'completed' | 'cancelled';
    notes?: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
}

export interface MarketingPlan {
    id: string;
    year: number;
    quarter?: number; // 1-4 或 null 表示全年
  brandId: string;
    title: string;
    objectives: string[];
    budget: number;
    allocations: {
      category: string;
      amount: number;
      percentage: number;
    }[];
    events: CalendarEvent[];
    status: 'draft' | 'approved' | 'active' | 'completed';
    approvedBy?: string;
    approvalDate?: string;
    createdAt: string;
    updatedAt: string;
}

export interface ContentCalendar {
    id: string;
    title: string;
    brandId: string;
    period: {
      startDate: string;
      endDate: string;
    };
    channels: string[]; // Facebook, Instagram, Line 等
  content: {
      date: string;
      contentId: string;
      channel: string;
      type: 'post' | 'story' | 'reel' | 'live';
      scheduledTime?: string;
      status: 'draft' | 'scheduled' | 'published';
  }[];
    createdAt: string;
    updatedAt: string;
}

export interface CreateCalendarEventInput {
    title: string;
    description?: string;
    type: EventType;
    priority: EventPriority;
    startDate: string;
    endDate: string;
    startTime?: string;
    endTime?: string;
    relatedActivities?: string[];
    attendees?: string[];
}

export interface UpdateCalendarEventInput {
    title?: string;
    description?: string;
    priority?: EventPriority;
    startDate?: string;
    endDate?: string;
    status?: string;
}
