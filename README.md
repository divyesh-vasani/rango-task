# Project Name

A Next.js project featuring dynamic charts, sortable/searchable tables, tabs, and a modal component using ShadCN.

## Table of Contents

* [Setup & Run Instructions](#setup--run-instructions)
* [Key Decisions & Trade-offs](#key-decisions--trade-offs)
* [Completed Features](#completed-features)
* [Known Gaps](#known-gaps)

---

## Setup & Run Instructions

1. **Clone the repository**:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the development server**:

```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the project in action.

---

## Key Decisions & Trade-offs

* **Next.js App Router** was chosen for its file-based routing and SSR capabilities.
* **React Chart.js 2** was used for charts due to flexibility and ease of adding gradients and tooltips.
* **AG Grid** was used for tables because it provides sortable, searchable, and highly customizable table features.
* **ShadCN UI** was used for consistent and accessible UI components like modals and popovers.
* **Trade-offs:**

  * Dynamic chart generation requires dummy KPI data for now instead of real backend integration.
  * Table is using mock data and randomly generated sentiments/issues.
  * Some features like date selection from the calendar are minimal for now (just opens calendar).

---

## Completed Features

* **Dynamic Charts**

  * Funnel charts with stages and drop-offs.
  * Gradient connectors between chart stages.
  * Tooltips and datalabels for stage details.

* **Data Table**

  * Sortable and searchable table with product data.
  * Custom cell renderers for images, sentiment, and issue badges.
  * Quick search/filter functionality.

* **Tabs**

  * Product category tabs (rings, bracelets, pendants, chains, bangles, 925 silver).
  * Clicking a tab updates the chart/table dynamically.

* **ShadCN Modal**

  * Custom modal with title, description, buttons, and optional icon.
  * Accessible with proper `DialogTitle` for screen readers.

---

## Known Gaps

* Backend integration not implemented; all data is dummy/mock for now.
* Sentiments and issues in the table are randomly generated.

