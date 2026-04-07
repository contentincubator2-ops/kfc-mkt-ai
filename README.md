# KFC Taiwan Marketing AI Platform (kfc-mkt-ai)

## 專案描述
這是 SoWork.ai 的增強版本，專門為肯德基台灣行銷代理商電通定制開發。
整合了活動定位、團隊協作、行銷日曆等核心功能。

## 主要功能

### 1. 活動定位模組 (Activity Management)
- 活動建立與編輯
- - 活動檔期管理
  - - 活動內容規劃
    - - 活動績效追蹤
     
      - ### 2. 團隊協作系統 (Team Collaboration)
      - - 多人協作工作流
        - - 權限角色管理
          - - 內容審核流程
            - - 版本控制與歷史追蹤
             
              - ### 3. 行銷日曆 (Marketing Calendar)
              - - 年度行銷計畫
                - - 檔期規劃
                  - - 內容日曆
                    - - 資源規劃
                     
                      - ### 4. 增強的內容生成
                      - - 垂直行業最佳化
                        - - 多平台文案適配
                          - - 食品美食攝影風格
                            - - 品牌視覺一致性
                             
                              - ### 5. 工作台多品牌管理
                              - - 品牌篩選與切換
                                - - 優先級管理
                                  - - 工作依賴關係
                                    - - 甘特圖展示
                                     
                                      - ## 技術棧
                                      - - Frontend: React, TypeScript, Ant Design
                                        - - Backend: Node.js, Express, TypeScript
                                          - - Database: MongoDB
                                            - - Container: Docker
                                             
                                              - ## 安裝與運行
                                             
                                              - ### 本地開發環境
                                              - ```bash
                                                # 安裝依賴
                                                npm install

                                                # 運行開發服務器
                                                npm run dev

                                                # 構建生產版本
                                                npm run build
                                                ```

                                                ### Docker 運行
                                                ```bash
                                                docker-compose up
                                                ```

                                                ## 項目結構
                                                ```
                                                src/
                                                  ├── components/          # React 組件
                                                  │   ├── ActivityModule/  # 新增: 活動定位模組
                                                  │   ├── Collaboration/   # 新增: 團隊協作
                                                  │   ├── Calendar/        # 新增: 行銷日曆
                                                  │   └── ...
                                                  ├── services/            # API 服務
                                                  ├── types/               # TypeScript 類型定義
                                                  └── utils/               # 工具函數
                                                ```

                                                ## 核心改進清單

                                                ### P0 - 必須實現
                                                - [x] 活動定位模組完整開發
                                                - [ ] - [x] 團隊協作系統
                                                - [ ] - [x] 行銷日曆功能
                                               
                                                - [ ] ### P1 - 重要改進
                                                - [ ] - [x] 產品定位促銷檔期管理
                                                - [ ] - [x] 內容生成垂直行業最佳化
                                                - [ ] - [x] 工作台多品牌管理增強
                                                - [ ] - [x] 數據整合 API
                                               
                                                - [ ] ### P2 - 增強功能
                                                - [ ] - [x] 廣告趨勢競品監測
                                                - [ ] - [x] 品牌定位競品對標
                                                - [ ] - [x] 內容生成平台適配
                                               
                                                - [ ] ## API 文檔
                                               
                                                - [ ] ### 活動管理 API
                                                - [ ] ```
                                                - [ ] POST   /api/activities              # 建立活動
                                                - [ ] GET    /api/activities              # 取得活動列表
                                                - [ ] GET    /api/activities/:id          # 取得活動詳情
                                                - [ ] PUT    /api/activities/:id          # 更新活動
                                                - [ ] DELETE /api/activities/:id          # 刪除活動
                                                - [ ] ```
                                               
                                                - [ ] ### 團隊協作 API
                                                - [ ] ```
                                                - [ ] POST   /api/collaborations          # 建立協作
                                                - [ ] GET    /api/collaborations/:id      # 取得協作詳情
                                                - [ ] PUT    /api/collaborations/:id      # 更新協作狀態
                                                - [ ] POST   /api/comments                # 新增評論
                                                - [ ] ```
                                               
                                                - [ ] ### 行銷日曆 API
                                                - [ ] ```
                                                - [ ] GET    /api/calendar/:year/:month   # 取得日曆事件
                                                - [ ] POST   /api/calendar/events         # 建立日曆事件
                                                - [ ] PUT    /api/calendar/events/:id     # 更新事件
                                                - [ ] DELETE /api/calendar/events/:id     # 刪除事件
                                                - [ ] ```
                                               
                                                - [ ] ## 貢獻指南
                                                - [ ] 1. Fork 項目
                                                - [ ] 2. 建立功能分支 (`git checkout -b feature/feature-name`)
                                                - [ ] 3. 提交更改 (`git commit -m 'Add feature'`)
                                                - [ ] 4. 推送到分支 (`git push origin feature/feature-name`)
                                                - [ ] 5. 開立 Pull Request
                                               
                                                - [ ] ## 許可證
                                                - [ ] MIT License
                                               
                                                - [ ] ## 聯絡方式
                                                - [ ] - 項目管理: contentincubator2@gmail.com
                                                - [ ] - 技術支持: sowork-dev team
