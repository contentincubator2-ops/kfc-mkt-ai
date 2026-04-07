# KFC Taiwan Marketing AI Development Guide

## 開發環境設置

### 前置要求
- Node.js 18.0 或更高版本
- - npm 9.0 或更高版本
  - - Git
   
    - ### 安裝依賴
    - ```bash
      npm install
      ```

      ### 環境配置
      複製 `.env.example` 為 `.env.local` 並填入配置：
      ```bash
      NEXT_PUBLIC_API_URL=http://localhost:3001/api
      NEXT_PUBLIC_APP_ENV=development
      ```

      ## 開發命令

      ### 啟動開發服務器
      ```bash
      npm run dev
      ```
      應用會在 http://localhost:3000 運行

      ### 構建生產版本
      ```bash
      npm run build
      npm start
      ```

      ### 運行測試
      ```bash
      npm run test
      npm run test:watch  # 監控模式
      ```

      ### 代碼檢查
      ```bash
      npm run lint
      npm run type-check
      ```

      ## 項目結構

      ```
      src/
      ├── components/        # React 組件
      │   ├── ActivityModule/     # 活動定位模組
      │   ├── Collaboration/      # 團隊協作面板
      │   ├── Calendar/          # 行銷日曆
      │   └── Common/            # 共用組件
      ├── services/          # API 服務層
      │   ├── activityService.ts
      │   ├── collaborationService.ts
      │   └── calendarService.ts
      ├── types/             # TypeScript 類型定義
      │   ├── activity.ts
      │   ├── collaboration.ts
      │   └── calendar.ts
      ├── utils/             # 工具函數
      │   ├── store.ts       # Zustand 狀態管理
      │   └── helpers.ts
      └── pages/             # Next.js 頁面
      ```

      ## 核心功能開發

      ### 1. 活動定位模組 (Activity Module)
      **文件**: `src/components/ActivityModule/`

      功能：
      - 活動建立和編輯
      - - 活動檔期管理
        - - 績效追蹤
         
          - ### 2. 團隊協作系統 (Collaboration)
          - **文件**: `src/components/Collaboration/`
         
          - 功能：
          - - 多人協作工作流
            - - 內容審核流程
              - - 評論和反饋
               
                - ### 3. 行銷日曆 (Calendar)
                - **文件**: `src/components/Calendar/`
               
                - 功能：
                - - 年度行銷計畫
                  - - 活動檔期規劃
                    - - 內容日曆管理
                     
                      - ## 代碼規範
                     
                      - ### TypeScript
                      - - 使用嚴格模式
                        - - 定義所有類型
                          - - 避免使用 `any`
                           
                            - ### React 組件
                            - - 使用函數組件
                              - - Hooks 優先
                                - - 合理分解大組件
                                 
                                  - ### 命名規則
                                  - - 組件: PascalCase (e.g., `ActivityList.tsx`)
                                    - - 函數/變數: camelCase (e.g., `handleActivityCreate`)
                                      - - 常數: UPPER_SNAKE_CASE (e.g., `MAX_ACTIVITIES`)
                                       
                                        - ## Git 工作流
                                       
                                        - ### 分支命名
                                        - - Feature: `feature/activity-management`
                                          - - Bug fix: `bugfix/calendar-display-issue`
                                            - - Hotfix: `hotfix/urgent-fix`
                                             
                                              - ### Commit 信息
                                              - ```
                                                [type] Short description

                                                Longer explanation if needed.

                                                Fixes #123
                                                ```

                                                Types: feat, fix, docs, style, refactor, test, chore

                                                ## 測試指南

                                                ### 單元測試
                                                ```bash
                                                npm run test -- ActivityService.test.ts
                                                ```

                                                ### 集成測試
                                                ```bash
                                                npm run test:integration
                                                ```

                                                ## 部署

                                                ### Docker
                                                ```bash
                                                docker-compose up --build
                                                ```

                                                ### 生產環境
                                                ```bash
                                                npm run build
                                                npm start
                                                ```

                                                ## 常見問題

                                                ### Q: 如何添加新的 API 端點？
                                                A: 在 `src/services/` 下新建服務文件，並導出一個包含相關方法的類。

                                                ### Q: 如何管理全局狀態？
                                                A: 使用 `src/utils/store.ts` 中的 Zustand store。

                                                ### Q: 如何添加新頁面？
                                                A: 在 `src/pages/` 下建立新文件，Next.js 會自動路由。

                                                ## 聯絡方式
                                                - 項目管理: contentincubator2@gmail.com
                                                - - 技術支持: sowork-dev team
