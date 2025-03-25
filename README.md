# vehicle-sales-mongodb-analysis
📊 MongoDB analysis of vehicle sales data (Big Data Systems assignment).   Queries, insights, and documentation for optimizing automotive sales strategies.  

**Course**: Big Data Systems | **Institution**: BITS Pilani WILP  
**Group 54**: Sanjana Deshpande, Omkar Bagade, Prasad Lotankar  

---

## 📌 Overview  
This project analyzes the **Vehicle Dataset 2024** (1,002 entries) using MongoDB to uncover sales trends, pricing strategies, and customer preferences. Developed as part of a Master's-level Big Data Systems assignment, it demonstrates hands-on expertise in:  
- MongoDB querying and aggregation.  
- Data-driven business insights for the automotive industry.  

**Key Questions Answered**:  
1. Inventory breakdown by make (e.g., 194 Jeeps).  
2. Pricing trends (e.g., avg. SUV price: $47,857).  
3. Popular features (e.g., 153 hybrid vehicles).  

---

## 📂 Repository Structure
vehicle-sales-mongodb-analysis/
├── queries/ # MongoDB query scripts
│ └── queries.js # All 12 assignment queries 
├── docs/ # Supporting documents
│ ├── Analysis_Report.pdf
│ └── Data_Dictionary.md # Dataset schema
├── screenshots/ # Query execution proofs
└── video/ # MP4 demo 


---

## 🔍 Key Queries & Insights  
### 1. Inventory Analysis  
// Count Jeep vehicles  
db.vehicles.countDocuments({ make: "Jeep" });  // 194 Jeeps

**Insight:** Jeeps comprise ~19% of inventory, indicating strong market presence.

###  2. Pricing Trends
// Avg. SUV price  
db.vehicles.aggregate([
  { $match: { body: "SUV" } },
  { $group: { _id: null, averagePrice: { $avg: "$price" } } }
]);  // $47,857

**Insight:** SUVs dominate mid-range pricing (40K–70K).

### 3. Feature Popularity
// Hybrid vehicles  
db.vehicles.countDocuments({ fuel: /hybrid/i });  // 153 hybrids

**Insight:** Hybrids reflect growing eco-conscious demand.

## 🛠️ Setup & Execution
### 1. Prerequisites
MongoDB installed (guide).

**Dataset:** Download from Kaggle.

### 2. Import Data
mongoimport --db vehicle_db --collection vehicles --file data/vehicle_data.json --jsonArray

### 3. Run Queries
Open mongosh and paste queries from queries.js.

## 📊 Results Summary

| **Key Metric**          | **Data Finding**                 | **Recommended Action**                   |
|-------------------------|----------------------------------|------------------------------------------|
| 🚗 Top-selling type     | SUVs (704 units, 70% share)      | • Prioritize SUV promotions<br>• Expand SUV inventory |
| 💰 Average SUV price   | $47,857                          | • Price matching analysis<br>• Bundle deals strategy |
| 🌿 Hybrid availability | 153 vehicles (15% inventory)     | • Green marketing campaigns<br>• Tax credit education |


## 📜 License
MIT License. See LICENSE for details.
