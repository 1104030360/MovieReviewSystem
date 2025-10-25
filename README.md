# MovieReviw 電影評論網站

這是一個電影評論的網站，使用者可以瀏覽、搜尋、評分和評論電影。此專案包含一個前端網站和後端 API 服務。

## 功能特色

*   **電影資訊:** 瀏覽最新、熱門和推薦的電影。
*   **使用者系統:** 支援多種使用者角色，包括管理員、會員、引進商和放映商。
*   **會員功能:** 會員可以登入、註冊、編輯個人資料、對電影進行評分和評論。
*   **管理功能:** 管理員和引進商可以管理電影資訊。

## 技術棧

*   **後端:** Java Servlets
*   **前端:** HTML, CSS, JavaScript (使用 jQuery 和 SweetAlert)
*   **資料庫:** MySQL

## 啟動步驟

### 1. 環境準備

在開始之前，請確保您的系統已安裝以下軟體：

*   **Java Development Kit (JDK):** 建議使用 JDK 8 或更高版本。
*   **Apache Tomcat:** 建議使用 Tomcat 9 或更高版本。
*   **MySQL 資料庫:** 建議使用 MySQL 8 或更高版本。

### 2. 資料庫設定

1.  啟動您的 MySQL 伺服器。
2.  建立一個新的資料庫，根據 `TestMySQLConnect.java` 檔案，資料庫名稱應為 `myproject`。

    ```sql
    CREATE DATABASE myproject;
    ```

3.  根據 `TestMySQLConnect.java` 的設定，應用程式將使用以下帳號密碼連線資料庫。請建立對應的使用者並授權。

    *   **使用者名稱:** `java2023`
    *   **密碼:** `12345`

    ```sql
    CREATE USER 'java2023'@'localhost' IDENTIFIED BY '12345';
    GRANT ALL PRIVILEGES ON myproject.* TO 'java2023'@'localhost';
    FLUSH PRIVILEGES;
    ```

4.  **重要提示:** 此專案未包含資料庫結構 (Schema)。您需要手動建立所需的資料表。

### 3. 專案部署與啟動

1.  **部署 `war` 檔案:** 

    *   此專案的根目錄下有一個 `MovieReviw.war` 檔案。
    *   將此 `MovieReviw.war` 檔案複製到您的 Apache Tomcat 安裝目錄下的 `webapps` 資料夾中。

2.  **啟動 Tomcat:** 

    *   執行 Tomcat 的啟動腳本。在 `bin` 目錄下，Windows 使用 `startup.bat`，macOS/Linux 使用 `startup.sh`。

    ```bash
    # For macOS/Linux
    cd /path/to/your/tomcat/bin
    ./startup.sh

    # For Windows
    cd C:\path\to\your\tomcat\bin
    startup.bat
    ```

3.  **瀏覽網站:** 

    *   Tomcat 啟動後，會自動解壓縮 `MovieReviw.war` 檔案。
    *   打開您的瀏覽器，輸入以下網址即可看到網站首頁：

    ```
    http://localhost:8080/MovieReviw/
    ```

    **注意:** 如果您的 Tomcat 不是使用預設的 8080 埠，請將 `8080` 替換為您設定的埠號。

## 專案結構

*   `index.html`: 網站首頁。
*   `SA/`: 包含所有前端頁面和腳本，並根據使用者角色進行分類。
    *   `guest/`: 訪客功能頁面。
    *   `會員/`: 會員功能頁面。
    *   `引進商/`: 引進商功能頁面。
    *   `放映商/`: 放映商功能頁面。
    *   `管理員/`: 管理員功能頁面。
*   `WEB-INF/`: Java Servlet 的設定和編譯後的類別。
    *   `lib/`: 專案依賴的 `.jar` 檔案，如 MySQL 連接器。
*   `MovieReviw.war`: 可直接部署的 Web Application Archive 檔案。
