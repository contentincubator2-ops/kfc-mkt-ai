import axios from 'axios';
import { Activity, CreateActivityInput, UpdateActivityInput, ActivityStatus } from '@/types/activity';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

class ActivityService {
    private baseURL = `${API_BASE_URL}/activities`;

  async getActivities(brandId: string): Promise<Activity[]> {
        try {
                const response = await axios.get(`${this.baseURL}`, {
                          params: { brandId }
                });
                return response.data;
        } catch (error) {
                console.error('Failed to fetch activities:', error);
                throw error;
        }
  }

  async getActivity(id: string): Promise<Activity> {
        try {
                const response = await axios.get(`${this.baseURL}/${id}`);
                return response.data;
        } catch (error) {
                console.error('Failed to fetch activity:', error);
                throw error;
        }
  }

  async createActivity(data: CreateActivityInput): Promise<Activity> {
        try {
                const response = await axios.post(this.baseURL, data);
                return response.data;
        } catch (error) {
                console.error('Failed to create activity:', error);
                throw error;
        }
  }

  async updateActivity(id: string, data: UpdateActivityInput): Promise<Activity> {
        try {
                const response = await axios.put(`${this.baseURL}/${id}`, data);
                return response.data;
        } catch (error) {
                console.error('Failed to update activity:', error);
                throw error;
        }
  }

  async deleteActivity(id: string): Promise<void> {
        try {
                await axios.delete(`${this.baseURL}/${id}`);
        } catch (error) {
                console.error('Failed to delete activity:', error);
                throw error;
        }
  }

  async updateActivityStatus(id: string, status: ActivityStatus): Promise<Activity> {
        try {
                const response = await axios.patch(`${this.baseURL}/${id}/status`, { status });
                return response.data;
        } catch (error) {
                console.error('Failed to update activity status:', error);
                throw error;
        }
  }

  async getActivityPerformance(id: string) {
        try {
                const response = await axios.get(`${this.baseURL}/${id}/performance`);
                return response.data;
        } catch (error) {
                console.error('Failed to fetch activity performance:', error);
                throw error;
        }
  }
}

export const activityService = new ActivityService();
