# Data Dictionary: `online_retail_data.csv`

**Description**: Contains transaction records from an online retail store, including product details, customer information, and purchase metrics.

## Fields (Columns) Description

| Column Name    | Data Type | Description | Example Values |
|----------------|-----------|-------------|----------------|
| **Record No.** | Integer   | Unique identifier for each transaction record | `1`, `2`, `1000` |
| **Invoice**    | String    | Invoice number (alphanumeric). Prefix `C` indicates cancellation/return | `489434`, `C489449` |
| **StockCode**  | String    | Unique product identifier (may include letters/numbers) | `85048`, `79323P`, `POST` |
| **Description**| String    | Product name/description | `"15CM CHRISTMAS GLASS BALL 20 LIGHTS"` |
| **Quantity**   | Integer   | Items purchased (negative = returns) | `12`, `-6`, `48` |
| **InvoiceDate**| String    | Transaction timestamp (DD-MM-YYYY HH:MM) | `12-01-2009 07:45` |
| **Price**      | Float     | Unit price in GBP (£) | `6.95`, `1.25`, `18.00` |
| **Customer ID**| Integer   | Unique customer identifier (some missing) | `13085`, `12682` |
| **Country**    | String    | Shipping destination country | `United Kingdom`, `France` |

## Key Notes

⚠️ **Cancellations/Returns**:
- Invoices prefixed with `C` (e.g., `C489449`) indicate cancellations
- Negative `Quantity` values denote returns

📌 **Special Codes**:
- `POST` = Shipping/postage charges

🔍 **Data Quality**:
- Some records lack `Customer ID` or `Description` values
- All prices in **British Pounds (GBP)**

## Potential Use Cases

### 🛒 Sales Analysis
- Identify best-selling products
- Analyze peak transaction times

### 👥 Customer Behavior  
- Track repeat customers
- Calculate return rates

### 🌍 Geographic Insights  
- Sales distribution by country
- Regional pricing strategies

### 📦 Inventory Management  
- Detect frequently returned items
- Optimize stock levels
