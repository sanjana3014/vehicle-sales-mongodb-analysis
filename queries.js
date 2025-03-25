// 1. Number of vehicles which are Jeeps
db.vehicles.countDocuments({ make: "Jeep" });

// 2. Number of vehicles which are SUVs
db.vehicles.countDocuments({ body: "SUV" });

// 3. Number of vehicles with less than four doors
db.vehicles.countDocuments({ doors: { $lt: 4 } });

// 4. Number of vehicles with mileage less than 20,000
db.vehicles.countDocuments({ mileage: { $lt: 20000 } });

// 5. Retrieve make and mileage of the first vehicle
db.vehicles.findOne({}, { make: 1, mileage: 1, _id: 0 });

// 6. Number of vehicles bought in 2023
db.vehicles.countDocuments({ year: 2023 });

// 7. Maximum number of doors in any vehicle
db.vehicles.find().sort({ doors: -1 }).limit(1).pretty();

// 8. Average price of SUVs
db.vehicles.aggregate([
  { $match: { body: "SUV" } },
  { $group: { _id: null, averagePrice: { $avg: "$price" } } }
]);

// 9. Number of vehicles priced between $40K-$70K
db.vehicles.countDocuments({ price: { $gt: 40000, $lt: 70000 } });

// 10. Number of hybrid vehicles (non-PHEV)
db.vehicles.countDocuments({ fuel: /hybrid/i });

// 11. Count of distinct fuel types
db.vehicles.distinct("fuel").length;

// 12. Jeeps with black exterior and Global black interior
db.vehicles.find({
  make: "Jeep",
  exterior_color: /black/i,
  interior_color: /Global black/i
}, {
  make: 1, model: 1, type: 1, year: 1, price: 1, mileage: 1, _id: 0
}).pretty();